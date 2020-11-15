import decode from 'jwt-decode';

import {Alert} from 'react-native';

import {
  fetchProtectedResource,
  fetchWithoutToken,
} from '../helpers/request.helper';
import {types} from '../fixtures/types';
import {items} from '../fixtures/items.store';
import {sortDictionary} from '../helpers/sort.dictionary.helper';
import {stopLoading} from './ui.action';
import {
  getSecureValue,
  removeSecureValue,
  setSecureValue,
} from '../helpers/keychain.helper';

export const startDictionaryRead = () => {
  return async (dispatch) => {
    try {
      const res = await fetchWithoutToken('auth/substitution');
      const body = await res.json();

      const payload = decode(body.token);
      const dictionary = sortDictionary(payload.dictionary);
      dispatch(dictionaryReaded(dictionary, body.token));
      dispatch(stopLoading());
    } catch (error) {
      console.log(error);
    }
  };
};

const dictionaryReaded = (dictionary, token) => ({
  type: types.authnDictionaryReaded,
  payload: {dictionary, token},
});

export const startLogIn = (email, password, setValues, reset) => {
  return async (dispatch, getState) => {
    try {
      const {dict_token} = getState().authenticationReducer;
      const res = await fetchWithoutToken(
        'auth/signin',
        {email, password, dict_token},
        'POST',
      );
      const body = await res.json();

      if (body.message) {
        if (typeof body.message === 'object') {
          if (body.message.email)
            Alert.alert('Tenga en cuenta', body.message.email.msg);
          else Alert.alert('Tenga en cuenta', body.message.password.msg);
        } else {
          Alert.alert('Tenga en cuenta', body.message);
          if (
            body.message === 'El tiempo de espera excedió, vuelva a intentarlo'
          ) {
            setValues((values) => ({
              ...values,
              timeExpired: !values.timeExpired,
            }));
            reset();
          }
        }
      } else {
        const {id_token, refresh_token} = body;
        const {user, name, lastname, roles} = decode(id_token);
        setSecureValue(items.refreshToken, refresh_token);
        dispatch(logIn({id: user, name, lastname, roles, id_token}));
      }

      dispatch(stopLoading());
    } catch (error) {
      console.log(error);
    }
  };
};

export const logIn = (user) => ({
  type: types.authnLogIn,
  payload: user,
});

export const startSilentAuthentication = () => {
  return async (dispatch) => {
    try {
      const rt = await getSecureValue(items.refreshToken);

      if (rt) {
        const res = await fetchProtectedResource('auth/refresh', {}, 'GET', rt);
        const body = await res.json();

        if (body.message) {
          Alert.alert('Tenga en cuenta', 'Su sesión ha finalizado');
          removeSecureValue(items.refreshToken);
        } else {
          const {id_token, refresh_token} = body;
          const {user, name, lastname, roles} = decode(id_token);
          setSecureValue(items.refreshToken, refresh_token);
          dispatch(logIn({id: user, name, lastname, roles, id_token}));
        }
      }

      dispatch(stopLoadingSilentAuth());
    } catch (error) {
      console.error(error);
    }
  };
};

const stopLoadingSilentAuth = () => ({
  type: types.authnStopLoading,
});

export const startLogOut = () => {
  return async (dispatch) => {
    try {
      removeSecureValue(items.refreshToken);
      dispatch(logOut());
    } catch (error) {
      console.log(error);
    }
  };
};

export const logOut = () => ({
  type: types.authnLogOut,
});
