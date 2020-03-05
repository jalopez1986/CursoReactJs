import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import Badge from "./components/Badge";

const container = document.getElementById("app");

ReactDOM.render(
  <Badge
    firstName="Carolina"
    lastName="Gonzalez"
    avatarUrl="https://es.gravatar.com/avatar?d=identicon"
    jobTitle="Software Engineer"
    twitter="jlobeto"
  />,
  container
);
