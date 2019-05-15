const
  nav = $('.header__user'),
  navButtons = $('#myTab .btn--light'),
  navH = nav.outerHeight(),
  modalPay = $('#modalPay'),
  modalConnect = $('#modalConnect'),
  inputMaskPhone = new Inputmask("999 - 99 - 99"),
  inputMaskCredit = new Inputmask("9999 - 9999 - 9999 - 9999"),
  inputPayCredit = $('#payCredit'),
  inputConnectContacts = $('#userContacts');

let lastScrollTop = 0;
let lastDirection = 0;
let movement = 0;

// Profile navbar hide on scroll
$(window).scroll(function () {
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
    nav.css('margin-top', margin + "px");

    lastDirection = 1;
  } else { // scroll up
    if (lastDirection !== -1) {
      movement = 0;
    }
    let margin = Math.abs(movement);
    if (margin > navH) {
      margin = navH;
    }
    margin = margin - navH;
    nav.css('margin-top', margin + "px");

    lastDirection = -1;
  }

  lastScrollTop = st;
});

// Language change
$(function () {
  let $btnLanguages = $('.user__lang .dropdown-item');
  let $currentLangWrapper = $('.user__lang .dropdown-toggle');

  $btnLanguages.each(function (key, lang) {
    $(lang).click(function (e) {
      let $currentLang = $('.dropdown-toggle .lang__item');
      let $selectedBtn = $(e.target.closest('.dropdown-item'));
      let $selectedLang = $selectedBtn.find('.lang__item').clone();

      $currentLang.remove();
      $currentLangWrapper.append($selectedLang);
    })
  });
})

// Navbar active button on load
$(window).on('load', function () {
  if (location.hash === '') {
    location.hash = 'whyWe'
  }
  navButtons.removeClass('active')
  $(`a[href="${location.hash}"]`).addClass('active');
});

// Navbar active button on scroll
$(window).scroll(function () {
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

// Page smooth scrolling
navButtons.click(function (e) {
  if (this.hash !== "") {
    let hash = this.hash;

    e.preventDefault();

    $('html').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {
      window.location.hash = hash;
    });
  }
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

function showModalChannel (title, imgSrc) {
  $('#modalChannelTitle').text(title);
  $('#modalChannelImg').attr('src', imgSrc);

  $('#modalChannel').modal();
  // $.ajax({
  //   url: 'requestChannelByID',
  //   data: id,
  //   success: function (json) {
  //     $('#modalChannel').modal();
  //   }
  // })
}

// Media
$(function () {
  const containerChannelAll = $('#channelAll .media__container');
  const json = [
    {name: 'Discovery', type: 'fun', imgSrc: '../public/assets/img/chanels/discovery.jpg'},
    {name: 'Animal planet', type: 'fun', imgSrc: '../public/assets/img/chanels/animal_planet.png'},
    {name: 'BBC news', type: 'news', imgSrc: '../public/assets/img/chanels/bbc_news.png'},
    {name: 'MTV', type: 'music', imgSrc: '../public/assets/img/chanels/mtv.png'},
    {name: 'Eurosport', type: 'sport', imgSrc: '../public/assets/img/chanels/eurosport.jpg'},
    {name: 'Kids', type: 'kids', imgSrc: '../public/assets/img/chanels/kids.jpg'},
    {name: 'Animal planet', type: 'fun', imgSrc: '../public/assets/img/chanels/animal_planet.png'},
    {name: 'Kids', type: 'kids', imgSrc: '../public/assets/img/chanels/kids.jpg'},
    {name: 'Eurosport', type: 'sport', imgSrc: '../public/assets/img/chanels/eurosport.jpg'},
    {name: 'BBC news', type: 'news', imgSrc: '../public/assets/img/chanels/bbc_news.png'},
    {name: 'MTV', type: 'music', imgSrc: '../public/assets/img/chanels/mtv.png'},
    {name: 'Discovery', type: 'fun', imgSrc: '../public/assets/img/chanels/discovery.jpg'},
    {name: 'MTV', type: 'music', imgSrc: '../public/assets/img/chanels/mtv.png'},
    {name: 'BBC news', type: 'news', imgSrc: '../public/assets/img/chanels/bbc_news.png'},
    {name: 'Eurosport', type: 'sport', imgSrc: '../public/assets/img/chanels/eurosport.jpg'},
    {name: 'Discovery', type: 'fun', imgSrc: '../public/assets/img/chanels/discovery.jpg'},
    {name: 'Kids', type: 'kids', imgSrc: '../public/assets/img/chanels/kids.jpg'},
    {name: 'Animal planet', type: 'fun', imgSrc: '../public/assets/img/chanels/animal_planet.png'},
    {name: 'Discovery', type: 'fun', imgSrc: '../public/assets/img/chanels/discovery.jpg'},
    {name: 'Animal planet', type: 'fun', imgSrc: '../public/assets/img/chanels/animal_planet.png'},
    {name: 'BBC news', type: 'news', imgSrc: '../public/assets/img/chanels/bbc_news.png'},
    {name: 'MTV', type: 'music', imgSrc: '../public/assets/img/chanels/mtv.png'},
    {name: 'Eurosport', type: 'sport', imgSrc: '../public/assets/img/chanels/eurosport.jpg'},
    {name: 'Kids', type: 'kids', imgSrc: '../public/assets/img/chanels/kids.jpg'},
    {name: 'Animal planet', type: 'fun', imgSrc: '../public/assets/img/chanels/animal_planet.png'},
    {name: 'Kids', type: 'kids', imgSrc: '../public/assets/img/chanels/kids.jpg'},
    {name: 'Eurosport', type: 'sport', imgSrc: '../public/assets/img/chanels/eurosport.jpg'},
    {name: 'BBC news', type: 'news', imgSrc: '../public/assets/img/chanels/bbc_news.png'},
    {name: 'MTV', type: 'music', imgSrc: '../public/assets/img/chanels/mtv.png'},
    {name: 'Discovery', type: 'fun', imgSrc: '../public/assets/img/chanels/discovery.jpg'},
    {name: 'MTV', type: 'music', imgSrc: '../public/assets/img/chanels/mtv.png'},
    {name: 'BBC news', type: 'news', imgSrc: '../public/assets/img/chanels/bbc_news.png'},
    {name: 'Eurosport', type: 'sport', imgSrc: '../public/assets/img/chanels/eurosport.jpg'},
    {name: 'Discovery', type: 'fun', imgSrc: '../public/assets/img/chanels/discovery.jpg'},
    {name: 'Kids', type: 'kids', imgSrc: '../public/assets/img/chanels/kids.jpg'},
    {name: 'Animal planet', type: 'fun', imgSrc: '../public/assets/img/chanels/animal_planet.png'},
    {name: 'Discovery', type: 'fun', imgSrc: '../public/assets/img/chanels/discovery.jpg'},
    {name: 'Animal planet', type: 'fun', imgSrc: '../public/assets/img/chanels/animal_planet.png'},
    {name: 'BBC news', type: 'news', imgSrc: '../public/assets/img/chanels/bbc_news.png'},
    {name: 'MTV', type: 'music', imgSrc: '../public/assets/img/chanels/mtv.png'},
    {name: 'Eurosport', type: 'sport', imgSrc: '../public/assets/img/chanels/eurosport.jpg'},
    {name: 'Kids', type: 'kids', imgSrc: '../public/assets/img/chanels/kids.jpg'},
    {name: 'Animal planet', type: 'fun', imgSrc: '../public/assets/img/chanels/animal_planet.png'},
    {name: 'Kids', type: 'kids', imgSrc: '../public/assets/img/chanels/kids.jpg'},
    {name: 'Eurosport', type: 'sport', imgSrc: '../public/assets/img/chanels/eurosport.jpg'},
    {name: 'BBC news', type: 'news', imgSrc: '../public/assets/img/chanels/bbc_news.png'},
    {name: 'MTV', type: 'music', imgSrc: '../public/assets/img/chanels/mtv.png'},
    {name: 'Discovery', type: 'fun', imgSrc: '../public/assets/img/chanels/discovery.jpg'},
    {name: 'MTV', type: 'music', imgSrc: '../public/assets/img/chanels/mtv.png'},
    {name: 'BBC news', type: 'news', imgSrc: '../public/assets/img/chanels/bbc_news.png'},
    {name: 'Eurosport', type: 'sport', imgSrc: '../public/assets/img/chanels/eurosport.jpg'},
    {name: 'Discovery', type: 'fun', imgSrc: '../public/assets/img/chanels/discovery.jpg'},
    {name: 'Kids', type: 'kids', imgSrc: '../public/assets/img/chanels/kids.jpg'},
    {name: 'Animal planet', type: 'fun', imgSrc: '../public/assets/img/chanels/animal_planet.png'}
  ];
  let item;
  let channelAllArr = [];

  $.each(json, function (key, val) {
    item = `
      <a onclick="showModalChannel('${val.name}', '${val.imgSrc}')" class="media__item">
        <img src="${val.imgSrc}" alt="${val.name}">      
      </a>`;
    channelAllArr.push(item);
  })

  $('#channelAll .media__pagination').pagination({
    dataSource: channelAllArr,
    pageSize: 30,
    callback: function (data) {
      containerChannelAll.empty();
      $.each(data, function (key, obj) {
        containerChannelAll.append(obj);
      })
    }
  })

  $.each(json, function (key, val) {
    if (val.type === 'fun') {
      $('#channelFun .media__container').append(`
      <a onclick="showModalChannel(${val.name}, ${val.imgSrc})" class="media__item" href="#">
        <img src="${val.imgSrc}">
      </a>
    `)
    }
  })
  $.each(json, function (key, val) {
    if (val.type === 'news') {
      $('#channelNews .media__container').append(`
      <a onclick="showModalChannel(${val.name}, ${val.imgSrc})" class="media__item" href="#">
        <img src="${val.imgSrc}">
      </a>
    `)
    }
  })
  $.each(json, function (key, val) {
    if (val.type === 'sport') {
      $('#channelSport .media__container').append(`
      <a class="media__item" href="#">
        <img src="${val.imgSrc}">
      </a>
    `)
    }
  })
  $.each(json, function (key, val) {
    if (val.type === 'music') {
      $('#channelMusic .media__container').append(`
      <a class="media__item" href="#">
        <img src="${val.imgSrc}">
      </a>
    `)
    }
  })
  $.each(json, function (key, val) {
    if (val.type === 'kids') {
      $('#channelKids .media__container').append(`
      <a class="media__item" href="#">
        <img src="${val.imgSrc}">
      </a>
    `)
    }
  })

  // 30 per page
  // alert();
})

// Payment modals
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

// Other initialisations
$(function () {

  new WOW().init();

  inputMaskPhone.mask(inputConnectContacts);
  inputMaskCredit.mask(inputPayCredit);
});
