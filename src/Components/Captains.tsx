import React from "react";
import { Captain_I } from "../Interfaces";
import "../Styles/Captains.scss";

function Captains({ name, role, image }: Captain_I) {
  return (
    <div className="single_captain">
      <img src={image} alt="" />
      <section>
        <h2>
          Name:{" "}
          <b>
            <i>{name}</i>
          </b>{" "}
        </h2>
        <p>
          {" "}
          Role:
          <b>
            <i> {role}</i>
          </b>
        </p>
      </section>
    </div>
  );
}

export default Captains;
