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

var slideProduct = document.querySelector('#carousel.product');
var footer = document.querySelector('#footer');

function checkOffset() {
    function getRectTop(el) {
        var rect = el.getBoundingClientRect();
        return rect.top;
    }

    if ((getRectTop(slideProduct) + document.body.scrollTop) + slideProduct.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10)
        slideProduct.style.position = 'absolute';
    if (document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
        slideProduct.style.position = 'fixed'; // restore when you scroll up

    //slideProduct.innerHTML = document.body.scrollTop + window.innerHeight;
}

document.addEventListener("scroll", function() {
    checkOffset();
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