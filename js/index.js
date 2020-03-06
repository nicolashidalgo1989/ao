$(document).ready(function() {

    $('.productos-carousel').slick({

        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        draggable: false,
        centerMode: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                draggable: false
            }
        }, {
            breakpoint: 608,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                variableWidth: true,
                infinite: true,
                draggable: true,
                centerMode: false,
            }
        }]

    });

    $('.aceites-carousel').slick({

        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        draggable: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                draggable: false
            }
        }, {
            breakpoint: 608,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                variableWidth: true,
                infinite: true,
                draggable: true
            }
        }]

    });

    $('.premios').slick({

        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-arrow prev"></button>',
        nextArrow: '<button type="button" class="slick-arrow next"></button>',
        variableWidth: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 608,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]

    });

    $('.prensa').slick({

        arrows: false,
        draggable: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 608,
            settings: {
                draggable: true,
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                draggable: true,
                slidesToShow: 1
            }
        }]

    });

    $('.add').click(function(e) {
        console.log($(this).prev().val());
        if ($(this).prev().val() < 3) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });

    $('.sub').click(function(e) {
        console.log($(this).next().val());
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });

});

$('#carousel.carousel-home').on('slide.bs.carousel', function() {

    var scroll = $(window).scrollTop();
    var hero = $('.hero');
    var slideActive = $('#carousel .active');

    if (slideActive.hasClass('light') && scroll < 200) {

        hero.addClass('is-dark');
        hero.removeClass('is-light');

    } else if (slideActive.hasClass('dark') && scroll < 200) {

        hero.addClass('is-light');
        hero.removeClass('is-dark');

    } else {

        hero.addClass('is-light');
        hero.removeClass('is-dark');

    }


});

$(window).scroll(function() {

    var header = $('.navbar');
    var scroll = $(window).scrollTop();
    var hero = $('.hero');
    var pageProduct = $('.producto-detalle');
    var viewport = $(window).width();

    if (scroll >= 65) {

        header.addClass("sticky");

    } else if (scroll > 660) {

        hero.addClass('is-light');
        hero.removeClass('is-dark');

    } else {

        header.removeClass("sticky");

    }

    if (viewport > 480) {

        if (scroll >= 65) {

            $('#carousel.product').addClass('sticky');
            pageProduct.css('padding-top', '78px');

        } else {

            $('#carousel.product').removeClass('sticky');
            pageProduct.css('padding-top', '140px');

        }

    }

});

$(".btn-slide-down").on('click', function(event) {

    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {
            window.location.hash = hash;
        });
    }

});

$('.badge').on('click', function(e) {

    $(this).siblings('.badge').removeClass('active');
    $(this).addClass('active');

});