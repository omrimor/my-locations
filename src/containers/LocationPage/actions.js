import { ADD_LOCATION, EDIT_LOCATION, DELETE_LOCATION } from './constants';

export function addNewLocation(location) {
  return {
    type: ADD_LOCATION,
    payload: {
      ...location
    },
  };
}

export function editLocation(current, updated) {
  return {
    type: EDIT_LOCATION,
    current,
    updated,
  }
}

export function deleteLocation(location) {
  return {
    type: DELETE_LOCATION,
    location,
  }
}
