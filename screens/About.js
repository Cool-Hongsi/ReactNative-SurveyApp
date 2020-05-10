import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

const About = (props) => {
  return(
    <View style={styles.aboutContainer}>
      <ScrollView>
        <View style={styles.aboutSub1Container}>
          <Image source={require('../assets/heartIcon.png')} style={{marginRight: 10}} />
          <Text style={styles.aboutText1}>Welcome to survey app !</Text>
          <Image source={require('../assets/heartIcon.png')} style={{marginLeft: 10}} />
        </View>
        <View style={styles.aboutSub2Container}>
          <Text style={styles.aboutText2}>This is demo app for studying react native</Text>
        </View>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  aboutContainer : {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30
  },
  aboutSub1Container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },  
  aboutSub2Container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },  
  aboutText1: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: '#333'
  },
  aboutText2: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: '#fc1231'
  }
});

export default About;