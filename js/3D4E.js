 function initialize() {
   
   loadLiquidFillGauge("fillgaugecomplete1", $("#fillgaugecomplete1").attr("data-fill"));
   loadLiquidFillGauge("fillgaugecomplete2", $("#fillgaugecomplete2").attr("data-fill"));
   loadLiquidFillGauge("fillgauge1", $("#fillgauge1").attr("data-fill"));
   loadLiquidFillGauge("fillgauge2", $("#fillgauge2").attr("data-fill"));
   loadLiquidFillGauge("fillgauge3", $("#fillgauge3").attr("data-fill"));
   loadLiquidFillGauge("fillgauge4", $("#fillgauge4").attr("data-fill"));

   var gridster;

  $(function () {
    
     gridster = $(".gridster ul").gridster({
       widget_base_dimensions: [100, 100],
       widget_margins: [5, 5],
       helper: 'clone'
     }).data('gridster');
    

     // resize widgets on hover
     gridster.$el
      .on('mouseenter', '> li', function () {
        gridster.resize_widget($(this), 5, 4);
      })
      .on('mouseleave', '> li', function () {
        gridster.resize_widget($(this), 3, 1);
      });

   });
   
   $(function () {
     $("a.page-scroll").bind("click", function (e) {
       var t = $(this);
       $("html, body").animate(
        {scrollTop: $(t.attr("href")).offset().top - $(".navbar").height()}
       , 750, "easeInOutQuad");
       e.preventDefault();
     });
     $("#dummy").height($(".navbar").height());
     $("#calendar").attr("height", $("#calendar").width() * 9 / 16);
     $(window).scroll(function () {
       if ($(window).scrollTop() > 800) {
         $('#right-button').stop().animate({
           right: "0"
         }, 750, "easeInOutExpo");
       } else {
         $('#right-button').stop().animate({
           right: "-35px"
         }, 750, "easeInOutExpo");
       }
     });
     $(window).resize(function () {
       $("#calendar").attr("width", "100%");
       $("#calendar").attr("height", $("#calendar").width() * 9 / 16);
     });
     var w = $(window).width() * .75;
     $('#my-slider').sliderPro({
       arrows: true,
       waitForLayers: true,
       width: w,
       height: 800,
       fade: true,
       buttons: false
     });
   });
 }
 ;