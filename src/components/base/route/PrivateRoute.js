import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import * as mapper from 'lib/mapper';
import { isAuthenticatedSelector } from 'store/modules/auth';
import { useShallowSelector } from 'lib/utils';
import PropTypes from 'prop-types';

// NOTE: propTypes 는 필요시 적용
PrivateRoute.propTypes = {
  component: PropTypes.func,
};

// 사용법: <PrivateRoute path="/project" component={Project} to="/auth/signup"/>
function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useShallowSelector(state => ({
    isAuthenticated: isAuthenticatedSelector(state),
  }));
  const isRedirect = rest.redirect;
  const location = useLocation();
  // console.log(location, 'location');

  return (
    <Route
      {...rest}
      render={props => {
        if (!isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: mapper.pageUrl.auth.signIn,
                state: { from: location },
              }}
            />
          );
        } else if (isRedirect) {
          return <Redirect to={isRedirect} />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
}

export default PrivateRoute;
