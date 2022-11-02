import { ArrowRightAltOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import Baseball from "../Assets/Baseball.svg";
import Batting from "../Assets/Batting.jpg";
import {
  Ball,
  Black_ball,
  Black_bat,
  Brown_bat,
  Helmet,
  Star,
} from "../Components/Assets";
import Captains from "../Components/Captains";
import { Couresel } from "../Components/Couresel";
import Footer from "../Components/Footer";
import Svg from "../Components/Svg";
import "../Styles/Home.scss";

function Home() {
  return (
    <>
      <div className="relative bg-slate-100 h-screen flex flex-row justify-between items-center pr-20">
        <section>
          <Svg image={Helmet} top="5%" right="35%" />
          <Svg image={Ball} top="75%" right="10%" />

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
            <Link to="Players">
              View the whole team ... <ArrowRightAltOutlined />{" "}
            </Link>
          </section>
          <div className="image">
            <Couresel />
          </div>
        </div>
      </div>
      <div className="thirdPage">
        <h1>Organization and Leadership.</h1>
        <section>
          <div className="coach">
            <span>
              <h4>Head Coach</h4>
              <img src={require("../Assets/coach_frank.jpg")} alt="" />
            </span>
            <span className="info">
              <h3>Name: </h3> <span>Frank Karugu</span>
              <h3>Title: </h3> <span>Head Coach</span>
              <h3>Profile</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, corporis. Veniam excepturi saepe iusto, illum
                deleniti consectetur eveniet in quas, error dolore aspernatur
                iste ipsum laudantium non voluptate vero dicta nisi ratione, sit
                dolorum ea accusantium culpa rerum vitae. Eveniet dolor
                exercitationem facere debitis assumenda doloremque repudiandae
                minus excepturi beatae.
              </p>
            </span>
          </div>
          <div className="captains">
            <h4>Head Captains</h4>
            <div className="captainsList">
              <Captains
                name="Eleli Ayub"
                image={require("../Assets/coach_frank.jpg")}
                role="Head Mens Captain"
              />
              <Captains
                name="Miriam Edung"
                image={require("../Assets/coach_frank.jpg")}
                role="Ladies Captain"
              />
            </div>
          </div>
          <div className="captains">
            <h4>Assistant Captains</h4>
            <div className="captainsList">
              <Captains
                name="Antonicsm"
                image={require("../Assets/coach_frank.jpg")}
                role="Assistant Men Captain"
              />
              <Captains
                name="Natasha Kedugo"
                image={require("../Assets/coach_frank.jpg")}
                role="Assistant Ladies Captain"
              />
              <Captains
                name="Lilian Nakeel"
                image={require("../Assets/coach_frank.jpg")}
                role="Assistant Ladies Captain"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
