import React from "react";
import List from "./List.jsx";
import Form from "./Form.jsx";

const App = () => (
  <div>
    <div data-ts="Board">
      <div data-ts="Panel">
        <h2>Triangles:</h2>
        <List />
      </div>
    </div>
    <div data-ts="Board">
      <div data-ts="Panel">
        <h2>Add a new triangle</h2>
        <Form />
      </div>
    </div>
  </div>
);
export default App;
