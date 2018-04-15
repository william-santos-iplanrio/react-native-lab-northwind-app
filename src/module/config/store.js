import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { duck } from '../feature';

const reducer = combineReducers({
  ...duck.reducers
});

const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));

export default store;
