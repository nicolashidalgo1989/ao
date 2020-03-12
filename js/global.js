document.addEventListener('DOMContentLoaded', function() {

    //variables 
    var viewport = document.documentElement.clientWidth;
    var nav = document.querySelector('.navbar');
    var header = document.querySelector('.header-container');
    var togglerOpen = document.querySelector('.navbar-toggler');
    var togglerClose = document.querySelector('.navbar-toggler-close');
    var toggle = document.querySelector('#toggle');

    //listeners
    togglerOpen.addEventListener('click', openMenu);
    togglerClose.addEventListener('click', closeMenu);
    window.addEventListener('scroll', headerChanges);

    //functions   
    function openMenu() {
        console.log('open');
        toggle.classList.add('show');
    }

    function closeMenu() {
        console.log('close');
        toggle.classList.remove('show');
    }

    function headerChanges() {

        var scroll = $(window).scrollTop();
        var slideActive = $('#carousel.carousel-home .active');

        if (scroll >= 78) {

            nav.classList.add('sticky');
            header.classList.remove('is-dark');

        } else if (scroll < 78 && slideActive.hasClass('dark') && viewport > 480) {

            header.classList.add('is-dark');
            nav.classList.remove('sticky');

        } else {

            nav.classList.remove('sticky');

        }

    }

});