// Footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isActive = navLinks.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  });
}

//  Smooth scroll for internal page sections

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (event) => {
    const targetID = link.getAttribute('href');
    if (!targetID || targetID === '#') return;

    const targetElement = document.querySelector(targetID);

    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Close mobile nav if open
      if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        if (navToggle) {
          navToggle.setAttribute('aria-expanded', 'false');
        }
      }

      // Update the URL without jumping
      history.replaceState(null, '', targetID);
    }
  });
});
// New validation for Nina's Accessibility Form
const enhancedForm = document.getElementById('enhancedContactForm');

if (enhancedForm) {
  enhancedForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let valid = true;

    const fields = ['name', 'email', 'service', 'inquiry'];
    fields.forEach(id => {
      const input = document.getElementById(id);
      const error = input.nextElementSibling;

      if (!input.value.trim()) {
        error.textContent = 'This field is required.';
        error.style.color = 'red';
        error.style.fontSize = '0.9rem';
        error.style.marginTop = '3px';
        valid = false;
      } else {
        error.textContent = '';
      }
    });

    // Email format validation
    const emailField = document.getElementById('email');
    const emailError = emailField.nextElementSibling;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailField.value && !emailPattern.test(emailField.value)) {
      emailError.textContent = 'Please enter a valid email.';
      emailError.style.color = 'red';
      valid = false;
    }

    if (!valid) return;

    alert('Your message has been sent! (Demo only)');
    enhancedForm.reset();
  });
}


