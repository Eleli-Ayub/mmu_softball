import { ArrowRightAlt, ArrowRightAltOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import Baseball from "../Assets/Baseball.svg";
import Captains from "../Components/Captains";

import "../Styles/Home.scss";

function Home() {
  return <div className="h-[100vh]"></div>;
  {
    /* <div className="homeWrapper">
        <section>
          <img src={Baseball} alt="Baseball" />
        </section>
        <div className="landingRight">
          <h1 className="title">MMU STOMERZ</h1>
          <h3 className=" ">(Baseball 5 and softball team)</h3>
          <p>
            <i>
              MMU Stomerz is a team, comprised of both male and females, each
              totaling to a team that represents the Multimedia University of
              Kenya in the WBSC competitions nationally. Stomerz participate
              both, <b>(baseball 5 and softball)</b> competitions at national
              league level.
            </i>
          </p>
          <Link className="fullInfoButton" to="About">
            View Full Team... <ArrowRightAlt />
          </Link>
        </div>
      </div>
      <div className="secondPage">
        <h1>Players</h1>
        <div className="container">
          <section>
            <p>
              Stomerz currently boasts a total of 28 players, 17 men and 15
              women. The players are broadly categorized into two major section,
              Infield and outfield. Per game the players required are ...
            </p>
            <Link to="Team">To Game description ... </Link>
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
                Mr. Frank Karugu is the head coach of both teams{" "}
                <b>
                  <i>(Baseball5 and Softball)</i>
                </b>
                . He is in charge or recruiting, training, and preparing the
                team for upcoming fixtures. <br /> Mr. Frank also holds other
                titles such as; Head of games and sports in Multimedia
                University, The president of the Softball Federation in Kenya,
                and lastly the secretary general of the African Softball
                Federation.
              </p>
            </span>
          </div>
          <div className="captains">
            <h4>Head Captains</h4>
            <div className="captainsList">
              <Captains
                name="Eleli Ayub"
                image={require("../Assets/Players/Ayub.jpg")}
                role="Head Mens Captain"
              />
              <Captains
                name="Miriam Edung"
                image={require("../Assets/Players/Mirriam.jpg")}
                role="Ladies Captain"
              />
            </div>
          </div>
          <div className="captains">
            <h4 className="asistantCaptains">Assistant Captains</h4>
            <div className="captainsList asistantCaptainsList">
              <Captains
                name="Antonicsm"
                image={require("../Assets/Players/Anto.jpg")}
                role="Assistant Mens Captain"
              />
              <Captains
                name="Natasha Kedugo"
                image={require("../Assets/Players/Natasha.jpg")}
                role="Assistant Ladies Captain"
              />
              <Captains
                name="Lilian Nakeel"
                image={require("../Assets/Players/Nakeel.jpg")}
                role="Assistant Ladies Captain"
              />
            </div>
          </div>
        </section>
      </div> */
  }
}

export default Home;
