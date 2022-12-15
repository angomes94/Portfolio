import React from "react";

const data = [
  {
    id:0,
    title: "Led Cube 8x8x8",
    intro: "Led Cube with 512Led's programed in C to create 3D animations"
  },
  {
    id:1,
    title: "Led Cube 4x4x4",
    intro: "Portable batery powered Led Cube with 64Led's programed in C to create 3D animations"
  },
  {
    id:2,
    title: "HV Capacitors Test Bech",
    intro: "3 HV converters using a mix of DC + AC voltage to stress test HV capacitors"
  },
  {
    id:3,
    title: "Remote control panel",
    intro: "Control panel used to view a variety of charts updated in realtime using Labview"
  },
  {
    id:4,
    title: "Step Motor Interface",
    intro: "Remote controled Step Motor interface using PWM signals to turn a 3-phase HV varic"
  },
  {
    id:5,
    title: "Active Filters",
    intro: "High frequency Voltage filters to atenuate voltage noise"
  },
  {
    id:6,
    title: "MusicPad",
    intro: "Android App that simulates a DJ Music Pad built using Java and XML"
  }, 
  {
    id:7,
    title: "Smart Motor Home",
    intro: "Solar system and battery bank full controled by Raspberry pi"
  },
  {
    id:8,
    title: "Automated Tarding Algorithms",
    intro: "Complex trading algorithms programed in MQL4"
  }
];



const ProjectsIntro = data.map(project => (
  <div key={project.id} className="project-cell">
    <h1 className="project-title font-roboto-bold">
      {project.title}
    </h1>
    <p className="project-intro font-montserrat-extralight"> {project.intro}</p>
  </div>
));


function ProjectsIntroWrapper() {
  return (
    <React.Fragment>
      {ProjectsIntro}
    </React.Fragment>
  );
}


export default ProjectsIntroWrapper;