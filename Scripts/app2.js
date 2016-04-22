//sets up an onclick to change my picture
function changeImage() {
       console.log("ImageChange started");
       var image = document.getElementById('PortfolioImage');
    if (image.src = "Images/Myself1.jpg") 
    {
            image.src = "Images/Myself2.jpg";
        }
        else 
        {
            (image.src = "Images/Myself1.jpg");
        }
};