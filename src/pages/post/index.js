import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import NotFound from 'components/base/error/NotFound';
import AppTemplate from 'components/base/template/AppTemplate';
import styled from 'styled-components';
import { color } from 'styles/utils';
import Posts from 'pages/post/Posts';
import Post from 'pages/post/Post';

export default function ({ match }) {
  // console.log(match, 'match');
  // console.log(match.path, 'match.path');
  // console.log(match.url, 'match.url');

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={Posts} />
      <Route exact path={`${match.path}/@:slug`} component={Post} />
      <Route component={() => <Redirect to="/error/404" />} />
    </Switch>
  );
}
