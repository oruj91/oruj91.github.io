const $select2 = $('.select2');
const $eventFormCollapse = $('#eventFormCollapse');
const $form = $('#event_form');
const $eventSubmitBtn = $('#eventSubmitBtn');
const $eventList = $('#eventList');

let $btnSignHeader = $('#headerSignBtn');

function getRandomColor() {
    let color;
    let n = Math.floor(Math.random() * 6) + 1;

    if (n === 1) {color = '#67999A'}
    else if (n === 2) {color = '#CD6667'}
    else if (n === 3) {color = '#CC9866'}
    else if (n === 4) {color = '#C1B859'}
    else if (n === 5) {color = '#CB6955'}
    else if (n === 6) {color = '#5286B8'}

    return color ;
}
function getRundomInterval() {
    return (Math.random() *(9-2)+2).toFixed(0)*1000;
}

function renderEventCard() {
    let item = `
        <div class="card event__item" style="background: ${getRandomColor()}">
            <div class="carousel slide carousel-fade" data-ride="carousel" data-interval="${getRundomInterval()}">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 h-100"" src="../public/assets/images/slider/46464646484.jpg">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 h-100" src="../public/assets/images/slider/571168164132.jpg">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 h-100" src="../public/assets/images/slider/584241542418.jpg">
                    </div>
                </div>
            </div>
            <div class="event__description">
                <h5 class="card-title">JS rendered example</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div class="event__state">22/NOV/2018 - 25/NOV/2018</div>
        </div>
    `;
    $('.event__list_wrapper').append(item);
}

for (i = 0; i < 5; i++) {
    renderEventCard();
}

$(function () {
    "use strict";
    
    $(".preloader").fadeOut();
    
    $('.dropify').dropify();

    $('.fotorama').fotorama();

    // SEARCH IN HEADER
    $('.btn_search').on('click', function () {
        $('.header__search').toggleClass('active');
    });
    
    // DATA RANGE
    $('#date-range').datepicker({
        toggleActive: true,
        todayHighlight: true,
        startDate: '+0d',
        format: 'dd.mm.yyyy'
    });
    
    // LOGIN
    if (sessionUsername === "") {
        $('.header__profile').hide();
    } else {
        $.ajax({
            url:'/user/current_status',
            data: {
                login: sessionUsername
            },
            type: 'post',
            dataType: 'json',
            success: function(data) {
                if (data[0] && data[0].activation_status !== 'active') {
                    $('.activation_status').prop('hidden', false);
                }
            }
        });

        $.ajax({
            url:'/user/common_user_info',
            data: {
                email: sessionUsername
            },
            type: 'post',
            dataType: 'json',
            success: function(data) {
                console.log(data);
                if (data) {
                    if (typeof data.fb !== 'undefined') {
                        let datafb = data.fb;
                        if (datafb.error === 'expired') {
                            $.redirect("/facebook/fblink",{},"GET");
                        } else {
                            $('#user_mail').text(datafb.email);
                            $('#user_name').text(datafb.name);
                            $('#user_image').prepend('<img id="theImg" src="'+datafb.picture.data.url+'" alt="user" />');
                            $('#user_image_small').prepend('<img id="theImg" src="'+datafb.picture.data.url+'" alt="user" class="img-circle" />');
                            $('#user_image_profile').prepend('<img id="theImg" src="'+datafb.picture.data.url+'" alt="user" class="profile-pic" />');
                        }
                    }
                    else if (typeof data.local !== 'undefined') {
                        let datalocal = data.local;
                        console.log(datalocal);
                        $('#user_mail').text(datalocal.mail);
                        $('#user_name').text(datalocal.firstname);
                        $('#user_image').prepend('<img id="theImg" src="'+datalocal.picture+'" alt="user" />');
                        $('#user_image_small').prepend('<img id="theImg" src="'+datalocal.picture+'" alt="user" class="img-circle" />');
                        $('#user_image_profile').prepend('<img id="theImg" src="'+datalocal.picture+'" alt="user" class="profile-pic" />');
                    }
                }
            }
        });
        $btnSignHeader.hide();
        $btnSignHeader.removeClass('d-md-flex');
        $('#signBtn').hide();
    }

    $select2.select2();

    let selected = [];

    // $.getJSON(reactorReqCountries, function (data) {
    //     var cntr = 0;
    //     $.each(data, function (key, val) {
    //         if(cntr === 0) {
    //             selected = val.id;
    //             $('#country_id').append('<option value="' + val.id + '" selected>' + val.name + '</option>');
    //             cntr++;
    //         } else {
    //             $('#country_id').append('<option value="' + val.id + '">' + val.name + '</option>');
    //         }
    //     });
    // }).always(function() {
    //     $.getJSON(reactorReqStates,{country_id: selected} , function (data) {
    //         $.each(data, function (key, val) {
    //             $('#state_id').append('<option value="' + val.id + '">' + val.name + '</option>');
    //         });
    //     }).always(function() {
    //         $.getJSON(reactorReqCities,{state_id: selected }, function (data) {
    //             $.each(data, function (key, val) {
    //                 $('#city_id').append('<option value="' + val.id + '">' + val.name + '</option>');
    //             });
    //         });
    //     })
    // });

    $('#country_id').on('change', function(){
        console.log('change country_id');
        $("#state_id option").remove();
        $("#city_id option").remove();
        selected = $('#country_id').val()
    });
    $('#state_id').on('change', function(){
        $("#city_id option").remove();
        selected = $('#state_id').val()
    });
    $select2.on('change', function(){
        console.log(selected); //Get the multiple values selected in an array
        console.log(selected.length); //Length of the array
        $.getJSON(reactorReqStates,{country_id: selected} , function (data) {
            $.each(data, function (key, val) {
                $('#state_id').append('<option value="' + val.id + '">' + val.name + '</option>');
            });
        })
            .always(function() {
                $.getJSON(reactorReqCities,{state_id: selected }, function (data) {
                    $.each(data, function (key, val) {
                        $('#city_id').append('<option value="' + val.id + '">' + val.name + '</option>');
                    });
                });
            })
    });
    $form.parsley({
        errorsContainer: function(el) {
            return el.$element.closest('.form-group');
        }
    })
        .on('field:validated', function() {
            var ok = $('.parsley-error').length === 0;
            $('.bs-callout-info').toggleClass('hidden', !ok);
            $('.bs-callout-warning').toggleClass('hidden', ok);
        });
    $form.on('submit', function(e) {
        var f = $(this);
        f.parsley().validate();

        if (f.parsley().isValid()) {
            $eventSubmitBtn.attr('disabled', 'disabled');
            console.log('VALID');
            var formData = new FormData($("#event_form")[0]);
            console.log(formData);
            $.ajax({
                type: "POST",
                enctype: 'multipart/form-data',
                url: reactorInsertEvent,
                data: formData,
                processData: false,
                contentType: false,
                cache: false,
                timeout: 600000,
                success: function (response) {
                    $eventSubmitBtn.removeAttr("disabled");
                    if (response === 'ok') {
                        $eventFormCollapse.collapse("hide");
                        $eventFormCollapse.removeClass("expanded");
                        eventRenderer();
                    }
                },
                error: function (e) {
                    $eventSubmitBtn.removeAttr("disabled");
                    console.log(response)
                }
            });
        }
        e.preventDefault();
    });

});


// function addEventBtn() {
//     let res = '321';
//     let isExpanded;

//     if (res === '0') {
//         $.redirect('/signin',{},'GET');
//     }
//     else {
//         isExpanded = $eventFormCollapse.hasClass("expanded");
//     }
//     if (isExpanded) {
//         $eventFormCollapse.collapse("hide");
//         $eventFormCollapse.removeClass("expanded");
//     } else {
//         $eventFormCollapse.collapse('show');
//         $eventFormCollapse.addClass("expanded");
//     }
// }

$(document).on("keypress", $form, function(event) {
    //prevent  submit on press ENTER key
    return event.keyCode !== 13;
});