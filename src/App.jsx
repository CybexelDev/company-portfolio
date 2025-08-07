import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import Expertise from "./sections/Expertise";
import About from "./sections/About";
import Work from "./sections/Work";
import Home from "./sections/Home";

function App() {

 
 


  return (
    <div className="font-jakarta text-black scroll-smooth">
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;
