import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Tool,
  Works,
  StarsCanvas,
  Sidebar,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <StarsCanvas />
        <div>
          <Sidebar />
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        <Tech />
        {/* <Tool /> */}
        <Works />
        {/* <Feedbacks /> */}
        <div className="absolte z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
