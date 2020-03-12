document.addEventListener('DOMContentLoaded', function() {

    var viewport = document.documentElement.clientWidth;

    if (viewport > 480) {

        document.querySelector('.producto-detalle').classList.add('is-light');

    }

    window.addEventListener('scroll', stickySliderProduct);

    function stickySliderProduct() {

        var scroll = $(window).scrollTop();
        var car = document.querySelector('#carousel.product');
        var foo = document.querySelector("#footer");
        console.log(foo.offsetTop);

        if (viewport > 480) {

            if (scroll >= 78) {

                car.style.position = 'sticky';
                car.style.top = 78 + 'px';

            } else if (scroll <= 78) {

                car.style.position = 'sticky';
                car.style.top = '';

            }

            if (car.offsetTop + car.height > foo.offsetTop) {

                console.log(car.offsetTop);

                car.style.position = 'fixed';
                car.style.top = -(car.offsetTop + car.height - foo.offsetTop) + 'px';

            }

        }

    }

    $('#carousel.carousel.product').on('slide.bs.carousel', function() {

        var scroll = $(window).scrollTop();
        var header = $('.header-container');
        var slideActive = $('#carousel .active');

        if (viewport < 480) {

            if (slideActive.hasClass('light') && scroll < 200 && viewport > 480) {

                header.addClass('is-dark');
                header.removeClass('is-light');

            } else if (slideActive.hasClass('dark') && scroll < 200 && viewport > 480) {

                header.addClass('is-light');
                header.removeClass('is-dark');

            } else {

                header.addClass('is-light');
                header.removeClass('is-dark');

            }

        } else {

            header.addClass('is-light');
            header.removeClass('is-dark');

        }

    });

    $('.badge').on('click', function(e) {

        $(this).siblings('.badge').removeClass('active');
        $(this).addClass('active');

    });


});