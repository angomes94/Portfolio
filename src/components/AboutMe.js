import React from "react";
import Portrait from "../images/portrait.jpg"

function AboutMe() {
    return (
        <div id="aboutme" className="about-me-container">
        <div className="about-me-wrapper">
            <div className="about-me-text">
                <h4 className="font-roboto-condensed-bold">About Me</h4>
                <p className="font-roboto-condensed-regular">Hi! My name is André and I've been programming since 2013, first I started
                    coding microcontrollers and building 3D led cubes and other electronic projects
                    both in school, at work and some personal projects too. I can build . I always
                    had a big interest in tech and writing code is one of the lowest barrier ways to
                    get creative and build things
                </p>               
            </div>
            <div className="space">
                </div>
            <img className="img-portrait" src={Portrait} alt="portrait"/>
            </div>
        </div>
    );

}

export default AboutMe;