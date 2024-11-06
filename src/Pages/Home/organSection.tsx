import Coach from "../../Assets/coach_frank.jpg";

const OrganSection:React.FC = () => {
  return (
    <div className="h-full w-full max-w-7xl  flex justify-center py-10">
      <div>
      <p className="text-center md:text-4xl text-2xl text-slate-700 font-bold mb-5 md:mb-10">Organization and Leadership</p>
      <div className="flex gap-4 md:gap-10  ">

        <div className="w-1/2 flex flex-col items-start justify-start  ">
        <p className=" font-bold text-slate-700 md:text-2xl text-xl mb-2">Head Coach</p>
        <img className="rounded-full md:h-96 w-fit " 
        src={Coach} alt="coach" />
      </div>

      <div className="w-1/2 flex justify-start py-10 ">
        <p className="gap-y-1 sm:text-sm flex flex-col">
         <strong className="italic"> Name: </strong>   
          Frank Karugu <br/>
          <strong className="italic sm:text-sm">Title</strong>  Head Coach <br/>
          <strong className="italic sm:text-sm">Profile</strong> 
          Mr. Frank Karugu is the head coach of both teams <span className="font-bold">(Baseball5 and 
          Softball) </span> He is in charge or recruiting, training, and preparing the team <br/>
          for upcoming fixtures.
          Mr. Frank also holds other titles such as; Head of games and sports in <br/>
          Multimedia University, The president of the Softball Federation in Kenya, <br/>
          and lastly the secretary general of the African Softball Federation.
        </p>
      </div>
      </div>
      </div>
      </div>
  )
}

export default OrganSection;