import { color } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Female_Players, Male_Players } from "../Assets/Players";
import Player from "../Components/Player";
import "../Styles/Team.scss";

function Team() {
  const [gender, setGender] = useState("men");
  let [data, setData] = useState(Male_Players);
  useEffect(() => {
    if (gender === "ladies") {
      setData(Female_Players);
    } else {
      setData(Male_Players);
    }
    console.log(data);
  }, [gender]);

  return (
    <div className="teamWrapper">
      <h1 className="title">The Team</h1>
      <div className="switchBtns">
        <button
          style={{
            backgroundColor: gender === "men" ? "tomato" : "transparent",
          }}
          onClick={() => {
            setGender("men");
          }}
        >
          Men
        </button>
        <button
          style={{
            backgroundColor: gender === "ladies" ? "tomato" : "transparent",
          }}
          onClick={() => {
            setGender("ladies");
          }}
        >
          Ladies
        </button>
      </div>
      <section>
        {data.map((player) => (
          <div className="playerList">
            <Player
              name={player.name}
              image={player.image}
              position={player.position}
              j_number={player.Jersey}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Team;
