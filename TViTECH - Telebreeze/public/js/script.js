$(document).ready(function(){
  const
      modalPay = $('#modalPay'),
      modalConnect = $('#modalConnect'),
      inputMaskPhone = new Inputmask("999 - 99 - 99"),
      inputMaskCredit = new Inputmask("9999 - 9999 - 9999 - 9999"),
      inputPayCredit = $('#payCredit'),
      inputConnectContacts = $('#userContacts');

  inputMaskPhone.mask(inputConnectContacts);
  inputMaskCredit.mask(inputPayCredit);

  $('[data-type ="toConnect"]').each(function (idx, el) {
    $(el).click(function (e) {
      const id = e.target.id;
      const title = $(e.target).siblings('.card-title').text();
      const modalTitle = $('#connectTitle');

      modalTitle.text(title);
      modalConnect.modal();
    })
  });

  $('[data-type ="toPay"]').each(function (idx, el) {
    $(el).click(function (e) {
      const id = e.target.id;
      const title = $(e.target).siblings('.card-title').text();
      const paymentFor = $('#paymentFor');

      paymentFor.text(title);
      modalPay.modal();
    })
  });

  // WOWJS
  new WOW().init();

  // HIDE HEADER'S USER PROFILE ON SCROLL-DOWN
  let $navbar = $('.header__user');
  let navbarHeight = $navbar.outerHeight();
  let lastScrollTop = 0;
  let lastDirection = 0;
  let movement = 0;

  $(window).scroll(function(event){

    let st = $(this).scrollTop();
    movement += st - lastScrollTop;

    if (st > lastScrollTop) { // scroll down
      if (lastDirection != 1) {
        movement = 0;
      }
      let margin = Math.abs(movement);
      if (margin > navbarHeight) {
        margin = navbarHeight;
      }
      margin = -margin;
      $navbar.css('margin-top', margin+"px")

      lastDirection = 1;
    } else { // scroll up
      if (lastDirection != -1) {
        movement = 0;
      }
      let margin = Math.abs(movement);
      if (margin > navbarHeight) {
        margin = navbarHeight;
      }
      margin = margin-navbarHeight;
      $navbar.css('margin-top', margin+"px")

      lastDirection = -1;
    }

    lastScrollTop = st;
  });

  // SCROLLSPY
  $('body').scrollspy({target: ".navbar", offset: 50});

  // Add smooth scrolling on all links inside the navbar
  $("#myTab a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      let hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });

    } // End if

  });

  // LANGUAGE CHANGE
  let $btnLanguages = $('.user__lang .dropdown-item');
  let $currentLangWrapper = $('.user__lang .dropdown-toggle');

  $btnLanguages.each(function(key, lang) {
    $(lang).click(function(e) {
      let $currentLang = $('.dropdown-toggle .lang__item');
      let $selectedBtn = $(e.target.closest('.dropdown-item'));
      let $selectedLang = $selectedBtn.find('.lang__item').clone();

      $currentLang.remove();
      $currentLangWrapper.append($selectedLang);
    })
  });

  // Slider
  $(".owl-carousel").owlCarousel({
    dots: false,
    rtl: true,
    loop: true,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 2000,
    autoplaySpeed: 4000,
    autoplayHoverPause: false
  });
});
