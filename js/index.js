$(document).ready(function() {

    $('.responsive').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        //centerPadding: '15px',
        prevArrow: '<button type="button" class="slick-arrow prev"></button>',
        nextArrow: '<button type="button" class="slick-arrow next"></button>'
    });

    $('.owl-carousel.productos').owlCarousel({

        margin: 0,
        responsiveClass: true,
        autoWidth: true,

        responsive: {
            0: {
                items: 2,
                mouseDrag: true,
                touchDrag: true
            },
            600: {
                items: 2,
                mouseDrag: false,
                touchDrag: false
            },
            1000: {
                items: 2,
                mouseDrag: false,
                touchDrag: false
            }
        }

    });

    $('.owl-carousel.aceites').owlCarousel({

        margin: 5,
        responsiveClass: true,
        autoWidth: true,

        responsive: {
            0: {
                items: 2,
                margin: 30,
                mouseDrag: true,
                touchDrag: true,
                autoWidth: false
            },
            600: {
                items: 3,
                mouseDrag: false,
                touchDrag: false
            },
            1000: {
                items: 3,
                mouseDrag: false,
                touchDrag: false
            }

        }

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
    var pageProduct = $('.producto-detalle');

    if (scroll >= 65) {
        header.addClass("sticky");
        $('#carousel.product').addClass('sticky');
        pageProduct.css('padding-top', '78px');
    } else {
        header.removeClass("sticky");
        $('#carousel.product').removeClass('sticky');
        pageProduct.css('padding-top', '140px');
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