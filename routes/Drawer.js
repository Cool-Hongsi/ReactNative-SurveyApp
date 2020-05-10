import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './HomeStack';
import AboutNavigator from './AboutStack';
import AdminNavigator from './AdminStack';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons'; 

const Drawer = createDrawerNavigator();

export default drawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{
          backgroundColor: '#333',
        }}
        drawerContentOptions={{
          activeTintColor: '#fc1231',
          activeBackgroundColor: 'rgba(33, 33, 33, .8)',
          inactiveTintColor: '#fff',
          inactiveBackgroundColor: 'transparent',
          itemStyle: { marginVertical: 10 },
          labelStyle: { fontSize: 18, fontFamily: 'OpenSans-Bold' }
        }}
      >
        <Drawer.Screen name="Home" component={HomeNavigator} options={{
          drawerIcon: () => <AntDesign name="home" size={24} color="#fff" style={{marginLeft: 10}} />
        }}/>
        <Drawer.Screen name="About" component={AboutNavigator} options={{
          drawerIcon: () => <Entypo name="emoji-happy" size={24} color="#fff" style={{marginLeft: 10}} />
        }}/>
        <Drawer.Screen name="Admin" component={AdminNavigator} options={{
          drawerIcon: () => <FontAwesome name="user-secret" size={24} color="#fff" style={{marginLeft: 13}} />
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
};