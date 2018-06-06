import React from 'react';
import { connect } from 'react-redux';
import { createRootNavigator } from './RootNavigation';
import { checkUserAuth } from "../actions";

class AppNav extends React.Component {
  constructor(props) {
    super(props);
    //Firebase uses a timer for some of the requests.
    //This stops the warning from popping up
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
  }

  componentWillMount() {
    this.props.checkUserAuth();
  }

  render() {
    const { isLoggedIn, hasCheckedAuthState } = this.props;

    if(!hasCheckedAuthState){
      return null;
    }else{
      const Layout = createRootNavigator(isLoggedIn);
      return(
        <Layout />
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.Auth.isLoggedIn,
    hasCheckedAuthState: state.Auth.hasCheckedAuthState,
    token: state.Auth.token
  };
};

export const AppNavigation = connect(mapStateToProps, { checkUserAuth })(AppNav);