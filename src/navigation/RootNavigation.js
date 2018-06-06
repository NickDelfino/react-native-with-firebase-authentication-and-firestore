import { createStackNavigator } from 'react-navigation';

import MainNavigation from './MainNavigation';
import SignInNavigation from './SignInNavigation';

export const createRootNavigator = (signedIn = false) => {
  return createStackNavigator(
      {
        SignedIn: {
          screen: MainNavigation,
          navigationOptions: {
            gesturesEnabled: false
          }
        },
        SignedOut: {
          screen: SignInNavigation,
          navigationOptions: {
            gesturesEnabled: false
          }
        }
      },
      {
        headerMode: "none",
        mode: "modal",
        initialRouteName: signedIn ? "SignedIn" : "SignedOut"
      }
  );
};