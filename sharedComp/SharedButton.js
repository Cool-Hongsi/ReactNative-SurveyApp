import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

const SharedButton = (props) => {
  return(
    <TouchableOpacity onPress={props.onPress}>
      <View style={(props.activeButton) ? styles.buttonContainerActive : styles.buttonContainerInActive}>
        <Text style={(props.activeButton) ? styles.buttonTextActive : styles.buttonTextInActive}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
};

const buttonContainerDefault = {
  borderRadius: 8,
  paddingVertical: 14,
  paddingHorizontal: 10,
  width: Dimensions.get('screen').width * .8,
};

const buttonTextDefault = {
  fontWeight: 'bold',
  textTransform: 'uppercase',
  fontSize: 16,
  textAlign: 'center'
};

const styles = StyleSheet.create({
  buttonContainerActive: {
    ...buttonContainerDefault,
    backgroundColor: '#fc1231',
  },
  buttonContainerInActive: {
    ...buttonContainerDefault,
    backgroundColor: '#dedede'
  },
  buttonTextActive: {
    ...buttonTextDefault,
    color: '#fff',
  },
  buttonTextInActive: {
    ...buttonTextDefault,
    color: '#fff'
  }
});

export default SharedButton;