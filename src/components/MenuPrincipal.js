import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="menuPrincipal" expand="md">
      <NavbarBrand className="logo" href="/">
        <img src="./logo-e-commerce.png" width="32px" alt="logo" title="logo" />
      </NavbarBrand>

      <NavbarToggler className="menu_burger_bouton" onClick={toggle} />

      <Collapse isOpen={isOpen} navbar>
        <Nav className="" navbar>
          <NavItem className="menu_item">
            <NavLink className="menu_link" href="/shop">
              Shop
            </NavLink>
          </NavItem>
          <NavItem className="menu_item">
            <NavLink className="menu_link" href="/components/">
              contact
            </NavLink>
          </NavItem>
          <NavItem className="menu_item">
            <NavLink className="menu_link" href="/components/">
              Signin
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Example;
