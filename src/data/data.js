const dataExpandableCard = [
    {
        id: 0,
        date:" - 2013",
        title: "LED Cube 8x8x8",
        description: "This project I made while at school, I built and coded it all by myself, I used" +
                " PIC Microcontroller and wrote impressive 3D animations in C programing language" +
                ", the cube cube allowed me to control 512 LED's using only 72 outputs due to it's geometric design",
        img1: require("../images/LedCube_img1.jpg"),
        img2: require("../images/LedCube_img2.jpg"),
        img3: require("../images/LedCube_img3.jpg"),
        img4: require("../images/LedCube_img4.jpg")
    }, {
        id: 1,
        date:" - 2014",
        title: "LED Cube 4x4x4",
        description: "Made this cube as a hobie this was an improved version of the previus cube al" +
                "though smaller its was better built and also using better coding practices," +
                " was also coded in C and using PIC Microcontrollers",
        img1: require("../images/LedCube4_img1.png"),
        img2: require("../images/LedCube4_img2.jpeg"),
        img3: require("../images/LedCube4_img3.jpeg"),
        img4: require("../images/LedCube4_img4.jpeg")
    }, {
        id: 2,
        date:" - 2015/2017",
        title: "HV Capacitors Test Bench",
        description: "Test bench used for aeging HV capcitors for assessing quality and dielectric integrety," +
                "3 HV Converters creating deep dischanging cicles with specific wave forms with both DC and AC current,"+
                " in order to simulate harsh operating conditions, Temperature was also used as a stress factor." +
                " results were used to select the best technology and brands to use on Main Converters that supplied LHC magnets",
        img1: require("../images/TestBed_img1.jpg"),
        img2: require("../images/TestBed_img2.jpg"),
        img3: require("../images/TestBed_img3.jpg"),
        img4: require("../images/TestBed_img4.jpg")
    }, {
        id: 3,
        date:" - 2016",
        title: "Remote Control Panel",
        description: "Panel programed in Labview for remote control and survalliance, this project was built using NI modular DAQ's" + 
        "and Labview to plot dozens of diferent analog signals and record events",
        img1: require("../images/LabView_img1.jpg"),
        img2: require("../images/LabView_img2.jpg"),
        img3: require("../images/LabView_img3.jpg"),
        img4: require("../images/LabView_img4.jpg")
    }, {
        id: 4,
        date:" - 2016",
        title: "Step Motor Interface",
        description: "Step motor controled by PWM signal used to turn a 3-phase varic under heavy EMF noise enviroment, " + 
                    "project was completly done by me from design to instalattion, using various well known practices like Mu-Metal shielding" +
                    " and common mode filters as well as in-board optocouplers to perform well under any condition",
        img1: require("../images/StepMotor_img1.jpg"),
        img2: require("../images/StepMotor_img2.jpg"),
        img3: require("../images/StepMotor_img3.jpg"),
        img4: require("../images/StepMotor_img4.jpg")
    }, {
        id: 5,
        date:" - 2017",
        title: "Active Filters",
        description: "High frequency Active Filters used as an add on to improve LCH super conducting-magnets voltage quality " +
                "I was in charge of building and testing dozens of these units, from isolation tests to operating temperatures under diferent loads" + 
                " to also various performance requeriments",
        img1: require("../images/ActiveFilter_img1.jpg"),
        img2: require("../images/ActiveFilter_img2.jpg"),
        img3: require("../images/ActiveFilter_img3.jpg"),
        img4: require("../images/ActiveFilter_img4.jpg")
    }, {
        id: 6,
        title: "MusicPad",
        date:" - 2017",
        description: "Music Pad was an hobbie Android project that I made in 2015 with Android Studio" +
                "it was built in Java and XML. The user could play the default sounds but also upload" +
                " or record new ones, key color and hints were also costumaizible",
        img1: require("../images/MusicPad_img1.jpg"),
        img2: require("../images/MusicPad_img2.jpg"),
        img3: require("../images/MusicPad_img3.jpg"),
        img4: require("../images/MusicPad_img4.jpg")
    }, {
        id: 7,
        title: "Smart Motor Home",
        date:" - 2019",
        description: "I turned an old Motor Home into a 6KW power house using deep cycle AGM bateries supplied by policristalin solar panels" +
                " though a MPPT solar controler and finally delivered with a pure sine wave 1500W inverter." +
                " everything was routed into a Raspberry Pi that displayed all the stats on a GUI using a touch screen, this GUI" +
                " also alowed te control of some appliances inside the Motor Home, the GUI was programed using Phyton and collected some stats on power usage over time",
        img1: require("../images/MotorHome_img1.jpg"),
        img2: require("../images/MotorHome_img2.jpg"),
        img3: require("../images/MotorHome_img3.jpg"),
        img4: require("../images/MotorHome_img4.jpg")
    }, {
        id: 8,
        date:" - 2020/2022",
        title: "Trading Algorithms",
        description: "Started designing trading bots as an hobbie for myself and friends and it grew to a couple dozen clients," +
                "trading bots were mainly programed inside Metatrader 4 using MQL4 which as a sintax similar to C++ ",
        img1: "../images/MusicPad_img1.jpg",
        img2: "../images/MusicPad_img2.jpg",
        img3: "../images/MusicPad_img3.jpg",
        img4: "../images/MusicPad_img4.jpg"
    }

];

const dataProjectCell = [
    {
        id: 0,
        title: "LED Cube 8x8x8",
        intro: "LED Cube with 512LED's programed in C to create 3D animations"
    }, {
        id: 1,
        title: "LED Cube 4x4x4",
        intro: "Portable batery powered LED Cube with 64LED's programed in C to create 3D animations" 
    }, {
        id: 2,
        title: "HV Capacitors Test Bench",
        intro: "3 HV converters using a mix of DC + AC voltage to stress test HV capacitors"
    }, {
        id: 3,
        title: "Remote Control Panel",
        intro: "Control panel used to view a variety of charts updated in realtime using Labview"
    }, {
        id: 4,
        title: "Step Motor Interface",
        intro: "Remote controled Step Motor interface using PWM signals to turn a 3-phase variac",
    }, {
        id: 5,
        title: "Active Filters",
        intro: "High frequency Ative Filters to atenuate voltage noise"
    }, {
        id: 6,
        title: "MusicPad",
        intro: "Android App that simulates a DJ Music Pad built using Java and XML"
    }, {
        id: 7,
        title: "Smart Motor Home",
        intro: "Solar system and battery bank fully monitured by Raspberry pi"
    }, {
        id: 8,
        title: "Trading Algorithms",
        intro: "Complex trading algorithms programed in MQL4"
    }
];

export {
    dataExpandableCard,
    dataProjectCell
};