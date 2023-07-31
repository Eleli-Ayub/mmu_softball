import React, { useRef, useState, useMemo } from "react";
import { Male_Players } from "../../Assets/Players";

const Slider = () => {
  const [currentPlayer, setCurrentPlayer] = useState(0);

  const infiniteSlider = () => {
    if (currentPlayer === Male_Players.length - 1) {
      setCurrentPlayer(0);
    } else {
      setCurrentPlayer(currentPlayer + 1);
    }
  };
  setTimeout(infiniteSlider, 5000);
  return (
    <div className="relative text-white h-full flex items-center justify-center">
      <img
        className="max-h-full min-w-full min-h-3/5 object-cover "
        src={Male_Players[currentPlayer].image}
      />
      <div className="absolute bg-black/80 w-full h-full flex flex-col items-start pl-40 justify-center px-10 py-10 child:h-fit">
        <div className="w-[400px] h-fit bg-black/80 p-10 rounded-xl">
          <h1 className=" text-lightred font-bold text-3xl mb-5">
            Player Profile:
          </h1>

          <div className="flex flex-col  gap-5 items-start">
            <h1>
              <b>Name: </b> <span>{Male_Players[currentPlayer].name}</span>{" "}
            </h1>
            <h1>
              <b>Position: </b>{" "}
              <span>{Male_Players[currentPlayer].position}</span>{" "}
            </h1>
            <h1>
              <b>Jersey NO: </b>{" "}
              <span>{Male_Players[currentPlayer].Jersey}</span>{" "}
            </h1>
            <h1>
              <b>Player Bio: </b>{" "}
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat consectetur, quibusdam inventore blanditiis, qui facere
                odio corporis eius alias vero nesciunt excepturi, consequuntur
                rerum reprehenderit odit quae. Voluptates, eveniet sunt! Ea
                commodi provident eaque tenetur vitae asperiores consectetur
                fuga quae! Dolore praesentium placeat repellat voluptate
                distinctio et quasi ipsa laboriosam!
              </span>{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
