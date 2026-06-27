import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import "./index.css";

import Home from "./components/home";
import Features from "./pages/features";
import About from "./pages/about";
import Pricing from "./pages/pricing";
import Feedback from "./pages/feedback";
import Section from "./pages/section";

function App() {
  return <>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      
    </BrowserRouter>


    
    

  </>
}

export default App;