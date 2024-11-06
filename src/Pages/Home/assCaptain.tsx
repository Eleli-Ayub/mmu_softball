import Ass1 from "../../Assets/Players/Nakeel.jpg";
import Ass2 from '../../Assets/Players/Natasha.jpg';
import Ass3 from '../../Assets/Players/Anto.jpg'

const AssCaptainsSection:React.FC = () => {
  return (
    <div className=" flex flex-col h-full w-full max-w-7xl mx-auto mb-3">
      <p className="text-center text-2xl md:text-4xl font-bold text-slate-700 pb-2 md:pb-4">Assistant Captains</p>
      <div className="flex flex-wrap md:flex-nowrap h-full w-full justify-between space-y-5 md:space-y-0 gap-2 md:gap-14 py-5 md:py-10 px-5">
        <div>
        <img 
        className="md:h-80 h-56 w-80 object-cover rounded-2xl shadow-gray-100 "
        src={Ass1} alt="Eleli"
        /> 
      <p className="sm:text-sm">
          Name: <strong className="italic"> Lilian Nakeel </strong> <br/>
          {/* Role: Head Mens Team */}

        </p>  
     </div> 
        <div>
        <img 
        className="md:h-80 h-56 w-80 rounded-2xl shadow-gray-100"
        src={Ass2} alt="miriam"
        />
          <p>
          Name: <strong className="italic">Natasha Kedo </strong> <br/> 
          {/* Role: Head Mens Team */}

        </p>
        </div>
        <div>
        <img 
        className="md:h-80  w-80 rounded-2xl shadow-gray-100"
        src={Ass3} alt="miriam"
        />
          <p>
          Name: <strong className="italic">Antonicsm </strong> <br/> 
          {/* Role: Head Mens Team */}

        </p>
        </div>
      </div>
    </div>
  )
}

export default AssCaptainsSection;