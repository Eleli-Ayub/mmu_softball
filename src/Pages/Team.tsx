import React from "react";
import Player from "../Components/Player";
import "../Styles/Team.scss";
function Team() {
  return (
    <div className="teamWrapper">
      <h1 className="title">The Team</h1>
      <div className="switchBtns">
        <button>Men</button>
        <button>Ladies</button>
      </div>
      <section>
        <h1>Pitchers</h1>
        <div className="playerList">
          <Player />
        </div>
      </section>
      <section>
        <h1>Catchers</h1>
        <div className="playerList">
          <Player />
        </div>
      </section>
      <section>
        <h1>First Basemen</h1>
        <div className="playerList">
          <Player />
        </div>
      </section>
      <section>
        <h1>Second Basemen</h1>
        <div className="playerList">
          <Player />
        </div>
      </section>
      <section>
        <h1>Third Basemen</h1>
        <div className="playerList">
          <Player />
        </div>
      </section>
      <section>
        <h1>Outfielders</h1>
        <div className="playerList">
          <Player />
        </div>
      </section>
    </div>
  );
}

export default Team;
