
// Fade in an element using a timer
// Done by adding a class name to the element eg. message

var myMessage = document.getElementById('message');

function showMessage() {

  myMessage.className = "show";    // add class to element

}

setTimeout(showMessage, 2000);
// calling the showMessage function & setting a time of 3 second.


// creating an element (link), then adding to the dom.
// adding the href as well to the link.
// message is the id of the element.

var link = document.createElement("a");
var box = document.getElementById("message");

link.innerHTML = "Cornish Pasties Buy Here!";
link.setAttribute("href", "http://google.com");
box.appendChild(link);
