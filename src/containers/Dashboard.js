import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {InscriptionCreate} from './InscriptionCreate';
import {InscriptionDelete} from './InscriptionDelete';
import {HomeDash} from './HomeDash';
import {DrawerDashboardContent} from '../components/DrawerDashboardContent';

const DrawerDashboard = createDrawerNavigator();

export const Dashboard = ({navigation}) => {
  return (
    <DrawerDashboard.Navigator
      drawerContent={(props) => <DrawerDashboardContent {...props} />}
      drawerStyle={styles.drawerDash}
      screenOptions={{}}>
      <DrawerDashboard.Screen name="HomeDash" component={HomeDash} />
      <DrawerDashboard.Screen
        name="InscriptionCreate"
        component={InscriptionCreate}
      />
      <DrawerDashboard.Screen
        name="InscriptionDelete"
        component={InscriptionDelete}
      />
    </DrawerDashboard.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerDash: {},
});
