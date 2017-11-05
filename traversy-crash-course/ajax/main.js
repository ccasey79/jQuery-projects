console.log('JS Loaded!');

 // AJAX

$(document).ready(function(){

  // LOAD METHOD

  /*$('#result').load('text1.html', function(responseTxt, statusTxt, xhr){
      if (statusTxt == "success") {
        alert('It went fine!');
      } else if (statusTxt == "error") {
        alert("Error: "+xhr.statusTxt);
      }
  });
  */

  // GET METHOD

  /*$.get('text.html', function(data){
      $('#result').html(data);
  });*/

  // GET JSON

  /*$.getJSON('users.json', function(data){
      $.each(data, function(i, user){
          $('ul#users').append('<li>' +user.firstName+ '</li>');
      });
  });*/

  // AJAX METHOD


  /*$.ajax({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
    dataType: 'json'
  }).done(function(data){
    //console.log(data);
    $.map(data, function(post, i){
      $('#result').append('<h3>'+post.title+'</h3><p>'+post.body+'</p>');
    });
  });*/

  // POST REQUEST

  $('#postform').submit(function(e){
      e.preventDefault();

      var title = $('#title').val();
      var body = $('#body').val();
      var url = $(this).attr('action');

      $.post(url, {title:title, body:body}).
        done(function(data){
          console.log('Post Saved!');
          console.log(data);

        });
    });
});
