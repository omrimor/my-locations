/**
 * Locations selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLocation = state => state.get('locations', initialState);

const makeSelectLocations = () =>
  createSelector(selectLocation, localState => localState.get('items', []));

export {
  selectLocation,
  makeSelectLocations
};
