// Make navbar solid on scroll
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar"); // Navbar element that will fade in
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // If scrolled to top, make navbar transparent, otherwise make solid
  if (scrollPosition === 0) {
    navbar.classList.remove("navbar-solid");
  } else {
    navbar.classList.add("navbar-solid");
  }
});
