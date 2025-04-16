// === JavaScript pour multilingue (FR/EN), formulaire, dark mode et scroll ===
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const response = document.querySelector(".form-response");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    response.textContent = "Message envoyé avec succès ! Merci ✨";
    response.style.display = "block";
    setTimeout(() => {
      response.style.display = "none";
      form.reset();
    }, 4000);
  });

  // Dark mode toggle
  const toggle = document.getElementById("darkToggle");
  toggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  // Scroll animation
  const elements = document.querySelectorAll(".section");
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;
    elements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // Language toggle
  const langToggle = document.getElementById("langToggle");
  let isFR = true;
  langToggle?.addEventListener("click", () => {
    const labels = document.querySelectorAll("[data-fr]");
    labels.forEach(el => {
      el.textContent = isFR ? el.getAttribute("data-en") : el.getAttribute("data-fr");
    });
    langToggle.textContent = isFR ? "FR" : "EN";
    isFR = !isFR;
  });
});
