console.log('JS Loaded!');

// ACCORDION
var action = 'click';
var speed = 500;

$(document).ready(function(){

  // Question handler
  $('li.q').on(action, function(){

    // Get next element
    $(this).next()
      .slideToggle(speed)

        // Select all other answers
        .siblings('li.a')
          .slideUp();

  // To rotate the arrow image
  // Get image for active question
  var img = $(this).children('img');

  // Remove the 'rotate' class from all images except the active one
  $('img').not(img).removeClass('rotate');

  // Toggle rotate rotate class
  img.toggleClass('rotate');

  });
});
