import "./header.css";
import HeaderImage from "../../assests/hero.jpg";

import React from "react";

function Header() {
  return (
    <div className="headerDiv">
      <div className="headerText">Blogify</div>
      <img className="headerImg" alt="" src={HeaderImage}></img>
    </div>
  );
}

export default Header;
