import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productAction";

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
  selectCategory = category => {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.id)
  };
  render() {
    return (
      <div>
        <h3>
          <span className="text-success">Categories </span>
        </h3>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem
              active={this.props.currentCategory.id === category.id}
              onClick={() => this.selectCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducers,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
