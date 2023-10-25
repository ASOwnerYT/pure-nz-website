const navbar = document.getElementById("navbar"); // Navbar
const logo = document.getElementById("logo"); // Logo
let scrollPosition = 0; // Scroll position
const menuToggle = document.getElementById("menu-toggle");
const navbarLinks = document.querySelector(".navbar-links");

function setSolid(solid) {
  if (solid) {
    // Set navbar to solid
    navbar.classList.add("navbar-solid"); // Make navbar solid
    navbar.classList.add("shadow"); // Shadow
    logo.src = "./public/logo-dark.webp"; // Change logo to dark theme
  } else if (!solid) {
    // Set navbar to transparent
    navbar.classList.remove("navbar-solid"); // Make navbar transparent
    navbar.classList.remove("shadow"); // Shadow
    logo.src = "./public/logo.webp"; // Change logo to light theme
  } else {
    // Solid variable not provided
    throw new Error("What should I set the navbar background to?");
  }
}

function updateNavbarBackground() {
  scrollPosition = window.scrollY || document.documentElement.scrollTop; // Current scroll position

  // If scrolled to top, make navbar transparent and update logo, otherwise make solid
  if (scrollPosition === 0 && !navbarLinks.classList.contains("active")) {
    setSolid(false);
  } else {
    setSolid(true);
  }
}

menuToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  updateNavbarBackground();
});

// Make navbar solid on scroll and update logo to light/dark theme
window.addEventListener("scroll", () => {
  updateNavbarBackground();
});
