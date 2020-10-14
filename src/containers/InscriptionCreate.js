import React, {useEffect} from 'react';
import {Alert, Dimensions, StyleSheet, Text, View} from 'react-native';

import {Picker} from '@react-native-community/picker';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  startAveragesLoaded,
  startInscriptionCreate,
  startPopulationsLoaded,
  startSisbensLoaded,
} from '../actions/inscription.action';
import {useForm} from '../hooks/useForm';

export const InscriptionCreate = () => {
  const {averages, sisbens, populations} = useSelector(
    (state) => state.inscriptionReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startAveragesLoaded());
    dispatch(startSisbensLoaded());
    dispatch(startPopulationsLoaded());
  }, [dispatch]);

  const [formValues, handlePickerChange] = useForm({
    sisbenId: 0,
    averageId: 0,
    populationId: 0,
  });

  const {sisbenId, averageId, populationId} = formValues;

  const handlePress = () => {
    Alert.alert('Responder', '¿Acepta realizar la inscripción?', [
      {
        text: 'Aceptar',
        onPress: () => {
          dispatch(startInscriptionCreate(formValues));
        },
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  };

  return (
    <>
      <View style={styles.containerFormPicker}>
        <Text style={styles.textFormPicker}>Puntaje sisben</Text>
        <View style={styles.containerPicker}>
          <Picker
            style={styles.picker}
            mode="dropdown"
            selectedValue={sisbenId}
            onValueChange={(itemValue) => {
              const target = {name: 'sisbenId', value: itemValue};
              handlePickerChange({target});
            }}>
            <Picker.Item key={0} label="Seleccione ..." value={0} />
            {sisbens.map(({id, value}) => (
              <Picker.Item key={id} label={value} value={id} />
            ))}
          </Picker>
        </View>
      </View>
      <View style={styles.containerFormPicker}>
        <Text style={styles.textFormPicker}>Promedio ponderado</Text>
        <View style={styles.containerPicker}>
          <Picker
            style={styles.picker}
            mode="dropdown"
            selectedValue={averageId}
            onValueChange={(itemValue) => {
              const target = {name: 'averageId', value: itemValue};
              handlePickerChange({target});
            }}>
            <Picker.Item key={0} label="Seleccione ..." value={0} />
            {averages.map(({id, value}) => (
              <Picker.Item key={id} label={value} value={id} />
            ))}
          </Picker>
        </View>
      </View>
      <View style={styles.containerFormPicker}>
        <Text style={styles.textFormPicker}>Población vulnerable</Text>
        <View style={styles.containerPicker}>
          <Picker
            style={styles.picker}
            mode="dropdown"
            selectedValue={populationId}
            onValueChange={(itemValue) => {
              const target = {name: 'populationId', value: itemValue};
              handlePickerChange({target});
            }}>
            <Picker.Item key={0} label="Seleccione ..." value={0} />
            {populations.map(({id, value}) => (
              <Picker.Item key={id} label={value} value={id} />
            ))}
          </Picker>
        </View>
      </View>
      <Button
        icon="check-circle"
        color="#3d3d3d"
        mode="contained"
        labelStyle={styles.textButton}
        contentStyle={styles.contentButton}
        style={styles.propsButton}
        onPress={handlePress}>
        Inscribirse
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  containerFormPicker: {
    marginBottom: 10,
  },
  textFormPicker: {
    fontSize: 16,
    marginBottom: 5,
  },
  containerPicker: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: '#6d6d6d',
    borderBottomWidth: 1,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: Dimensions.get('screen').width,
    backgroundColor: '#ddd',
  },
  textButton: {
    fontSize: 16,
  },
  contentButton: {
    height: 50,
  },
  propsButton: {
    marginTop: 10,
  },
});
