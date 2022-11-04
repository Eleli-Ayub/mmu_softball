import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.scss";
function Header() {
  return (
    <div className="headerWrapper">
      <Link to="/">Home</Link>
      <Link to="Team">Team</Link>
      <Link to="Games">Upcoming Games</Link>
      <Link to="About">About</Link>
    </div>
  );
}

export default Header;
