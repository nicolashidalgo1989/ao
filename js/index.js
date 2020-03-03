$(document).ready(function() {

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

});

$('#carousel').on('slide.bs.carousel', function() {

    var scroll = $(window).scrollTop();
    var hero = $('.hero');
    var slideActive = $('#carousel .active');
    var pageProduct = $('.producto-detalle');

    if (!pageProduct && slideActive.hasClass('light') && scroll < 200) {

        hero.addClass('is-dark');
        hero.removeClass('is-light');

    } else if (!pageProduct && slideActive.hasClass('dark') && scroll < 200) {

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

    if (scroll >= 200) {
        header.addClass("sticky");
    } else {
        header.removeClass("sticky");
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