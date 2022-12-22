const dataExpandableCard = [
    {
        id: 0,
        date:" - 2013",
        title: "LedCube 8x8x8",
        description: "This project I made while at school, I built and coded it all by myself, I use" +
                "d PIC microtrollers and wrote impressive 3D animations in C programing languag" +
                "e, the cube cube allowed me to control 512 LED's using only 72 outputs",
        img1: require("../images/LedCube_img1.jpg"),
        img2: require("../images/LedCube_img2.jpg"),
        img3: require("../images/LedCube_img3.jpg"),
        img4: require("../images/LedCube_img4.jpg")
    }, {
        id: 1,
        date:" - 2014",
        title: "LedCube 4x4x4",
        description: "Made this cube as an hobie this was an improved version of the previus cube al" +
                "though smaller its was better built and also using better coding practices",
        img1: require("../images/LedCube4_img1.png"),
        img2: require("../images/LedCube4_img2.jpeg"),
        img3: require("../images/LedCube4_img3.jpeg"),
        img4: require("../images/LedCube4_img4.jpeg")
    }, {
        id: 2,
        date:" - 2015/2017",
        title: "HV Capacitors Test Bech",
        description: "Test bench used for aeging HV capcitors for assessing quality and resilienceus" +
                "ing temp HV and cicles to stress them tf out",
        img1: require("../images/TestBed_img1.jpg"),
        img2: require("../images/TestBed_img2.jpg"),
        img3: require("../images/TestBed_img3.jpg"),
        img4: require("../images/TestBed_img4.jpg")
    }, {
        id: 3,
        date:" - 2016",
        title: "Remote control panel",
        description: "Panel coded in labview for remote distance survallianceusing temp HV and cicle" +
                "s to stress them tf out",
        img1: require("../images/LabView_img1.jpg"),
        img2: require("../images/LabView_img2.jpg"),
        img3: require("../images/LabView_img3.jpg"),
        img4: require("../images/LabView_img4.jpg")
    }, {
        id: 4,
        date:" - 2016",
        title: "Step Motor Interface",
        description: "Setp motor used to control a three phae variac at safe distance",
        img1: require("../images/StepMotor_img1.jpg"),
        img2: require("../images/StepMotor_img2.jpg"),
        img3: require("../images/StepMotor_img3.jpg"),
        img4: require("../images/StepMotor_img4.jpg")
    }, {
        id: 5,
        date:" - 2017",
        title: "Active Filters",
        description: "Huge project took me fucking 12 months to finish because my fucking team mates" +
                " didn't know shit",
        img1: require("../images/ActiveFilter_img1.jpg"),
        img2: require("../images/ActiveFilter_img2.jpg"),
        img3: require("../images/ActiveFilter_img3.jpg"),
        img4: require("../images/ActiveFilter_img4.jpg")
    }, {
        id: 6,
        title: "MusicPad",
        date:" - 2017",
        description: "Music Pad was an hobbie Android project that I made in 2015 with Android Studi" +
                "o using Java and XML. The user could play the default sounds but also upload o" +
                "r record new ones, key color and hints were also costumaizible",
        img1: require("../images/MusicPad_img1.jpg"),
        img2: require("../images/MusicPad_img2.jpg"),
        img3: require("../images/MusicPad_img3.jpg"),
        img4: require("../images/MusicPad_img4.jpg")
    }, {
        id: 7,
        title: "Smart Motor Home",
        date:" - 2019",
        description: "raspberry pi made for my RV it was supper cool and worked great until that old" +
                " guy boght it from me and fucked it up o using Java and XML. The user could pl" +
                "ay the default sounds but also upload or record new ones, key color and hints " +
                "were also costumaizible",
        img1: require("../images/MotorHome_img1.jpg"),
        img2: require("../images/MotorHome_img2.jpg"),
        img3: require("../images/MotorHome_img3.jpg"),
        img4: require("../images/MotorHome_img4.jpg")
    }, {
        id: 8,
        date:" - 2020/2022",
        title: "Automated Tarding Algorithms",
        description: " trading bot until margin callo using Java and XML. The user could play the de" +
                "fault sounds but also upload or record new ones, key color and hints were also" +
                " costumaizible",
        img1: "../images/MusicPad_img1.jpg",
        img2: "../images/MusicPad_img2.jpg",
        img3: "../images/MusicPad_img3.jpg",
        img4: "../images/MusicPad_img4.jpg"
    }

];

const dataProjectCell = [
    {
        id: 0,
        title: "Led Cube 8x8x8",
        intro: "Led Cube with 512Led's programed in C to create 3D animations"
    }, {
        id: 1,
        title: "Led Cube 4x4x4",
        intro: "Portable batery powered Led Cube with 64Led's programed in C to create 3D anim" +
                "ations"
    }, {
        id: 2,
        title: "HV Capacitors Test Bech",
        intro: "3 HV converters using a mix of DC + AC voltage to stress test HV capacitors"
    }, {
        id: 3,
        title: "Remote control panel",
        intro: "Control panel used to view a variety of charts updated in realtime using Labvi" +
                "ew"
    }, {
        id: 4,
        title: "Step Motor Interface",
        intro: "Remote controled Step Motor interface using PWM signals to turn a 3-phase HV v" +
                "aric"
    }, {
        id: 5,
        title: "Active Filters",
        intro: "High frequency Voltage filters to atenuate voltage noise"
    }, {
        id: 6,
        title: "MusicPad",
        intro: "Android App that simulates a DJ Music Pad built using Java and XML"
    }, {
        id: 7,
        title: "Smart Motor Home",
        intro: "Solar system and battery bank full controled by Raspberry pi"
    }, {
        id: 8,
        title: "Automated Tarding Algorithms",
        intro: "Complex trading algorithms programed in MQL4"
    }
];

export {
    dataExpandableCard,
    dataProjectCell
};