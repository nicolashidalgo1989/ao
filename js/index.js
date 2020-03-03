$('document').ready(function() {
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
    var slideActive = $('#carousel .carousel-item.active');
    if (slideActive.hasClass('light')) {
        $('.hero').addClass('is-dark');
        $('.hero').removeClass('is-light');
    } else {
        $('.hero').addClass('is-light');
        $('.hero').removeClass('is-dark');
    }
});