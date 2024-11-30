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


// skills page
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.bar').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 200);
    });
});

// Scenes page Test
// Carousel 1
var images1 = ["SW/Barcelona.jpeg", "SW/Sitges.jpeg", "SW/Bonfire.jpeg", "SW/JackDarling.jpeg"];
var currentIndex1 = 0;
var imageElement1 = document.getElementById("carousel-image1");

document.getElementById("prev1").addEventListener("click", function () {
  currentIndex1 = (currentIndex1 - 1 + images1.length) % images1.length;
  imageElement1.src = images1[currentIndex1];
});

document.getElementById("next1").addEventListener("click", function () {
  currentIndex1 = (currentIndex1 + 1) % images1.length;
  imageElement1.src = images1[currentIndex1];
});

// Carousel 2
var images2 = ["Ex/Spain.jpeg", "Ex/Art.jpeg","Ex/Banff.jpeg","Ex/Crepe.jpeg","Ex/goat.jpeg","Ex/stars.jpeg" ];
var currentIndex2 = 0;
var imageElement2 = document.getElementById("carousel-image2");

document.getElementById("prev2").addEventListener("click", function () {
  currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
  imageElement2.src = images2[currentIndex2];
});

document.getElementById("next2").addEventListener("click", function () {
  currentIndex2 = (currentIndex2 + 1) % images2.length;
  imageElement2.src = images2[currentIndex2];
});



