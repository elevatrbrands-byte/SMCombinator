/* Dallas Entrepreneurial Alliance Interactive Behaviors */
const header = document.querySelector('.site-header');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
const mobileMenuButton = document.querySelector('.hamburger');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileDropdownButtons = document.querySelectorAll('.mobile-dropdown button');
const counters = document.querySelectorAll('.counter');
const fadeElements = document.querySelectorAll('.fade-in-up');
const accordionButtons = document.querySelectorAll('.accordion-header');

function toggleHeaderState() {
  if (!header) return;
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

toggleHeaderState();
window.addEventListener('scroll', toggleHeaderState);

// Desktop dropdown accessibility
[...dropdownToggles].forEach((toggle) => {
  const menu = toggle.nextElementSibling;
  if (!menu) return;
  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.style.opacity = expanded ? '0' : '1';
    menu.style.visibility = expanded ? 'hidden' : 'visible';
    menu.style.transform = expanded ? 'translateY(10px)' : 'translateY(0)';
  });

  toggle.addEventListener('blur', () => {
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Mobile menu
if (mobileMenuButton && mobileMenuOverlay) {
  mobileMenuButton.addEventListener('click', () => {
    const isOpen = mobileMenuOverlay.classList.contains('open');
    mobileMenuOverlay.classList.toggle('open');
    mobileMenuButton.setAttribute('aria-expanded', String(!isOpen));
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  mobileMenuOverlay.addEventListener('click', (event) => {
    if (event.target === mobileMenuOverlay) {
      mobileMenuOverlay.classList.remove('open');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

mobileDropdownButtons.forEach((button) => {
  const menu = button.parentElement?.querySelector('.mobile-dropdown-menu');
  if (!menu) return;
  button.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');
    menu.classList.toggle('open');
    button.setAttribute('aria-expanded', String(!isOpen));
  });
});

// Intersection Observer for fade-in animations
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeElements.forEach((el) => observer.observe(el));
}

// Counter animation
if ('IntersectionObserver' in window) {
  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const counter = entry.target;
        if (counter.dataset.counted === 'true') return;
        const target = parseInt(counter.dataset.target || '0', 10);
        const duration = 1500;
        const start = performance.now();
        const animate = (time) => {
          const progress = Math.min((time - start) / duration, 1);
          const current = Math.floor(progress * target);
          counter.textContent = progress === 1 ? target.toLocaleString() : current.toLocaleString();
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            counter.dataset.counted = 'true';
          }
        };
        requestAnimationFrame(animate);
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((counter) => countObserver.observe(counter));
} else {
  counters.forEach((counter) => {
    const target = parseInt(counter.dataset.target || '0', 10);
    counter.textContent = target.toLocaleString();
    counter.dataset.counted = 'true';
  });
}

// Accordion logic
accordionButtons.forEach((button) => {
  const content = button.parentElement?.querySelector('.accordion-body');
  if (!content) return;
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    if (expanded) {
      content.classList.remove('open');
      content.style.maxHeight = '0px';
    } else {
      content.classList.add('open');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });

  button.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      button.click();
    }
  });
});

// Smooth focus outline for keyboard users
function handleFirstTab(e) {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
}
window.addEventListener('keydown', handleFirstTab);

// Form submission placeholders
const forms = document.querySelectorAll('form[data-form-type="ajax"]');
forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = form.querySelector('.form-status');
    if (status) {
      status.textContent = 'Thanks! Your submission has been received.';
      status.className = 'form-success form-status';
    }
    form.reset();
  });
});
