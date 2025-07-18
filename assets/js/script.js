
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

      
      document.addEventListener("DOMContentLoaded", function () {
        const cards = document.querySelectorAll(".card");
      
        // Check if touch-enabled device (mobile/tablet)
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
        if (isTouchDevice) {
       
          cards.forEach(card => {
            const inner = card.querySelector(".flip-card-inner");
      
            card.addEventListener("click", function (e) {
              // Close other cards if open
        
              document.querySelectorAll(".flip-card-inner").forEach(el => {
                if (el !== inner) el.style.transform = "none";
              });
      
              // Toggle current card
              const isFlipped = inner.style.transform === "rotateY(180deg)";
              inner.style.transform = isFlipped ? "none" : "rotateY(180deg)";
      
              e.stopPropagation(); // Prevent closing immediately
            });
          });
      
          // Click anywhere else to close all flipped cards
          document.addEventListener("click", function () {
            document.querySelectorAll(".flip-card-inner").forEach(inner => {
              inner.style.transform = "none";
            });
          }, true);
        }
      });
      
      
      const input = document.querySelector("#phone");
      window.intlTelInput(input, {
        initialCountry: "us",
        preferredCountries: ["us", "gb", "in"],
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js"
      });

// Contact form AJAX submission using FormSubmit
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const thankYouMessage = document.createElement("div");

  thankYouMessage.className = "alert alert-success mt-4 text-center";
  thankYouMessage.style.display = "none";
  thankYouMessage.textContent = "✅ Thank you! We'll get back to you shortly.";

  if (form) {
    form.parentElement.appendChild(thankYouMessage);

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch("https://formsubmit.co/connect@humbrixhub.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          form.reset();
          thankYouMessage.style.display = "block";
        } else {
          alert("Something went wrong. Please try again.");
        }
      }).catch(error => {
        alert("Error: " + error.message);
      });
    });
  }
});


  })();
