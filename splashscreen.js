
// typewriter effect (non-reuseable only for h1 in splash.html)
function typewriter(text, i) {
    if (i <= (text.length)) {
        document.querySelector("h1").innerHTML = text.substring(0, i + 1);    // non-reusuable part
        setTimeout(function () { typewriter(text, i + 1); }, 250);

    }
}

var text = " yunseo han"
const splashText = document.querySelector('.splash-text');
const topbar = document.querySelector('#topbar');
const bottombar = document.querySelector('#bottombar');

// display splash screen
document.addEventListener('DOMContentLoaded', function (event) {
    setTimeout(function () {
        splashText.classList.remove('cursor-blink');
    }, 1000);

    setTimeout(function () {
        typewriter(text, 0);
    }, 1200);
    setTimeout(function () { splashText.classList.add('cursor-blink'); }, 4000);
    setTimeout(function () { splashText.classList.replace("splash-text", "white-cursor-text"); }, 4400);
    setTimeout(function () { splashText.classList.remove('cursor-blink'); }, 6100);
    setTimeout(function () { splashText.classList.replace('white-cursor-text', 'white-splash-text'); }, 6100);
    setTimeout(function () {
        splashText.classList.add('dissapear');
        topbar.classList.replace('is-active', 'not-active');
        bottombar.classList.replace('is-active', 'not-active');
    }, 7100);
    setTimeout(function () {
        splashText.remove();
        // splashText.classList.remove('white-splash-text');
        // splashText.classList.replace('dissapear', 'hide');
        topbar.classList.add('hide');
        bottombar.classList.add('hide');
    }, 7500);
    setTimeout(function () {
        window.location.href = "index.html"
    }, 7550);
});