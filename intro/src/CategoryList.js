import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
export default class CategoryList extends Component {
  state = {
      categoryies: []
    };
    componentDidMount() {
      this.getCategories();
    }
    getCategories = () => {
      fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data =>this.setState({ categoryies: data}))
      .catch(err =>console.error(err))
    }
  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2>
        <h2>{this.state.count}</h2>
        <ListGroup>
          {this.state.categoryies.map((category) => (
            <ListGroupItem active={category.categoryName === this.props.currentCategory? true: false} 
              onClick={()=>this.props.changeCategory(category)}
              key={category.id}>{
              category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    );
  }
}
