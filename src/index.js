import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./root";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Root />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
