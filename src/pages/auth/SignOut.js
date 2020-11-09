import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useShallowSelector, useDidUpdateEffect } from 'lib/utils';
import { DispatchActions } from 'store/actionCreators';
import AppTemplate from 'components/base/template/AppTemplate';
import { onUnauthorized } from 'api/config/axiosUtils';
import { useEffect } from 'react';
import * as mapper from 'lib/mapper';

function AuthSignOut(props) {
  let history = useHistory();
  // let location = useLocation();

  useEffect(() => {
    DispatchActions.sign_out();
    history.push(mapper.pageUrl.auth.signIn);
  }, []);

  return (
    <AppTemplate title={'Auth'} headerHide={true}>
      <br />
      <br />
      <br />
      {/* <button onClick={loginOut}>Log Out</button> */}
      <br />
    </AppTemplate>
  );
}

export default AuthSignOut;
