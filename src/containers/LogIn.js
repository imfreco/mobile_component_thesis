import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Dimensions, Keyboard, StyleSheet, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

import {
  startDictionaryRead,
  startLogIn,
} from '../actions/authentication.action';
import {ItemDictionary} from '../components/ItemDictionary';
import {useForm} from '../hooks/useForm';
import {startLoading} from '../actions/ui.action';
import {Loading} from '../components/Loading';

export const LogIn = ({navigation}) => {
  const dispatch = useDispatch();

  const {
    dictionary: {alphabet, numbers},
  } = useSelector((state) => state.authenticationReducer);
  const {showLoading} = useSelector((state) => state.uiReducer);

  useEffect(() => {
    dispatch(startLoading());
    dispatch(startDictionaryRead());
  }, [dispatch]);

  const numericKeyboardButtons = [
    '7',
    '8',
    '9',
    '4',
    '5',
    '6',
    '1',
    '2',
    '3',
    '0',
    'Borrar',
  ];

  const [values, setValues] = useState({
    showNumericKeyboard: false,
  });

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const {email, password} = formValues;

  const handleLogIn = () => {
    dispatch(startLoading());
    dispatch(startLogIn(email, password, navigation));
  };

  if (showLoading) return <Loading size="large" />;

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <View>
            <View style={styles.containerItemDict}>
              {alphabet.map(({original, substitute}) => (
                <ItemDictionary
                  key={original}
                  original={original}
                  substitute={substitute}
                />
              ))}
            </View>
            <View style={styles.containerItemDict}>
              {numbers.map(({original, substitute}) => (
                <ItemDictionary
                  key={original}
                  original={original}
                  substitute={substitute}
                />
              ))}
            </View>
          </View>
          <View style={styles.containerForm}>
            <TextInput
              mode="outlined"
              label="Correo electrónico"
              value={email}
              onChangeText={(value) =>
                handleInputChange({target: {name: 'email', value}})
              }
              textContentType="emailAddress"
              onFocus={() =>
                setValues((values) => ({...values, showNumericKeyboard: false}))
              }
            />

            <TextInput
              mode="outlined"
              label="Contraseña"
              value={password}
              secureTextEntry={true}
              onFocus={() => {
                Keyboard.dismiss();
                setValues((values) => ({...values, showNumericKeyboard: true}));
              }}
            />
          </View>
        </>
      }
      data={numericKeyboardButtons}
      renderItem={({item}) => (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            margin: 1,
          }}>
          {values.showNumericKeyboard && (
            <Button
              mode="contained"
              style={styles.styleButtonNumber}
              onPress={() => {
                let target = {name: 'password'};
                if (item.toLowerCase() === 'borrar') {
                  target.value = password.slice(0, password.length - 1);
                } else {
                  target.value = `${password}${item}`;
                }
                handleInputChange({target});
              }}>
              {item}
            </Button>
          )}
        </View>
      )}
      //Setting the number of column
      numColumns={3}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={
        <Button
          icon="check-circle"
          mode="contained"
          labelStyle={styles.textButton}
          style={(styles.propsButton, styles.containerForm)}
          onPress={handleLogIn}>
          Iniciar Sesión
        </Button>
      }
    />
  );
};

const marginForm = 15;

const styles = StyleSheet.create({
  containerItemDict: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: 15,
  },
  containerForm: {
    margin: marginForm,
  },
  textButton: {
    fontSize: 16,
  },
  propsButton: {
    width: Dimensions.get('screen').width - 2 * marginForm,
    marginTop: 10,
  },
  containerNumericKeyboard: {
    margin: 10,
  },
  styleButtonNumber: {
    margin: 5,
    borderRadius: 20,
  },
});
