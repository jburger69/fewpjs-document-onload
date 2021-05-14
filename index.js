// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
	updateDOM()
  console.log("The DOM has loaded");
});

function updateDOM() {
    document.getElementById( "text" ).innerHTML = "This is really cool!";
}