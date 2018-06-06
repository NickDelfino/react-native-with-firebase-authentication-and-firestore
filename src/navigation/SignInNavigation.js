import React from 'react';
import { createStackNavigator } from 'react-navigation';

import SignInScreen from '../screens/SignInScreen';

export default createStackNavigator(
    {
        Home: {
            screen: SignInScreen,
        }
    },
    {
        navigationOptions: ({navigation}) => ({
            title: 'Sign In'
        }),
        animationEnabled: false,
        swipeEnabled: false,
        headerMode: 'screen'
    }
);
