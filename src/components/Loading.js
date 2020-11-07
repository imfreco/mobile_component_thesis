import React from 'react';
import {StyleSheet, View} from 'react-native';

import {ActivityIndicator} from 'react-native-paper';

export const Loading = ({size}) => {
  return (
    <View style={styles.containerLoading}>
      <ActivityIndicator size={size} animating={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerLoading: {
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
