const docReady = (fn) => {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

docReady(() => {
  const navbar = document.querySelector('.navbar');
  const heroHeadline = document.querySelector('.hero__headline');
  const heroPath = document.querySelector('.hero-path');

  if (navbar) {
    const toggleCompact = () => {
      if (window.scrollY > 24) {
        navbar.classList.add('is-compact');
      } else {
        navbar.classList.remove('is-compact');
      }
    };
    toggleCompact();
    window.addEventListener('scroll', toggleCompact, { passive: true });
  }

  if (heroPath && heroHeadline) {
    heroPath.addEventListener('animationend', () => {
      heroHeadline.classList.add('is-visible');
    });
  }

  document.querySelectorAll('[data-scroll-to]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('data-scroll-to');
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  document.querySelectorAll('.carousel').forEach((carousel) => {
    const viewport = carousel.querySelector('.carousel__viewport');
    const prev = carousel.querySelector('[data-carousel="prev"]');
    const next = carousel.querySelector('[data-carousel="next"]');
    const items = carousel.querySelectorAll('.carousel__item');
    let index = 0;

    const update = () => {
      const itemWidth = items[0].getBoundingClientRect().width + 24;
      viewport.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
    };

    prev?.addEventListener('click', () => {
      index = Math.max(0, index - 1);
      update();
    });

    next?.addEventListener('click', () => {
      index = Math.min(items.length - 1, index + 1);
      update();
    });
  });

  document.querySelectorAll('[data-modal-target]').forEach((button) => {
    const targetId = button.getAttribute('data-modal-target');
    const modal = document.getElementById(targetId);
    button.addEventListener('click', () => {
      modal?.classList.add('is-visible');
      modal?.querySelector('input, textarea, select')?.focus();
    });
  });

  document.querySelectorAll('.modal').forEach((modal) => {
    const closeButtons = modal.querySelectorAll('[data-close-modal]');
    closeButtons.forEach((btn) =>
      btn.addEventListener('click', () => modal.classList.remove('is-visible'))
    );
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.remove('is-visible');
      }
    });
  });

  const tabButtons = document.querySelectorAll('[data-tab]');
  const tabPanels = document.querySelectorAll('[data-tab-panel]');
  if (tabButtons.length && tabPanels.length) {
    tabButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const id = button.dataset.tab;
        tabButtons.forEach((btn) => btn.classList.toggle('is-active', btn === button));
        tabPanels.forEach((panel) =>
          panel.classList.toggle('is-active', panel.dataset.tabPanel === id)
        );
      });
    });
  }

  document.querySelectorAll('.accordion-item').forEach((item) => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    header.addEventListener('click', () => {
      const isOpen = item.classList.toggle('is-open');
      if (isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    });
  });

  const confettiContainers = document.querySelectorAll('[data-confetti]');
  confettiContainers.forEach((container) => {
    const colors = ['#C8102E', '#111111', '#D4C4B5', '#156064'];
    for (let i = 0; i < 12; i++) {
      const piece = document.createElement('span');
      const delay = Math.random() * 1.2;
      piece.style.left = Math.random() * 100 + '%';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = delay + 's';
      container.appendChild(piece);
    }
  });
});
