console.log('JS loaded!');

$(document).ready(function(){

  // EXPANDING THE SEARCH BAR BOX
  // Search Bar Handler

  var searchfield = $('#query');
  var icon = $('#search-btn');

  // Focus Event Handler

  $(searchfield).on('focus', function(){
    $(this).animate({
      width: '100%'
    }, 400);
    $(icon).animate({
      right: '10px'
    }, 400);
  });

  // Blur Event Handler

  $(searchfield).on('blur', function(){
      if (searchfield.val() == "") {
        $(searchfield).animate({
          width: '45%'
        }, 400, function(){});
        $(icon).animate({
          right: '360px'
        }, 400, function(){});
      }
  });



});
