$(document).ready(function () {
    $('.header__block-right').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
    });

    $('.slider').slick({
        dots: true,
    });

})

