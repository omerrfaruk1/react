import React from "react";
import "../../App.css"  
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartList from "../cart/CartList";

export default class Navi extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Reactstrap</NavbarBrand>

          <NavbarToggler />

          <Collapse navbar id="navbar-position">
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <CartList/>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
