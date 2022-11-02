import React from "react";
import { Link } from "react-router-dom";
import Svg from "./Svg";

function Header() {
  return (
    <div className="w-full flex justify-end bg-slate pt-10 pr-20 ">
      <Link className="mr-10 text-2xl text-red-500 font-semibold" to="/">
        Home
      </Link>
      <Link className="mr-10 text-2xl text-red-500 font-semibold" to="Team">
        Team
      </Link>
      <Link className="mr-10 text-2xl text-red-500 font-semibold" to="Games">
        Upcoming Games
      </Link>
      <Link className="mr-10 text-2xl text-red-500 font-semibold" to="About">
        About
      </Link>
    </div>
  );
}

export default Header;
