// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertfiy from "alertifyjs";
import { Switch,Route} from "react-router-dom";
import NotFound from "./notFound";
import CartList from "./cartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";
export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProduct();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProduct(category.id);
  };

  getProduct = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }))
      .catch((err) => console.error(err));
  };
  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedİtem = newCart.find((c) => c.product.id === product.id);
    if (addedİtem) {
      addedİtem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertfiy.success(product.productName + " added to cart", 2);
  };
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertfiy.error(product.productName + " removed from cart", 2);
  };
  render() {
    let Categoryinfo = { title: "CategoryList" };
    let Productioninfo = { title: "ProductionList" };
    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={Categoryinfo}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <ProductList
                      {...props}
                      products={this.state.products}
                      addToCart={this.addToCart}
                      currentCategory={this.state.currentCategory}
                      info={Productioninfo}
                    />
                  )}
                />
                <Route exact path="/cart" render={props => (
                    <CartList
                      {...props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  )} />
                <Route path="/form1demo" component={FormDemo1} />
                <Route path="/form2demo" component={FormDemo2} />
                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
