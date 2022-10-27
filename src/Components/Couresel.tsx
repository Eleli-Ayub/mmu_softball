import React from "react";
import { Carousel } from "react-carousel3";
import { Players } from "../Assets/Players";
import "../Styles/Slider.scss";

export const Couresel = () => (
  <div className="coureselWrapper">
    <Carousel
      height={600}
      width={980}
      yOrigin={42}
      yRadius={48}
      autoPlay={true}
    >
      {Players.map((player) => (
        <div className="itemWrapper">
          <img className="image" src={player.image} alt="" />
          <h2>{player.name}</h2>
          <p>{player.Jersey}</p>
          <h3>{player.position}</h3>
        </div>
      ))}
    </Carousel>
  </div>
);
