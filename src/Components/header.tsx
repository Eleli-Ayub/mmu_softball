import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../Assets/stomerz_logo.png";


const Header:React.FC = () => {
  return (
    <div className='w-full  h-20 top-0 left-0 z-50 bg-slate-300'>
    <nav className= 'flex items-center justify-between w-full max-w-7xl mx-auto px-4'>
      
       <div className='bg-red-200 '>
                <img className='w-32 h-20'
                src={Logo}  alt="stomerz logo"/>
       </div>
       <div className="flex space-x-6 items-center">
          <Link to="/" className="text-red-600 font-bold text-xl hover:text-pink-500">
            Home
          </Link>
          <Link to="/Team" className="text-red-600 font-bold text-xl hover:text-pink-500">
            Team
          </Link>
          <Link to="/games" className="text-red-600 font-bold text-xl hover:text-pink-500">
            Upcoming Games
          </Link>
          <Link to="/About" className="text-red-600 font-bold text-xl hover:text-pink-500">
            About
          </Link>
        </div>
      
                    
        
    </nav>
    </div>
  )
}

export default Header;