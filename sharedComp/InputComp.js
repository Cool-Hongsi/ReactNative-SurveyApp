import React from 'react';
import { StyleSheet, View, TextInput, Dimensions } from 'react-native';

const InputComp = (props) => {
  return(
    <TextInput
      keyboardType={(props.salary) ? 'numeric' : 'default'}
      style={styles.inputCompContainer}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={(e) => props.onChangeText(e, props.name)}
      multiline={(props.option) ? true : false}
      minHeight={(props.option) ? 100 : 46}
    />
  )
};

const styles = StyleSheet.create({
  inputCompContainer: {
    width: Dimensions.get('screen').width * .8,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 6,
    fontSize: 18,
    marginBottom: 30
  }
});

export default InputComp;

