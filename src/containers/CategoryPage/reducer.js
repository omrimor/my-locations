/*
 * CategoryReducer
 */

import { fromJS } from 'immutable';

import {ADD_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY} from './constants';

export const initialState = fromJS({
  items: [],
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      return state.update('items', items => items.push(action.payload));
    case EDIT_CATEGORY:
      const index = state.get('items').findIndex(k => k === action.current);
      return state.setIn(['items', index], action.updated);
    case DELETE_CATEGORY:
      const inx = state.get('items').findIndex(k => k === action.category);
      return state.update('items', items => items.delete(inx));
    default:
      return state;
  }
}

export default reducer;
