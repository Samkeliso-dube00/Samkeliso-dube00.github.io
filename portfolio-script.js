/* =======================================================
   HAMBURGER MENU
======================================================== */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("mobile-open");
});

// Close menu when clicking a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("mobile-open");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-right")) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("mobile-open");
  }
});

/* =======================================================
   DARK / LIGHT MODE
======================================================== */

const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  themeToggle.textContent = "🌙";
} else {
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");
  
  themeToggle.textContent = isLight ? "🌙" : "☀️";
  localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
});

/* =======================================================
   SCROLL REVEAL
======================================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

/* =======================================================
   ACTIVE NAVIGATION
======================================================== */

const sections = document.querySelectorAll("section[id]");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        const activeLink = document.querySelector(
          `.nav-links a[href="#${entry.target.id}"]`
        );

        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px"
  }
);

sections.forEach((section) => {
  navObserver.observe(section);
});

/* =======================================================
   CONTACT FORM — FRONTEND DEMO
======================================================== */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.style.display = "block";
  contactForm.reset();

  setTimeout(() => {
    formMessage.style.display = "none";
  }, 5000);
});

/* =======================================================
   VISITOR COUNTER (Temporary - localStorage)
   Will be replaced with AWS Lambda + DynamoDB API call later
======================================================== */

const visitCounter = document.getElementById("visitCounter");

// Get current count from localStorage
let count = localStorage.getItem("portfolioVisits");

if (!count) {
  count = 1;
} else {
  count = parseInt(count) + 1;
}

// Save updated count
localStorage.setItem("portfolioVisits", count);

// Display count
visitCounter.textContent = count;