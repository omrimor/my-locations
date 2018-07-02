/**
 * Category selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCategory = state => state.get('categories', initialState);

const makeSelectCategories = () =>
  createSelector(selectCategory, catState => catState.get('items', []));

export {
  selectCategory,
  makeSelectCategories
};
