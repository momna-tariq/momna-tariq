// Check if contactForm exists before adding listeners
var contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        localStorage.setItem("name", document.getElementById("name").value);
        localStorage.setItem("email", document.getElementById("email").value);
        localStorage.setItem("message", document.getElementById("message").value);
        location.reload(); // Reload the page
    });
}

// Check if clearStorage button exists before adding listener
var clearStorageButton = document.getElementById("clearStorage");
if (clearStorageButton) {
    clearStorageButton.addEventListener("click", function() {
        localStorage.clear(); // Clear all localStorage data
        if (contactForm) contactForm.reset(); // Reset form fields
    });
}

// Text size adjustment function
function setTextSize(size) {
    var fontSize;
    if (size === 'small') fontSize = '12px';
    else if (size === 'medium') fontSize = '16px';
    else if (size === 'large') fontSize = '20px';
    document.querySelectorAll('h1, h2, p').forEach(function(element) {
        element.style.fontSize = fontSize;
    });
}

// Toggle colorblind mode
function toggleColorMode() {
    document.body.classList.toggle('colorblind-mode');
}

// Toggle alt text visibility
function toggleAltText(altTextId) {
    var altTextElement = document.getElementById(altTextId);
    if (altTextElement.style.display === "none") {
        altTextElement.style.display = "block";
    } else {
        altTextElement.style.display = "none";
    }
}

// Initialize Typed.js after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typed-output", {
        strings: [
            "I'm a <span class='highlight'>Data Analyst.</span>",
            "I'm a <span class='highlight'>Student.</span>"
        ],
        typeSpeed: 95,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 500,
        loop: true, // Stops looping after finishing all strings
        showCursor: true,
        cursorChar: "|", // Customize cursor
    });
});

