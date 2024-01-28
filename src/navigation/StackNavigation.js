import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsPage from '../pages/DetailsPage';
import TabNavigation from './TabNavigation';


const StackNavigation = ({navigation,route}) => {
    const Stack = createNativeStackNavigator();
  return (

      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="HomeTabs"    component={TabNavigation} />
        <Stack.Screen options={{headerShown:false}} name="DetailsPage" component={DetailsPage} />
      </Stack.Navigator>

  );
};

export default StackNavigation;
