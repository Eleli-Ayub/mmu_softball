 import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import Hero from './Pages/Home/heroSection';
import Header from '../src/Components/header';
import Footer from '../src/Components/footer';
import Team from "./Pages/team";
import About from "./Pages/about";

         

function App() {
  
  return (

    
     <BrowserRouter> 
       <Header/>
          <Routes>                
            <Route path='/' element={<Hero />} />
           {/* <Route path="/Team" element={<Team/>} />     */}
           <Route path="/About" element={<About/>} />
          </Routes>
         <Footer/>
      </BrowserRouter> 
      
  )
}

export default App
