// scroll navi
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

// scroll LOGO
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
const POPUP_CLOSE_FIRST = document.querySelector(".popup__close.first");
const POPUP_IMG_FIRST = document.querySelector(".popup__img.first");
const ARROW_LEFT_FIRST = document.querySelector(".popup__arrow--left.first");
const ARROW_RIGHT_FIRST = document.querySelector(".popup__arrow--right.first");

let currentImgIndex;

PHOTO_FIRST.forEach((photo, index) => {
  photo.addEventListener("click", (e) => {
    POPUP_FIRST.classList.remove("hidden");
    POPUP_IMG_FIRST.src = e.target.src;
    currentImgIndex = index;
  })
});

POPUP_CLOSE_FIRST.addEventListener("click", () => {
  POPUP_FIRST.classList.add("hidden");
});

ARROW_RIGHT_FIRST.addEventListener("click", () => {
  if (currentImgIndex === PHOTO_FIRST.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  POPUP_IMG_FIRST.src = PHOTO_FIRST[currentImgIndex].src;
  });
  
  ARROW_LEFT_FIRST.addEventListener("click", () => {
    if (currentImgIndex === 0) {
      currentImgIndex = PHOTO_FIRST.length - 1;
    } else {
      currentImgIndex--;
    }
    POPUP_IMG_FIRST.src = PHOTO_FIRST[currentImgIndex].src;
    });

// second popup slider
const PHOTO_SECOND = document.querySelectorAll(".foto.second img");
const POPUP_SECOND = document.querySelector(".popup.second");
const POPUP_CLOSE_SECOND = document.querySelector(".popup__close.second");
const POPUP_IMG_SECOND = document.querySelector(".popup__img.second");
const ARROW_LEFT_SECOND = document.querySelector(".popup__arrow--left.second");
const ARROW_RIGHT_SECOND = document.querySelector(".popup__arrow--right.second");


PHOTO_SECOND.forEach((photo, index) => {
  photo.addEventListener("click", (e) => {
    POPUP_SECOND.classList.remove("hidden");
    POPUP_IMG_SECOND.src = e.target.src;
    currentImgIndex = index;
  })
});

POPUP_CLOSE_SECOND.addEventListener("click", () => {
  POPUP_SECOND.classList.add("hidden");
});

ARROW_RIGHT_SECOND.addEventListener("click", () => {
  if (currentImgIndex === PHOTO_SECOND.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  POPUP_IMG_SECOND.src = PHOTO_SECOND[currentImgIndex].src;
  });
  
  ARROW_LEFT_SECOND.addEventListener("click", () => {
    if (currentImgIndex === 0) {
      currentImgIndex = PHOTO_SECOND.length - 1;
    } else {
      currentImgIndex--;
    }
    POPUP_IMG_SECOND.src = PHOTO_SECOND[currentImgIndex].src;
    });

// third popup slider
const PHOTO_THIRD = document.querySelectorAll(".foto.third img");
const POPUP_THIRD = document.querySelector(".popup.third");
const POPUP_CLOSE_THIRD = document.querySelector(".popup__close.third");
const POPUP_IMG_THIRD = document.querySelector(".popup__img.third");
const ARROW_LEFT_THIRD = document.querySelector(".popup__arrow--left.third");
const ARROW_RIGHT_THIRD = document.querySelector(".popup__arrow--right.third");


PHOTO_THIRD.forEach((photo, index) => {
  photo.addEventListener("click", (e) => {
    POPUP_THIRD.classList.remove("hidden");
    POPUP_IMG_THIRD.src = e.target.src;
    currentImgIndex = index;
  })
});

POPUP_CLOSE_THIRD.addEventListener("click", () => {
  POPUP_THIRD.classList.add("hidden");
});

ARROW_RIGHT_THIRD.addEventListener("click", () => {
  if (currentImgIndex === PHOTO_THIRD.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  POPUP_IMG_THIRD.src = PHOTO_THIRD[currentImgIndex].src;
  });
  
  ARROW_LEFT_THIRD.addEventListener("click", () => {
    if (currentImgIndex === 0) {
      currentImgIndex = PHOTO_THIRD.length - 1;
    } else {
      currentImgIndex--;
    }
    POPUP_IMG_THIRD.src = PHOTO_THIRD[currentImgIndex].src;
    });

// fourth popup slider
const PHOTO_FOURTH = document.querySelectorAll(".foto.fourth img");
const POPUP_FOURTH = document.querySelector(".popup.fourth");
const POPUP_CLOSE_FOURTH = document.querySelector(".popup__close.fourth");
const POPUP_IMG_FOURTH = document.querySelector(".popup__img.fourth");
const ARROW_LEFT_FOURTH = document.querySelector(".popup__arrow--left.fourth");
const ARROW_RIGHT_FOURTH = document.querySelector(".popup__arrow--right.fourth");


PHOTO_FOURTH.forEach((photo, index) => {
  photo.addEventListener("click", (e) => {
    POPUP_FOURTH.classList.remove("hidden");
    POPUP_IMG_FOURTH.src = e.target.src;
    currentImgIndex = index;
  })
});

POPUP_CLOSE_FOURTH.addEventListener("click", () => {
  POPUP_FOURTH.classList.add("hidden");
});

ARROW_RIGHT_FOURTH.addEventListener("click", () => {
  if (currentImgIndex === PHOTO_FOURTH.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  POPUP_IMG_FOURTH.src = PHOTO_FOURTH[currentImgIndex].src;
  });
  
  ARROW_LEFT_FOURTH.addEventListener("click", () => {
    if (currentImgIndex === 0) {
      currentImgIndex = PHOTO_FOURTH.length - 1;
    } else {
      currentImgIndex--;
    }
    POPUP_IMG_FOURTH.src = PHOTO_FOURTH[currentImgIndex].src;
    });

// fifth popup slider
const PHOTO_FIFTH = document.querySelectorAll(".foto.fifth img");
const POPUP_FIFTH = document.querySelector(".popup.fifth");
const POPUP_CLOSE_FIFTH = document.querySelector(".popup__close.fifth");
const POPUP_IMG_FIFTH = document.querySelector(".popup__img.fifth");
const ARROW_LEFT_FIFTH = document.querySelector(".popup__arrow--left.fifth");
const ARROW_RIGHT_FIFTH = document.querySelector(".popup__arrow--right.fifth");


PHOTO_FIFTH.forEach((photo, index) => {
  photo.addEventListener("click", (e) => {
    POPUP_FIFTH.classList.remove("hidden");
    POPUP_IMG_FIFTH.src = e.target.src;
    currentImgIndex = index;
  })
});

POPUP_CLOSE_FIFTH.addEventListener("click", () => {
  POPUP_FIFTH.classList.add("hidden");
});

ARROW_RIGHT_FIFTH.addEventListener("click", () => {
  if (currentImgIndex === PHOTO_FIFTH.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  POPUP_IMG_FIFTH.src = PHOTO_FIFTH[currentImgIndex].src;
  });
  
  ARROW_LEFT_FIFTH.addEventListener("click", () => {
    if (currentImgIndex === 0) {
      currentImgIndex = PHOTO_FIFTH.length - 1;
    } else {
      currentImgIndex--;
    }
    POPUP_IMG_FIFTH.src = PHOTO_FIFTH[currentImgIndex].src;
    });
