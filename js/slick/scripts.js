$(document).ready(function() {

    $('.autoplay').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        accessibility: true,
        arrows: true,
        variableWidth: true,
        adaptiveHeight: true,
        
    });

});