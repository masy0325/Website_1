const mobileButton = document.querySelector('#mobile-menu');
const navItems = document.querySelector('.nav-items');
const navLinks = document.querySelectorAll(".nav-link");

mobileButton.addEventListener('click', () => {
    navItems.classList.toggle("active");
    
});

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
        navItems.classList.toggle("active");
    });
});

