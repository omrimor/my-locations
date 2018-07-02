import React from 'react';
import PropTypes from 'prop-types';
import { CardColumns } from 'reactstrap';
import LocationListItem from './LocationListItem';

const propTypes = {
  onEditLocation: PropTypes.func.isRequired,
  onDeleteLocation: PropTypes.func.isRequired
};

function LocationsList({locations, onEditLocation, onDeleteLocation, categories}) {
  if (locations.length === 0 && categories.length > 0) {
    return <div>Add your first location in from the top bar</div>;
  }
  if (locations.length === 0 && categories.length === 0) {
    return <div>You have to add at least one category!</div>
  }
  return (
    <div style={{overflow: 'scroll'}}>
      <CardColumns>
        {
          locations.map((item, inx) =>
            <LocationListItem
              key={inx}
              location={item}
              categories={categories}
              onEditLocation={onEditLocation}
              onDeleteLocation={onDeleteLocation}
            />)
        }
      </CardColumns>
    </div>
  );
}

LocationsList.propTypes = propTypes;

export default LocationsList;
