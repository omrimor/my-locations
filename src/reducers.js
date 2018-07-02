/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux-immutable';

import appReducer from 'containers/App/reducer';
import { default as categoriesReducer } from 'containers/CategoryPage/reducer';
import { default as locationsReducer } from 'containers/LocationPage/reducer';

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer() {
  return combineReducers({
    global: appReducer,
    categories: categoriesReducer,
    locations: locationsReducer,
  });
}
