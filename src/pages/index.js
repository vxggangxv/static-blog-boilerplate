import lodable, { lazy } from '@loadable/component';
import { ENV_MODE_DEV, ENV_MODE_PROD } from 'lib/setting';
import HomePage from './home/Home';
import ErrorPage from './error/Error';
import AuthPage from './auth/Auth';
import AboutPage from './about/About';
import UserPage from './user/User';

// NOTE: test용
export const Counter = lodable(() => import('./test/__test__/Counter'));
export const TodoApp = lodable(() => import('./test/__test__/todo/TodoApp'));
export const DelayedToggle = lodable(() => import('./test/__test__/DelayedToggle'));
export const UserProfile = lodable(() => import('./test/__test__/UserProfile'));
export const Test = lodable(() => import('./test/Test'));
export const TestList = lodable(() => import('./test/TestList'));
export const TestDetail = lodable(() => import('./test/TestDetail'));

// export { default as Home } from './home/Home';
// export { default as Error } from './error/Error';
// export { default as Auth } from './auth/Auth';
// export { default as About } from './about/About';
// export { default as User } from './user/User';

// NOTE: react-hot-loader 적용을 위해 별도 설정(code split 불가), production 버전에서 code split 적용
let Home = HomePage;
let Error = ErrorPage;
let Auth = AuthPage;
let About = AboutPage;
let User = UserPage;

if (ENV_MODE_PROD) {
  Home = lodable(() => import('./home/Home'));
  Error = lodable(() => import('./error/Error'));
  Auth = lodable(() => import('./auth/Auth'));
  About = lodable(() => import('./about/About'));
  User = lodable(() => import('./user/User'));
}

export { Home, Error, Auth, About, User };
