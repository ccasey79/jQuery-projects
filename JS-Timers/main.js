
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

// creating new button

var button = document.createElement("button");
var contain = document.getElementById("holder");

contain.append(button);
button.innerHTML = "Press Stop";

// creating a colour changer

var colourChanger = document.getElementById("colour-changer");
var colours = ["red", "blue", "green", "pink"];
var counter = 0;


function changeColour () {

  if (counter >= colours.length) {
    counter = 0;
  }

  colourChanger.style.background = colours[counter];
  counter++;
}

var stopChanger = setInterval(changeColour, 3000); // stop colour change

    button.onclick = function() {

    clearInterval(stopChanger);

  };
