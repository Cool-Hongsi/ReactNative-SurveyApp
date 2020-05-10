import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Survey from '../screens/Survey';
import Header from '../sharedComp/Header';
import SubmitSurvey from '../screens/SubmitSurvey';

const Stack = createStackNavigator();

export default HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'
      screenOptions={{
        headerStyle: { backgroundColor: '#333' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', alignItems: 'center' }
      }}
    >
      <Stack.Screen name='Home' component={Home} options={({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} title='Survey' />
        }
      }} />
      <Stack.Screen name='Survey' component={Survey} options={{ title: 'Survey', headerLeft: null }} />
      <Stack.Screen name='SubmitSurvey' component={SubmitSurvey} options={{ title: 'Submit Successfully', headerLeft: null }} />
    </Stack.Navigator>
  )
};