import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  
} from "reactstrap";

export default class CartSummary extends Component {
  renderSummary() {
   return(  <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Your Cart
      </DropdownToggle>
      <DropdownMenu right>
        {this.props.cart.map((cartItem) => (
          <DropdownItem key={cartItem.product.id}>
            <span className="text-danger" onClick={() => this.props.removeFromCart(cartItem.product)}>X </span>
            
            {cartItem.product.productName}-
            <span className="text-primary">
              {cartItem.quantity}
            </span> 
            
          </DropdownItem>
        ))}

        <DropdownItem>
          <Link to="cart">Go to Cart</Link>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
    )
  }
  renderEmptyCart() {
      return (
          <NavItem>
              <NavLink>Empty Cart</NavLink>
          </NavItem>
      )
  }
  render() {
    return <div>
        {this.props.cart.length>0?this.renderSummary():this.renderEmptyCart()}
    </div>;
  }
}