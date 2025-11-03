// Change of colors and typography
:root{
  /*Palette with added contrast */
  --bg: #fff8fb;
  --surface: #ffffff;
  --surface-alt: #fff1f5;
  --text: #222;
  --muted: #555;
  --accent-2: #ad1457;
  --focus: #0a84ff;
  --radius: 14px;
/* Typography dyslexic freindly */
  --base-font: "Atkinson Hyperlegible", Arial, Verdana, sans-serif;
  --logo-font: "Great Vibes", cursive;
  --line-height: 1.7;
  --font-size: 17px;
  --max-line: 65ch;
  --letter-space: 0.02em;
  --word-space: 0.04em;
}

/* Dyslexia mode  */
.dyslexia-mode{
  --font-size: 18px;
  --line-height: 1.8;
  --letter-space: 0.06em;
  --word-space: 0.12em;
}

*{box-sizing:border-box;}
html:focus-within{scroll-behavior:smooth;}
body{
  margin:0;
  font-family: var(--base-font);
  font-size: var(--font-size);
  background: var(--bg);
  color: var(--text);
  line-height: var(--line-height);
  letter-spacing: var(--letter-space);
  word-spacing: var(--word-space);
}
.container{max-width:1100px;margin:0 auto;padding:0 18px;}
.content p, .content li{max-width: var(--max-line);}

/* Skip to content link */
.skip-link{
  position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;
}
.skip-link:focus{
  position:fixed;left:16px;top:16px;width:auto;height:auto;
  background:#fff;border:2px solid var(--focus);padding:8px 12px;border-radius:8px;z-index:9999;
}

/* Header and Navigation */
.site-header{
  background:#ffdce0;
  position:sticky;top:0;z-index:10;
}
.nav{display:flex;align-items:center;justify-content:space-between;padding:12px 0;}
.logo{font-weight:700;font-size:1.2rem;display:flex;align-items:center;gap:8px;}
.logo-cursive{font-family:var(--logo-font);font-size:1.7rem;color:var(--accent-2);}
.nav-links{list-style:none;display:flex;gap:18px;margin:0;padding:0;}
.nav-links a{text-decoration:none;color:var(--text);font-weight:600;}
.nav-links a:focus, .nav-links a:hover{text-decoration:underline;}
.nav-toggle{display:none;background:none;border:0;font-size:1.6rem;cursor:pointer;line-height:1;padding:6px;border-radius:8px;}
.nav-toggle:focus-visible{outline:3px solid var(--focus);outline-offset:2px;}

/* Toggles */
.toggles{display:flex;gap:8px;align-items:center;}
.toggle-btn{
  display:inline-block;background:var(--accent);color:#fff;border:none;border-radius:12px;
  padding:8px 14px;cursor:pointer;font-weight:700;
}
.toggle-btn:focus-visible{outline:3px solid var(--focus);outline-offset:2px;}
.toggle-btn[aria-pressed="true"]{background:var(--accent-2);}

/* Background update */
.hero{
  background-image: linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.35)), url('../images/louis-hansel-n_pzLOjR_C8-unsplash.jpg');
  background-size:cover;background-position:center;
  padding:48px 0;border-radius:18px;margin:12px 18px;
}
.hero-content{padding:24px;}
.hero h1{margin:0 0 8px;font-size:2.1rem;font-weight:800;letter-spacing:0.01em;}
.hero p{margin:0;color:var(--muted);}

.btn-primary{
  display:inline-block;background:var(--accent);color:#fff;padding:12px 18px;border-radius:12px;
  text-decoration:none;font-weight:800;border: none;cursor:pointer;margin-top:14px;
}
.btn-primary:focus-visible{outline:3px solid var(--focus);outline-offset:2px;}
.btn-primary:hover{text-decoration:underline;}

/* Sections */
.section{padding:36px 0;}
.section h2{margin:0 0 8px;font-size:1.6rem;}
.section > p{color:var(--muted);}

.cards{display:flex;gap:16px;flex-wrap:wrap;margin-top:18px;}
.card{background:var(--surface);padding:18px;border-radius:12px;box-shadow:0 8px 20px rgba(0,0,0,0.06);flex:1;min-width:240px;}
.card h3{margin-top:0}
.card p{margin-bottom:0}

/* Gallery */
.gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:18px;}
.gallery-grid img{width:100%;height:auto;border-radius:10px;display:block}

/* Form for the user*/
.contact-form{display:flex;flex-direction:column;gap:12px;margin-top:12px;max-width:520px;}
.contact-form label{font-size:1rem;display:flex;flex-direction:column;gap:6px;font-weight:700;}
input,textarea{
  padding:12px;border-radius:10px;border:1px solid #ddd;background:white;
  font-family:var(--base-font);font-size:1rem;
}
input:focus,textarea:focus{outline:3px solid var(--focus);border-color:transparent;}
.help{font-size:0.9rem;color:var(--muted);}

/* Footer */
.site-footer{padding:18px 0;text-align:center;color:var(--muted);margin-top:18px;background:#ffdce0;}

/* Dyslexia-mode extras */
.dyslexia-mode a{text-decoration:underline;}
.dyslexia-mode em, .dyslexia-mode i{font-style:normal;}
.dyslexia-mode .logo{text-transform:none;letter-spacing:0.02em;}

/* Strong focus ring for all focusable elements */
:focus-visible{outline:3px solid var(--focus);outline-offset:2px;border-radius:8px;}

/* Mobile */
@media (max-width:800px){
  .nav-links{
    display:none;position:absolute;top:64px;right:18px;background:#fff;padding:12px;
    border-radius:12px;box-shadow:0 8px 18px rgba(0,0,0,0.08);flex-direction:column;min-width:220px;
  }
  .nav-toggle{display:block;}
  .hero h1{font-size:1.7rem;}
  .gallery-grid{grid-template-columns:1fr;}
  .cards{flex-direction:column;}
}

/* Reading ruler overlay */
.reading-ruler{
  position:fixed;left:0;right:0;height:2.2em;background:rgba(10,132,255,0.12);
  pointer-events:none;z-index:9998;mix-blend-mode:multiply;display:none;
  border-top:1px solid rgba(10,132,255,0.25);border-bottom:1px solid rgba(10,132,255,0.25);
}
.reading-ruler.active{display:block;}
