import '../gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StackNavigator} from './presentation/navigator/StackNavigator';

export const PokedexApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
