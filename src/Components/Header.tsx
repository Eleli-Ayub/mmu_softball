import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.scss";
import stomerz from "../Assets/stomerz_logo.png";
function Header() {
  return (
    <div className="headerWrapper">
      <img src={stomerz} alt="" />
      <Link to="/">Home</Link>
      <Link to="Team">Team</Link>
      <Link to="Games">Upcoming Games</Link>
      <Link to="About">About</Link>
    </div>
  );
}

export default Header;
