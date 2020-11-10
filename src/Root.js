import React, { Component } from 'react';
import App from 'components/App';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from 'store';
import { PersistGate } from 'redux-persist/integration/react';
// import { hot } from 'react-hot-loader/root';
import 'lang/i18n';
import { ENV_MODE_PROD } from 'lib/setting';

if (ENV_MODE_PROD) console.log = () => {};
// console.log(process.env.PUBLIC_URL, 'process.env.PUBLIC_URL');
const Router = ({ children }) => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>{children}</BrowserRouter>
);
// ENV_MODE_PROD ? (
//   <BrowserRouter basename={process.env.PUBLIC_URL}>{children}</BrowserRouter>
// ) : (
//   <HashRouter>{children}</HashRouter>
// );

function Root(props) {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Router>
  );
}

// export default hot(Root);
export default Root;
