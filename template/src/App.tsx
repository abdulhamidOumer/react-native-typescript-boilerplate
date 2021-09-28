/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the React Native TypeScript Boilerplate template
 * https://github.com/abdulhamidOumer/react-native-typescript-boilerplate
 *
 * @format
 */

import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { configureAppStore } from 'store/configureStore';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import MainNavigator from 'app/Navigations';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const store = configureAppStore();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <MainNavigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
