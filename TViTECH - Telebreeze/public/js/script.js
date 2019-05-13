const
  navButtons           = $('#myTab .btn--light'),
  modalPay             = $('#modalPay'),
  modalConnect         = $('#modalConnect'),
  inputMaskPhone       = new Inputmask("999 - 99 - 99"),
  inputMaskCredit      = new Inputmask("9999 - 9999 - 9999 - 9999"),
  inputPayCredit       = $('#payCredit'),
  inputConnectContacts = $('#userContacts');

$(window).on('load', function() {
  navButtons.removeClass('active')
  $(`a[href="${location.hash}"]`).addClass('active');
});

$(window).on('scroll', function () {
  let sections = $('.content>div');
  let screenPosition = window.pageYOffset;
  let sectionID;

  $.each(sections, function (key, el) {
    if (screenPosition + 200 >= el.offsetTop) {
      sectionID = el.id;
    }
  });
  if (sectionID) {
    navButtons.removeClass('active');
    $(`a[href="#${sectionID}"]`).addClass('active');
  }
})

$(document).ready(function(){

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
  let nav = $('.header__user');
  let navH = nav.outerHeight();
  let lastScrollTop = 0;
  let lastDirection = 0;
  let movement = 0;

  $(window).scroll(function(){
    let st = $(this).scrollTop();
    movement += st - lastScrollTop;

    if (st > lastScrollTop) { // scroll down
      if (lastDirection !== 1) {
        movement = 0;
      }
      let margin = Math.abs(movement);
      if (margin > navH) {
        margin = navH;
      }
      margin = -margin;
      nav.css('margin-top', margin+"px");

      lastDirection = 1;
    }
    else { // scroll up
      if (lastDirection !== -1) {
        movement = 0;
      }
      let margin = Math.abs(movement);
      if (margin > navH) {
        margin = navH;
      }
      margin = margin-navH;
      nav.css('margin-top', margin+"px");

      lastDirection = -1;
    }

    lastScrollTop = st;
  });

  // Scroll spy
  $('body').scrollspy({target: ".navbar", offset: 100});

  // Add smooth scrolling on all links inside the navbar
  $("#myTab a").on('click', function(event) {
    if (this.hash !== "") {
      let hash = this.hash;

      event.preventDefault();

      $('html').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  // Language change
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
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 0,
    autoplaySpeed: 50000,
    autoplayHoverPause: false
  });
});
