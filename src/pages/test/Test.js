import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { TestList, TestDetail, Counter, TodoApp, DelayedToggle, UserProfile } from 'pages';
import DropzoneWrapper from './DropzoneWrapper';
import NotFound from 'components/base/error/NotFound';
import AppTemplate from 'components/base/template/AppTemplate';
import styled from 'styled-components';
import { color } from 'styles/utils';

function Test({ match }) {
  console.log(match, 'match');
  console.log(match.path, 'match.path');
  console.log(match.url, 'match.url');

  // NOTE: match.path 또는 mapper.pageUrl 설정후 path 연결
  return (
    <AppTemplate title={'Test'}>
      <Styled.Test data-component-name="Test">
        <ul className="test__menu_list">
          <li className="test__menu_item">
            <Link to={`${match.path}`}>TestList</Link>
          </li>
          <li className="test__menu_item">
            <Link to={`${match.path}/counter`}>Counter</Link>
          </li>
          <li className="test__menu_item">
            <Link to={`${match.path}/todo`}>Todo</Link>
          </li>
          <li className="test__menu_item">
            <Link to={`${match.path}/delayedToggle`}>DelayedToggle</Link>
          </li>
          <li className="test__menu_item">
            <Link to={`${match.path}/userProfile`}>UserProfile</Link>
          </li>
          <li className="test__menu_item">
            <Link to={`${match.path}/dropzone/drop`}>Dropzone</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path={`${match.path}`} component={TestList} />
          <Route exact path={`${match.path}/@:id`} component={TestDetail} />
          <Route exact path={`${match.path}/counter`} component={Counter} />
          <Route exact path={`${match.path}/todo`} component={TodoApp} />
          <Route exact path={`${match.path}/delayedToggle`} component={DelayedToggle} />
          <Route exact path={`${match.path}/userProfile`} component={UserProfile} />
          <Route exact path={`${match.path}/dropzone/drop`} component={DropzoneWrapper} />
          {/* <Route path={`${match.path}/`} component={() => <Redirect to="/test" />} /> */}
          {/* <Route path={`${match.path}/`} component={() => <div>해당값이 없습니다</div>} /> */}
          <Route component={() => <Redirect to="/error/404" />} />
        </Switch>
      </Styled.Test>
    </AppTemplate>
  );
}

const Styled = {
  Test: styled.div`
    padding: 10px;
    .test__menu_list {
      margin-bottom: 10px;
      .test__menu_item {
        display: inline-flex;
        &:not(:first-child) {
          margin-left: 10px;
        }
      }
    }
  `,
};

export default Test;
