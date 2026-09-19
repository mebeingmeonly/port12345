/**
 * Personal Portfolio Application Controller for Riya Gupta (Sentira-Inspired Light Mode Edition)
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initSentiraAccordions();
  initContactForm();
});

/* ==========================================================================
   Navbar Scroll Controller (Transparent over Hero -> Blurred Glass on Scroll)
   ========================================================================== */
function initNavbarScroll() {
  const navbar = document.querySelector('.site-header-capsule');
  const hero = document.getElementById('hero');

  if (!navbar) return;

  const updateNavbarState = () => {
    // When hero bottom is reached or scroll > 80% of hero height
    const heroHeight = hero ? hero.offsetHeight : 600;
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > heroHeight - 120) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', updateNavbarState, { passive: true });
  updateNavbarState(); // Initial check
}

/* ==========================================================================
   Interactive Sentira Accordions (Harmonized across all sections)
   ========================================================================== */
function initSentiraAccordions() {
  const containers = document.querySelectorAll('.expertise-rows-container');
  if (!containers.length) return;

  containers.forEach(container => {
    const rows = container.querySelectorAll('.expertise-row');
    rows.forEach(row => {
      const header = row.querySelector('.expertise-row-header');
      if (!header) return;

      header.addEventListener('click', (e) => {
        // Prevent toggle if clicking a link or button directly
        if (e.target.closest('a') || e.target.closest('button')) return;

        const isAlreadyActive = row.classList.contains('active');

        // Close all sibling rows in this specific container
        rows.forEach(r => r.classList.remove('active'));

        // Toggle open if was closed
        if (!isAlreadyActive) {
          row.classList.add('active');
        }
      });
    });
  });
}

/* ==========================================================================
   Contact Form Controller
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('inquiry-form');
  const statusMsg = document.getElementById('form-status');

  if (!form || !statusMsg) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const service = document.getElementById('form-service').value;
    const details = document.getElementById('form-message').value.trim();

    if (!name || !email || !details) {
      statusMsg.textContent = 'Please provide your name, email, and a brief note.';
      statusMsg.className = 'form-status-msg error';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      statusMsg.textContent = 'Please enter a valid email address.';
      statusMsg.className = 'form-status-msg error';
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      statusMsg.textContent = `Thanks, ${name}! Your note regarding ${service} reached my inbox. I'll get back to you within 24–48 hours.`;
      statusMsg.className = 'form-status-msg success';
      form.reset();
      submitBtn.innerHTML = originalHTML;
      submitBtn.disabled = false;
    }, 500);
  });
}
