
    // Animate cards on entering viewport
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

 cards.forEach(card => observer.observe(card));

    window.addEventListener("scroll", function () {
    const navbar = document.getElementById("mainNavbar");
    if (window.scrollY > 100) { // adjust this value as needed
      navbar.classList.add("fixed-top", "shadow-sm");
      document.body.style.paddingTop = navbar.offsetHeight + "px"; // prevent content jump
    } else {
      navbar.classList.remove("fixed-top", "shadow-sm");
      document.body.style.paddingTop = "0";
    }
  });

  (() => {
    
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });

    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbarNav',
        offset: 70
      })
  })();