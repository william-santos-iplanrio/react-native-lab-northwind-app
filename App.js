import React from 'react';
import { Provider } from 'react-redux';

import store from './src/config/store';
import MainNavigation from './src/config/routes';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    );
  }
}
