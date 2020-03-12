document.addEventListener('DOMContentLoaded', function() {

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
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1
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

});