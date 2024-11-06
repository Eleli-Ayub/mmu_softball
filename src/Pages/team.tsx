 import { Button } from "@mui/material";
import { Mplayers } from "../Assets/Players";
 import { Fplayers } from "../Assets/Players";
 import { useNavigate } from "react-router-dom";
 //import { useState } from "react"

const Team:React.FC = () => {
  const navigate = useNavigate();

  const click = () => {
       navigate('/All/Female');
  }

  const handleClick = () => {
    navigate('/All/Male');
}
  

  return (


    <div className="h-full w-full max-w-7xl mx-auto  ">
     
        <div className="border border-slate-200 rounded-lg mt-5 mb-5  ">
          <p className="text-center py-2 md:py-4">The Men's Team</p>
          <div className="grid grid-cols-2 gap-2 px-5 h-fit w-full md:gap-3 md:grid-cols-6 ">
         
            {Mplayers.map((mplayer) => (          
              <div key={mplayer.id}
                  className="md:h-66 h-56 md:w-52 w-46 p-4  flex flex-col border border-gray-300 rounded-lg shadow-lg items-center justify-center">                    
                  <img 
                  src={mplayer.image}
                  alt="MalePlayer"
                  className="w-full h-full object-cover rounded-lg"
                  />
                  {mplayer.name}  
               </div>
             ))}
             <Button onClick={handleClick}
              className="w-28 h-10 pt-3 hover:bg-slate-200" >View All</Button>
          </div>
         </div>

         <div className="borderborder-slate-200 rounded-lg mb-5  ">
         <p className="text-center py-4">The Women's Team</p>
          <div className="grid grid-cols-2 gap-2 px-5 h-fit w-full md:gap-3 md:grid-cols-6">
            {Fplayers.map((fplayer) => (
              <div key={fplayer.id}
              className="md:h-66 h-56 md:w-52 w-46 p-4 flex flex-col border border-gray-300 rounded-lg shadow-lg items-center justify-center">
                <img
                src={fplayer.image}
                alt="FemalePLayer"
                className="w-full h-full object-cover rounded-lg"
                 />
                 {fplayer.name}
             </div>
            ))}
            <Button onClick={click} 
            className="w-36 h-10 pt-3 hover:bg-slate-200" >View All </Button>
          </div>
        </div>
    </div>
    


    
  );
}

export default Team;
