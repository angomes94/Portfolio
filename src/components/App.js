import {useEffect, useState} from "react";
import { motion } from "framer-motion";
import Header from "./Header";
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
    </div>
  );
}

export default App;
