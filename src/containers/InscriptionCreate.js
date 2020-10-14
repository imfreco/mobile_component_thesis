import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

import {Picker} from '@react-native-community/picker';
import {Button} from 'react-native-paper';

export const InscriptionCreate = () => {
  return (
    <>
      <View style={styles.containerFormPicker}>
        <Text style={styles.textFormPicker}>Puntaje sisben</Text>
        <View style={styles.containerPicker}>
          <Picker style={styles.picker} mode="dropdown">
            <Picker.Item label="Seleccione ..." value="Seleccione ..." />
          </Picker>
        </View>
      </View>
      <View style={styles.containerFormPicker}>
        <Text style={styles.textFormPicker}>Promedio ponderado</Text>
        <View style={styles.containerPicker}>
          <Picker style={styles.picker} mode="dropdown">
            <Picker.Item label="Seleccione ..." value="Seleccione ..." />
          </Picker>
        </View>
      </View>
      <View style={styles.containerFormPicker}>
        <Text style={styles.textFormPicker}>Población vulnerable</Text>
        <View style={styles.containerPicker}>
          <Picker style={styles.picker} mode="dropdown">
            <Picker.Item label="Seleccione ..." value="Seleccione ..." />
          </Picker>
        </View>
      </View>
      <View style={styles.containerFormPicker}>
        <Text style={styles.textFormPicker}>Distancia</Text>
        <View style={styles.containerPicker}>
          <Picker style={styles.picker} mode="dropdown">
            <Picker.Item label="Seleccione ..." value="Seleccione ..." />
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
        onPress={() => {}}>
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
