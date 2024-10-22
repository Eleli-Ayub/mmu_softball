import Coach from "../../Assets/coach_frank.jpg";

const OrganSection:React.FC = () => {
  return (
    <div className="h-full w-full max-w-7xl  flex justify-center py-10">
      <div>
      <p className="text-center text-4xl text-slate-700 font-bold mb-10">Organization and Leadership</p>
      <div className="flex gap-10 ">

        <div className="w-1/2 flex flex-col items-start justify-start  ">
        <p className=" font-bold text-slate-700 text-2xl mb-2">Head Coach</p>
        <img className="rounded-full h-96 w-fit " 
        src={Coach} alt="coach" />
      </div>

      <div className="w-1/2 flex justify-start py-10 ">
        <p className="gap-y-1 flex flex-col">
         <strong className="italic"> Name: </strong>   
          Frank Karugu <br/>
          <strong className="italic">Title</strong>  Head Coach <br/>
          <strong className="italic">Profile</strong> 
          Mr. Frank Karugu is the h2ad coach of both teams <span className="font-bold">(Baseball5 and 
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