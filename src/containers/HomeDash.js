import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const HomeDash = () => {
  return (
    <View style={styles.containerHomeDash}>
      <Icon name="restaurant-menu" size={180} color="black" />
      <Text style={styles.welcomeText}>
        Bienvenido al servicio de alimentación
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHomeDash: {
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.8,
  },
  welcomeText: {
    fontSize: 35,
    textAlign: 'center',
  },
});
