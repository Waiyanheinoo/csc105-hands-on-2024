import React from "react";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <AboutMe />
      <Gallery />
    </div>
  );
};

export default App;
