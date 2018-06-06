import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {connect} from "react-redux";
import {FontAwesome} from '@expo/vector-icons';
import {signOut} from '../actions';
import {Button} from '../components';
import {THEME_COLOR} from "../lib/Constants";

class Profile extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (<FontAwesome name="user" size={32} color={tintColor}/>),
  };

  constructor(props) {
    super(props);
  }

  render() {

    const { backgroundStyle } = styles;

    const {
      loading,
      error,
      navigation
    } = this.props;

    if (error) {
      alert(error);
    }

    return (
        <View style={backgroundStyle}>
          <Text
              style={{
                fontWeight: '600',
                fontSize: 54,
                alignSelf: 'center',
                color: '#fff'
              }}
          >
            {'Profile'}
          </Text>
          <Button
              title={loading ? '' : 'Sign Out'}
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
              onPress={() => this.props.signOut(navigation)}
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
  }
});

const mapStateToProps = (state) => {
  return {
    loading: state.Profile.loading,
    error: state.Profile.error,
  };
};

export default ProfileScreen = connect(mapStateToProps, { signOut })(Profile);
