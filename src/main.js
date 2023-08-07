// Make navbar solid on scroll and update logo to light/dark theme
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar"); // Navbar element that will fade in
  const logo = document.getElementById("logo");
  let scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // If scrolled to top, make navbar transparent and update logo, otherwise make solid
  if (scrollPosition === 0) {
    navbar.classList.remove("navbar-solid"); // Make navbar transparent
    logo.src = "/logo.png"; // Change logo to light theme
  } else {
    navbar.classList.add("navbar-solid"); // Make navbar solid
    logo.src = "/logo-dark.png"; // Change logo to dark theme
  }
});
