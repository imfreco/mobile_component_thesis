import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerDashboardContent} from '../components/DrawerDashboardContent';
import {HomeDash} from './HomeDash';
import {InscriptionCreate} from './InscriptionCreate';
import {InscriptionDelete} from './InscriptionDelete';
import {InscriptionRead} from './InscriptionRead';

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
        component={InscriptionDelete}
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
