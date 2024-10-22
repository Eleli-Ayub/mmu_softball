import React from 'react';
import Logo from '../Assets/stomerz_logo.png'; 


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white w-full py-8">
      <div className="max-w-7xl mx-auto px-4 flex">
        
        <div className="flex flex-wrap justify-between items-center">
          
          <div className="bg-red-400 w-full md:w-auto">
            <img src={Logo} alt="Logo" className="w-32" />
          </div>    

         <div className='flex flex-col'>
          <div className="flex space-x-6 px-10">
            <a href="/" className="hover:text-gray-400">Home</a>
            <a href="/team" className="hover:text-gray-400">Team</a>
            <a href="/games" className="hover:text-gray-400">Upcoming Games</a>
            <a href="/about" className="hover:text-gray-400">About</a>
          </div>

          
        

        <div className=" text-center">
          <h2 className="text-lg font-bold">Our Sponsors</h2>
          <div className="flex justify-center space-x-6 mt-4">
            <img src="/path/to/sponsor1.png" alt="Sponsor 1" className="h-12" />
            <img src="/path/to/sponsor2.png" alt="Sponsor 2" className="h-12" />
            <img src="/path/to/sponsor3.png" alt="Sponsor 3" className="h-12" />
          </div>
          </div>
        </div>
        </div>
      </div>

      <div className=" text-center text-sm   text-gray-400">
        &copy; {new Date().getFullYear()} MMU Stomerz. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
