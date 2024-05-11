// Get the page scroll height
const scrollHeight = document.documentElement.scrollHeight;

// Get DOM containers and such
const eyeContainers = document.querySelectorAll('.container');
const eyeShape = document.querySelectorAll('.eye');
const pupils = document.querySelectorAll('.pupil');

// Change Opacity of elements based on the scroll
let elementOpacity = 0;
function getOpacityOnScroll() {
    elementOpacity = (window.scrollY / 11359).toFixed(2);
    return elementOpacity;
}

function changeOpacity() {
    eyeContainers.forEach((element) => {
        element.style.opacity = elementOpacity;
    });
}

function setNewOpacity() {
    getOpacityOnScroll()
    changeOpacity()
}

window.addEventListener("scroll", setNewOpacity);
