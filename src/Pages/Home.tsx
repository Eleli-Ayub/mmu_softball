import React from "react";
import Baseball from "../Assets/Baseball.svg";

function Home() {
  return (
    <div className="bg-slate-100 h-screen flex flex-row justify-between items-center pr-20">
      <section>
        <img className="h-screen" src={Baseball} alt="Baseball" />
      </section>
      <div className="text-stone-600 mr-15 text-center w-1/2 ml-10">
        <h1 className="text-5xl font-bold font-sans mb-2 text-red-500">
          MMU STOMERZ
        </h1>
        <h3 className="mb-10">(Baseball 5 and softball team)</h3>
        <p>
          <i>
            MMU Stomerz is a team, comprised of both male and females, each
            totaling to a team that represents the Multimedia University of
            Kenya in the WBSC competitions.
          </i>
        </p>
      </div>
    </div>
  );
}

export default Home;
