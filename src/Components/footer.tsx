import React from 'react';
import Logo from '../Assets/stomerz_logo.png'; 
import Spon1 from "../Assets/eleli_afrika.png";
import Spon2 from "../Assets/wbsc.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-400 text-white w-full md:py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
        
        
        <div className="w-full hidden md:block md:w-auto justify-center md:justify-start ">
          <img src={Logo} alt="Logo" className="w-32 md:w-52" />
        </div>    

      
        <div className="flex flex-col items-center md:items-start">
          <div className="flex space-x-6 font-bold text-xl">
            <a href="/" className="hover:text-red-400 text-sm md:text-xl ">Home</a>
            <a href="/Team" className="hover:text-red-400 text-sm md:text-xl ">Team</a>
            <a href="/Game" className="hover:text-red-400 text-sm md:text-xl ">Games</a>
            <a href="/About" className="hover:text-red-400 text-sm md:text-xl ">About</a>
          </div>
        </div>

        
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold text-center">Our Sponsors</h2>
          <div className="flex justify-center md:justify-start space-x-2 md:space-x-6 mt-7">
            <img src={Spon1} alt="Sponsor 1" className="h-10 md:h-20 " />
            <img src={Spon2} alt="Sponsor 2" className="h-10 md:h-20" />
            {/* <img src="/path/to/sponsor3.png" alt="Sponsor 3" className="h-12" /> */}
          </div>
        </div>
      </div>

     
      <div className="text-center text-xs md:text-sm text-gray-100 mt-2 md:mt-8">
        &copy; {new Date().getFullYear()} MMU Stomerz. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
