import { color } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Female_Players, Male_Players } from "../Assets/Players";
import Player from "../Components/Global/Player";

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
    <div className="flex flex-col py-20 lg:py-20 items-center w-full">
      <h1 className=" text-center text-[40px] text-lightred m-[3%] font-bold">
        The Team
      </h1>
      <div className=" w-full flex items-center justify-center border-b border-b-heavygray h-fit">
        <button
          className="p-2 text-[18px] border-x border-x-lightred mr-2 rounded-lg"
          style={{
            backgroundColor: gender === "men" ? "tomato" : "#1f2937",
            borderRight: gender === "men" ? "solid 3px gray" : "solid 2px red",
            borderLeft: gender === "men" ? "solid 3px gray" : "solid 2px red",
          }}
          onClick={() => {
            setGender("men");
          }}
        >
          Men
        </button>
        <button
          className="p-2 text-[18px] border-x border-x-lightred mr-2 rounded-lg"
          style={{
            backgroundColor: gender === "ladies" ? "tomato" : "#1f2937",
            borderRight:
              gender === "ladies" ? "solid 3px gray" : "solid 2px red",
            borderLeft:
              gender === "ladies" ? "solid 3px gray" : "solid 2px red",
          }}
          onClick={() => {
            setGender("ladies");
          }}
        >
          Ladies
        </button>
        <button
          className="p-2 text-[18px] border-x border-x-lightred mr-2 rounded-lg"
          style={{
            backgroundColor: gender === "former" ? "tomato" : "#1f2937",
            borderRight:
              gender === "former" ? "solid 3px gray" : "solid 2px red",
            borderLeft:
              gender === "former" ? "solid 3px gray" : "solid 2px red",
          }}
          onClick={() => {
            setGender("ladies");
          }}
        >
          Former
        </button>
      </div>
      <section className="flex flex-row flex-wrap w-full gap-5 justify-center mt-10">
        {data.map((player) => (
          <div className="lg:w-1/5 lg:h-[50vh]">
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
