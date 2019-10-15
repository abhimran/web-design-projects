var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

$('.slider-design').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    fadeSpeed: 1500,
    asNavFor: '.slider-nav',
    autoplay: true
});

$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-design',
    dots: true,
    arrows: false,
    centerMode: true,
    focusOnSelect: true

});
