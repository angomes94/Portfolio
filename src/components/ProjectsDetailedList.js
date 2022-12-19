// CarouselElements.jsx
import React from "react";
import ProjectPage from "./ProjectPage";

// Define an array of data for the carousel elements
const data = [
    {
        title: "MusicPad",
        description: "Music Pad was an hobbie Android project that I made in 2015 with Android Studi" +
                "o using Java and XML. The user could play the default sounds but also upload o" +
                "r record new ones, key color and hints were also costumaizible",
        img1: "../images/MusicPad_img1.jpg",
        img2: "../images/MusicPad_img2.jpg",
        img3: "../images/MusicPad_img3.jpg",
        img4: "../images/MusicPad_img4.jpg"
    }, {
        title: "LedCube 8x8x8",
        description: "This project I made while at school, I built and coded it all by myself, I use" +
                "d PIC microtrollers and wrote impressive 3D animations in C programing languag" +
                "e, the cube cube allowed me to control 512 LED's using only 72 outputs",
        img1: "../images/LedCube_img1.jpg",
        img2: "../images/LedCube_img2.jpg",
        img3: "../images/LedCube_img3.jpg",
        img4: "../images/LedCube_img4.jpg"
    }, {
        title: "LedCube 4x4x4",
        description: "Made this cube as an hobie this was an improved version of the previus cube al" +
                "though smaller its was better built and also using better coding practices",
        img1: "../images/LedCube_img1.jpg",
        img2: "../images/LedCube_img2.jpg",
        img3: "../images/LedCube_img3.jpg",
        img4: "../images/LedCube_img4.jpg"
    }

];

// Use the map method to create the elements dynamically
const elements = data.map(item => (
    <ProjectPage
        title={item.title}
        description={item.description}
        img1={item.img1}
        img2={item.img2}
        img3={item.img3}
        img4={item.img4}/>
));

// Export the elements as an array
export default elements;
