import '../css/wellcome.css';
import CircleType from 'circletype';

new CircleType(document.getElementById('click-hint'))
.radius(80);
new CircleType(document.getElementById('to-enter-hint'))
.dir(-1)
.radius(92);
new CircleType(document.getElementById('arc1-text'))
.radius(170)
new CircleType(document.getElementById('arc2-text'))
.radius(208+10);
new CircleType(document.getElementById('arc3-text'))
.radius(564/2);
new CircleType(document.getElementById('arc4-text'))
.radius(712/2);
new CircleType(document.getElementById('arc5-text'))
.radius(912/2);
new CircleType(document.getElementById('arc6-text'))
.radius(1093/2);
new CircleType(document.getElementById('arc7-text'))
.radius(1356/2);

(function addAnim() {
    let btnTitle = document.querySelector('.central-btn .title');
    let hintContainer = document.querySelector('.hints');
    let arc1 = document.querySelector('.arc1-container');
    let arc2 = document.querySelector('.arc2-container');
    let arc3 = document.querySelector('.arc3-container');
    let arc4 = document.querySelector('.arc4-container');
    let arc5 = document.querySelector('.arc5-container');
    let arc6 = document.querySelector('.arc6-container');
    let arc7 = document.querySelector('.arc7-container');
    btnTitle.style.animationName = 'title-scaling';
    hintContainer.style.animationName = 'hint-anim';
    arc1.style.animationName = 'arc1-rotate';
    arc2.style.animationName = 'arc2-rotate';
    arc3.style.animationName = 'arc3-rotate';
    arc4.style.animationName = 'arc4-rotate';
    arc5.style.animationName = 'arc5-rotate';
    arc6.style.animationName = 'arc6-rotate';
    arc7.style.animationName = 'arc7-rotate';
})();

function toRadians (angle) {
    return angle * (Math.PI/180);
}

// ADAPTIVE LAYOUT ARC
let arc_1canvas = document.getElementById('arc1-can');
let arc_1ctx = arc_1canvas.getContext('2d');
arc_1ctx.arc(164, 164, 156, toRadians(330), toRadians(210), false);
arc_1ctx.lineWidth = 15;
let arc_1grad = arc_1ctx.createLinearGradient(0, 0, 0, 340);
arc_1grad.addColorStop("0", "#C2DF0C");
arc_1grad.addColorStop("0.3", "#C2DF0C");
arc_1grad.addColorStop("1", "rgba(194, 223, 12, 0");
arc_1ctx.strokeStyle = arc_1grad;
arc_1ctx.stroke();

// FRONTEND DEVELOPMENT ARC
let arc_2canvas = document.getElementById('arc2-can');
let arc_2ctx = arc_2canvas.getContext('2d');
arc_2ctx.arc(218, 218, 208, toRadians(331), toRadians(209), false);
arc_2ctx.lineWidth = 20;
let arc_2grad = arc_2ctx.createLinearGradient(0, 0, 0, 440);
arc_2grad.addColorStop("0", "#00AF99");
arc_2grad.addColorStop("0.3", "#00AF99");
arc_2grad.addColorStop("1", "rgba(0, 175, 153, 0");
arc_2ctx.strokeStyle = arc_2grad;
arc_2ctx.stroke();

// CREATIVE DESIGN ARC
let arc_3canvas = document.getElementById('arc3-can');
let arc_3ctx = arc_3canvas.getContext('2d');
arc_3ctx.arc(589/2, 589/2, 564/2, toRadians(308), toRadians(233), false);
arc_3ctx.lineWidth = 25;
let arc_3grad = arc_3ctx.createLinearGradient(0, 0, 0, 600);
arc_3grad.addColorStop("0", "#14C1DE");
arc_3grad.addColorStop("0.3", "#14C1DE");
arc_3grad.addColorStop("1", "rgba(20, 193, 222, 0");
arc_3ctx.strokeStyle = arc_3grad;
arc_3ctx.stroke();

// DOM MANIPULATIONS ARC
let arc_4canvas = document.getElementById('arc4-can');
let arc_4ctx = arc_4canvas.getContext('2d');
arc_4ctx.arc(712/2, 712/2, 692/2, toRadians(305), toRadians(235), false);
arc_4ctx.lineWidth = 20;
let arc_4grad = arc_4ctx.createLinearGradient(0, 0, 0, 720);
arc_4grad.addColorStop("0", "#9661CB");
arc_4grad.addColorStop("0.3", "#9661CB");
arc_4grad.addColorStop("1", "rgba(150, 97, 203, 0");
arc_4ctx.strokeStyle = arc_4grad;
arc_4ctx.stroke();

// ANIMATIONS ARC
let arc_5canvas = document.getElementById('arc5-can');
let arc_5ctx = arc_5canvas.getContext('2d');
arc_5ctx.arc(942/2, 942/2, 912/2, toRadians(360-69+1), toRadians(360-111-1), false);
arc_5ctx.lineWidth = 30;
let arc_5grad = arc_5ctx.createLinearGradient(0, 0, 0, 950);
arc_5grad.addColorStop("0", "#DD006D");
arc_5grad.addColorStop("0.3", "#DD006D");
arc_5grad.addColorStop("1", "rgba(221, 0, 109, 0");
arc_5ctx.strokeStyle = arc_5grad;
arc_5ctx.stroke();

// ECMASCRIPT2015 ARC
let arc_6canvas = document.getElementById('arc6-can');
let arc_6ctx = arc_6canvas.getContext('2d');
arc_6ctx.arc(1133/2, 1133/2, 1093/2, toRadians(296), toRadians(244), false);
arc_6ctx.lineWidth = 40;
let arc_6grad = arc_6ctx.createLinearGradient(0, 0, 0, 1140);
arc_6grad.addColorStop("0", "#FF8006");
arc_6grad.addColorStop("0.3", "#FF8006");
arc_6grad.addColorStop("1", "rgba(255, 128, 6, 0");
arc_6ctx.strokeStyle = arc_6grad;
arc_6ctx.stroke();

// NPM & WEBPACK ARC
let arc_7canvas = document.getElementById('arc7-can');
let arc_7ctx = arc_7canvas.getContext('2d');
arc_7ctx.arc(1386/2, 1386/2, 1356/2, toRadians(360-70), toRadians(360-110), false);
arc_7ctx.lineWidth = 30;
let arc_7grad = arc_7ctx.createLinearGradient(0, 0, 0, 1395);
arc_7grad.addColorStop("0", "#FFD130");
arc_7grad.addColorStop("0.3", "#FFD130");
arc_7grad.addColorStop("1", "rgba(255, 209, 48, 0");
arc_7ctx.strokeStyle = arc_7grad;
arc_7ctx.stroke();