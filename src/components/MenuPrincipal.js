import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { auth } from "../firebase/firebase.utils";
import CartIcon from "./cart-icon";
import { CartDropdown } from "./Cart-dropdown";

const MenuPrincipal = ({ currentUser, hidden }) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
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
            {currentUser ? (
              <NavLink className="menu_link" onClick={() => auth.signOut()}>
                Sign out
              </NavLink>
            ) : (
              <NavLink
                className="menu_link"
                onClick={() => history.push("/signin")}
              >
                Sign in
              </NavLink>
            )}
          </NavItem>
        </Nav>
      </Collapse>
      <NavbarText>
        <CartIcon />
      </NavbarText>
      {!hidden && <CartDropdown />}
    </Navbar>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser: currentUser,
  hidden: hidden,
});
export default connect(mapStateToProps, null)(MenuPrincipal);
