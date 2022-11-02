import React from "react";
import "../Styles/About.scss";
function About() {
  return (
    <div className="aboutwrapper">
      <div className="how">
        <section>
          <b>
            <i>What is softball and how is it played?</i>
          </b>
          <p>
            <i>
              The game is played by nine players, either on defense or offense.
              The team on offense lines up a team of nine players where each one
              steps into the batting box one at a time to batt. <br /> The
              defense arranges themselves in their respective positions to field
              the ball being pitched by their pitcher and batted by the offense
              player.
            </i>
          </p>
        </section>
        <video
          className="video_one"
          autoPlay
          muted
          src={require("../Assets/Videos/gameplay.mp4")}
        ></video>
      </div>
      <div className="positions">
        <img src={require("../Assets/pitch.jpg")} alt="" />
        <section>
          <i>
            {" "}
            <b>
              <i>How many positions are there for each game</i>
            </b>
            <br />
            <br />
            <div className="players">
              <p> There are nine positions for the game namely:</p>
              <ul>
                <li>Pitcher</li>
                <li>Catcher</li>
                <li>First Baseman</li>
                <li>Second Baseman</li>
                <li>Short Stop</li>
                <li>Third Baseman</li>
                <li>Right Outfielder</li>
                <li>Center Outfielder</li>
                <li>Left Outfielder</li>
              </ul>
            </div>
          </i>
        </section>
      </div>
      <div className="results">
        <section>
          <p>
            <b>
              <i>How does a team win or loses a game?</i> <br /> <br />
            </b>
          </p>
          <p>
            <i>
              The defending team has to take down three players from the offense
              team while preventing runs (offense player reaching home plate
              after batting theball and not eliminated). <br /> The Team with
              the most runs after the three innings (One inning is a round of
              each team fielding and batting) wins the game.
            </i>
          </p>
        </section>
        <img src={require("../Assets/winning.png")} alt="" />
      </div>
      <div className="bottom">
        <p>
          <i>
            Softball is a fun and interactive game which requires both physical
            and judgment prowess to play. Make sure to play or be a fan and to
            enjoy.
          </i>
        </p>
      </div>
    </div>
  );
}

export default About;
