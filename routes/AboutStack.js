import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
import Header from '../sharedComp/Header';

const Stack = createStackNavigator();

export default AboutNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='About'
      screenOptions={{
        headerStyle: { backgroundColor: '#333' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}
    >
      <Stack.Screen name='About' component={About} options={({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} title='About' />
        }
      }} />
    </Stack.Navigator>
  )
};