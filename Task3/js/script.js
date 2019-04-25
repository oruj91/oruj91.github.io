const changeActiveBtn = (function () {
    const container = document.getElementById('header-navigation');
    const buttons = document.querySelectorAll('.header-nav-btn');
    container.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target.closest('.header-nav-btn');
        if (target) {
            buttons.forEach((cur) => cur.classList.remove('header-nav-btn-active'));
            target.classList.add('header-nav-btn-active');
        }
    })
})();

const insertSlides = (function() {
    let mediaItems = document.querySelectorAll('.profile-media-content .profile-media-item');
    let slidersContainer = document.querySelector('.profile-slider-container');
    let blurContainer = document.querySelector('.blured-bg-slider');
    mediaItems.forEach((item) => {
        let clone = item.cloneNode(true);
        let cloneTwo = item.cloneNode(true);
        clone.style.height = '100%';
        cloneTwo.style.height = '100%';
        slidersContainer.insertAdjacentElement('beforeend', clone);
        blurContainer.insertAdjacentElement('beforeend', cloneTwo);
    })
})();

(function() {
    function slider(container, slides) {
        let sliderCont = document.querySelector(container);
        let slideList = document.querySelectorAll(slides);
        let left = 0;
        let counter = 0;
    
        let firstSlide = slideList[0].cloneNode(true);    
        sliderCont.insertAdjacentElement('beforeend', firstSlide);
    
        setInterval(() => {
            counter ++;
            left = left - 100;
            sliderCont.style.left = left + 'vw';
            
            if (counter - 1 === slideList.length) {
                counter = 0;
                sliderCont.style.transition = 'none';
                sliderCont.style.left = 0;
                left = 0;
            } else {
                sliderCont.style.transition = 'all 1s ease';
            }
        }, 6000);
    }
    slider('.profile-slider-container', '.profile-slider-container .profile-media-item');
    slider('.blured-bg-slider', '.blured-bg-slider .profile-media-item');
})();

const toggleMediaMenu = (function() {
    let button = document.getElementById('closeProfileMediaContainer');
    let menu = document.querySelector('.profile-media-container');
    let blurSlides = document.querySelectorAll('.blured-bg-slider .profile-media-item');
    let mediaWrapper = document.querySelector('.profile-media-wrapper');
    let hidenEventBlock = document.querySelector('.hiden-event-block');
    let wrapperChildNodes = mediaWrapper.children;
    let wrapperChildArr = Array.from(wrapperChildNodes);

    button.addEventListener('click', function() {
        if (menu.classList.contains('active')) {
            hidenEventBlock.style.display = 'block';
            menu.classList.toggle('active');
            menu.style.right = '-19vw';
    
            wrapperChildArr.forEach((element) => {
                element.style.display = 'none';
            });
            blurSlides.forEach((slide) => {
                slide.style.left = '-96vw';
            });
        }
    });
    hidenEventBlock.addEventListener('click', function() {
        if (!menu.classList.contains('active')) {
            menu.style.right = '0';
            menu.classList.toggle('active');

            wrapperChildArr.forEach((element) => {
                element.style.display = 'flex';
            });
            blurSlides.forEach((slide) => {
                slide.style.left = '-77vw';
            });
            hidenEventBlock.style.display = 'none';
        }
    });
})();

(function() {
    scrollPage()
    window.addEventListener('resize', scrollPage);
    
    function scrollPage() {

        let vh = window.innerHeight;
        let scrollHeight = vh - 100;

        // document.addEventListener('scroll', function() {
        //     document.body.scrollTop = 0;
        // });
        
        document.addEventListener('wheel', function(e) {
            if (e.deltaY > 0) {
                scrollDown();
            } else {
                scrollUp();
            }
        });
        
        function scrollDown() {
            document.body.style.transform = `translate3d(0px, -${scrollHeight}px, 0px)`;
        }    
        function scrollUp() {
            document.body.style.transform = 'translate3d(0px, 0px, 0px)';
        }
    }; 
})();