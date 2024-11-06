import OrganSection from "./organSection";
import CaptainsSection from "./captainsSection";
import PlayersSection from "./playersSection";
import Batting from "../../Assets/Baseball.svg";
import AssCaptainsSection from "../Home/assCaptain";


import { ArrowLongRightIcon } from '@heroicons/react/24/solid'


const Hero:React.FC = () => {
  return (
    
    <div className="bg-slate-100 w-full h-full pt-10 md:pt-20 mt-1">
      <div className="max-w-7xl mx-auto w-full">

    <div className="flex">
      <div className="flex  text-4xl h-screen w-full">
          <img className=" h-fit w-fit md:w-full  object-cover p-0 md:p-5"
          src={Batting} alt="banner" />
      </div>
      <div className="align-middle text-center ml-5 md:ml-10 md:w-full p">
        <p className="text-xl md:text-4xl text-red-600 pt-32">MMU STOMERZ</p>
        <p className="text-sm">(Baseball 5 and softball team) <br/> <span className="italic">
        MMU Stomerz is a team, comprised of both male and females, <br/>
        each totaling to a team that represents the Multimedia University <br/>
        of Kenya in the WBSC competitions nationally. Stomerz participate <br/>
        both, (baseball 5 and softball) competitions at national<br/> league 
        level. </span>
        </p>

        <button className="rounded-lg m-10 bg-blue-800 md:w-40 h-10 text-white font-bold flex justify-between items-center text-start px-3 hover:bg-red-600">
          Explore more
          <ArrowLongRightIcon className="h-8 w-8"/>
        </button>
        
      </div>

    </div>
   
      
        <div className="pt-2">
        <PlayersSection/>
            <OrganSection/>
            <CaptainsSection/>
            <AssCaptainsSection/>
            
        </div>


    </div>
    </div>
  )
}

export default Hero;