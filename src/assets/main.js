document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.addEventListener("pointermove", (event) => {
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty("--cursor-x", `${x}%`);
      hero.style.setProperty("--cursor-y", `${y}%`);
    });
  }

  const timelineItems = document.querySelectorAll(".timeline-item");
  if (timelineItems.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("active", entry.isIntersecting);
        });
      },
      { threshold: 0.4 }
    );
    timelineItems.forEach((item) => observer.observe(item));
  }

  const stickyTimeline = document.querySelector(".timeline-sticky");
  if (stickyTimeline) {
    const labels = stickyTimeline.querySelectorAll(".timeline-labels li");
    const sections = stickyTimeline.querySelectorAll(".timeline-content article");
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry) => {
            labels.forEach((label) => {
              label.classList.toggle("active", label.dataset.for === entry.target.id);
            });
          });
      },
      { threshold: 0.45 }
    );
    sections.forEach((section) => observer.observe(section));
  }

  const tracker = document.querySelector("[data-progress-tracker]");
  if (tracker) {
    const rows = tracker.querySelectorAll(".row");
    rows.forEach((row) => {
      const interviews = Number(row.dataset.interviews || 0);
      const target = Number(row.dataset.target || 10);
      const percent = Math.min(100, Math.round((interviews / target) * 100));
      const bar = row.querySelector(".progress span");
      const status = row.querySelector(".status");
      if (bar) {
        bar.style.width = `${percent}%`;
        if (percent >= 75) {
          bar.style.background = "var(--success)";
        }
      }
      if (status) {
        status.textContent = `${interviews}/${target}`;
      }
    });
  }

  const filterControls = document.querySelectorAll("[data-filter]");
  const mentorCards = document.querySelectorAll("[data-category]");
  if (filterControls.length) {
    filterControls.forEach((control) => {
      control.addEventListener("click", () => {
        const value = control.dataset.filter;
        filterControls.forEach((item) => item.classList.toggle("active", item === control));
        mentorCards.forEach((card) => {
          if (!value || value === "all") {
            card.hidden = false;
          } else {
            card.hidden = !card.dataset.category.split(",").includes(value);
          }
        });
      });
    });
  }

  const quizForm = document.querySelector("[data-eligibility-form]");
  if (quizForm) {
    quizForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const answers = new FormData(quizForm);
      const grade = answers.get("grade");
      const location = answers.get("location");
      const commitment = answers.get("commitment");
      const result = quizForm.querySelector(".result");
      if (!result) return;
      const eligible = grade && Number(grade) >= 9 && Number(grade) <= 12 && location === "dfw" && commitment === "yes";
      if (eligible) {
        result.innerHTML = `✅ You're eligible. Head to the application to lock your spot.`;
        result.classList.remove("warning");
      } else {
        result.innerHTML = `⚠️ You're close! We'll send alternate next steps after you submit.`;
        result.classList.add("warning");
      }
    });
  }

  const carousel = document.querySelector("[data-carousel]");
  if (carousel) {
    const track = carousel.querySelector(".carousel-track");
    const items = carousel.querySelectorAll(".carousel-item");
    let index = 0;
    if (track && items.length > 1) {
      setInterval(() => {
        index = (index + 1) % items.length;
        track.style.transform = `translateX(-${index * 100}%)`;
      }, 5000);
    }
  }
});
