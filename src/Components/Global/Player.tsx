import React from "react";
import { Player_I } from "../../Interfaces";
import "../../Styles/Player.scss";
function Player({ image, j_number, name, position }: Player_I) {
  return (
    <div className="playerWrapper">
      <img src={image} alt="" />
      <div className="details">
        <h2 className="name">
          <b>{name}</b>
        </h2>
        <p>
          <i>{position}</i>
        </p>
        <h2>
          <b>{j_number}</b>
        </h2>
      </div>
    </div>
  );
}

export default Player;
