import React, { useState } from "react";
import "../Styles/Sidebar.scss";
import "../Styles/Phone_header.scss";
import stomerz from "../Assets/Batting.jpg";
import Eleli from "../Assets/eleli_afrika.png";
import {
  Close,
  Facebook,
  Instagram,
  MenuOpen,
  Twitter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Sidebar() {
  const [sideBarClass, setSideBarClass] = useState("sideBarWrapperClose");
  return (
    <>
      <div className="phone_header">
        <button
          onClick={() => {
            setSideBarClass("sideBarWrapperOpen");
          }}
        >
          <MenuOpen className="icon" />
        </button>
        <img src={stomerz} alt="" />
      </div>
      <div className={sideBarClass}>
        <div className="title">
          <img src={stomerz} alt="" />
          <button
            onClick={() => {
              setSideBarClass("sideBarWrapperClose");
            }}
          >
            {" "}
            <Close className="icon" />
          </button>
        </div>
        <div className="navs">
          <Link to="/">Home</Link>
          <Link to="/">Team and Players</Link>
          <Link to="/">Upcoming Games</Link>
          <Link to="/">ABout Us</Link>
        </div>
        <div className="contacts">
          <h1>Contact Us</h1>
          <a href="">
            {" "}
            <Instagram className="icon" />{" "}
          </a>
          <a href="">
            <Facebook className="icon" />
          </a>
          <a href="">
            <Twitter className="icon" />
          </a>
        </div>
        <div className="art_logo">
          ░██████╗████████╗░█████╗░███╗░░░███╗███████╗██████╗░███████╗
          ██╔════╝╚══██╔══╝██╔══██╗████╗░████║██╔════╝██╔══██╗╚════██║
          ╚█████╗░░░░██║░░░██║░░██║██╔████╔██║█████╗░░██████╔╝░░███╔═╝
          ░╚═══██╗░░░██║░░░██║░░██║██║╚██╔╝██║██╔══╝░░██╔══██╗██╔══╝░░
          ██████╔╝░░░██║░░░╚█████╔╝██║░╚═╝░██║███████╗██║░░██║███████╗
          ╚═════╝░░░░╚═╝░░░░╚════╝░╚═╝░░░░░╚═╝╚══════╝╚═╝░░╚═╝╚══════╝
        </div>
        <img className="eleli_logo" src={Eleli} alt="" />
        <div className="footer">
          <p>
            <i>
              MMU Stomerz. Property of the Multimedia university Baseball and
              Softball Team.{" "}
            </i>
          </p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
