//Author: Matthew Norton File:app4.js Website Name:N/A Description: Retrieves variables form a form and spits them out in the console.

// setup IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";
    //create Variables to get inputs from user
    var name = document.getElementById("name");


    var email = document.getElementById("email");


    button.addEventListener("click", function() {
        event.preventDefault();
        // Logs all the names and values into the console on click
        console.log("Submitted");
        console.log(name.value);
        console.log(email.value);
        console.log(button.value);
    });
})();