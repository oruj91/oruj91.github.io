const
  nav = $('.header__panel'),
  navButtons = $('#myTab .btn--light'),
  navH = nav.outerHeight(),
  inputMaskPhone = new Inputmask("999 - 99 - 99"),
  inputMaskCredit = new Inputmask("9999 - 9999 - 9999 - 9999"),
  inputPhoneRegister = $('#registerPhone'),
  inputPayCredit = $('#payCredit'),
  inputConnectContacts = $('#userContacts');

let lastScrollTop = 0;
let lastDirection = 0;
let movement = 0;
let currentSection;

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

localStorage.getItem('curSection')

// Language change
$(function () {
  let $btnLanguages = $('.header__panel__lang .dropdown-item');
  let $currentLangWrapper = $('.header__panel__lang .dropdown-toggle');

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
  if (localStorage.getItem('screenPosition') === null) {
    localStorage.setItem('curSectionID', 'whyWe')
  }
  $(`a[href="#${localStorage.getItem('curSectionID')}"]`).addClass('active');
});

// Navbar active button on scroll
$(window).scroll(function () {
  const screenPosition = window.pageYOffset;

  let sections = $('.content>div');
  let sectionID;

  $.each(sections, function (key, el) {
    if (screenPosition + 200 >= el.offsetTop) {
      sectionID = el.id;
    }
  });

  if (sectionID) {
    navButtons.removeClass('active');
    $(`a[href="#${sectionID}"]`).addClass('active');
    localStorage.setItem('curSectionID', sectionID);
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
      // window.location.hash = hash;
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

// Media
$(function () {
  const containerChannelAll = $('#channelAll .media__container');
  const jsonChannels = [
    {name: 'Discovery', type: 'fun', imgSrc: '../public/assets/img/chanels/discovery.jpg'},
    {name: 'Animal planet', type: 'fun', imgSrc: '../public/assets/img/chanels/animal_planet.png'},
    {name: 'BBC news', type: 'news', imgSrc: '../public/assets/img/chanels/bbc_news.png'},
    {name: 'Discovery Science', type: 'science', imgSrc: '../public/assets/img/chanels/Discovery_science.png'},
    {name: 'Discovery Travel', type: 'travel', imgSrc: '../public/assets/img/chanels/discovery-travel.jpg'},
    {name: 'Eurosport', type: 'sport', imgSrc: '../public/assets/img/chanels/eurosport.jpg'},
    {name: 'MTV', type: 'music', imgSrc: '../public/assets/img/chanels/mtv.png'},
    {name: 'Kids', type: 'kids', imgSrc: '../public/assets/img/chanels/kids.jpg'},
    {name: 'Animal planet', type: 'fun', imgSrc: '../public/assets/img/chanels/animal_planet.png'},
    {name: 'Kids', type: 'kids', imgSrc: '../public/assets/img/chanels/kids.jpg'},
    {name: 'Discovery Science', type: 'science', imgSrc: '../public/assets/img/chanels/Discovery_science.png'},
    {name: 'Eurosport', type: 'sport', imgSrc: '../public/assets/img/chanels/eurosport.jpg'},
    {name: 'BBC news', type: 'news', imgSrc: '../public/assets/img/chanels/bbc_news.png'},
    {name: 'MTV', type: 'music', imgSrc: '../public/assets/img/chanels/mtv.png'},
    {name: 'Discovery', type: 'fun', imgSrc: '../public/assets/img/chanels/discovery.jpg'},
    {name: 'MTV', type: 'music', imgSrc: '../public/assets/img/chanels/mtv.png'},
    {name: 'Discovery Travel', type: 'travel', imgSrc: '../public/assets/img/chanels/discovery-travel.jpg'},
    {name: 'Discovery Science', type: 'science', imgSrc: '../public/assets/img/chanels/Discovery_science.png'},
    {name: 'BBC news', type: 'news', imgSrc: '../public/assets/img/chanels/bbc_news.png'},
    {name: 'Eurosport', type: 'sport', imgSrc: '../public/assets/img/chanels/eurosport.jpg'},
    {name: 'Discovery', type: 'fun', imgSrc: '../public/assets/img/chanels/discovery.jpg'},
    {name: 'Kids', type: 'kids', imgSrc: '../public/assets/img/chanels/kids.jpg'},
    {name: 'Animal planet', type: 'fun', imgSrc: '../public/assets/img/chanels/animal_planet.png'},
    {name: 'Discovery', type: 'fun', imgSrc: '../public/assets/img/chanels/discovery.jpg'},
    {name: 'Animal planet', type: 'fun', imgSrc: '../public/assets/img/chanels/animal_planet.png'},
    {name: 'BBC news', type: 'news', imgSrc: '../public/assets/img/chanels/bbc_news.png'},
    {name: 'Discovery Science', type: 'science', imgSrc: '../public/assets/img/chanels/Discovery_science.png'},
    {name: 'MTV', type: 'music', imgSrc: '../public/assets/img/chanels/mtv.png'},
    {name: 'Eurosport', type: 'sport', imgSrc: '../public/assets/img/chanels/eurosport.jpg'},
    {name: 'Discovery Travel', type: 'travel', imgSrc: '../public/assets/img/chanels/discovery-travel.jpg'},
    {name: 'Kids', type: 'kids', imgSrc: '../public/assets/img/chanels/kids.jpg'},
    {name: 'Animal planet', type: 'fun', imgSrc: '../public/assets/img/chanels/animal_planet.png'},
    {name: 'Kids', type: 'kids', imgSrc: '../public/assets/img/chanels/kids.jpg'},
    {name: 'Discovery Science', type: 'science', imgSrc: '../public/assets/img/chanels/Discovery_science.png'},
    {name: 'Eurosport', type: 'sport', imgSrc: '../public/assets/img/chanels/eurosport.jpg'},
    {name: 'BBC news', type: 'news', imgSrc: '../public/assets/img/chanels/bbc_news.png'},
    {name: 'MTV', type: 'music', imgSrc: '../public/assets/img/chanels/mtv.png'},
    {name: 'Discovery', type: 'fun', imgSrc: '../public/assets/img/chanels/discovery.jpg'},
    {name: 'MTV', type: 'music', imgSrc: '../public/assets/img/chanels/mtv.png'},
    {name: 'Discovery Travel', type: 'travel', imgSrc: '../public/assets/img/chanels/discovery-travel.jpg'},
    {name: 'BBC news', type: 'news', imgSrc: '../public/assets/img/chanels/bbc_news.png'},
    {name: 'Discovery Science', type: 'science', imgSrc: '../public/assets/img/chanels/Discovery_science.png'},
    {name: 'Eurosport', type: 'sport', imgSrc: '../public/assets/img/chanels/eurosport.jpg'},
    {name: 'Discovery', type: 'fun', imgSrc: '../public/assets/img/chanels/discovery.jpg'},
    {name: 'Kids', type: 'kids', imgSrc: '../public/assets/img/chanels/kids.jpg'},
    {name: 'Animal planet', type: 'fun', imgSrc: '../public/assets/img/chanels/animal_planet.png'},
    {name: 'Discovery', type: 'fun', imgSrc: '../public/assets/img/chanels/discovery.jpg'},
    {name: 'Discovery Travel', type: 'travel', imgSrc: '../public/assets/img/chanels/discovery-travel.jpg'},
    {name: 'Discovery Science', type: 'science', imgSrc: '../public/assets/img/chanels/Discovery_science.png'},
    {name: 'Animal planet', type: 'fun', imgSrc: '../public/assets/img/chanels/animal_planet.png'},
    {name: 'BBC news', type: 'news', imgSrc: '../public/assets/img/chanels/bbc_news.png'},
    {name: 'MTV', type: 'music', imgSrc: '../public/assets/img/chanels/mtv.png'},
    {name: 'Eurosport', type: 'sport', imgSrc: '../public/assets/img/chanels/eurosport.jpg'}
  ];
  const jsonPackets = [
    {name: 'Discovery', packet: 'econom', imgSrc: '../public/assets/img/chanels/discovery.jpg'},
    {name: 'Discovery', packet: 'family', imgSrc: '../public/assets/img/chanels/discovery.jpg'},
    {name: 'Discovery', packet: 'student', imgSrc: '../public/assets/img/chanels/discovery.jpg'},
    {name: 'Discovery', packet: 'super', imgSrc: '../public/assets/img/chanels/discovery.jpg'},
    {name: 'Discovery', packet: 'premium', imgSrc: '../public/assets/img/chanels/discovery.jpg'},
    {name: 'Animal planet', packet: 'standard', imgSrc: '../public/assets/img/chanels/animal_planet.png'},
    {name: 'Animal planet', packet: 'family', imgSrc: '../public/assets/img/chanels/animal_planet.png'},
    {name: 'Animal planet', packet: 'student', imgSrc: '../public/assets/img/chanels/animal_planet.png'},
    {name: 'Animal planet', packet: 'premium', imgSrc: '../public/assets/img/chanels/animal_planet.png'},
    {name: 'BBC news', packet: 'family', imgSrc: '../public/assets/img/chanels/bbc_news.png'},
    {name: 'BBC news', packet: 'premium', imgSrc: '../public/assets/img/chanels/bbc_news.png'},
    {name: 'Discovery Science', packet: 'standard', imgSrc: '../public/assets/img/chanels/Discovery_science.png'},
    {name: 'Discovery Science', packet: 'student', imgSrc: '../public/assets/img/chanels/Discovery_science.png'},
    {name: 'Discovery Science', packet: 'premium', imgSrc: '../public/assets/img/chanels/Discovery_science.png'},
    {name: 'Discovery Travel', packet: 'super', imgSrc: '../public/assets/img/chanels/discovery-travel.jpg'},
    {name: 'Discovery Travel', packet: 'premium', imgSrc: '../public/assets/img/chanels/discovery-travel.jpg'},
    {name: 'Eurosport', packet: 'standard', imgSrc: '../public/assets/img/chanels/eurosport.jpg'},
    {name: 'Eurosport', packet: 'family', imgSrc: '../public/assets/img/chanels/eurosport.jpg'},
    {name: 'Eurosport', packet: 'super', imgSrc: '../public/assets/img/chanels/eurosport.jpg'},
    {name: 'Eurosport', packet: 'premium', imgSrc: '../public/assets/img/chanels/eurosport.jpg'},
    {name: 'MTV', packet: 'family', imgSrc: '../public/assets/img/chanels/mtv.png'},
    {name: 'MTV', packet: 'super', imgSrc: '../public/assets/img/chanels/mtv.png'},
    {name: 'MTV', packet: 'premium', imgSrc: '../public/assets/img/chanels/mtv.png'},
    {name: 'Kids', packet: 'standard', imgSrc: '../public/assets/img/chanels/kids.jpg'},
    {name: 'Kids', packet: 'econom', imgSrc: '../public/assets/img/chanels/kids.jpg'},
    {name: 'Kids', packet: 'family', imgSrc: '../public/assets/img/chanels/kids.jpg'},
    {name: 'Kids', packet: 'premium', imgSrc: '../public/assets/img/chanels/kids.jpg'}
  ];

  let item;
  let channelAllArr = [];
  let packetStandard = [];

  function showModalChannel (title, imgSrc) {
    $('#modalChannelTitle').text(title);
    $('#modalChannelImg').attr('src', imgSrc);

    $('#modalChannel').modal();
    // $.ajax({
    //   url: 'requestChannelByID',
    //   data: id,
    //   success: function (jsonChannels) {
    //     $('#modalChannel').modal();
    //   }
    // })
  }

  $.each(jsonChannels, function (key, val) {
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

  $.each(jsonChannels, function (key, val) {
    if (val.type === 'fun') {
      $('#channelFun .media__container').append(`
      <a onclick="showModalChannel(${val.name}, ${val.imgSrc})" class="media__item" href="#">
        <img src="${val.imgSrc}">
      </a>
    `)
    }
  })
  $.each(jsonChannels, function (key, val) {
    if (val.type === 'news') {
      $('#channelNews .media__container').append(`
      <a onclick="showModalChannel(${val.name}, ${val.imgSrc})" class="media__item" href="#">
        <img src="${val.imgSrc}">
      </a>
    `)
    }
  })
  $.each(jsonChannels, function (key, val) {
    if (val.type === 'science') {
      $('#channelScience .media__container').append(`
      <a onclick="showModalChannel(${val.name}, ${val.imgSrc})" class="media__item" href="#">
        <img src="${val.imgSrc}">
      </a>
    `)
    }
  })
  $.each(jsonChannels, function (key, val) {
    if (val.type === 'travel') {
      $('#channelTravel .media__container').append(`
      <a onclick="showModalChannel(${val.name}, ${val.imgSrc})" class="media__item" href="#">
        <img src="${val.imgSrc}">
      </a>
    `)
    }
  })
  $.each(jsonChannels, function (key, val) {
    if (val.type === 'sport') {
      $('#channelSport .media__container').append(`
      <a class="media__item" href="#">
        <img src="${val.imgSrc}">
      </a>
    `)
    }
  })
  $.each(jsonChannels, function (key, val) {
    if (val.type === 'music') {
      $('#channelMusic .media__container').append(`
      <a class="media__item" href="#">
        <img src="${val.imgSrc}">
      </a>
    `)
    }
  })
  $.each(jsonChannels, function (key, val) {
    if (val.type === 'kids') {
      $('#channelKids .media__container').append(`
      <a class="media__item" href="#">
        <img src="${val.imgSrc}">
      </a>
    `)
    }
  })

  $.each(jsonPackets, function (key, val) {
    if (val.packet === 'standard') {
      item = `
        <a onclick="showModalChannel('${val.name}', '${val.imgSrc}')" class="media__item">
          <img src="${val.imgSrc}" alt="${val.name}">      
        </a>
      `;
      $('#packetStandard .media__container').append(item);
    }
  })
  $.each(jsonPackets, function (key, val) {
    if (val.packet === 'econom') {
      item = `
        <a onclick="showModalChannel('${val.name}', '${val.imgSrc}')" class="media__item">
          <img src="${val.imgSrc}" alt="${val.name}">      
        </a>
      `;
      $('#packetEconom .media__container').append(item);
    }
  })
  $.each(jsonPackets, function (key, val) {
    if (val.packet === 'family') {
      item = `
        <a onclick="showModalChannel('${val.name}', '${val.imgSrc}')" class="media__item">
          <img src="${val.imgSrc}" alt="${val.name}">      
        </a>
      `;
      $('#packetFamily .media__container').append(item);
    }
  })
  $.each(jsonPackets, function (key, val) {
    if (val.packet === 'student') {
      item = `
        <a onclick="showModalChannel('${val.name}', '${val.imgSrc}')" class="media__item">
          <img src="${val.imgSrc}" alt="${val.name}">      
        </a>
      `;
      $('#packetStudent .media__container').append(item);
    }
  })
  $.each(jsonPackets, function (key, val) {
    if (val.packet === 'super') {
      item = `
        <a onclick="showModalChannel('${val.name}', '${val.imgSrc}')" class="media__item">
          <img src="${val.imgSrc}" alt="${val.name}">      
        </a>
      `;
      $('#packetSuper .media__container').append(item);
    }
  })
  $.each(jsonPackets, function (key, val) {
    if (val.packet === 'premium') {
      item = `
        <a onclick="showModalChannel('${val.name}', '${val.imgSrc}')" class="media__item">
          <img src="${val.imgSrc}" alt="${val.name}">      
        </a>
      `;
      $('#packetPremium .media__container').append(item);
    }
  })
})

// Payment
$(function () {
  const $packetNavButtons = $('#navPacket .nav-link');
  let $activePacketBtn = $('#navPacket .nav-link.active');

  $packetNavButtons.click(function (e) {
    $activePacketBtn = $(e.target);
    $('#modalPayTitle').text($activePacketBtn.text());
  })

  $('#buyPacket').click(function () {
    $('#modalPayTitle').text($activePacketBtn.text());
    $('#modalPay').modal();
  })
})

// Registration
$(function () {
  inputMaskPhone.mask(inputPhoneRegister);

  $('#formRegister').formValidation({
    icon: {
      valid: 'fontawesome-check',
      invalid: 'fontawesome-times',
      validating: 'fontawesome-sync'
    },
    fields: {
      registerPhone: {
        validators: {
          regexp: {
            regexp: /\d{3} - \d{2} - \d{2}/,
            // regexp: /^0\d{9}$/,
            message: '• Please\, finish number'
          },
          notEmpty: {
            message: '• Required field'
          },

        }
      },
      registerPassword: {
        validators: {
          notEmpty: {
            message: '• Required field'
          }
        }
      },
      registerPasswordRepeat: {
        validators: {
          notEmpty: {
            message: '• Required field'
          }
        }
      }
    }
  })
  .on('success.form.fv', function(e) {
    e.preventDefault();
    console.log('form success');
    window.location.href = "index.html";
  })
  .on('err.form.fv', function(e) {
    e.preventDefault();
    console.log('form error');
    console.log( $('#registerPhone').val() );
  });
})

// Other initialisations
$(function () {

  new WOW().init();

  inputMaskCredit.mask(inputPayCredit);
});
