import React from "react";
import "../Styles/Bottom_navbar.scss";
import { Link } from "react-router-dom";
import { Diversity3, Home, Info, SportsBaseball } from "@mui/icons-material";
function Bottom_navbar() {
  return (
    <div className="navbarWrapper">
      <Link to="/">
        {" "}
        <Home /> Home
      </Link>
      <Link to="Team">
        {" "}
        <Diversity3 /> Team
      </Link>
      <Link to="/Games">
        {" "}
        <SportsBaseball /> Games
      </Link>
      <Link to="About">
        {" "}
        <Info /> About
      </Link>
    </div>
  );
}

export default Bottom_navbar;
