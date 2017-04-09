
// Fade in an element using a timer
// Done by adding a class name to the element eg. message

var myMessage = document.getElementById('message');

function showMessage() {

  myMessage.className = "show";    // add class to element

}

setTimeout(showMessage, 2000);

// calling the showMessage function & setting a time of 3 seconds
