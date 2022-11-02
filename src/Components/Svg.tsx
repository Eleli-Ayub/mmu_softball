import React from "react";
import { Svg_I } from "../Interfaces";
import "../Styles/Svg.scss";
function Svg({ image, top, right }: Svg_I) {
  return (
    <div style={{ top: top, right: right }} className="svgWrapper">
      <img src={image} alt="" />
    </div>
  );
}

export default Svg;
