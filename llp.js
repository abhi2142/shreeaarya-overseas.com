
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; 
    }    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

showSlides(); 

document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    // Toggle navigation on menu icon click
    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Close the menu if clicked outside
    document.addEventListener('click', function (event) {
        if (!menuIcon.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });
});
