import { ADD_CATEGORY, EDIT_CATEGORY, DELETE_CATEGORY } from './constants';

export function addNewCategory(category) {
  return {
    type: ADD_CATEGORY,
    payload: {
      ...category
    },
  };
}

export function editCategory(current, updated) {
  return {
    type: EDIT_CATEGORY,
    current,
    updated,
  }
}

export function deleteCategory(category) {
  return {
    type: DELETE_CATEGORY,
    category,
  }
}
