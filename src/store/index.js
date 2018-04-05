/***
 * Inits a redux store base on config
 */

import config from '../config';
import { createStore, combineReducers } from 'redux';

// Remeber to init the scaffold before you use these
export let store;
export let getState;
export let dispatch;

/**
 * Initializes store, Pulls information from config.js setup
 */
export const initStore = (initState = {}) => {
  // Create store with enhancers, middleware, reducers, and initialState
  const combinedReducers = combineReducers({ ...config.reducers });
  store = createStore(
    combinedReducers,
    initState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  getState = store.getState;
  dispatch = store.dispatch;
};
