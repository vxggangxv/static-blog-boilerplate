import { takeEvery, put, all, delay } from 'redux-saga/effects';
import { createAction, createSlice } from '@reduxjs/toolkit';

export const set_api_calling_status = createAction('set_api_calling_status');
export const clear_api_calling_status = createAction('clear_api_calling_status');

export const show_toast = createAction('show_toast');
export const add_toast = createAction('add_toast');
export const remove_toast = createAction('remove_toast');

export const add_popup = createAction('add_popup');
export const remove_popup = createAction('remove_popup');

// popups으로 대체
// export const show_dialog = createAction('show_dialog');
// export const confirm_dialog = createAction('confirm_dialog');
// export const cancel_dialog = createAction('cancel_dialog');

const initialState = {
  apiCalling: false,
  toasts: [],
  // dialog: undefined,
  popups: [],
};

// 팝업 아이디로 사용한다
let _pid = 0;

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    set_api_calling_status: state => {
      state.apiCalling = true;
    },
    clear_api_calling_status: state => {
      state.apiCalling = false;
    },
    show_toast: () => {},
    add_toast: (state, { payload }) => {
      state.toasts = state.toasts.concat(payload);
    },
    remove_toast: (state, { payload }) => {
      // console.log(payload, 'payload');
      const toastId = payload.id;
      // console.log(toastId, 'toastId');
      state.toasts = state.toasts.filter(item => item.id !== toastId);
    },
    add_popup: (state, { payload }) => {
      const nextId = _pid + 1;
      _pid = nextId;
      const config = payload;
      // console.log(config, 'config');
      state.popups = state.popups.concat({ id: nextId, config });
    },
    remove_popup: (state, { payload }) => {
      const toastId = payload.id;
      state.popups = state.popups.filter(item => item.id !== toastId);
    },
  },
});

export const actions = slice.actions;

function* handleRequest(action) {
  // console.log('handleRequest');
  // yield put(actions.set_api_calling_status());
}

function* handleSuccess(action) {
  // yield put(actions.clear_api_calling_status());
  // yield put(actions.show_toast('Request Completed.'));
}

function* handleFailure(action) {
  // yield put(actions.clear_api_calling_status());
  yield put(actions.show_toast('Request Failed.'));
}

// 토스트 아이디로 사용한다
let _tid = 0;

function* handleShowToast(action) {
  // console.log('handleShowToast');
  const nextId = _tid + 1;
  _tid = nextId;

  let config = action.payload;
  const duration = config.delay ? config.delay : 5000;
  config = {
    ...config,
    duration,
  };
  const id = nextId;

  // 토스트를 상태에 추가한다
  yield put(actions.add_toast({ id, config }));

  // 초 대기한다
  yield delay(duration);

  // 토스트를 상태에서 제거한다
  // yield put(actions.remove_toast({ id }));
}

export function* appSaga() {
  yield all([
    takeEvery(action => {
      if (typeof action.type === 'string') {
        return action.type.endsWith('_request');
      }
    }, handleRequest),
    takeEvery(action => {
      if (typeof action.type === 'string') {
        return action.type.endsWith('_success');
      }
    }, handleSuccess),
    takeEvery(action => {
      if (typeof action.type === 'string') {
        return action.type.endsWith('_failure');
      }
    }, handleFailure),
    takeEvery(actions.show_toast.type, handleShowToast),
  ]);
}

export default slice.reducer;
