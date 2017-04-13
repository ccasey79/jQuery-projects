
$(document).ready(function(){

    $("#burger-nav").on("click", function(){

        $("header nav ul").toggleClass("open");

    });

    $(".logo").on("click", function(){
      $("#main-banner").slideUp(3000);
    });

    $("#latest-work h2").animate({"margin-left" : "42%"}, 3000);

    $("#selling-points li").on("mouseover", function(){
      $(this).css({ border: "1px solid purple"});
    });


});
