import React from "react";
import { Player_I } from "../Interfaces";
import "../Styles/Player.scss";
function Player({ image, j_number, name }: Player_I) {
  return (
    <div className="playerWrapper">
      <img src={image} alt="" />
      <h2>
        <b>{name}</b>
      </h2>
      <h2>
        <b>{j_number}</b>
      </h2>
    </div>
  );
}

export default Player;
