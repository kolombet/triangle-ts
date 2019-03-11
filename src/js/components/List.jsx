// src/js/components/List.jsx
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { triangles: state.triangles };
};

const ConnectedList = ({ triangles }) => (
  <ul className="list-group list-group-flush">
    {triangles.map(el => (
      <li className="list-group-item" key={el.id}>
        {"A: " + el.a}
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);
export default List;
