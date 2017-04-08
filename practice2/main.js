

// fade in / out
$(document).ready(function(){
  $("#logo").on("click", function(){
    $(this).fadeOut(3000).fadeIn(2000);
    $("#lead-banner").slideDown(2000);
  });

// bind on / off
var list = $("h3");
 list.on("click", function(){
  $(this).css({ "text-decoration": "underline"});
  list.off();
  });

$("#client-head").on("click", function(){
    $(this).css({"background-color": "#003300"});
});

//  mouseover
$(".banner-title").next().on("mouseover", function(){
  $(this).hide(1000);
});

// slideUp
$("#info").next().on("click", function(){
  $("#lead-banner").slideUp(2000);
});


});
