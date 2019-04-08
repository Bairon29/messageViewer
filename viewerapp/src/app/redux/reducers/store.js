import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './index.js';
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory';
 
export const history = createHistory();

export const store = createStore(
  reducer, composeWithDevTools(applyMiddleware(thunk)));