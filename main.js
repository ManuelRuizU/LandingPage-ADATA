/* ── ADAPTA Landing Page — main.js — v5 ── */

function showForm(tipo) {
  document.querySelectorAll('.audience-card').forEach(c => c.classList.remove('active'));
  document.querySelector('.audience-card.' + tipo).classList.add('active');
  document.getElementById('formularios').style.display = 'block';
  document.querySelectorAll('.form-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + tipo).classList.add('active');
  setTimeout(() => {
    document.getElementById('formularios').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

function resetSelector() {
  document.getElementById('formularios').style.display = 'none';
  document.querySelectorAll('.audience-card').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.form-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('selector').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', () => {

  // ── Scroll reveal con clase .visible ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Delay escalonado según posición del elemento entre sus hermanos
        const siblings = Array.from(entry.target.parentElement.children);
        const index = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${index * 80}ms`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Solo anima una vez
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll(
    '.pain-card, .phase, .promise-item, .sv-step, .audience-card, .founder-card, .pce-card'
  ).forEach(el => observer.observe(el));

});