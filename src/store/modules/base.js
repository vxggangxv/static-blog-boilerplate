import { put, all } from 'redux-saga/effects';
import { createAction, createSlice } from '@reduxjs/toolkit';

// action
export const exit_landing = createAction('exit_landing');
export const response_status = createAction('response_status');
export const response_error = createAction('response_error');
export const language_change = createAction('language_change');
export const base_popup = createAction('base_popup');

const initialState = {
  // 초기 랜딩중일 경우 true, false일 경우 화면 랜딩 완료
  landing: true,
  // api통신 pending, success, failure에 따른 자동 loading show
  apiCalling: false,
  // router에 error 연결(e.g serverError : 500)
  responseStatus: null,
  // responseStatus: 401,
  // TODO: 차후 error toasty또는 popup과 연결 예정
  responseError: {
    isShow: false,
    message: null,
    data: null,
  },
  // language: 'en',
  language: 'ko',
  popups: [],
  test: 'test',
  popup: {},
};

// 팝업 아이디로 사용한다
let _pid = 0;

const slice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    exit_landing: state => {
      state.landing = false;
    },
    response_status: (state, { payload }) => {
      // DEBUG: 필요
      state.responseStatus = payload;
    },
    response_error: (state, { payload }) => {
      // DEBUG: 필요
      state.responseError.message = payload.message;
      state.responseError.data = payload;
    },
    language_change: (state, { payload }) => {
      state.language = payload;
    },
    base_popup: (state, { payload }) => {
      let result = {};
      if (payload.type === 'dim') {
        result = {
          isOpen: false,
        };
      } else {
        result = {
          ...payload,
        };
      }
      state.popup = {
        ...state.popup,
        ...result,
      };
    },
  },
});

export const actions = slice.actions;

// saga
export function* baseSaga() {
  yield all([]);
}

export default slice.reducer;
