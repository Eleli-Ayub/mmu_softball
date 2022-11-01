import React from "react";
import { Carousel } from "react-carousel3";
import { Male_Players } from "../Assets/Players";
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
      {Male_Players.map((player) => (
        <div className="itemWrapper">
          <img className="image" src={player.image} alt="" />
          <h2>{player.name}</h2>
        </div>
      ))}
    </Carousel>
  </div>
);
