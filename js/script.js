
// Create an array for animation which will turn into a loop
for(let i= 0; i<44; i++){
    document.querySelector('#Animation-container')
}
const allDivsAnime = document.querySelectorAll('#container div');


const divAnimation =[ {
    targets: '#Head1',
    borderRadius: '50%',
    scale: 5,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor:'hsl(0,50%, 70%)'},
        // { translateY: '0px', translateX: '200px', backgroundColor:'hsl(200,50%,70%)'},
        { translateY: '40px', translateX: '50px', backgroundColor:'hsl(60, 100%, 50%)'},
        { translateY: '23vh', translateX: '22vw', backgroundColor: 'hsl(0, 0%, 100%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeOutBack',
    rotate: '1080deg',
    // border: '1px solid rgb(255, 255, 255)',
    autoplay: false,
},

{
    targets: '#Head2',
    borderRadius: '50%',
    scale: 5,
    keyframes: [
        // { translateY: '100px', translateX: '100px', backgroundColor:'hsl(0,50%, 70%)'},
        // { translateY: '0px', translateX: '200px', backgroundColor:'hsl(200,50%,70%)'},
        // { translateY: '40px', translateX: '50px', backgroundColor:'hsl(60, 100%, 50%)'},
        { translateY: '26vh', translateX: '-35vw', backgroundColor: 'hsl(0, 0%, 100%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeOutBack',
    rotate: '1080deg',
    // border: '1px solid rgb(255, 255, 255)',
    autoplay: false,
},

{
    targets: '#Head3',
    borderRadius: '50%',
    scale: 5,
    keyframes: [
        // { translateY: '100px', translateX: '100px', backgroundColor:'hsl(0,50%, 70%)'},
        // { translateY: '0px', translateX: '200px', backgroundColor:'hsl(200,50%,70%)'},
        // { translateY: '40px', translateX: '50px', backgroundColor:'hsl(60, 100%, 50%)'},
        { translateY: '-54vh', translateX: '28.4vw', backgroundColor: 'hsl(0, 0%, 100%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeOutBack',
    rotate: '1080deg',
    // border: '1px solid rgb(255, 255, 255)',
    autoplay: false,
},

{
    targets: '#Head4',
    borderRadius: '50%',
    scale: 5,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor:'hsl(0,50%, 70%)'},
        // { translateY: '0px', translateX: '200px', backgroundColor:'hsl(200,50%,70%)'},
        { translateY: '40px', translateX: '50px', backgroundColor:'hsl(60, 100%, 50%)'},
        { translateY: '3vh', translateX: '-31.7vw', backgroundColor: 'hsl(0, 0%, 100%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '1080deg',
    autoplay: false,
},

{
    targets: '#Head5',
    borderRadius: '50%',
    scale: 5,
    keyframes: [
        // { translateY: '100px', translateX: '100px', backgroundColor:'hsl(0,50%, 70%)'},
        // { translateY: '0px', translateX: '200px', backgroundColor:'hsl(200,50%,70%)'},
        { translateY: '40px', translateX: '50px', backgroundColor:'hsl(60, 100%, 50%)'},
        { translateY: '20.7vh', translateX: '39vw', backgroundColor: 'hsl(0, 0%, 100%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '1080deg',
    autoplay: false,
},

{
    targets: '#Head6',
    borderRadius: '50%',
    scale: 5,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        // { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        // { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '-49.2vh', translateX: '46.5vw', backgroundColor: 'hsl(0, 0%, 100%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '1080deg',
    autoplay: false,
},

{
    targets: '#Head7',
    borderRadius: '50%',
    scale: 5,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        // { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        // { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '7vh', translateX: '-34.3vw', backgroundColor: 'hsl(0, 0%, 100%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '1080deg',
    autoplay: false,
},

{
    targets: '#Head8',
    borderRadius: '50%',
    scale: 5,
    keyframes: [
        // { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        // { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '-14.5vh', translateX: '-26.3vw', backgroundColor: 'hsl(0, 0%, 100%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '1080deg',
    autoplay: false,
},

//Making eyes in process animation

{
    targets: '#Eyeblack',
    borderRadius: '50%',
    scale: 0.26,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '-16.8vh', translateX: '-12vw', backgroundColor: 'hsl(0, 0%, 0%)' },
    ],
    // loop: true,
    width: '7vw',
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '1170deg',
    autoplay: false,
    
},

{
    targets: '#Eyepupil',
    // borderTopLeftRadius: '50%',
    // bordertoprightradius: '50%',
    // borderRadius: '50%',
    scale: 0.05,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '-12.7vh', translateX: '-8.2vw', backgroundColor: 'hsl(0, 0%, 100%)' },
    ],
    // loop: true,
    zIndex: '1',
    direction: 'alternative',
    delay: 2000,
    duration: 7000,
    easing: 'easeInOutCirc',
    rotate: '1080deg',
    autoplay: false,
},

//Making mouth/peck in process animation

{
    targets: '#Mouthpart1',
    // borderRadius: '50%',
    scale: 2.3,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '-30vh', translateX: '-30.3vw', backgroundColor: 'hsl(16, 100%, 50%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '1035deg',
    autoplay: false,
},

 

//BODY & WINGS ANIMATION

{
    targets: '#MakingABody1',
    borderRadius: '50%',
    scale: 10,
    keyframes: [
        // { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        // { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '-7.5vh', translateX: '-3.9vw', backgroundColor: 'hsl(0, 0%, 100%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '1035deg',
    autoplay: false,
},

{
    targets: '#MakingABody2',
    borderRadius: '50%',
    scale: 10,
    keyframes: [
        // { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        // { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        // { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '-7.3vh', translateX: '-1vw', backgroundColor: 'hsl(0, 0%, 100%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '1035deg',
    autoplay: false,
},

{
    targets: '#MakingABody3',
    borderRadius: '50%',
    scale: 10,
    keyframes: [
        // { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '-6vh', translateX: '1vw', backgroundColor: 'hsl(0, 0%, 100%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '1035deg',
    autoplay: false,
},

{
    targets: '#MakingABody4',
    borderRadius: '50%',
    scale: 10,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        // { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '-4vh', translateX: '-11.3vw', backgroundColor: 'hsl(0, 0%, 100%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '1035deg',
    autoplay: false,
},

{
    targets: '#MakingABody5',
    borderRadius: '50%',
    scale: 10,
    keyframes: [
        // { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        // { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '0.5vh', translateX: '-12.3vw', backgroundColor: 'hsl(0, 0%, 100%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '1035deg',
    autoplay: false,
},

{
    targets: '#MakingABody6',
    borderRadius: '50%',
    scale: 10,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        // { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        // { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '1vh', translateX: '-10vw', backgroundColor: 'hsl(0, 0%, 100%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '1035deg',
    autoplay: false,
},

{
    targets: '#MakingABody7',
    borderRadius: '50%',
    scale: 10,
    keyframes: [
        // { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        // { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '0.7vh', translateX: '-8vw', backgroundColor: 'hsl(0, 0%, 100%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '1035deg',
    autoplay: false,
},

{
    targets: '#MakingABody8',
    borderRadius: '50%',
    scale: 2,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        // { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        // { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '0vh', translateX: '-6vw', backgroundColor: 'hsl(0, 0%, 100%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '1115deg',
    autoplay: false,
    border: 'none',
},

{
    targets: '#MakingABody9',
    borderRadius: '50%',
    scale: 5,
    keyframes: [
        // { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        // { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        // { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '1vh', translateX: '3.6vw', backgroundColor: 'hsl(0, 0%, 100%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '1120deg',
    autoplay: false,
},

//LEGS IN MAKING ANIMATION
{
    targets: '#MakingALeg1',
    // borderRadius: '50%',
    scale: 2,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '-20.8vh', translateX: '7vw', backgroundColor: 'hsl(16, 100%, 50%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '1010deg',
    autoplay: false,
    width: '5vw',
    heigt: '5vh',
    zIndex: '-1',
},

{
    targets: '#MakingALeg2',
    borderRadius: '50%',
    scale: 1,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '45.45vh', translateX: '-12vw', backgroundColor: 'hsl(16, 100%, 50%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '1070deg',
    autoplay: false,
    width: '5vw',
    heigt: '3vh',
    zIndex: '-1',
},

{
    targets: '#MakingALeg3',
    // borderRadius: '50%',
    scale: 2,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '-11vh', translateX: '-37vw', backgroundColor: 'hsl(16, 100%, 50%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '1160deg',
    autoplay: false,
    width: '5vw',
    heigt: '5vh',
    zIndex: '-1',
},

{
    targets: '#MakingALeg4',
    borderRadius: '50%',
    scale: 1,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '-26.5vh', translateX: '-16.4vw', backgroundColor: 'hsl(16, 100%, 50%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '1070deg',
    autoplay: false,
    width: '5vw',
    heigt: '3vh',
    zIndex: '-1',
},


//Moon & DOTS 
{
    targets: '#Moon',// Moon turns into a planet for walking bird to shoot something ''pew pew'' 
    // borderRadius: '100%',
    scale: 1.4,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '34vh', translateX: '26.3vw', backgroundColor: 'hsl(0, 0%, 100%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '1170deg',
    autoplay: false,
    zIndex: '-2',
},

{
    targets: '#holedotsformoon1',
    // borderRadius: '50%',
    scale: 2.3,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '40vh', translateX: '40vw', backgroundColor: 'hsl(0, 0%, 50%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '165deg',
    autoplay: false,
},
{
    targets: '#holedotsformoon2',
    // borderRadius: '50%',
    scale: 2.3,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '40vh', translateX: '40vw', backgroundColor: 'hsl(0, 0%, 75%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '165deg',
    autoplay: false,
},
{
    targets: '#holedotsformoon3',
    // borderRadius: '50%',
    scale: 2,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '52vh', translateX: '10vw', backgroundColor: 'hsl(0, 0%, 50%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '165deg',
    autoplay: false,
},
{
    targets: '#holedotsformoon4',
    // borderRadius: '50%',
    scale: 2,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '52vh', translateX: '10vw', backgroundColor: 'hsl(0, 0%, 75%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '165deg',
    autoplay: false,
},
{
    targets: '#holedotsformoon5',
    // borderRadius: '50%',
    scale: 2,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '20vh', translateX: '30vw', backgroundColor: 'hsl(0, 0%, 50%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '165deg',
    autoplay: false,
},
{
    targets: '#holedotsformoon6',
    // borderRadius: '50%',
    scale: 2,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '20vh', translateX: '30vw', backgroundColor: 'hsl(0, 0%, 75%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '165deg',
    autoplay: false,
},
{
    targets: '#holedotsformoon7',
    // borderRadius: '50%',
    scale: .5,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '-35vh', translateX: '5vw', backgroundColor: 'hsl(0, 0%, 50%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '165deg',
    autoplay: false,
},
{
    targets: '#holedotsformoon8',
    // borderRadius: '50%',
    scale: .5,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '-36.5vh', translateX: '4.8vw', backgroundColor: 'hsl(0, 0%, 50%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '160deg',
    autoplay: false,
    border: '2px solid black',
    
},
{
    targets: '#holedotsformoon9',
    // borderRadius: '50%',
    scale: 0.2,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '-48.8vh', translateX: '-.5vw', backgroundColor: 'hsl(120, 73%, 75%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '165deg',
    autoplay: false,
},
{
    targets: '#holedotsformoon10',
    // borderRadius: '50%',
    scale: 0.15,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '-49.8vh', translateX: '-0.9vw', backgroundColor: 'hsl(0, 100%, 50%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '165deg',
    autoplay: false,
},
{
    targets: '#holedotsformoon11',
    // borderRadius: '50%',
    scale: 0.25,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '5vh', translateX: '-40vw', backgroundColor: 'hsl(16, 100%, 50%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '165deg',
    autoplay: false,
},
{
    targets: '#holedotsformoon12',
    // borderRadius: '50%',
    scale: 0.25,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '5vh', translateX: '-40vw', backgroundColor: 'hsl(16, 100%, 50%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '165deg',
    autoplay: false,
},
{
    targets: '#holedotsformoon13',
    // borderRadius: '50%',
    scale: 0.25,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '5vh', translateX: '-40vw', backgroundColor: 'hsl(16, 100%, 50%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '165deg',
    autoplay: false,
},
{
    targets: '#holedotsformoon14',
    // borderRadius: '50%',
    scale: 0.25,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0,50%, 70%)' },
        { translateY: '0px', translateX: '200px', backgroundColor: 'hsl(200,50%,70%)' },
        { translateY: '40px', translateX: '50px', backgroundColor: 'hsl(60, 100%, 50%)' },
        { translateY: '5vh', translateX: '-40vw', backgroundColor: 'hsl(16, 100%, 50%)' },
    ],
    // loop: true,
    direction: 'alternative',
    delay: 1000,
    duration: 5000,
    easing: 'easeInOutCirc',
    rotate: '165deg',
    autoplay: false,
},


//Text animation for attacking the ship

{
    targets: '#attack1',
    scale: 3,
    keyframes: [
        { translateY: '-20vh', translateX: '-30vw',},

    ],
    // loop: true,
    direction: 'alternate',
    delay: 6000,
    duration: 3000,
    easing: 'easeInOutCirc',
    rotate: '165deg',
    autoplay: false,
},

{
    targets: '#attack2',
    scale: 3,
    keyframes: [
        { translateY: '-20vh', translateX: '-30vw',},

    ],
    // loop: true,
    direction: 'alternate',
    delay: 7000,
    duration: 3000,
    easing: 'easeInOutCirc',
    rotate: '165deg',
    autoplay: false,
},

{
    targets: '#attack3',
    scale: 3,
    keyframes: [
        { translateY: '-20vh', translateX: '-30vw',},

    ],
    // loop: true,
    direction: 'alternate',
    delay: 8000,
    duration: 3000,
    easing: 'easeInOutCirc',
    rotate: '165deg',
    autoplay: false,
},

{
    targets: '#attack4',
    scale: 3,
    keyframes: [
        { translateY: '-20vh', translateX: '-30vw',},

    ],
    // loop: true,
    direction: 'alternate',
    delay: 9000,
    duration: 3000,
    easing: 'easeInOutCirc',
    rotate: '165deg',
    autoplay: false,
},

{
    targets: '#attack5',
    scale: 3,
    keyframes: [
        { translateY: '-20vh', translateX: '-30vw',},

    ],
    // loop: true,
    direction: 'alternate',
    delay: 10000,
    duration: 3000,
    easing: 'easeInOutCirc',
    rotate: '165deg',
    autoplay: false,
},

]
//Push Array objects into an another empty array with animation.
const theAnimation = [];

divAnimation.forEach(object=>{
    theAnimation.push(anime(object));
});

console.log(theAnimation);


const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const stopButton = document.querySelector('#stop');

playButton.addEventListener('click', function () {
theAnimation.forEach(ani =>{
    ani.play();
})
});

pauseButton.addEventListener('click', function () {
theAnimation.forEach(ani =>{
    ani.pause();
})
});
stopButton.addEventListener('click', function () {
theAnimation.forEach(ani =>{
    ani.reset();
    ani.pause();
})
});
