import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

export const Button = ({onPress, title, loading, style, disabled, textStyle, buttonStyle, loadingColor}) => {
  let buttonInside;
  if(loading) {
    buttonInside = <ActivityIndicator color={loadingColor} size="large"/>;
  }
  else{
    buttonInside = (<Text style={[styles.textStyle, textStyle]}>
      {title}
    </Text>);
  }
  return (
    <View style={[styles.containerStyle, style]}>
      <TouchableOpacity
          {...this.props}
          onPress={onPress}
          style={disabled ? [styles.disabledStyle] : [styles.buttonStyle, buttonStyle]}
          activeOpacity={1}
          disabled={disabled}
      >
        {buttonInside}
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 16,
    color: '#FFf',
    alignSelf: 'center',
    fontWeight: '600'
  },
  buttonStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 5
  },
  disabledStyle:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 5
  },
  containerStyle: {
    height: 50
  }
};

