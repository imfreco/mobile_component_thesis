import decode from 'jwt-decode';

import {Alert} from 'react-native';

import {fetchWithoutToken, fetchWithToken} from '../helpers/request.helper';
import {types} from '../fixtures/types';
// import {items} from '../fixtures/items.store';
import {sortDictionary} from '../helpers/sort.dictionary.helper';
import {stopLoading} from './ui.action';

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

export const startLogIn = (email, password, navigation) => {
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
        Alert.alert('Error', body.message);
      } else {
        const {id_token, refresh_token} = body;
        const {user, name, lastname, roles} = decode(id_token);
        // localStorage.setItem(items.refreshToken, refresh_token);
        dispatch(logIn({id: user, name, lastname, roles, id_token}));
        navigation.navigate('Dashboard');
      }

      dispatch(stopLoading());
    } catch (error) {
      console.log(error);
    }
  };
};

const logIn = (user) => ({
  type: types.authnLogIn,
  payload: user,
});

export const startSilentAuthentication = () => {
  return async (dispatch) => {
    try {
      const rt = localStorage.getItem(items.refreshToken);

      if (rt) {
        const res = await fetchWithToken('auth/refresh', {}, 'GET', rt);
        const body = await res.json();

        if (body.message) {
          localStorage.removeItem(items.refreshToken);
        } else {
          const {id_token, refresh_token} = body;
          const {user, name, lastname, roles} = decode(id_token);
          // localStorage.setItem(items.refreshToken, refresh_token);
          dispatch(logIn({id: user, name, lastname, roles, id_token}));
        }
      }

      // dispatch(stopLoadingSilentAuth());
    } catch (error) {
      console.error(error);
    }
  };
};

const stopLoadingSilentAuth = () => ({
  type: types.authnStopLoading,
});
