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

   $('#search-form').submit(function(e){
      e.preventDefault();
      });
})



  function search() {
    // Clear results

    $('#results').html('');
    $('#buttons').html('');

    // GET Form Input

    q = $('#query').val();

    // Run GET request on API

    $.get(
      "https://www.googleapis.com/youtube/v3/search", {
        part: 'snippet, id',
        q: q,
        type: 'video',
        key: 'AIzaSyDb4vnhnPmvuZqOGiZ1ygqSzL_m6COMvTw'},
        function(data) {
          var nextPageToken = data.nextPageToken;
          var prevPageToken = data.prevPageToken;

          // Log Data - from API (youTube)
          console.log(data);

          $.each(data.items, function(i, item){

          // Get Output
          var output = getOutput(item);

          // Display Results
          $('#results').append(output);


          })
     }
  );
}
