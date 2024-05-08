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

window.addEventListener("scroll", () => {
    let scrollPercentage = window.scrollY;
    if (scrollPercentage === scrollHeight * 0.35) {
        console.log("You scrolled 35% of the page");
        makeContainersVisible();
        containerOpacity += 0.01;
    } else if (scrollPercentage < scrollHeight * 0.35) {
        console.log("You are above 35%");
        makeContainersVisible();
    }
})

// Today I dont have much motivation, but you are going great, you just have to make the boxes appear only after a ccertain  point and either not make it turn on again, or just dont care how much it turns on but just use the first one