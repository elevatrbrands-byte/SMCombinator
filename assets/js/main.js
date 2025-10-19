const body = document.body;

function initScrollState() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const toggleScrolled = () => {
    if (window.scrollY > 12) {
      body.classList.add("scrolled");
    } else {
      body.classList.remove("scrolled");
    }
  };
  toggleScrolled();
  window.addEventListener("scroll", toggleScrolled, { passive: true });
}

function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("open", !expanded);
  });
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("open");
    });
  });
}

function initHeroGlow() {
  const hero = document.querySelector("[data-hero]");
  if (!hero) return;
  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    hero.style.setProperty("--hero-x", `${x}px`);
    hero.style.setProperty("--hero-y", `${y}px`);
  });
}

function initProgressTracker() {
  const form = document.getElementById("progress-form");
  const valueNodes = document.querySelectorAll("[data-progress-value]");
  if (!form || !valueNodes.length) return;
  const totals = { interviews: 0, waitlist: 0, prototypes: 0 };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    ["interviews", "waitlist", "prototypes"].forEach((key) => {
      const increment = Number(data.get(key) || 0);
      totals[key] += isNaN(increment) ? 0 : increment;
      const node = document.querySelector(`[data-progress-value="${key}"]`);
      if (node) {
        node.textContent = totals[key];
      }
      const input = document.getElementById(key);
      if (input) input.value = "";
    });
  });
}

function initDeckBuilder() {
  const items = Array.from(document.querySelectorAll("[data-deck-item]"));
  const status = document.querySelector("[data-deck-status]");
  const exportButton = document.querySelector("[data-deck-export]");
  if (!items.length || !status || !exportButton) return;

  const update = () => {
    const completed = items.filter((item) => item.checked).length;
    status.textContent = `${completed} / ${items.length} complete`;
  };

  items.forEach((item) => item.addEventListener("change", update));
  update();

  exportButton.addEventListener("click", () => {
    const lines = items.map((item) => {
      const label = item.parentElement?.textContent?.trim() ?? "";
      const mark = item.checked ? "[x]" : "[ ]";
      return `${mark} ${label}`;
    });
    const text = `D Pitch deck checklist\n${lines.join("\n")}`;
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        exportButton.textContent = "Copied!";
        setTimeout(() => {
          exportButton.textContent = "Copy checklist";
        }, 2000);
      });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      exportButton.textContent = "Copied!";
      setTimeout(() => {
        exportButton.textContent = "Copy checklist";
      }, 2000);
    }
  });
}

function initEligibilityGate() {
  const form = document.getElementById("eligibility-form");
  const result = document.getElementById("eligibility-result");
  if (!form || !result) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const grade = data.get("grade");
    const dfw = data.get("dfw");
    const chapter = data.get("chapter");

    if (!grade || !dfw || !chapter) {
      result.textContent = "Answer every question to continue.";
      return;
    }

    if (dfw === "yes" && grade !== "other") {
      result.textContent = chapter === "yes" ? "Join your chapter’s next meetup—applications open now." : "You’re clear to start a chapter. Head to the Apply page to launch your onboarding.";
    } else {
      result.textContent = "Reach out at hello@dpitch.org for regional options.";
    }
  });
}

function initAccordions() {
  document.querySelectorAll("[data-accordion]").forEach((accordion) => {
    const items = accordion.querySelectorAll("button[data-accordion-toggle]");
    items.forEach((button) => {
      const icon = button.querySelector("[data-accordion-icon]");
      const syncIcon = (expanded) => {
        if (icon) icon.textContent = expanded ? "–" : "+";
      };
      syncIcon(button.getAttribute("aria-expanded") === "true");
      button.addEventListener("click", () => {
        const panel = document.getElementById(button.getAttribute("aria-controls"));
        const expanded = button.getAttribute("aria-expanded") === "true";
        accordion.querySelectorAll("[aria-expanded='true']").forEach((openButton) => {
          if (openButton !== button) {
            openButton.setAttribute("aria-expanded", "false");
            const target = document.getElementById(openButton.getAttribute("aria-controls"));
            if (target) target.hidden = true;
            const otherIcon = openButton.querySelector("[data-accordion-icon]");
            if (otherIcon) otherIcon.textContent = "+";
          }
        });
        button.setAttribute("aria-expanded", String(!expanded));
        if (panel) {
          panel.hidden = expanded;
        }
        syncIcon(!expanded);
      });
    });
  });
}

function initSpeakerCarousel() {
  const carousel = document.querySelector("[data-carousel]");
  if (!carousel) return;
  const track = carousel.querySelector("[data-carousel-track]");
  if (!track) return;
  let index = 0;
  const items = track.children;
  if (!items.length) return;
  const advance = () => {
    index = (index + 1) % items.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  };
  let timer = setInterval(advance, 4000);
  carousel.addEventListener("mouseenter", () => clearInterval(timer));
  carousel.addEventListener("mouseleave", () => {
    timer = setInterval(advance, 4000);
  });
}

function initChapterMap() {
  const mapElement = document.getElementById("chapter-map");
  if (!mapElement) return;
  const script = document.createElement("script");
  script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
  script.onload = () => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);
    const map = L.map(mapElement).setView([32.7767, -96.797], 9.5);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors"
    }).addTo(map);
    const chapters = [
      { name: "City Chapter", school: "Dallas City Hub", coords: [32.7767, -96.797] },
      { name: "North Prep", school: "North Dallas Prep", coords: [33.0325, -96.7092] },
      { name: "Arlington Collective", school: "Arlington STEM", coords: [32.7357, -97.1081] },
      { name: "Fort Worth Founders", school: "Fort Worth Tech", coords: [32.7555, -97.3308] }
    ];
    chapters.forEach((chapter) => {
      L.marker(chapter.coords).addTo(map).bindPopup(`<strong>${chapter.name}</strong><br/>${chapter.school}`);
    });
  };
  document.body.appendChild(script);
}

function initApplicationForms() {
  const forms = document.querySelectorAll("form[data-auto-response]");
  forms.forEach((form) => {
    const message = form.dataset.autoResponse ?? "Thanks for reaching out!";
    const target = form.querySelector("[data-response]");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.reset();
      if (target) {
        target.textContent = message;
      }
    });
  });
}

function initTimelineObserver() {
  const timeline = document.querySelector("[data-timeline]");
  if (!timeline) return;
  const items = timeline.querySelectorAll(".timeline__item");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("active", entry.isIntersecting);
      });
    },
    { threshold: 0.4 }
  );
  items.forEach((item) => observer.observe(item));
}

function initFAQSearch() {
  const input = document.querySelector("[data-faq-search]");
  if (!input) return;
  const items = Array.from(document.querySelectorAll("[data-faq-item]"));
  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    items.forEach((item) => {
      const question = item.dataset.question ?? "";
      const answer = item.dataset.answer ?? "";
      const visible = question.includes(value) || answer.includes(value);
      item.hidden = !visible;
    });
  });
}

function initMentorDirectory() {
  const select = document.querySelector("[data-mentor-filter]");
  const mentors = Array.from(document.querySelectorAll("[data-mentor]"));
  if (!select || !mentors.length) return;
  select.addEventListener("change", () => {
    const value = select.value;
    mentors.forEach((mentor) => {
      const fn = mentor.dataset.function ?? "";
      mentor.hidden = value !== "all" && fn !== value;
    });
  });
}

function init() {
  initScrollState();
  initMobileNav();
  initHeroGlow();
  initProgressTracker();
  initDeckBuilder();
  initEligibilityGate();
  initAccordions();
  initSpeakerCarousel();
  initChapterMap();
  initApplicationForms();
  initTimelineObserver();
  initFAQSearch();
  initMentorDirectory();
}

document.addEventListener("DOMContentLoaded", init);
