import React from "react";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://es.gravatar.com/avatar?d=identicon"
            alt="Avatar"
          ></img>
          <h1>
            Jorge <br /> Lopez
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Software Engineering</h3>
          <div>@jlo_beto</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
