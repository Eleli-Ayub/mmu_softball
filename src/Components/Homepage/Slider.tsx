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
    <div className="relative text-white h-full flex items-start justify-start">
      <img
        className="hidden md:block max-h-full min-w-full min-h-3/5 object-cover "
        src={Male_Players[currentPlayer].image}
      />
      <div className="absolute bg-black/60 w-full h-full flex flex-col items-start lg:pl-40  lg:justify-center px-2 md:px-10 py-10 child:h-fit">
        <div className="lg:w-[400px] w-full h-fit bg-black/80 p-5 md:p-10 rounded-xl">
          <h1 className=" text-lightred font-bold text-3xl mb-5">
            Player Profile:
          </h1>

          <div className="relative flex flex-col gap-5 items-start">
            <img
              className="md:hidden absolute h-[100px] w-[100px] rounded-full right-3 top-0 object-cover"
              src={Male_Players[currentPlayer].image}
              alt=""
            />
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
