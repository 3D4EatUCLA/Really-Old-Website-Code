$(document).ready(function() {

    $('.autoplay').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        adaptiveHeight: true, 
    });

}); 

$(document).ready(function() {
    
     gridster = $(".gridster ul").gridster({
       widget_base_dimensions: [100, 100],
       widget_margins: [5, 5],
       helper: 'clone'
     }).data('gridster');
}); 


