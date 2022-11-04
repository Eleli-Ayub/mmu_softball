import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Team from "./Pages/Team";
import Games from "./Pages/Games";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Bottom_navbar from "./Components/Bottom_navbar";

function App() {
  return (
    <div className="bg-slate-100">
      <Router>
        <Header />
        <Bottom_navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
