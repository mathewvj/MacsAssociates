document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector("#navbarNav");
  const toggleIcon = document.querySelector(".bi-list");
  const closeIcon = document.querySelector(".close-icon");
  const navLinks = document.querySelectorAll(".nav-link");

  // Disable Bootstrap's default collapse functionality
  navbarToggler.setAttribute("data-bs-toggle", "");

  // Toggle navbar manually
  navbarToggler.addEventListener("click", function () {
    const isOpen = navbarCollapse.classList.contains("show");

    if (isOpen) {
      navbarCollapse.classList.remove("show");
      closeIcon.classList.add("d-none");
      toggleIcon.classList.remove("d-none");
    } else {
      navbarCollapse.classList.add("show");
      closeIcon.classList.remove("d-none");
      toggleIcon.classList.add("d-none");
    }
  });

  // Close navbar when clicking any nav item
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navbarCollapse.classList.remove("show");
      closeIcon.classList.add("d-none");
      toggleIcon.classList.remove("d-none");
    });
  });

  // Close navbar when clicking outside the navbar
  document.addEventListener("click", function (event) {
    if (
      !navbarToggler.contains(event.target) &&
      !navbarCollapse.contains(event.target)
    ) {
      navbarCollapse.classList.remove("show");
      closeIcon.classList.add("d-none");
      toggleIcon.classList.remove("d-none");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a.nav-link").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Convert navbar height from rem to pixels
        const navbar = document.querySelector(".navbar");
        const navbarHeight = navbar
          ? parseFloat(getComputedStyle(navbar).height)
          : 0;

        const targetPosition = targetSection.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});

function setActiveLink() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let currentSection = "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Run the function when scrolling
window.addEventListener("scroll", setActiveLink);

// Run the function initially to set the active link on page load
document.addEventListener("DOMContentLoaded", setActiveLink);
