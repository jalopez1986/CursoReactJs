import React from "react";

import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div>
          <img
            src="https://es.gravatar.com/avatar?d=identicon"
            alt="Avatar"
          ></img>
          <h1>
            Jorge <br /> Lopez
          </h1>
        </div>

        <div>
          <p>Software Engineering</p>
          <p>@jlo_beto</p>
        </div>
      </div>
    );
  }
}

export default Badge;
