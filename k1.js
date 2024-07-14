// k1.js

// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to top button functionality
const topButton = document.querySelector('.top');

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

topButton.addEventListener('click', function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

// Form validation (to be implemented in future forms)
// Example usage for a contact form
// function validateForm() {
//     let name = document.forms["contactForm"]["name"].value;
//     let email = document.forms["contactForm"]["email"].value;
//     let message = document.forms["contactForm"]["message"].value;
//     if (name == "" || email == "" || message == "") {
//         alert("All fields must be filled out");
//         return false;
//     }
//     return true;
// }
