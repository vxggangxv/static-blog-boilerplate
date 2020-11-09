import { bindActionCreators } from 'redux';
import store from 'store';
import { actions as testActions } from './modules/test';
import { actions as appActions } from './modules/app';
import { actions as baseActions } from './modules/base';
import { actions as authActions } from './modules/auth';
import { actions as userActions } from './modules/user';

export const { dispatch } = store;

export const TestActions = bindActionCreators(testActions, dispatch);
export const AppActions = bindActionCreators(appActions, dispatch);
export const BaseActions = bindActionCreators(baseActions, dispatch);
export const AuthActions = bindActionCreators(authActions, dispatch);
export const UserActions = bindActionCreators(userActions, dispatch);

export const DispatchActions = {
  ...TestActions,
  ...AppActions,
  ...BaseActions,
  ...AuthActions,
  ...UserActions,
};
