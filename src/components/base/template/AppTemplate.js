import React from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import AppMeta from 'components/base/meta/AppMeta';
import AppHeader from 'components/base/header/AppHeader';
import AppFooter from 'components/base/footer/AppFooter';
import PropTypes from 'prop-types';

AppTemplate.propTypes = {
  title: PropTypes.string,
  headerHide: PropTypes.bool,
  footerHide: PropTypes.bool,
};

function AppTemplate(props) {
  const {
    title = '',
    nav,
    children,
    childrenTitle,
    leftSide,
    rightSide,
    templateStyle, // AppTemplate 스타일 커스텀 prop
    defaultMainContainer = true, // .template__main_container 기본 스타일 적용 유무
    mainContainerStyle, //.template__main_container 스타일 커스텀 prop
    mainChildrenStyle, //.template__main_children 스타일 커스텀 prop
    headerHide = false,
    footerHide = false,
  } = props;

  // NOTE: header 있을경우, headerHide = true 아닐 경우 기본 값 설정
  const header = props.header ? props.header : !headerHide ? <AppHeader /> : null;
  const footer = props.footer ? props.header : !footerHide ? <AppFooter /> : null;

  return (
    <>
      <AppMeta title={title} />
      <Styled.AppTemplate data-component-name="AppTemplate" style={templateStyle}>
        {header && <div className={cx('template__header')} children={header} />}

        {/* NOTE: header와 nav가 분리되어있을 경우 */}
        {nav && <div className={cx('template__nav')} children={nav} />}

        {children && (
          <div
            className={cx('template__main_container', { default: defaultMainContainer })}
            style={mainContainerStyle}
          >
            {leftSide && <div className={cx('template__leftSide')} children={leftSide} />}
            <main className={cx('template__main', { main_title: childrenTitle })}>
              {childrenTitle && <h1 className="template__main_title">{childrenTitle}</h1>}

              {children && (
                <div className={cx('template__main_children')} style={mainChildrenStyle}>
                  {children}
                </div>
              )}
            </main>
            {rightSide && <div className={cx('template__rightSide')} children={rightSide} />}
          </div>
        )}

        {footer && <div className={cx('template__footer')} children={footer} />}
      </Styled.AppTemplate>
    </>
  );
}

const Styled = {
  AppTemplate: styled.div`
    position: relative;
    .template__main_container {
      position: relative;
      &.default {
        width: 1200px;
        margin: auto;
      }

      @media screen and (max-width: 1200px) {
        width: 100%;
        padding: 15px;
      }
    }
  `,
};

export default AppTemplate;
