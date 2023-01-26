const navbar = document.querySelector(".navbar");
// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(max-width: 550px)");
window.onscroll = () => {
  if (window.scrollY > 250) {
    navbar.classList.add("bg-dark");
  } else if (mediaQuery.matches) {
    // Then trigger an alert
    navbar.classList.add("bg-dark");
  } else {
    navbar.classList.remove("bg-dark");
  }
};

// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  navbar.classList.add("bg-dark");
}

// banner

var banner = document.getElementById("banner");

var bgImageArray = ["bg1.jpg.webp", "bg2.jpg.webp", "bg3.jpg.webp"],
  base = "https://kevurugames.com/wp-content/uploads/2020/11/slide-",
  secs = 3;
bgImageArray.forEach(function (img) {
  new Image().src = base + img;
  // caches images, avoiding white flash between background replacements
});

function backgroundSequence() {
  window.clearTimeout();
  var k = 0;
  for (i = 0; i < bgImageArray.length; i++) {
    setTimeout(function () {
      banner.style.background =
        "url(" + base + bgImageArray[k] + ") no-repeat center center fixed";
      banner.style.backgroundSize = "cover";
      if (k + 1 === bgImageArray.length) {
        setTimeout(function () {
          backgroundSequence();
        }, secs * 1000);
      } else {
        k++;
      }
    }, secs * 1000 * i);
  }
}
backgroundSequence();

// fade gobsay
var current = 0,
  slides = document.getElementsByClassName("gobsay");

setInterval(function () {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = current != slides.length - 1 ? current + 1 : 0;
  slides[current].style.opacity = 1;
}, 3000);
