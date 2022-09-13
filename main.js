// scroll at navi
const btn = document.querySelectorAll('li a');

const offerDiv = document.querySelector(".offer");
const executionDiv = document.querySelector(".execution")
const cooperationDiv = document.querySelector(".cooperation")
const contactDiv = document.querySelector(".footer-div")

let bo = btn[0];
let be = btn[1];
let bco = btn[2];
let bc = btn[3];

for (const b of btn) {
  b.addEventListener("click", function() {
    if (b.className == "btn-offer") {
      offerDiv.scrollIntoView( {
        behavior: 'smooth'
      });
    }
    if (b.className == "btn-execution") {
      executionDiv.scrollIntoView( {
        behavior: 'smooth'
      });
    }
    if (b.className == "btn-cooperation") {
      cooperationDiv.scrollIntoView( {
        behavior: 'smooth'
      });
    }
    else if (b.className == "btn-contact") {
      contactDiv.scrollIntoView( {
        behavior: 'smooth'
      });
    }
  })
}

// scroll at LOGO
const upBtn = document.querySelector(".logo");
const upIntroDiv = document.querySelector("main");

upBtn.addEventListener("click", function() {
  upIntroDiv.scrollIntoView( {
    behavior: 'smooth'
  })
})

// first popup slider
const PHOTO_FIRST = document.querySelectorAll(".foto.first img");
const POPUP_FIRST = document.querySelector(".popup.first");
const POPUP_CLOSE = document.querySelector(".popup__close");
const POPUP_IMG = document.querySelector(".popup__img");
const ARROW_LEFT = document.querySelector(".popup__arrow--left");
const ARROW_RIGHT = document.querySelector(".popup__arrow--right");

let currentImgIndex;

PHOTO_FIRST.forEach((photo, index) => {
  photo.addEventListener("click", (e) => {
    POPUP_FIRST.classList.remove("hidden");
    POPUP_IMG.src = e.target.src;
    currentImgIndex = index;
  })
});

POPUP_CLOSE.addEventListener("click", () => {
  POPUP_FIRST.classList.add("hidden");
});

ARROW_RIGHT.addEventListener("click", () => {
  if (currentImgIndex === PHOTO_FIRST.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  POPUP_IMG.src = PHOTO_FIRST[currentImgIndex].src;
  });
  
  ARROW_LEFT.addEventListener("click", () => {
    if (currentImgIndex === 0) {
      currentImgIndex = PHOTO_FIRST.length - 1;
    } else {
      currentImgIndex--;
    }
    POPUP_IMG.src = PHOTO_FIRST[currentImgIndex].src;
    }); 
