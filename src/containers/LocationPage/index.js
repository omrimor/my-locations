import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import Header from 'components/LocationsList/Header';
import LocationsList from 'components/LocationsList';
import { toJS } from 'utils/to-js';

import { addNewLocation, deleteLocation, editLocation } from './actions';
import { makeSelectLocations } from './selectors';
import { makeSelectCategories } from 'containers/CategoryPage/selectors';

const propTypes = {
  onAddNewLocation: PropTypes.func.isRequired,
  onEditLocation: PropTypes.func.isRequired,
  onDeleteLocation: PropTypes.func.isRequired,
};

class LocationPage extends React.Component {
  render() {
    const { onAddNewLocation, onEditLocation, onDeleteLocation, locations, categories } = this.props;
    return (
      <div className="container">
        <Header
          onAddItem={onAddNewLocation}
          categories={categories}
        />
        <LocationsList
          locations={locations}
          categories={categories}
          onEditLocation={onEditLocation}
          onDeleteLocation={onDeleteLocation}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onAddNewLocation: (location) => { dispatch(addNewLocation(location)); },
  onEditLocation: (current, updated) => { dispatch(editLocation(current, updated)); },
  onDeleteLocation: (location) => { dispatch(deleteLocation(location)); }
});

const mapStateToProps = createStructuredSelector({
  locations: makeSelectLocations(),
  categories: makeSelectCategories(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

LocationPage.propTypes = propTypes;

export default compose(
  withConnect,
)(toJS(LocationPage));
