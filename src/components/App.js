import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import Frontpage from "./Frontpage";
import AboutMe from "./AboutMe";
import Projects from "./ProjectsIntro";

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
