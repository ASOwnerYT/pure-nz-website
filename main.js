const navbar = document.getElementById("navbar"); // Navbar
const logo = document.getElementById("logo"); // Logo
let scrollPosition = 0; // Scroll position

// Make navbar solid on scroll and update logo to light/dark theme
window.addEventListener("scroll", function () {
  scrollPosition = window.scrollY || document.documentElement.scrollTop; // Current scroll position

  // If scrolled to top, make navbar transparent and update logo, otherwise make solid
  if (scrollPosition === 0) {
    navbar.classList.remove("navbar-solid"); // Make navbar transparent
    navbar.classList.remove("shadow"); // Shadow
    logo.src = "./public/logo.png"; // Change logo to light theme
  } else {
    navbar.classList.add("navbar-solid"); // Make navbar solid
    navbar.classList.add("shadow"); // Shadow
    logo.src = "./public/logo-dark.png"; // Change logo to dark theme
  }
});
