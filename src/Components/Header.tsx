import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="fixed w-full flex justify-end bg-slate pt-10 pr-20 ">
      <Link className="mr-10 text-2xl text-red-500 font-semibold" to="/">
        Home
      </Link>
      <Link className="mr-10 text-2xl text-red-500 font-semibold" to="Team">
        Team
      </Link>
      <Link className="mr-10 text-2xl text-red-500 font-semibold" to="Games">
        Games
      </Link>
      <Link className="mr-10 text-2xl text-red-500 font-semibold" to="About">
        About Us
      </Link>
    </div>
  );
}

export default Header;
