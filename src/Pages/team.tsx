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
     
        <div className="border   border-slate-200 rounded-lg mt-5 mb-5  ">
          <p className="text-center py-4">The Men's Team</p>
          <div className="flex flex-row  px-5 h-fit pb-2 w-full space-x-4">
         
            {Mplayers.map((mplayer) => (          
              <div key={mplayer.id}
                  className="h-66 w-56 p-4  flex flex-col border border-gray-300 rounded-lg shadow-lg items-center justify-center">                    
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

         <div className="border   border-slate-200 rounded-lg mb-5  ">
         <p className="text-center py-4">The Women's Team</p>
          <div className="flex flex-row  px-5 pb-2 w-full space-x-4">
            {Fplayers.map((fplayer) => (
              <div key={fplayer.id}
              className="h-72 w-72 p-4 flex flex-col border border-gray-300 rounded-lg shadow-lg items-center justify-center">
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
