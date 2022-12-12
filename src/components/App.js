import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import Frontpage from "./Frontpage";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

function App() {
  return (
    <div>
     <Header/>
     <Frontpage/>
     <AboutMe/>
     <Projects/>
     <Footer/>
    </div>
  );
}

export default App;
