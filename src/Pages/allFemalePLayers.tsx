import { Link } from "react-router-dom";
import { AllFemale } from "../Assets/Players"

const AllFemalePlayers:React.FC = () => {

    return (
  
  
      <div className="h-full w-full max-w-7xl mx-auto  ">
       
          <div className="border   border-slate-200 rounded-lg mt-5 mb-5  ">
          <Link to="/Team" className="text-blue-500 px-5" >
            go back
        </Link>

            <p className="text-center py-4">The Women's Team</p>
            <div className="flex flex-wrap px-5 h-fit pb-2 w-full space-x-4">
           
              {AllFemale.map((Afemale) => (          
                <div key={Afemale.id}
                    className="h-72 w-72 p-4 flex flex-col border border-gray-300 rounded-lg shadow-lg items-center justify-center">                    
                    <img 
                    src={Afemale.image}
                    alt="MalePlayer"
                    className="w-full h-full object-cover rounded-lg"
                    />
                    {Afemale.name}  
                 </div>
               ))}
              
            </div>
           </div>
  
      </div>
      
    );
  }
  
  export default AllFemalePlayers;
  