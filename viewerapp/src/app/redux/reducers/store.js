import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './index.js';
import thunk from 'redux-thunk';
 
export const history = require("history").createBrowserHistory();

export const store = createStore(
  reducer, composeWithDevTools(applyMiddleware(thunk)));