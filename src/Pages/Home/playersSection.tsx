import { Players } from "../../Assets/Players";
import { useState } from "react";

const PlayersSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const angle = 360 / Players.length;

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="h-full w-full  flex flex-col items-center  relative mb-20">
      <p className="text-center text-4xl font-bold text-black mb-10 ">Players</p>

      <div
        className="relative  w-64 h-96"
        style={{
          perspective: "3000px", 
        }}
      >
        <div
          className="absolute inset-0 transform-gpu"
          style={{
            transform: `rotateY(${activeIndex * -angle}deg)`,
            transformStyle: "preserve-3d",
            transition: "transform 1s ease-in-out",
          }}
        >
          {Players.map((player, index) => (
            <div
              key={player.id}
              className="absolute flex flex-col top-10 left-5  w-56 h-72  items-center justify-center transition-transform duration-800"
              style={{
                transform: `rotateY(${index * angle}deg) translateZ(600px)`, 
              }}
              onClick={() => handleClick(index)}
            >
              <img
                src={player.image}
                alt={`Player ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"

              />
              {player.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayersSection;
