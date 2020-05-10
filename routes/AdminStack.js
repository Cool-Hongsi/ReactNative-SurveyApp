import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Admin from '../screens/Admin';
import Header from '../sharedComp/Header';

const Stack = createStackNavigator();

export default AdminNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Admin'
      screenOptions={{
        headerStyle: { backgroundColor: '#333' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}
    >
      <Stack.Screen name='Admin' component={Admin} options={({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} title='Admin' />
        }
      }} />
    </Stack.Navigator>
  )
};