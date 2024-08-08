"use strict";
let circle_img = document.querySelectorAll("#circleimg");
function scrollToTop() {
    window.scrollTo({
        top: 600,
        behavior: 'smooth'
    });
}
function ScrollToTop() {
    window.scrollTo({
        top: 1050,
        behavior: 'smooth'
    });
}
function scrollTotop() {
    window.scrollTo({
        top: 1700,
        behavior: 'smooth'
    });
}
function scrollTo_Top() {
    window.scrollTo({
        top: 3800,
        behavior: 'smooth'
    });
}
function scrollTo_butt() {
    window.scrollTo({
        top: 3800,
        behavior: 'smooth'
    });
}
function scrollTo_hide2() {
    window.scrollTo({
        top: 1700,
        behavior: 'smooth'
    });
}
function scrollTo_hide3() {
    window.scrollTo({
        top: 2600,
        behavior: 'smooth'
    });
}
function scrollTo_hide4() {
    window.scrollTo({
        top: 4900,
        behavior: 'smooth'
    });
}
function scrollTo_hide5() {
    window.scrollTo({
        top: 2200,
        behavior: 'smooth'
    });
}
function scrollTo_hide6() {
    window.scrollTo({
        top: 4500,
        behavior: 'smooth'
    });
}
function Scroll_button() {
    window.scrollTo({
        top: 4900,
        behavior: 'smooth'
    });
}
document.getElementById("myElement").classList.add + ("hoveauto");
setTimeout(() => {
    document.getElementById("myElement").classList.remove("hoveauto");
}, 1000);
setInterval(() => {
    document.getElementById("myElement").classList.toggle("hoveauto");
}, 1000);
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        document.getElementById("myElement").classList.toggle("hoveauto");
    }, 1000 * i);
}
