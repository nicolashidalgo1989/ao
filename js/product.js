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