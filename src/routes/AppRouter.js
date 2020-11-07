import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {LogIn} from '../containers/LogIn';
import {Dashboard} from '../containers/Dashboard';
import {startSilentAuthentication} from '../actions/authentication.action';
import {Loading} from '../components/Loading';

const AppStack = createStackNavigator();

export const AppRouter = () => {
  const {titleNavbar} = useSelector((state) => state.uiReducer);
  const {isAuthenticated, isLoading} = useSelector(
    (state) => state.authenticationReducer,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('authentication silent');
    dispatch(startSilentAuthentication());
  }, [dispatch]);

  if (isLoading) return <Loading size="large" />;

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {isAuthenticated ? (
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
        ) : (
          <AppStack.Screen
            name="Login"
            component={LogIn}
            options={{headerTitle: 'Iniciar Sesión', header: () => <></>}}
          />
        )}
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
