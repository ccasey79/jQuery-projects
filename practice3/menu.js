
$(document).ready(function(){

    $("#burger-nav").on("click", function(){

        $("header nav ul").toggleClass("open");

    });

    $(".logo").on("click", function(){
      $("#main-banner").slideUp(3000);
    });

    $("h4").on("mouseover", function(){
      $(this).css({ "color": "#ff8080"});
    });

    $("#latest-work h2").animate({"margin-left" : "42%"}, 3000);


    $("#selling-points li").on("click", function(){
      $(this).css({"background": "#c2d6d6"});
    });


});
