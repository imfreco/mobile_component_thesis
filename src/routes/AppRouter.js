import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Dashboard} from '../containers/Dashboard';

const AppStack = createStackNavigator();

export const AppRouter = () => {
  const {titleNavbar} = useSelector((state) => state.uiReducer);

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {/* <AppStack.Screen
          name="Login"
          component={Login}
          options={{header: () => <></>}}
        /> */}
        <AppStack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerBackImage: () => <></>,
            title: titleNavbar,
            headerStyle: styles.stackAppHeader,
            headerTitleStyle: styles.stackAppHeaderTitle,
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  stackAppHeader: {
    backgroundColor: '#3c3c3c',
  },
  stackAppHeaderTitle: {
    color: '#fff',
  },
});
