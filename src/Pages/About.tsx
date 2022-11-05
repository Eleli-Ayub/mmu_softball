import React from "react";
import "../Styles/About.scss";
function About() {
  return (
    <div className="aboutwrapper">
      <h1>All About the Game</h1>
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
          controls
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
              <i>How many positions are there for each game?</i>
            </b>
            <br />
            <br />
            <div className="players">
              <p> The game has nine positions: </p>
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
          <p className="title">
            <b>
              <i>How does a team win or loses a game?</i> <br /> <br />
            </b>
          </p>
          <p className="docs">
            <i>
              The defending team has to take down three players from the offense
              team while preventing runs (offense player reaching home plate
              after batting theball and not eliminated). <br /> The Team with
              the most runs after the innings are completed(One inning is a
              round of the teams fielding and batting) wins the game.
            </i>
          </p>
        </section>
        <img src={require("../Assets/winning.png")} alt="" />
      </div>
      <div className="bottom">
        <p>
          <i>
            Softball is a fun and interactive game which requires both physical
            and mental prowess to play. Play or be a fan to enjoy.
          </i>
        </p>
      </div>
    </div>
  );
}

export default About;
