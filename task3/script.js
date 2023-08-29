const trafLightEl = document.querySelector('#all');

const greenJs = document.querySelector('#green');
const yellowJs = document.querySelector('#yellow');
const redJs = document.querySelector('#red');

function makeGreen() {
    greenJs.style.background = ('green');
    redJs.style.background = ('black');
    trafLightEl.removeEventListener('click', makeGreen);
    trafLightEl.addEventListener('click', makeYellow);
}

function makeYellow() {
    yellowJs.style.background = ('yellow');
    greenJs.style.background = ('black');
    trafLightEl.removeEventListener('click', makeYellow);
    trafLightEl.addEventListener('click', makeRed);
}

function makeRed() {
    redJs.style.background = ('red');
    yellowJs.style.background = ('black');
    trafLightEl.removeEventListener('click', makeRed);
    trafLightEl.addEventListener('click', makeGreen);
}

trafLightEl.addEventListener('click', makeGreen)