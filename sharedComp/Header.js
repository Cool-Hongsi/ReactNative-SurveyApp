import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = (props) => {

  const openMenu = () => {
    props.navigation.openDrawer();
  };

  return(
    <View style={styles.headerContainer}>
      {/* <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}></View> */}
      <MaterialIcons name='menu' size={28} style={styles.menuIcon} onPress={openMenu} />
      <View style={styles.headerTitle}>
        {/* <Image source={require('../assets/heart_logo.png')} style={styles.headerLogo} /> */}
        <Text style={styles.headerText}>{props.title}</Text>
      </View>
      {/* </ImageBackground> */}
    </View>
  )
};

const styles = StyleSheet.create({
  headerContainer: {
    width: Dimensions.get('screen').width, // width : 100% 안먹힘
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    paddingBottom: 26
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    letterSpacing: 1
  },
  menuIcon: {
    position: 'absolute',
    left: 0,
    bottom: 26,
    color: '#fff'
  },
  headerTitle: {
    flexDirection: 'row'
  },
  headerLogo: {
    width: 24,
    height: 24,
    marginHorizontal: 10
  }
});

export default Header;