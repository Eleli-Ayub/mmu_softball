import { ArrowRightAlt, ArrowRightAltOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import Baseball from "../Assets/Baseball.svg";
import Captains from "../Components/Captains";

import "../Styles/Home.scss";
import Slider from "../Components/Homepage/Slider";

function Home() {
  return (
    <div className="h-[100vh] py-10">
      <Slider />
    </div>
  );
}

export default Home;
