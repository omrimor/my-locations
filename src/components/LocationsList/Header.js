import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, NavItem, Button, NavbarBrand, Nav } from 'reactstrap';

import LocationModal from './LocationModal';

const propTypes = {
  onAddItem: PropTypes.func.isRequired,
};

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      modal: false
    };
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    const { onAddItem, categories } = this.props;
    return ([
      <Navbar
        style={{marginBottom: 30}}
        key='nav-bar'
        light
        color="light"
        expand="md"
      >
        <NavbarBrand>Locations</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Button
              color="primary"
              onClick={this.toggle}
              disabled={categories.length === 0}
             >
              New Location
            </Button>
          </NavItem>
        </Nav>
      </Navbar>,
      <LocationModal
        key="modal"
        isNewItem
        isOpen={this.state.modal}
        onToggle={this.toggle}
        formInputs={{
          name: '',
          address: '',
          category: ''
        }}
        onAddItem={onAddItem}
        categories={categories}
      />
    ]);
  }
}

Header.propTypes = propTypes;

export default Header;

