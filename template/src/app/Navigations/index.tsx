import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from 'app/Screens/Home';
import { DetailsScreen } from 'app/Screens/Details';
import { RootNavigationStacks } from './types';
import { useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator<RootNavigationStacks>();

const MainNavigator = () => {
  const isDark = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerStyle: {
              backgroundColor: isDark ? Colors.darker : Colors.white,
            },
            headerTitleStyle: {
              color: isDark ? Colors.white : Colors.black,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
