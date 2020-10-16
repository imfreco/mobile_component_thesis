import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerDashboardContent} from '../components/DrawerDashboardContent';
import {HomeDash} from './HomeDash';
import {InscriptionCreate} from './InscriptionCreate';
import {InscriptionRead} from './InscriptionRead';
import {InscriptionReadMe} from './InscriptionReadMe';

const DrawerDashboard = createDrawerNavigator();

export const Dashboard = ({navigation}) => {
  return (
    <DrawerDashboard.Navigator
      drawerContent={(props) => <DrawerDashboardContent {...props} />}
      sceneContainerStyle={styles.sceneContainer}>
      <DrawerDashboard.Screen name="HomeDash" component={HomeDash} />
      <DrawerDashboard.Screen
        name="InscriptionCreate"
        component={InscriptionCreate}
      />
      <DrawerDashboard.Screen
        name="InscriptionDelete"
        component={InscriptionReadMe}
      />
      <DrawerDashboard.Screen
        name="InscriptionRead"
        component={InscriptionRead}
      />
    </DrawerDashboard.Navigator>
  );
};

const styles = StyleSheet.create({
  sceneContainer: {
    padding: 20,
  },
});
