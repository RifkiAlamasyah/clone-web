const navbar = document.querySelector(".navbar");
// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(max-width: 550px)");
window.onscroll = () => {
  if (window.scrollY > 250) {
    navbar.classList.add("bg-light");
    navbar.classList.add("navbar-light");
    navbar.classList.remove("navbar-dark");
  } else if (mediaQuery.matches) {
    // Then trigger an alert
    navbar.classList.add("bg-light");
    navbar.classList.add("navbar-light");
    navbar.classList.remove("navbar-dark");
  } else {
    navbar.classList.remove("bg-light");
    navbar.classList.remove("navbar-light");
  }
};

// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  navbar.classList.add("bg-light");
  navbar.classList.add("navbar-light");
  navbar.classList.remove("navbar-dark");
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
