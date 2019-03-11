// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle, addTriangle } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article)),
    addTriangle: payload => dispatch(addTriangle(payload))
  };
}
class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      sideA: 0,
      sideB: 0,
      sideC: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { title, sideA, sideB, sideC } = this.state;
    const id = uuidv1();
    // this.props.addArticle({ title, id });
    this.props.addTriangle({ a: sideA, b: sideB, c: sideC });
    this.setState({ title: "" });
  }
  render() {
    const { title, sideA, sideB, sideC } = this.state;
    return (
      <form data-ts="Form" onSubmit={this.handleSubmit}>
        <fieldset>
          <label>
            <span>Side A:</span>
            <input
              required
              type="number"
              className="form-control"
              id="sideA"
              value={sideA}
              onChange={this.handleChange}
            />
          </label>
          <dl class="ts-errors" ng-show="form.poref.$invalid">
            <dt>Error: PO line item reference</dt>
            <dd>Must be 4 numeric digits in length.</dd>
            <dd>Must be present on the related PO document.</dd>
          </dl>
          <label>
            <span>Side B:</span>
            <input
              required
              type="number"
              className="form-control"
              id="sideB"
              value={sideB}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <span>Side B:</span>
            <input
              required
              type="number"
              className="form-control"
              id="sideB"
              value={sideB}
              onChange={this.handleChange}
            />
          </label>
        </fieldset>
        {/* <div className="form-group">
          <label htmlFor="title" />
          Side A: Side B:
          <input
            type="text"
            className="form-control"
            id="sideB"
            value={sideB}
            onChange={this.handleChange}
          />
          Side C:
          <input
            type="text"
            className="form-control"
            id="sideC"
            value={sideC}
            onChange={this.handleChange}
          />
        </div> */}
        <dl class="ts-errors">
          <dt>Text</dt>
          <dd>An explanation of the error in question</dd>
          <dd>Another explanation of the error in question</dd>
        </dl>
        <button data-ts="Button" type="submit" className="ts-primary">
          ADD TRIANGLE
        </button>
      </form>
    );
  }
}
const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);
export default Form;
