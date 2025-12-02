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

// Contact form demo (no real backend)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = this.name.value.trim();
    const phone = this.phone.value.trim();
    if(!name || !phone){
      alert('Please provide your name and phone.');
      return;
    }
    alert('Thank you! We received your request. (Demo only — connect to email service later.)');
    this.reset();
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
