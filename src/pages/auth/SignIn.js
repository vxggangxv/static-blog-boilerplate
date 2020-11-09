import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useShallowSelector, useDidUpdateEffect } from 'lib/utils';
import { DispatchActions } from 'store/actionCreators';
import AppTemplate from 'components/base/template/AppTemplate';
import { isAuthenticatedSelector } from 'store/modules/auth';

function SignIn(props) {
  const { isAuthenticated } = useShallowSelector(state => ({
    isAuthenticated: isAuthenticatedSelector(state),
  }));
  let history = useHistory();
  let location = useLocation();

  const queryParse = queryString.parse(history.location.search);
  const { from } = location.state || { from: { pathname: '/' } };
  // NOTE: ErrorContainer 에서 returnPath 넘겨줬을 경우, PrivateRoute에서 from을 넘겨줬을경우
  const returnPath = queryParse.returnPath || from.pathname;

  let login = () => {
    DispatchActions.sign_in({ token: 'token', user: 'user' });
  };

  useDidUpdateEffect(() => {
    if (isAuthenticated) return history.replace(returnPath);
  }, [isAuthenticated]);

  return (
    <AppTemplate title={'Auth'} headerHide={true} defaultMainContainer={false}>
      <br />
      <br />
      <p>You must log in to view the page at {returnPath}</p>
      <br />
      <button onClick={login}>Log in</button>
      <br />
    </AppTemplate>
  );
}

export default SignIn;
