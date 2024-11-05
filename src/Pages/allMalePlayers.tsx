
import { Link } from "react-router-dom";
import { AllMale } from "../Assets/Players"

const AllMalePlayers:React.FC = () => {

    return (
  
  
      <div className="h-full w-full max-w-7xl mx-auto  ">
        
  
           <div className="border   border-slate-200 rounded-lg mt-5 mb-5  ">

           <Link to="/Team" className="text-blue-500 px-5" >
            go back
        </Link>

           <p className="text-center py-4">The Men's Team</p>
            <div className="flex flex-wrap  px-5 pb-2 w-full space-x-4">
              {AllMale.map((Amale) => (
                <div key={Amale.id}
                className="h-72 w-72 p-4 flex flex-col border border-gray-300 rounded-lg shadow-lg items-center justify-center">
                  <img
                  src={Amale.image}
                  alt="FemalePLayer"
                  className="w-full h-full object-cover rounded-lg"
                   />
                   {Amale.name}
               </div>
              ))}
             
            </div>
          </div>
      </div>
      
  
  
      
    );
  }
  
  export default AllMalePlayers;
  