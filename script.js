// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', function(){
  if (getComputedStyle(navLinks).display === 'none' || navLinks.style.display === '') {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
  } else {
    navLinks.style.display = 'none';
  }
});

// Contact form demo (no real backend)
const form = document.getElementById('contactForm');
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

