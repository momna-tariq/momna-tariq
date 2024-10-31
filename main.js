window.onload = function() {
    // Welcome message using user's name if stored
    var userName = localStorage.getItem("name") || "Visitor";
    document.getElementById("welcome").innerHTML = "Welcome, " + userName + "!";

    // Retrieve form data if available
    document.getElementById("name").value = localStorage.getItem("name") || "";
    document.getElementById("email").value = localStorage.getItem("email") || "";
    document.getElementById("favColor").value = localStorage.getItem("favColor") || "#ff0000";
    document.getElementById("comments").value = localStorage.getItem("comments") || "";
    document.getElementById("birthDate").value = localStorage.getItem("birthDate") || "";

    document.getElementById("contactEmail").checked = localStorage.getItem("contactMethod") === "Email";
    document.getElementById("contactPhone").checked = localStorage.getItem("contactMethod") === "Phone";

    document.getElementById("interest1").checked = localStorage.getItem("interest1") === "true";
    document.getElementById("interest2").checked = localStorage.getItem("interest2") === "true";
    document.getElementById("interest3").checked = localStorage.getItem("interest3") === "true";
};

// Handle form submission and save data to localStorage
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Save form data to localStorage
    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("favColor", document.getElementById("favColor").value);
    localStorage.setItem("comments", document.getElementById("comments").value);
    localStorage.setItem("birthDate", document.getElementById("birthDate").value);

    var contactMethod = document.querySelector("input[name='contactMethod']:checked");
    if (contactMethod) {
        localStorage.setItem("contactMethod", contactMethod.value);
    }

    localStorage.setItem("interest1", document.getElementById("interest1").checked);
    localStorage.setItem("interest2", document.getElementById("interest2").checked);
    localStorage.setItem("interest3", document.getElementById("interest3").checked);

    alert("Form data saved successfully!");
});

// Interactivity functions
function enlargeImage() {
    var img = document.getElementById("profileImage");
    img.style.width = img.style.width === "200px" ? "400px" : "200px";
}

function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function changeColorOnHover(element, color) {
    element.style.color = color;
}

// Close dropdown when clicking outside
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
};
