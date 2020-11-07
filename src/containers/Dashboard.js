import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerDashboardContent} from '../components/DrawerDashboardContent';
import {HomeDash} from './HomeDash';
import {InscriptionCreate} from './InscriptionCreate';
import {InscriptionRead} from './InscriptionRead';
import {InscriptionReadMe} from './InscriptionReadMe';
import {isAuthorized} from '../helpers/authorization.helper';

const DrawerDashboard = createDrawerNavigator();

export const Dashboard = () => {
  const {
    user: {roles},
  } = useSelector((state) => state.authenticationReducer);

  return (
    <DrawerDashboard.Navigator
      drawerContent={(props) => <DrawerDashboardContent {...props} />}
      sceneContainerStyle={styles.sceneContainer}>
      <DrawerDashboard.Screen name="HomeDash" component={HomeDash} />

      {isAuthorized(['estudiante'], roles) && (
        <DrawerDashboard.Screen
          name="InscriptionCreate"
          component={InscriptionCreate}
        />
      )}

      {isAuthorized(['estudiante'], roles) && (
        <DrawerDashboard.Screen
          name="InscriptionReadMe"
          component={InscriptionReadMe}
        />
      )}

      {isAuthorized(['administrador'], roles) && (
        <DrawerDashboard.Screen
          name="InscriptionRead"
          component={InscriptionRead}
        />
      )}
    </DrawerDashboard.Navigator>
  );
};

const styles = StyleSheet.create({
  sceneContainer: {
    padding: 20,
  },
});
