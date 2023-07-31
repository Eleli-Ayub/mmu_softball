import { Player_I } from "../../Interfaces";
function Player({ image, j_number, name, position }: Player_I) {
  return (
    <div className=" relative w-full lg:h-full px-3 lg:mb-0 mb-10">
      <img src={image} className="rounded-lg w-full h-full object-cover" />
      <div className="absolute bottom-3 right-5 bg-lightblack/70 w-1/3 h-fit rounded-md p-2">
        <h2 className="name">
          <b>{name}</b>
        </h2>
        <p>
          <i>{position}</i>
        </p>
        <h2>
          <b>{j_number}</b>
        </h2>
      </div>
    </div>
  );
}

export default Player;
