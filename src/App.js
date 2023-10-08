import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Education from "./Components/Education";
import Contact from "./Components/Contact"
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
