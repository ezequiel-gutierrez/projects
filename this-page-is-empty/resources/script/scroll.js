// Get the page scroll height
const scrollHeight = document.documentElement.scrollHeight;

// Get DOM containers and such
const eyeContainers = document.querySelectorAll('.container');
const eyeShape = document.querySelectorAll('.eye');
const pupils = document.querySelectorAll('.pupil');

// Variables
let containerOpacity = 0


// Tweak containers opacity
function makeContainersVisible() {
    eyeContainers.forEach((element) => {
        element.style.opacity = containerOpacity;
    });
}

/* Great! We started with some basic stuff, we have the function that makes the containers apear and disapear, now we have to make the eyes, make them appear as we scroll, make the pupils, and make the eyes follow the mouse, we are on the right track!*/