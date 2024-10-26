import React from 'react';
import GamePlay from "../Assets/Videos/gameplay.mp4";
import Pitch from "../Assets/pitch.jpg";

const About: React.FC = () => {
  return (
    <div className='h-full w-full  bg-slate-200'>
<div className='max-w-7xl mx-auto' >
      <div className='mb-5'>
        <h2 className='text-center text-3xl font-bold text-red-500 py-10'>All About The Game</h2>
      </div>
          
      <div className='h-96 w-full '>
        <video
          className='w-full h-96 mt-10 object-contain playsInline aspect-video' 
          
          src={GamePlay} autoPlay loop controls
        />
      </div>

      <div className=' flex flex-row h-96 w-full text-center py-10 gap-10 '>
        <div className='w-1/2 p-10 shadow-lg'>
        <p className='italic font-bold mb-5 text-2xl'>What is softball and how is it played?</p>
        <p>The game is played by nine players, either on defense or offense. <br/>
          The team on offense lines up a team of nine players where each one steps <br/>
          into the batting box one at a time to batt.<br/>
        The defense arranges themselves in their respective positions to field <br/>
        the ball being pitched by their pitcher and batted by the offense player.</p>
      </div>
      <div className=' shadow-lg p-10'>
          <p className='italic font-bold mb-5 text-2xl'>How does a team win or loses a game?</p>
          <p>
          The defending team has to take down three players from the offense team <br/>
          while preventing runs (offense player reaching home plate after batting <br/>
          the ball and not eliminated). <br/>
          The Team with the most runs after the innings are completed(One inning is <br/>
          a round of the teams fielding and batting) wins the game.
          </p>
      </div>
      </div>
      <div className='h-full w-full py-4'>
        <p className='text-center font-bold text-3xl italic py-7'>The Play Ground</p>
        <div className='flex flex-row gap-20'>
        <div className='ml-2 py-6 h-96 w-1/2'>
          <img
          className='h-full w-full'
          src={Pitch} alt='pitch' />
        </div>
         <div className='w-1/3 p-8 shadow-lg py-8 mt-5 '>
            <p className='mb-4 font-bold text-2xl'>How many positions are there for each game?  </p>

            <p className='text-xl'> The game has nine positions: </p>
            <ul className='list-inside mt-4 pl-10'>
                  <li> Pitcher </li>
                  <li> Catcher </li>
                  <li> First Baseman </li>
                  <li> Second Baseman </li>
                  <li> Short Stop </li>
                  <li> Third Baseman </li>
                  <li> Right Outfielder </li>
                  <li> Center Outfielder </li>
                  <li> Left Outfielder </li>
            </ul>      

         </div>
         </div>
         <div className='py-10'>
       <p className='text-center text-2xl italic'>  Softball is a fun and interactive game which requires both physical and <br/>
         mental prowess to play. Play or be a fan to enjoy. </p>
          </div>
        
      </div>
      </div>
    </div>
  );
};

export default About;
