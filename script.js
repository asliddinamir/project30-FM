const menuBtn = document.querySelector('.menu');
const navLinks = document.querySelectorAll('.navbar a');
const nav = document.querySelector('.nav');
const dropdowns = document.querySelectorAll('.dropdown');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show-nav');
});

navLinks.forEach((navLink) => {
    navLink.addEventListener('mouseover', () => {
        const dropdownId = navLink.getAttribute('data-dropdown');
        const dropdown = document.getElementById(dropdownId);

        if (dropdown) {
            dropdown.classList.add('show');
        }
    });

    navLink.addEventListener('mouseleave', () => {
        const dropdownId = navLink.getAttribute('data-dropdown');
        const dropdown = document.getElementById(dropdownId);

        if (dropdown) {
            dropdown.classList.remove('show');
        }
    });
});
