import React from 'react';
import { View, Text } from 'react-native';
import TabNavigation from './src/navigation/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import { PaperProvider } from 'react-native-paper';
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <StackNavigation />
    </NavigationContainer>
    </Provider>

  );
};

export default App;
