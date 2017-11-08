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

        });

          var buttons = getButtons(prevPageToken, nextPageToken);

          // Display buttons
          $('#buttons').append(buttons);
     }
  );
}

// Next Page function

function nextPage() {
  var token = $('#next-button').data('token');
  var q = $('#next-button').data('query');

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
      pageToken: token,
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

      });

        var buttons = getButtons(prevPageToken, nextPageToken);

        // Display buttons
        $('#buttons').append(buttons);
   }
 );
}

// Previous Page function

function prevPage() {
  var token = $('#prev-button').data('token');
  var q = $('#prev-button').data('query');

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
      pageToken: token,
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

      });

        var buttons = getButtons(prevPageToken, nextPageToken);

        // Display buttons
        $('#buttons').append(buttons);
   }
 );
}

// Build output

function getOutput(item) {
  var videoId = item.id.videoId;
  var title = item.snippet.title;
  var description = item.snippet.description;
  var thumb = item.snippet.thumbnails.high.url;
  var channelTitle = item.snippet.channelTitle;
  var videoDate = item.snippet.publishedAt;

  // Build Output string

  var output = '<li>' +
  '<div class="list-left">' +
  '<img src="'+thumb+'">' +
  '</div>' +
  '<div class="list-right">' +
  '<h3>'+title+'</h3>' +
  '<small>By <span class="cTitle">'+channelTitle+'</span> on '+videoDate+'</small>' +
  '<p>'+description+'</p>' +
  '</div>' +
  '</li>' +
  '<div class="clearfix"></div>' +
  '';

  return output;
}

  // Build the Buttons

function getButtons(prevPageToken, nextPageToken) {
  if(!prevPageToken) {
      var btnoutput = '<div class="button-container">' +
      '<button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'"' +
      'onClick="nextPage();">Next Page</button></div>';
  } else {
      var btnoutput = '<div class="button-container">' +
      '<button id="prev-button" class="paging-button" data-token="'+prevPageToken+'" data-query="'+q+'"' +
      'onClick="prevPage();">Previous Page</button>' +
      '<button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'"' +
      'onClick="nextPage();">Next Page</button></div>';
  }

  return btnoutput;
}
