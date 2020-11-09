import React, { useEffect } from 'react';
import { useShallowSelector } from 'lib/utils';
import { DispatchActions } from 'store/actionCreators';
import styled, { keyframes } from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CancelIcon from '@material-ui/icons/Cancel';
import CachedIcon from '@material-ui/icons/Cached';
import LoopIcon from '@material-ui/icons/Loop';

/**
 * 사용법
 * DispatchActions.show_toast({config});
 * config = {
 *  type: 'default' - default, success, error, warning, info, dark
 *  duration: 5000 - 실행 초(1000ms)
 *  content:
 *   '' - 문자
 *   () => {} - 함수(컴포넌트)
 * }
 */
function ToastsContainer(props) {
  const { toasts } = useShallowSelector(state => ({
    toasts: state.app.toasts,
  }));

  const ToastContent = () => {
    return (
      <>
        토스트 등장!!
        <br />
        Toast Show!!
      </>
    );
  };

  useEffect(() => {
    // DispatchActions.show_toast({ content: '복사 완료 Copy successed' });
    // DispatchActions.show_toast({ content: () => <ToastContent /> });
  }, []);

  if (!toasts.length) return null;
  return (
    <Styled.ToastsContainer data-component-name="ToastsContainer">
      {toasts.map((item, index) => {
        const { id } = item;
        let {
          type = 'info',
          position = 'bottom-right',
          duration,
          animation = 'fadeInOutSlideRight',
          content = '',
        } = item.config;
        duration = duration / 1000;
        // string, function content
        let Content = () => {};
        if (typeof content === 'string') Content = () => content;
        if (typeof content === 'function') Content = content;
        const typeIcon = {
          success: <CheckCircleIcon />,
          error: <CancelIcon />,
          info: <InfoIcon />,
          warning: <ErrorIcon />,
          loading: <LoopIcon />,
        };

        return (
          <div
            key={index}
            className="toasts"
            data-type={type}
            data-position={position}
            data-animation={animation}
            style={{
              animationDuration: `${duration}s`,
            }}
          >
            <CloseIcon
              className="toasts__close_icon"
              onClick={() => DispatchActions.remove_toast({ id })}
            />
            {typeIcon[type] && <span className="toast__type_icon">{typeIcon[type]}</span>}
            <Content />
          </div>
        );
      })}
      {/* <div className="toasts" data-type={'default'} data-position={'bottom-right'}>
        <CloseIcon className="toasts__close_icon" />
        <ToastContent />
      </div> */}
    </Styled.ToastsContainer>
  );
}

const fadeInOutSlideRight = keyframes`
  0% {
    opacity: 0;
    right: -400px;
  }

  5% {
    right: 0px;
  }

  10% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  95% {
    right: 0px;
  }

  100% {
    /* opacity: 0;
    right: -400px; */
  }
`;

const Styled = {
  ToastsContainer: styled.div`
    z-index: 999;
    position: fixed;
    bottom: 50px;
    right: 40px;
    .toasts {
      position: relative;
      display: flex;
      align-items: center;
      width: 250px;
      padding: 15px;
      padding-left: 10px;
      background-color: #fff;
      border-left: 3px solid gray;
      box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.15);
      border-radius: 3px;
      overflow: hidden;
      font-weight: 700;
      line-height: 1.3;
      &:not(:first-child) {
        margin-top: 15px;
      }
      &[data-animation='fadeInOutSlideRight'] {
        /* opacity: 0;
        right: -400px; */
        animation-name: ${fadeInOutSlideRight};
      }
      &[data-type='default'] {
        /* background-color: #fff;
         color: #888; */
        border-left-color: gray;
        color: #888;
      }
      &[data-type='success'] {
        /* background-color: #07c50e;
        color: #fff; */
        border-left-color: #6ac259;
        .toast__type_icon {
          color: #6ac259;
        }
      }
      &[data-type='error'] {
        /* background-color: #e85642;
        color: #fff; */
        border-left-color: #d80026;
        .toast__type_icon {
          color: #d80026;
        }
      }
      &[data-type='info'] {
        /* background-color: #41a3e2;
        color: #fff; */
        border-left-color: #016df0;
        .toast__type_icon {
          color: #016df0;
        }
      }
      &[data-type='warning'] {
        /* background-color: #f3ca12;
        color: #fff; */
        border-left-color: #ffda43;
        .toast__type_icon {
          color: #ffda43;
        }
      }
      &[data-type='loading'] {
        /* color: #fff; */
        border-left-color: #0389ff;
        .toast__type_icon {
          color: #0389ff;
        }
      }
      &[data-type='dark'] {
        background-color: #000;
        color: #fff;
      }
      .toast__type_icon {
        margin-right: 5px;
        &,
        svg {
          width: 20px;
          height: 20px;
        }
      }
      .toasts__close_icon {
        position: absolute;
        top: 5px;
        right: 5px;
        width: 15px;
        height: 15px;
        cursor: pointer;
      }
    }
  `,
};

export default ToastsContainer;
