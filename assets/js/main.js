document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector(".nav");

  mobileMenuBtn.addEventListener("click", function () {
    nav.classList.toggle("active");
    this.querySelector("i").classList.toggle("fa-times");
    this.querySelector("i").classList.toggle("fa-bars");
  });

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      nav.classList.remove("active");
      mobileMenuBtn.querySelector("i").classList.remove("fa-times");
      mobileMenuBtn.querySelector("i").classList.add("fa-bars");
    });
  });

  // Header scroll effect
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Form submission
  const contactForm = document.querySelector(".contact-form form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Here you would typically send the form data to a server
      // For now, we'll just show an alert
      alert("Thank you for your message! We will get back to you soon.");
      this.reset();
    });
  }

  // Newsletter form submission
  const newsletterForm = document.querySelector(".footer-newsletter form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      if (emailInput.value.trim() === "") {
        alert("Please enter your email address");
        return;
      }

      alert("Thank you for subscribing to our newsletter!");
      emailInput.value = "";
    });
  }

  // Animation on scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll(
      ".service-card, .team-member, .portfolio-item"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (elementPosition < screenPosition) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  }

  // Set initial state for animated elements
  const animatedElements = document.querySelectorAll(
    ".service-card, .team-member, .portfolio-item"
  );
  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  window.addEventListener("scroll", animateOnScroll);
  window.addEventListener("load", animateOnScroll);
});
