import React from "react";
import { Link } from "react-router-dom";
// import "../../Styles/Header.scss";
import stomerz from "../../Assets/stomerz_logo.png";
function Header() {
  return (
    <div className="lg:absolute hidden z-10 top-0 left-0 h-[100px] w-full text-white font-bold font-sans lg:flex flex-row gap-5 px-5">
      <img className="h-[50px] w-[50px] object-contain" src={stomerz} />
      <ul className="flex-1 flex flex-row justify-end items-center pr-20 gap-10 lg:text-lg child-hover:text-pink">
        <Link to="/">Home</Link>
        <Link to="Team">Team</Link>
        <Link to="Games">Upcoming Games</Link>
        <Link to="About">About</Link>
      </ul>
    </div>
  );
}

export default Header;
