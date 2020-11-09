import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
// import { Logout } from 'components/base/auth';
import SignIn from './SignIn';
import SignOut from './SignOut';
// import SignUp from 'pages/auth/SignUp';
// import ResetPassword from 'pages/auth/ResetPassword';
import NotFound from 'components/base/error/NotFound';
import * as mapper from 'lib/mapper';

function Auth({ match }) {
  // console.log(match, 'match');
  return (
    <Switch>
      <Redirect exact path={`${mapper.pageUrl.auth.index}`} to={`${mapper.pageUrl.auth.signIn}`} />
      <Route path={`${mapper.pageUrl.auth.signOut}`} component={SignOut} />
      <Route path={`${mapper.pageUrl.auth.signIn}`} component={SignIn} />
      {/* <Route path={`${mapper.pageUrl.auth.signUp}`} component={SignUp} />
      <Route path={`${mapper.pageUrl.auth.resetPassword}`} component={ResetPassword} />
      <Route path={`${mapper.pageUrl.auth.logout}`} component={Logout} /> */}
      <Route component={NotFound} />
    </Switch>
  );
}

export default withRouter(Auth);
