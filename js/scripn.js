$(document).ready(function () {

    $('.click1').click(function () {
        $('.bg-opasity').css('display', 'block');
        $('.bg-opasity').fadeIn(0.5);
    });

    $('.click2').click(function () {
        $('.bg-opasity').css('display', 'none');
        $('.bg-opasity').fadeOut();
    });







    // $('.slider').slick({
    //     dots: true,
    // });


    // $('.click').click(function (event) {
    //     $('.bg-opasity').toggleClass('active');
    // });

})

