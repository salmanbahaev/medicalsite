$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        easing: '_linear_',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        TouchThereshold: 10,
        TouchMove: true,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true,
        rows: 1,
        slidesPerRow: 1,
        vertical: false,
        verticalSwiping: false,
        asNavFor: ".sliderbig", //связать слайдеры первый
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
        ],
        // appendArrows:$('.content') перенести стрелки
        // appendDots:$('.content') перенести точки
    });

    // второй слайдер
    $('.sliderbig').slick({
        arrows: false,
        slidesToShow: 1,
        fade: true,
        asNavFor: ".slider",   //связать слайдеры второй
    })


});