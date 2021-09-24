import React from "react";
import "./App.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";
export default class Navi extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="lg">
          <NavbarBrand href="/">Northwind App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse id="naviClass" isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link id="Link" to="form1demo">
                  Form Demo 1
                </Link>
              </NavItem>
              <NavItem>
                <Link id="Link" to="form2demo">
                  Form Demo 2
                </Link>
              </NavItem>
              <NavItem>
                <Link id="Link" to="http://localhost:3001/">
                  Home
                </Link>
              </NavItem>
              <CartSummary
                removeFromCart={this.props.removeFromCart}
                cart={this.props.cart}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
