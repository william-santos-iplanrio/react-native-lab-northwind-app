import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { reducers } from '../duck';

const reducer = combineReducers({
  ...reducers
});

const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));

export default store;
