import '../css/home.css';
import CircleType from 'circletype';

(function slider() {
    let sliderWrapper = document.querySelector('.sliders-wrapper');
    let slides = document.querySelectorAll('.slider-container');
    let slidesPostition = 0;
    let curSlideNumber = 0;
    setInterval(() => {
        curSlideNumber ++;
        slidesPostition = slidesPostition - 100;
        if (curSlideNumber == slides.length) {
            curSlideNumber = 0;
            slidesPostition = 0;
            sliderWrapper.style.transition = 'none';
        } else {
            sliderWrapper.style.transition = '1s';
        }
        sliderWrapper.style.marginLeft = slidesPostition + 'vw';
    }, 5000)
})();

new CircleType(document.querySelector('.bio-title'))
.radius(288/2);
new CircleType(document.querySelector('.projects-title'))
.radius(288/2);
new CircleType(document.querySelector('.techno-title'))
.radius(288/2);

function toRadians (angle) {
    return angle * (Math.PI/180);
}

// BIOGRAPHY ARC
let arc_1canvas = document.querySelector('.biography-canvas');
let arc_1ctx = arc_1canvas.getContext('2d');
arc_1ctx.arc(300/2, 300/2, 285/2, toRadians(0), toRadians(360), false);
arc_1ctx.lineWidth = 10;
let arc_1grad = arc_1ctx.createLinearGradient(0, 0, 0, 340);
arc_1grad.addColorStop("0", "#C2DF0C");
arc_1grad.addColorStop("0.2", "rgba(194, 223, 12, 0");
arc_1grad.addColorStop("0.4", "rgba(194, 223, 12, 0");
arc_1grad.addColorStop("0.6", "rgba(194, 223, 12, 0");
arc_1grad.addColorStop("1", "#C2DF0C");
arc_1ctx.strokeStyle = arc_1grad;
arc_1ctx.stroke();

// PROJECTS ARC
let arc_2canvas = document.querySelector('.projects-canvas');
let arc_2ctx = arc_2canvas.getContext('2d');
arc_2ctx.arc(300/2, 300/2, 285/2, toRadians(0), toRadians(360), false);
arc_2ctx.lineWidth = 10;
let arc_2grad = arc_2ctx.createLinearGradient(0, 0, 0, 340);
arc_2grad.addColorStop("0", "#14C1DE");
arc_2grad.addColorStop("0.2", "rgba(20, 193, 222, 0");
arc_2grad.addColorStop("0.4", "rgba(20, 193, 222, 0");
arc_2grad.addColorStop("0.6", "rgba(20, 193, 222, 0");
arc_2grad.addColorStop("1", "#14C1DE");
arc_2ctx.strokeStyle = arc_2grad;
arc_2ctx.stroke();

// TECHNOLOGIES ARC
let arc_3canvas = document.querySelector('.techno-canvas');
let arc_3ctx = arc_3canvas.getContext('2d');
arc_3ctx.arc(300/2, 300/2, 285/2, toRadians(0), toRadians(360), false);
arc_3ctx.lineWidth = 10;
let arc_3grad = arc_3ctx.createLinearGradient(0, 0, 0, 340);
arc_3grad.addColorStop("0", "#FF8006");
arc_3grad.addColorStop("0.2", "rgba(255, 128, 6, 0");
arc_3grad.addColorStop("0.4", "rgba(255, 128, 6, 0");
arc_3grad.addColorStop("0.6", "rgba(255, 128, 6, 0");
arc_3grad.addColorStop("1", "#FF8006");
arc_3ctx.strokeStyle = arc_3grad;
arc_3ctx.stroke();