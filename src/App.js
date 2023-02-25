import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"


export default function App() {
  return (
    <div className=" w-full bg-cream overflow-x-hidden">
    <Header/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  )
}
