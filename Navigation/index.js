import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';

import Header from './components/Header';
/**
 * Straight Component
 */
import Straight from '../screens/Straight';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
    
      screenOptions={{
        header: (props) => <Header {...props} /> 
        
      }}
      initialRouteName="Straight">
      <Stack.Screen name="Straight" component={Straight} />
    </Stack.Navigator>
  );
};

export default function Navigation() {
  const state = useSelector(state => state.infoReducer);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
