import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from 'app/Screens/Home';
import { DetailsScreen } from 'app/Screens/Details';
import { RootNavigationStacks } from './types';
import { StyleSheet, useColorScheme } from 'react-native';

const Stack = createNativeStackNavigator<RootNavigationStacks>();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
