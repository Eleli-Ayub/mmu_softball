import { ArrowRightAlt, ArrowRightAltOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import Baseball from "../Assets/Baseball.svg";
import Captains from "../Components/Captains";

import Slider from "../Components/Homepage/Slider";
import Team from "./Team";

function Home() {
  return (
    <div className="w-full py-20 lg:py-0">
      <Slider />
      <div className=" h-[100vh] "></div>
    </div>
  );
}

export default Home;
