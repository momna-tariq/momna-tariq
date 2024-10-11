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
}// Lab 5
// Prompt the user to enter their name when the button is clicked
function askName() {
    var userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById("welcome").innerHTML = "Welcome, " + userName + "!";
    }
}

// Make the image clickable and enlarge when clicked
function enlargeImage() {
    var img = document.getElementById("profileImage");
    if (img.style.width === "200px") {
        img.style.width = "400px";  // Enlarge image
    } else {
        img.style.width = "200px";  // Reset to original size
    }
}

// Toggle the dropdown menu
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if user clicks outside
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Change color on mouseover and mouseout for nav items
function changeColorOnHover(element, color) {
    element.style.color = color;
}
