import React, { useState, useContext } from "react";
import { App_datas } from "../App";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { auth } from "../firebase/firebase.utils";

const MenuPrincipal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useContext(App_datas);

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
            {user ? (
              <NavLink className="menu_link" onClick={() => auth.signOut()}>
                Sign out
              </NavLink>
            ) : (
              <NavLink className="menu_link" href="/signin">
                Sign in
              </NavLink>
            )}
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MenuPrincipal;
