let changeButtonleftNavIcon = function () {
    const navContainer = document.getElementById('left-navigation');
    const buttons = document.querySelectorAll('.left-nav-btn');    
    navContainer.addEventListener('click', (e) => {
        const target = e.target.closest('.left-nav-btn');
        if (e.target.classList.contains('left-nav-btn')) {
            toggleActiveElement(target);
        }
    });
    function toggleActiveElement(target) {
        buttons.forEach((cur) => {
            cur.classList.remove('active');
            cur.childNodes[1].childNodes[3].style.fill = '#B3B3B3';
            cur.childNodes[1].style.zIndex = '-1';
    });
        target.classList.add('active');
        target.childNodes[1].childNodes[3].style.fill = '#57C46B';
        target.childNodes[1].style.zIndex = '1';
    }
}();

let changeButtonYourList = function() {
    let navContainer = document.getElementById('your-list-nav');
    let buttons = document.querySelectorAll('.your-list-btn');
    
    navContainer.addEventListener('click', (e) => {
        let target = e.target;
        toggleActiveElement(target);
    });
    function toggleActiveElement (target) {
        buttons.forEach((cur) => cur.classList.remove('active'));
        target.classList.add('active');
    }
}();

// CHART line shadow
let draw = Chart.controllers.line.prototype.draw;
Chart.controllers.line = Chart.controllers.line.extend({
    draw: function() {
        draw.apply(this, arguments);
        let ctx = this.chart.chart.ctx;
        let _stroke = ctx.stroke;
        ctx.stroke = function() {
            ctx.save();
            ctx.shadowColor = 'gray';
            ctx.shadowBlur = 30;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            _stroke.apply(this, arguments)
            ctx.restore();
        }
    }
});
// CHART
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ["Jul1", "Jul2", "Jul3", "Jul4", "Jul5", "Jul6", "Jul7"],
        datasets: [{
            label: "",
            borderColor: '#89BA96',
            data: [49, 25, 100, 70, 145, 75, 100, 80],
            backgroundColor: 'transparent',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointBackgroundColor: "#fff"
        }]
    },
    // Configuration options go here
    options: {
        scales:{
            xAxes: [{
                gridLines: {
                  display: false
                },
            }],
            yAxes: [{
                ticks: {
                   stepSize: 50,
                   padding: 20
                },
                gridLines: {
                    drawBorder: false
                }
            }]
        },
        legend: {
            display: false
        }
    }
});

$(document).ready(function() {
    $('#usa-map').usmap({
        stateStyles: {fill: '#F6F8FA'},
        stateHoverStyles: {fill: '#9198A3'},
        stateSpecificStyles: {
            'CA': {fill: '#33B9ED'},
            'WI': {fill: '#5ABF72'},
            'NY': {fill: '#F54C54'},
        },
        showLabels: false
    });
});
