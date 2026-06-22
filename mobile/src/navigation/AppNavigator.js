import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import MainStack from '../navigation/MainStack';
import AuthStack from '../navigation/AuthStack';
const AppNavigator = () => {
  const { user, loading } = useAuth();
  if (loading) {
    return null;
  }
  return (
    <NavigationContainer>
      {user ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;
