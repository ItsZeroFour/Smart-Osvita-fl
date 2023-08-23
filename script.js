const slides = document.querySelectorAll(".slide");
const mediaSlide = document.querySelectorAll(".media-slide");
const openMenuButton = document.querySelector(".menu__open-btn");
const openMenuButton2 = document.querySelector(".menu__open-btn-2");
const navMenu = document.querySelector(".menu__list__popup");
const navMenu2 = document.querySelector(".menu__list__popup-2");
const navLinks = document.querySelectorAll(".menu__list__popup ul li a");
const navLinks2 = document.querySelectorAll(".menu__list__popup-2 ul li a");

let counter = 0;
let mediaCounter = 0;

console.log(openMenuButton2);

slides.forEach((slide, index) => {
  slide.style.marginLeft = `${index * 200}%`;
});

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const goPrev = () => {
  if (counter == 0) {
    counter = slides.length - 1;
    slideImage();
  } else {
    counter--;
    slideImage();
  }
};

const goNext = () => {
  if (counter == slides.length - 1) {
    counter = 0;
    slideImage();
  } else {
    counter++;
    slideImage();
  }
};

// MEDIA SLIDE IMAGE

mediaSlide.forEach((slide, index) => {
  slide.style.marginLeft = `${index * 0}%`;
});

const mediaSlideImage = () => {
  mediaSlide.forEach((slide) => {
    slide.style.transform = `translateX(-${mediaCounter * 100}%)`;
  });
};

const goPrevMedia = () => {
  if (mediaCounter == 0) {
    mediaCounter = mediaSlide.length - 1;
    mediaSlideImage();
  } else {
    mediaCounter--;
    mediaSlideImage();
  }
};

const goNextMedia = () => {
  if (mediaCounter == mediaSlide.length - 1) {
    mediaCounter = 0;
    mediaSlideImage();
  } else {
    mediaCounter++;
    mediaSlideImage();
  }
};

// ======= OPEN - CLOSE MENU =======

openMenuButton.addEventListener("click", () => {
  openMenuButton.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    openMenuButton.classList.toggle("active");
    navMenu.classList.toggle("active");
  })
);

// === MATERIALS MENU ===
openMenuButton2.addEventListener("click", () => {
  openMenuButton2.classList.toggle("active");
  console.log('123');
  navMenu2.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    openMenuButton2.classList.toggle("active");
    navMenu2.classList.toggle("active");
  })
);