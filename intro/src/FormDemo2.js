import React, { Component } from "react";
import {Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertfiy from "alertifyjs";

export default class formdemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alertfiy.success(this.state.email + " added to db!");
    alertfiy.success(this.state.password + " added to db!");
    alertfiy.success(this.state.city + " added to db!");
    alertfiy.success(this.state.description + " added to db!");
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter description"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.handleChange}
            >
              <option>Ankara</option>
              <option>Mardin</option>
              <option>Diyarbak??r</option>
              <option>??stanbul</option>
              <option>??zmir</option>
            </Input>
            <br/>
          </FormGroup>
            <Button type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}
