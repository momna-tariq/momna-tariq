// Prompt the user to enter their name
var userName = prompt("Please enter your name:");

// Store the name in a variable and display a welcome message
window.onload = function() {
    var welcomeMessage = "Welcome, " + userName + "!";
    var heading = document.getElementById("welcome");
    heading.innerHTML = welcomeMessage;

    // Change the background color of the body and font color of the heading
    document.body.style.backgroundColor = "#dcf5f5";  // Light khaki background
    heading.style.color = "#000080";  // Navy text color

    // Additional style changes (for example, the h2 element)
    var aboutMeHeading = document.getElementById("aboutMe");
    aboutMeHeading.style.fontSize = "30px";  // Increase font size of the About Me section
    aboutMeHeading.style.fontStyle = "italic";  // Change font style to italic
};
