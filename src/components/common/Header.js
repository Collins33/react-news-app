import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        HOME
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        ABOUT US
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeStyle}>
        COURSES
      </NavLink>
    </nav>
  );
};
export default Header;
