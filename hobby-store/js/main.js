(function absolutingCoverSlides() {
    var slides = document.getElementsByClassName('slide');
    var left = 0;
    for (var i=1; i<slides.length; i++){
        left = left - 39;
        slides[i].style.left = left + 'px';
    }
})();

(function coverAutoSlider() {
    let left = 0;
    let currentSlide = 0;
    setInterval(function() {
        var container = document.querySelector('.header-slider .container');
        var slides = document.getElementsByClassName('slide');
        left = left - 786;
        currentSlide++;
        if (currentSlide === slides.length){
            currentSlide = 0;
            container.style.transition = 'none';
            left = 0;
        } else {
            container.style.transition = '1s';
        }
        container.style.marginLeft = left + 'px';        
    }, 9000);
})();

function toggleContent(trigger, target, parent) {
    let trigBtn = document.getElementById(trigger);
    let content = document.querySelector(target);
    let container = document.querySelector(parent);
    let childButtons = document.querySelectorAll('.btn-link');
    console.log(childButtons);
    trigBtn.addEventListener('click', () => {
        if (content.classList.contains('active')) {
            content.classList.toggle('active');
            container.style.zIndex = '0';
            content.style.maxHeight = 0;
            container.style.width = '48%';
            trigBtn.style.borderRadius = '10px';
        } else {
            content.classList.toggle('active');
            container.style.zIndex = '1';
            content.style.maxHeight = '500px';
            container.style.width = '100%';
            trigBtn.style.borderRadius = '10px 10px 0 0';
        }
    });
}
toggleContent('menu-btn-xs', '.main-menu nav', '.main-menu');
toggleContent('products-btn-xs', '.products-menu nav', '.products-menu');
toggleContent('filter-btn-xs', '.filter nav', '.filter');