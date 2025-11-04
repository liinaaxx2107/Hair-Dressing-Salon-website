// Enchanted Locks — Main Script

// ====== No mobile zoom ======
// Blocking of pinch-zoom  iOS Safari 
document.addEventListener('gesturestart', (e) => e.preventDefault(), { passive: false });

// No double-tap zoom
let lastTouchEnd = 0;
document.addEventListener('touchend', function (e) {
  const now = Date.now();
  if (now - lastTouchEnd <= 300) {
    e.preventDefault();
  }
  lastTouchEnd = now;
}, { passive: false });

// disable scaling
document.addEventListener('wheel', function (e) {
  if (e.ctrlKey) e.preventDefault();
}, { passive: false });

// ====== Navigation for mobile menu ======
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// ====== Year change ======
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ====== form processing ======
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
  });
}
