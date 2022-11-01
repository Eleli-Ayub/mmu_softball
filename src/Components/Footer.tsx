import {
  Face3Rounded,
  FacebookOutlined,
  FacebookRounded,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.scss";
function Footer() {
  return (
    <div className="footerWrapper">
      <span>
        <Link to="/Home">Home</Link>
        <Link to="/Team">Team</Link>
        <Link to="/Games">Games</Link>
        <Link to="/About">About</Link>
      </span>
      <span>
        <Link to="/Home">Team Structure and Management</Link>
        <Link to="/Team">Fixtures and Upcoming Events</Link>
        <Link to="/Games">Training and Practice</Link>
        <Link to="/About">Join the team</Link>
      </span>
      <span className="socials">
        <Link to="/Home">
          {" "}
          <FacebookOutlined
            style={{ color: "aqua", width: "50px", height: "50px" }}
          />{" "}
        </Link>
        <Link to="/Home">
          {" "}
          <Instagram
            style={{ color: "aqua", width: "50px", height: "50px" }}
          />{" "}
        </Link>
        <Link to="/Home">
          {" "}
          <Twitter
            style={{ color: "aqua", width: "50px", height: "50px" }}
          />{" "}
        </Link>
      </span>
      <div className="art_logo">
        ░██████╗████████╗░█████╗░███╗░░░███╗███████╗██████╗░███████╗
        ██╔════╝╚══██╔══╝██╔══██╗████╗░████║██╔════╝██╔══██╗╚════██║
        ╚█████╗░░░░██║░░░██║░░██║██╔████╔██║█████╗░░██████╔╝░░███╔═╝
        ░╚═══██╗░░░██║░░░██║░░██║██║╚██╔╝██║██╔══╝░░██╔══██╗██╔══╝░░
        ██████╔╝░░░██║░░░╚█████╔╝██║░╚═╝░██║███████╗██║░░██║███████╗
        ╚═════╝░░░░╚═╝░░░░╚════╝░╚═╝░░░░░╚═╝╚══════╝╚═╝░░╚═╝╚══════╝
      </div>
      <span className="wbsc">
        <img src={require("../Assets/wbsc.png")} alt="" />
      </span>
      <span className="logo">
        <img src={require("../Assets/eleli_afrika.png")} alt="" />
        <i>Made at eleli afrika</i>
      </span>
    </div>
  );
}

export default Footer;
