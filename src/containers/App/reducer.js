/*
 * GlobalReducer
 * this will hold information regarding the
 * UI, I/O calls etc.
 */

import { fromJS } from 'immutable';

// import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR } from './constants';

// The initial state of the App
const initialState = fromJS({
});

function appReducer(state = initialState, action) {
  return state;
}

export default appReducer;
