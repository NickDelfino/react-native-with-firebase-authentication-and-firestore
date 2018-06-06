import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {connect} from 'react-redux';
import {Button, Input} from '../components';
import {authUser, emailChanged, passwordChanged} from '../actions';
import {THEME_COLOR} from "../lib/Constants";

class SignIn extends React.Component {
  static navigationOptions = {
    title: 'Sign In',
    header: null
  };

  render() {

    const { backgroundStyle, inputStyle, labelStyle } = styles;

    const {
      loading,
      error,
      email,
      password,
      navigation
    } = this.props;

    if(error){
      alert(error);
    }

    return (
        <View style={backgroundStyle}>
          <Text
              style={{
                fontWeight: '600',
                fontSize: 54,
                alignSelf: 'center',
                color: 'white',
                textAlign: 'center'
              }}
          >
            {'React Native with Firestore'}
          </Text>
          <Text
            style={labelStyle}>
            Email
          </Text>
          <Input
              placeholder='john@example.com'
              style={inputStyle}
              value={email}
              onChangeText={(email) => this.props.emailChanged(email)}
          />
          <Text style={labelStyle}>
            Password
          </Text>
          <Input
              placeholder='password'
              style={inputStyle}
              value={password}
              secureTextEntry={true}
              onChangeText={(password) => this.props.passwordChanged(password)}
          />
          <Button
              title={loading ? '' : 'Sign In'}
              style={{
                height: 60,
                margin: 10,
                paddingTop: 5,
                paddingBottom: 5
              }}
              textStyle={{
                fontSize: 20,
                color: THEME_COLOR
              }}
              buttonStyle={{
                backgroundColor: '#fff'
              }}
              loadingColor={THEME_COLOR}
              onPress={() => this.props.authUser(email, password, navigation)}
              loading={loading}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: THEME_COLOR,
    ...Platform.select({
      ios:{
        paddingTop:10
      }
    })
  },
  inputStyle: {
    backgroundColor: '#fff',
    padding: 5,
    height: 50,
    margin: 10
  },
  labelStyle: {
    fontWeight: '600',
    fontSize: 20,
    alignSelf: 'flex-start',
    color: 'white',
    paddingLeft: 10
  }
});

const mapStateToProps = (state) => {
  return {
    loading: state.Auth.loading,
    error: state.Auth.error,
    password: state.Auth.password,
    user: state.Auth.user,
    email: state.Auth.email
  };
};

export default SignInScreen = connect(mapStateToProps, { authUser, emailChanged, passwordChanged })(SignIn);
