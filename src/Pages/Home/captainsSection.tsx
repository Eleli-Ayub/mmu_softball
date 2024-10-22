import Cap from "../../Assets/Players/Ayub.jpg";
import Ass from '../../Assets/Players/Mirriam.jpg';

const CaptainsSection:React.FC = () => {
  return (
    <div className=" flex flex-col h-full w-full max-w-7xl mx-auto mb-3">
      <p className="text-center text-4xl font-bold text-slate-700 pb-4">Head Captains</p>
      <div className="flex h-full w-full justify-center gap-36 py-10 px-5">
        <div>
        <img 
        className="h-80 w-96 rounded-2xl shadow-gray-100 "
        src={Cap} alt="Eleli"
        /> 
      <p className="">
          Name: <strong className="italic"> Eleli Ayub </strong> <br/>
          Role: Head Mens Team

        </p>  
     </div> 
        <div>
        <img 
        className="h-80  w-96 rounded-2xl shadow-gray-100"
        src={Ass} alt="miriam"
        />
          <p>
          Name: <strong className="italic">Miriam Edung </strong> <br/> 
          Role: Head Mens Team

        </p>
        </div>
      </div>
    </div>
  )
}

export default CaptainsSection;