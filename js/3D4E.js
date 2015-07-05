function initialize() {
    $(function () {
        $("a.page-scroll").bind("click", function (e) {
            var t = $(this);
            $("html, body").stop().animate({scrollTop: $(t.attr("href")).offset().top - $(".navbar").height()}, 750, "easeInOutExpo");
            e.preventDefault();
        });
    }
    );
    
    $("#dummy").attr("min-height", $(".navbar").height());
    
    var w = $(window).width() * .75;
    $('#my-slider').sliderPro({
        arrows: true,
        waitForLayers: true,
        width: w,
        height: 800,
        fade: true,
        buttons: false,
    });
}
