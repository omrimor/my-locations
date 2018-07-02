import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Nav pills>
          <NavItem>
            <NavLink to="/category" activeClassName="active" tag={RRNavLink}>Category</NavLink>
            {/*<NavLink to="/category">Category</NavLink>*/}
          </NavItem>
          <NavItem>
            <NavLink to="/location" activeClassName="active" tag={RRNavLink}>Location</NavLink>
            {/*<NavLink to="/location">Location</NavLink>*/}
          </NavItem>
        </Nav>
      </div>
    </footer>
  );
}

export default Footer;
