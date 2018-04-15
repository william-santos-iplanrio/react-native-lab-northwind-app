import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { featureDuck } from '../module';

const reducer = combineReducers({
  ...featureDuck.reducers
});

const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));

export default store;
