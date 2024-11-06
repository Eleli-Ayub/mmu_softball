import Cap from "../../Assets/Players/Ayub.jpg";
import Ass from '../../Assets/Players/Mirriam.jpg';

const CaptainsSection:React.FC = () => {
  return (
    <div className=" flex flex-col h-full w-full max-w-7xl mx-auto mb-1 md:mb-3">
      <p className="text-center text-2xl md:text-4xl font-bold text-slate-700 pb-2 md:pb-4">Head Captains</p>
      <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 h-full w-full justify-between py-10 px-5">
        <div className="">
        <img 
        className="-80 w-96 rounded-2xl shadow-gray-100 "
        src={Cap} alt="Eleli"
        /> 
      <p className="sm:text-sm">
          Name: <strong className="italic sm:text-sm"> Eleli Ayub </strong> <br/>
          Role: Head Men's Team

        </p>  
     </div> 
        <div>
        <img 
        className="h-80 w-96 rounded-2xl shadow-gray-100"
        src={Ass} alt="miriam"
        />
          <p>
          Name: <strong className="italic sm:text-sm">Miriam Edung </strong> <br/> 
          Role: Head Women's Team

        </p>
        </div>
      </div>
    </div>
  )
}

export default CaptainsSection;