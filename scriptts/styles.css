//Footer year
document.getElementById('year').textContent = new Date().getFullYear();

//Mobile menu toggle (fix: proper OR condition and aria-expanded)
const navToggle=document.getElementById('navToggle');
const navLinks=document.getElementById('navLinks');

navToggle.addEventListener('click', function(){
  const hidden=getComputedStyle(navLinks).display === 'none' || navLinks.style.display === '';
  navLinks.style.display = hidden ? 'flex' : 'none';
  navToggle.setAttribute('aria-expanded', String(hidden));
});

// Form validation with clear alerts
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const name=this.name.value.trim();
  const phone=this.phone.value.trim();
  if (!name || !phone) {
    alert('Please provide your name and phone.');
    return;
  }
  alert('Thank you! We received your request.');
  this.reset();
});

// Dyslexia mode toggle (persists to localStorage)
const dysToggle = document.getElementById('dysToggle');
const BODY = document.body;

function setDyslexiaMode(on){
  BODY.classList.toggle('dyslexia-mode', on);
  dysToggle.setAttribute('aria-pressed', String(on));
  try { localStorage.setItem('dyslexia-mode', on ? '1' : '0'); } catch(e) {}
}

dysToggle.addEventListener('click', function(){
  const on = !BODY.classList.contains('dyslexia-mode');
  setDyslexiaMode(on);
});

// Restore preference on load
try {
  const saved = localStorage.getItem('dyslexia-mode');
  if (saved === '1') setDyslexiaMode(true);
} catch(e) { /* ignore */ }

// Reading ruler
const ruler = document.getElementById('ruler');
const rulerToggle = document.getElementById('rulerToggle');

function setRuler(active){
  ruler.classList.toggle('active', active);
  rulerToggle.setAttribute('aria-pressed', String(active));
  ruler.setAttribute('aria-hidden', String(!active));
  try { localStorage.setItem('reading-ruler', active ? '1' : '0'); } catch(e) {}
}

rulerToggle.addEventListener('click', () => {
  setRuler(!ruler.classList.contains('active'));
});

// Follow mouse vertically to assist tracking current line
document.addEventListener('mousemove', (e) => {
  if (!ruler.classList.contains('active')) return;
  const y = e.clientY - (ruler.offsetHeight / 2);
  ruler.style.top = y + 'px';
});

// Restore ruler preference
try {
  const savedRuler = localStorage.getItem('reading-ruler');
  if (savedRuler === '1') setRuler(true);
} catch(e) { /* ignore */ }
