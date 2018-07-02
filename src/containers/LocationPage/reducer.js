/*
 * LocationReducer
 */

import { fromJS } from 'immutable';

import { ADD_LOCATION, EDIT_LOCATION, DELETE_LOCATION } from './constants';

// The initial state of the App
export const initialState = fromJS({
  items: []
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LOCATION:
      return state.update('items', items => items.push(action.payload));
    case EDIT_LOCATION:
      const index = state.get('items').findIndex(k => k === action.current);
      return state.setIn(['items', index], action.updated);
    case DELETE_LOCATION:
      const inx = state.get('items').findIndex(k => k === action.location);
      return state.update('items', items => items.delete(inx));
    default:
      return state;
  }
}

export default reducer;
