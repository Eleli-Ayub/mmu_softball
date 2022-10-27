import React from "react";
import { Link } from "react-router-dom";
import Baseball from "../Assets/Baseball.svg";
import Batting from "../Assets/Batting.jpg";
import { Couresel } from "../Components/Couresel";
import "../Styles/Home.scss";

function Home() {
  return (
    <>
      <div className="bg-slate-100 h-screen flex flex-row justify-between items-center pr-20">
        <section>
          <img className="h-screen" src={Baseball} alt="Baseball" />
        </section>
        <div className="landingRight">
          <h1 className="title">MMU STOMERZ</h1>
          <h3 className="mb-10">(Baseball 5 and softball team)</h3>
          <p>
            <i>
              MMU Stomerz is a team, comprised of both male and females, each
              totaling to a team that represents the Multimedia University of
              Kenya in the WBSC competitions. Stomerz participate both the
              competitions at national league level.
            </i>
          </p>
          <Link className="fullInfoButton" to="About">
            View Full Info
          </Link>
        </div>
      </div>
      <div className="secondPage">
        <h1>Players</h1>
        <div className="container">
          <section>
            <p>
              Stomerz currently boasts a total of 37 players, 20 men and 17
              women. The player are broadly categorized into two major section,
              Infield and outfield. Per game the players required are ...
            </p>
            <Link to="Players">View the whole team</Link>
          </section>
          <div className="image">
            <Couresel />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
