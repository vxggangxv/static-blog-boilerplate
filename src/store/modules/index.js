import { all, fork } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import test, { testSaga } from './test';
import app, { appSaga } from './app';
import base, { baseSaga } from './base';
import auth, { authSaga } from './auth';
import user from './user';

const rootReducer = combineReducers({
  test,
  app,
  base,
  auth,
  user,
});

export function* rootSaga() {
  yield all([fork(testSaga), fork(appSaga), fork(baseSaga), fork(authSaga)]);
}

export default rootReducer;
