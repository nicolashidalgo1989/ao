document.addEventListener('DOMContentLoaded', function() {

    $('#carousel.carousel').on('slide.bs.carousel', function() {

        var scroll = $(window).scrollTop();
        var viewport = document.documentElement.clientWidth;
        var header = document.querySelector('.header-container');
        var slideActive = $('#carousel .active');

        if (viewport > 480) {

            if (scroll < 78) {

                if (slideActive.hasClass('light')) {

                    header.classList.add('is-dark');
                    header.classList.remove('is-light');

                } else if (slideActive.hasClass('dark')) {

                    header.classList.add('is-light');
                    header.classList.remove('is-dark');

                }

            } else if (scroll > 78) {

                if (slideActive.hasClass('light') || slideActive.hasClass('dark')) {

                    header.classList.add('is-light');
                    header.classList.remove('is-dark');

                }

            }

        }

    });

    var btnSlideDown = document.querySelectorAll(".btn-slide-down");

    btnSlideDown.forEach(function(anchor) {

        anchor.addEventListener('click', function(e) {

            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

        });

    });

    $('.productos-carousel').slick({

        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        draggable: true,
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


});