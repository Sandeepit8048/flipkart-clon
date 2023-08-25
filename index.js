

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let carouselVp = document.querySelector("#carousel-vp");

let cCarouselInner = document.querySelector("#cCarousel-inner");
let carouselInnerWidth = cCarouselInner.getBoundingClientRect().width;

let leftValue = 0;

// Variable used to set the carousel movement value (card's width + gap)
const totalMovementSize =
  parseFloat(
    document.querySelector(".cCarousel-item").getBoundingClientRect().width,
    10
  ) +
  parseFloat(
    window.getComputedStyle(cCarouselInner).getPropertyValue("gap"),
    10
  );

prev.addEventListener("click", () => {
  if (!leftValue == 0) {
    leftValue -= -totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
  }
});

next.addEventListener("click", () => {
  const carouselVpWidth = carouselVp.getBoundingClientRect().width;
  if (carouselInnerWidth - Math.abs(leftValue) > carouselVpWidth) {
    leftValue -= totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
  }
});

const mediaQuery510 = window.matchMedia("(max-width: 510px)");
const mediaQuery770 = window.matchMedia("(max-width: 770px)");

mediaQuery510.addEventListener("change", mediaManagement);
mediaQuery770.addEventListener("change", mediaManagement);

let oldViewportWidth = window.innerWidth;

function mediaManagement() {
  const newViewportWidth = window.innerWidth;

  if (leftValue <= -totalMovementSize && oldViewportWidth < newViewportWidth) {
    leftValue += totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth = newViewportWidth;
  } else if (
    leftValue <= -totalMovementSize &&
    oldViewportWidth > newViewportWidth
  ) {
    leftValue -= totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth = newViewportWidth;
  }
}
    



// Carousel Auto-Cycle


const prev1 = document.querySelector("#prev1");
const next1 = document.querySelector("#next1");

let carouselVp1 = document.querySelector("#carousel-vp1");

let cCarouselInner1 = document.querySelector("#cCarousel-inner1");
let carouselInnerWidth1 = cCarouselInner.getBoundingClientRect().width;

let leftValue1 = 0;

// Variable used to set the carousel movement value (card's width + gap)
const totalMovementSize1 =
  parseFloat(
    document.querySelector(".cCarousel-item1").getBoundingClientRect().width,
    10
  ) +
  parseFloat(
    window.getComputedStyle(cCarouselInner1).getPropertyValue("gap"),
    10
  );

prev1.addEventListener("click", () => {
  if (!leftValue == 0) {
    leftValue -= -totalMovementSize;
    cCarouselInner1.style.left = leftValue + "px";
  }
});

next1.addEventListener("click", () => {
  const carouselVpWidth1 = carouselVp1.getBoundingClientRect().width;
  if (carouselInnerWidth - Math.abs(leftValue) > carouselVpWidth1) {
    leftValue -= totalMovementSize;
    cCarouselInner1.style.left = leftValue + "px";
  }
});

const mediaQuery5101 = window.matchMedia("(max-width: 510px)");
const mediaQuery7701 = window.matchMedia("(max-width: 770px)");

mediaQuery5101.addEventListener("change", mediaManagement);
mediaQuery7701.addEventListener("change", mediaManagement);

let oldViewportWidth1 = window.innerWidth;

function mediaManagement() {
  const newViewportWidth = window.innerWidth;

  if (leftValue <= -totalMovementSize && oldViewportWidth1 < newViewportWidth) {
    leftValue += totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth1 = newViewportWidth;
  } else if (
    leftValue <= -totalMovementSize &&
    oldViewportWidth1 > newViewportWidth
  ) {
    leftValue -= totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth1 = newViewportWidth;
  }
}


// landing pages2

const prev2 = document.querySelector("#prev2");
const next2 = document.querySelector("#next2");

let carouselVp2 = document.querySelector("#carousel-vp2");

let cCarouselInner2 = document.querySelector("#cCarousel-inner2");
let carouselInnerWidth2 = cCarouselInner.getBoundingClientRect().width;

let leftValue2 = 0;

// Variable used to set the carousel movement value (card's width + gap)
const totalMovementSize2 =
  parseFloat(
    document.querySelector(".cCarousel-item2").getBoundingClientRect().width,
    10
  ) +
  parseFloat(
    window.getComputedStyle(cCarouselInner2).getPropertyValue("gap"),
    10
  );

prev1.addEventListener("click", () => {
  if (!leftValue == 0) {
    leftValue -= -totalMovementSize;
    cCarouselInner2.style.left = leftValue + "px";
  }
});

next1.addEventListener("click", () => {
  const carouselVpWidth2 = carouselVp2.getBoundingClientRect().width;
  if (carouselInnerWidth - Math.abs(leftValue) > carouselVpWidth2) {
    leftValue -= totalMovementSize;
    cCarouselInner2.style.left = leftValue + "px";
  }
});

const mediaQuery5102 = window.matchMedia("(max-width: 510px)");
const mediaQuery7702 = window.matchMedia("(max-width: 770px)");

mediaQuery5102.addEventListener("change", mediaManagement);
mediaQuery7702.addEventListener("change", mediaManagement);

let oldViewportWidth2 = window.innerWidth;

function mediaManagement() {
  const newViewportWidth = window.innerWidth;

  if (leftValue <= -totalMovementSize && oldViewportWidth2 < newViewportWidth) {
    leftValue += totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth2 = newViewportWidth;
  } else if (
    leftValue <= -totalMovementSize &&
    oldViewportWidth2 > newViewportWidth
  ) {
    leftValue -= totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth2 = newViewportWidth;
  }
}
