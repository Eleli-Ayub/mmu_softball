 import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import Hero from './Pages/Home/heroSection';
import Header from '../src/Components/header';
import Footer from '../src/Components/footer';
import Team from "./Pages/team";
import About from "./Pages/about";
import Game from "./Pages/game";
import "./main";


         

function App() {
  
  return (
<div className=' bg-slate-50'>
    
     <BrowserRouter> 
       <Header/>
          <Routes>                
            <Route path='/' element={<Hero />} />
            <Route path="/Team" element={<Team/>} />     
           <Route path="/About" element={<About/>} />
           <Route path="/Game" element={<Game/>} />
          </Routes>
         <Footer/>
      </BrowserRouter> 
      </div>
      
  )
}

export default App
