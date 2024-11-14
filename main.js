window.onload = function() {
    // hello, I am cursor function (to be added)
// Interactivity functions
function enlargeImage() {
    var img = document.getElementById("profileImage");
    img.style.transform = "scale(1.5)"; // Scale up to 1.5 times original size
    img.style.transition = "transform 0.3s ease"; // Smooth transition effect
}

function resetImage() {
    var img = document.getElementById("profileImage");
    img.style.transform = "scale(1)"; // Return to original size
}

function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function changeColorOnHover(element, color) {
    element.style.color = color;
} 
}

function loadFormData() {
    // Load saved values from localStorage into form fields (Adjusted to match your HTML IDs)
    document.getElementById("name").value = localStorage.getItem("name") || "";
    document.getElementById("email").value = localStorage.getItem("email") || "";
    document.getElementById("message").value = localStorage.getItem("message") || "";
}

// Call function to load data when page loads
//loadFormData();

// Save form data to localStorage on form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    // Save form fields to localStorage (Adjusted to match your HTML IDs)
    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("message", document.getElementById("message").value);

    

    // Reload the page to reset the form
    location.reload();
}); 

// Clear form data and localStorage when reset button is clicked
document.getElementById("clearStorage").addEventListener("click", function() {
    localStorage.clear(); // Clear all localStorage data
    document.getElementById("contactForm").reset(); // Reset form fields
    
});
function setTextSize(size) {
    let fontSize;

    // Define font sizes for each option
    if (size === 'small') {
        fontSize = '12px';
    } else if (size === 'medium') {
        fontSize = '16px';
    } else if (size === 'large') {
        fontSize = '20px';
    }

    // Apply the selected font size to all text elements
    document.querySelectorAll('h1, h2, p').forEach(element => {
        element.style.fontSize = fontSize;
    });
}

function toggleColorMode() {
    // Toggle the 'colorblind-mode' class on the body element
    document.body.classList.toggle('colorblind-mode');
}
function toggleAltText(altTextId) {
    var altTextElement = document.getElementById(altTextId);
    if (altTextElement.style.display === "none") {
        altTextElement.style.display = "block";
    } else {
        altTextElement.style.display = "none";
    }
}
