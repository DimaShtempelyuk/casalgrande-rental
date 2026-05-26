// Hamburger
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
  });
}

// Vehicle thumbnail gallery
function setMainImg(thumb) {
  const card = thumb.closest('.vehicle-card');
  const mainImg = card.querySelector('.vehicle-main-img img');
  mainImg.src = thumb.src;
  card.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

// Fleet filter
const filterBtns = document.querySelectorAll('.filter-btn');
const vehicleCards = document.querySelectorAll('.vehicle-card');
const fleetCount = document.querySelector('.fleet-count');
const fleetGrid = document.getElementById('fleetGrid');
const comingSoon = document.getElementById('comingSoonBanner');
const comingOnlyCategories = ['technika', 'privesy'];

if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      const isComingSoon = comingOnlyCategories.includes(filter);

      if (comingSoon) comingSoon.style.display = isComingSoon ? 'block' : 'none';
      if (fleetGrid) fleetGrid.style.display = isComingSoon ? 'none' : 'grid';

      if (!isComingSoon) {
        let visible = 0;
        vehicleCards.forEach(card => {
          const show = filter === 'all' || card.dataset.category === filter;
          card.classList.toggle('hidden', !show);
          if (show) visible++;
        });
        if (fleetCount) {
          const label = visible === 1 ? 'vozidlo' : visible < 5 ? 'vozidla' : 'vozidel';
          fleetCount.textContent = `Zobrazeno ${visible} ${label}`;
        }
      } else {
        if (fleetCount) fleetCount.textContent = '';
      }
    });
  });
}

// Generic async form submit (Formspree)
async function submitForm(form, successEl) {
  const btn = form.querySelector('button[type="submit"]');
  const orig = btn.textContent;
  btn.textContent = 'Odesílám...';
  btn.disabled = true;
  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      form.style.display = 'none';
      if (successEl) successEl.style.display = 'block';
    } else {
      btn.textContent = 'Chyba – zkuste znovu';
      btn.disabled = false;
    }
  } catch {
    btn.textContent = 'Chyba – zkuste znovu';
    btn.disabled = false;
  }
}

const contactForm = document.getElementById('contactForm');
if (contactForm) contactForm.addEventListener('submit', e => { e.preventDefault(); submitForm(contactForm, document.getElementById('formSuccess')); });

const ctaForm = document.getElementById('ctaForm');
if (ctaForm) ctaForm.addEventListener('submit', e => { e.preventDefault(); submitForm(ctaForm, document.getElementById('ctaSuccess')); });

// LIGHTBOX
const lb = document.createElement('div');
lb.className = 'lightbox';
lb.innerHTML = '<button class="lightbox-close" aria-label="Zavřít">&times;</button><button class="lightbox-prev" aria-label="Předchozí">&#8249;</button><img src="" alt=""><button class="lightbox-next" aria-label="Další">&#8250;</button>';
document.body.appendChild(lb);
const lbImg = lb.querySelector('img');
let lbSrcs = [], lbIdx = 0;

function openLightbox(imgs, idx) {
  lbSrcs = imgs; lbIdx = idx;
  lbImg.src = lbSrcs[lbIdx];
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() { lb.classList.remove('open'); document.body.style.overflow = ''; }
function lbStep(d) { lbIdx = (lbIdx + d + lbSrcs.length) % lbSrcs.length; lbImg.src = lbSrcs[lbIdx]; }

lb.querySelector('.lightbox-close').onclick = closeLightbox;
lb.querySelector('.lightbox-prev').onclick = () => lbStep(-1);
lb.querySelector('.lightbox-next').onclick = () => lbStep(1);
lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
document.addEventListener('keydown', e => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lbStep(-1);
  if (e.key === 'ArrowRight') lbStep(1);
});

// Attach lightbox to all vehicle cards
document.querySelectorAll('.vehicle-card').forEach(card => {
  const thumbs = card.querySelectorAll('.thumb');
  const srcs = Array.from(thumbs).map(t => t.src);
  if (!srcs.length) return;
  card.querySelector('.vehicle-main-img').addEventListener('click', () => {
    const cur = card.querySelector('.vehicle-main-img img').src;
    const idx = srcs.findIndex(s => s === cur) || 0;
    openLightbox(srcs, idx < 0 ? 0 : idx);
  });
});
