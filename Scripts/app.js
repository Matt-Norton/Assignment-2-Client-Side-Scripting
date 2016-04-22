"use strict";

// setup your IIFE (Immediately Invoked Function Expression)
(function () {

    console.log("App Started..."); 

     
    function replaceParagraph1() {
        console.log("replaceParagraph1");
        var Paragraph1;

        Paragraph1 = document.getElementById("Paragraph1");

        Paragraph1.innerHTML = "Welcome to the portfolio of Matthew Norton. This is where one can view my current, future and past projects. My aspirations are too develop functionial, creative, and aethetically pleasing webpages, I am currently learning numerous ways to develop and design for the web including such languages as HTML, Javascript, PHP, CSS, and more.";
    }
    
    
    

    
    
   
    // call replacetParagraph1 function
    replaceParagraph1()
    
    
       
    


})();