import React, { useEffect } from 'react';
import { useImmer } from 'use-immer';
import { DispatchActions } from 'store/actionCreators';
import FullScreenLoading from 'components/base/loading/FullScreenLoading';
import ErrorContainer from 'containers/base/ErrorContainer';
import { useShallowSelector, useDidUpdateEffect } from 'lib/utils';
import { isAuthenticatedSelector } from 'store/modules/auth';
import storage, { keys } from 'api/config/storage';
// import { NotifyToast } from 'components/base/notifications';
import PopupContainer from 'containers/common/popup/PopupContainer';
import PopupsContainer from 'containers/common/popup/PopupsContainer';
import T from 'components/common/text/T';
import I18nLanguage from 'components/base/language/I18nLanguage';
import ToastsContainer from 'containers/base/ToastsContainer';

const CoreState = {};

// NOTE: 초기 landing, error, notifications, popup 등록
// DEBUG: 차후 성능적인 문제 발생시 apiCalling분리
function Core() {
  const {
    isAuthenticated,
    landing,
    accessToken,
    apiCalling,
    toasts,
    popups,
    test,
  } = useShallowSelector(state => ({
    isAuthenticated: isAuthenticatedSelector(state),
    landing: state.base.landing,
    accessToken: state.auth.accessToken,
    apiCalling: state.app.apiCalling,
    toasts: state.app.toasts,
    popups: state.app.popups,
  }));
  const [values, setValues] = useImmer(CoreState);

  // NOTE: 초기화 함수
  // user가 없는 경우 == login이 안된경우, autn_sign_out() 실행
  const initialize = async () => {
    const storedUser = storage.get(keys.user);
    // const storedToken = storage.get(keys.token);

    if (!storedUser) {
      // await DispatchActions.sign_out();
    }

    DispatchActions.exit_landing();
    // DispatchActions.set_api_calling_status();
  };

  useEffect(() => {
    initialize();
  }, []);

  // useEffect(() => {
  //   console.log(apiCalling, 'apiCalling');
  //   console.log(landing, 'landing');
  //   console.log(toasts, 'toasts');
  //   // DispatchActions.response_status(400);
  //   console.log(popups, 'popups');
  // }, [apiCalling, landing, toasts, popups]);

  // useEffect(() => {
  //   console.log(selector, 'selector');
  // }, [selector]);

  useEffect(() => {
    // DispatchActions.base_popup({
    //   isOpen: true,
    //   title: 'Title',
    //   content: 'Cotnent',
    // });
    // DispatchActions.add_popup({
    //   isOpen: true,
    //   title: 'Title1',
    //   content: 'Cotnent1',
    //   hideBackdrop: true,
    // });
    // DispatchActions.add_popup({
    //   isOpen: true,
    //   title: 'Title2',
    //   content: 'Cotnent2',
    //   hideBackdrop: true,
    // });
  }, []);

  const isVisibleLoading = [landing, apiCalling].some(item => item === true);

  return (
    <>
      <FullScreenLoading visible={isVisibleLoading} />
      <ErrorContainer />
      {/* 하위 호환용 차후 전체 변경 고려 */}
      <PopupContainer />
      <PopupsContainer />
      <ToastsContainer />
      {/* <NotifyToast /> */}
      <I18nLanguage />
    </>
  );
}

// export default Core;

export default Core;
