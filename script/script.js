// Form Submission Handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    document.getElementById('contactForm').reset();
  });


//Add this script to handle the collapse closing 

document.addEventListener('DOMContentLoaded', function() {
  var navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
  var navbarCollapse = document.querySelector('.navbar-collapse');
  var togglerButton = document.querySelector('.navbar-toggler');
  var togglerIcon = togglerButton.querySelector('.navbar-toggle-icon');
  var closeIcon = togglerButton.querySelector('.close-icon');

  // Close the collapse when a link is clicked
  navbarLinks.forEach(function(link) {
      link.addEventListener('click', function() {
          var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
              toggle: false
          });
          bsCollapse.hide();
      });
  });

  // Toggle between the toggler icon and close icon
  navbarCollapse.addEventListener('show.bs.collapse', function() {
      togglerIcon.classList.add('d-none'); 
      closeIcon.classList.remove('d-none'); 
  });

  navbarCollapse.addEventListener('hide.bs.collapse', function() {
      closeIcon.classList.add('d-none'); 
      togglerIcon.classList.remove('d-none'); 
  });
});


document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Convert navbar height from rem to pixels
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? parseFloat(getComputedStyle(navbar).height) : 0;

                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});


