import React from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { logo } from 'components/base/images';
import * as mapper from 'lib/mapper';
import { isAuthenticatedSelector } from 'store/modules/auth';
import { useShallowSelector } from 'lib/utils';

function AppHeader() {
  const { isAuthenticated } = useShallowSelector(state => ({
    isAuthenticated: isAuthenticatedSelector(state),
  }));
  const { pathname } = useLocation();

  return (
    <Styled.AppHeader data-component-name="AppHeader">
      <header className="header">
        <h1>
          <Link to="/">
            <img src={logo} alt="Logo" className="header__logo" />
            <span className="sr-only">사이트 제목</span>
          </Link>
        </h1>
        <nav className="header__nav">
          <h1 className="sr-only">메인 메뉴</h1>
          <ul className="header__nav_list">
            {mapper.navigation.map((item, idx) => (
              <li key={idx} className={cx('header__nav_item', { active: pathname === item.path })}>
                <NavLink to={item.path} className="header__link">
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__auth_menu">
          <ul className="header__nav_list auth">
            {isAuthenticated ? (
              <li
                className={cx('header__nav_item', {
                  active: pathname === mapper.pageUrl.auth.signOut,
                })}
              >
                <NavLink to={mapper.pageUrl.auth.signOut} className="header__link">
                  Logout
                </NavLink>
              </li>
            ) : (
              <li
                className={cx('header__nav_item', {
                  active: pathname === mapper.pageUrl.auth.signIn,
                })}
              >
                <NavLink to={mapper.pageUrl.auth.signIn} className="header__link">
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </header>
    </Styled.AppHeader>
  );
}

const Styled = {
  AppHeader: styled.div`
    position: relative;
    &,
    .header {
      width: 100%;
      height: 100px;
      background-color: #fff;
      border-bottom: 1px solid #ddd;
    }
    .header {
      /* position: fixed;
      top: 0;
      left: 0; */
      text-align: center;
      display: flex;
      align-items: center;
    }
    .header__logo {
      width: 80px;
    }
    .header__nav {
      position: relative;
    }
    .header__nav_list {
      display: flex;
    }
    .header__nav_item {
      &:not(:first-of-type) {
        margin-left: 10px;
      }
      &.active {
        text-decoration: underline;
      }
      .header__link {
      }
    }
    .header__auth_menu {
      margin-left: 30px;
    }
  `,
};

export default AppHeader;
