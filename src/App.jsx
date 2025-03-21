import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";
import './index.css';
import './styles/pageone.css';
import './styles/pagetwo.css';
import './styles/pagethree.css';
import './styles/pagefour.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page/1" element={<PageOne />} />
        <Route path="/page/2" element={<PageTwo />} />
        <Route path="/page/3" element={<PageThree />} />
        <Route path="/page/4" element={<PageFour />} />
      </Routes>
    </div>
  );
};

export default App;
