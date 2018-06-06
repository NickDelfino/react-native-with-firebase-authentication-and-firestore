import React from 'react';
import { TextInput } from 'react-native';

export const Input = ({ value, onChangeText, placeholder, secureTextEntry, style, multiline, numberOfLines }) => {
  return (
    <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={[styles.inputStyle, style]}
        underlineColorAndroid='transparent'
    />
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    fontSize: 16,
    margin: 5,
    borderWidth: 1,  // size/width of the border
    borderColor: 'lightgrey',  // color of the border
    height: 40,
    borderRadius: 5
  }
};
