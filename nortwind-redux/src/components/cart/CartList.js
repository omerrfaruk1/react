import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
} from "reactstrap";
import {Link} from "react-router-dom";
import alertify from "alertifyjs";

class CartList extends Component {
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Sepetiniz Boş</NavLink>
      </NavItem>
    );
  }
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepetiniz
        </DropdownToggle>

        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (

            <DropdownItem key={cartItem.product.id}>
              <span className="text-danger" onClick={()=> this.removeFromCart(cartItem.product)}>X </span>
              {cartItem.product.productName} -
              <span className="text-success">{cartItem.quantity}</span>
            </DropdownItem>
          ))}
          <DropdownItem divider />

          <DropdownItem>
            <Link to={"/cart"}>sepete git</Link>
            </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " Sepetten silindi")
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removefromCart, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartList);
