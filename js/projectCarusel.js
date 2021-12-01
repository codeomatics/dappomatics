

let slideIndex = 0;
showSlides();

// Next-previous control
function nextSlide() {
  slideIndex++;
  showSlides();
  timer = _timer; // reset timer
}

function prevSlide() {
  slideIndex--;
  showSlides();
  timer = _timer;
}

// Thumbnail image controlls
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
  timer = _timer;
}

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  // let slides1 = document.querySelectorAll(".mySlides1");
  let dots = document.querySelectorAll(".dots");

  if (slideIndex > slides.length - 1) slideIndex = 0;
  // if (slideIndex > slides1.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  
  // hide all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  // hide all slides
  // slides1.forEach((slide) => {
  //   slide.style.display = "none";
  // });
  
  // show one slide base on index number
  slides[slideIndex].style.display = "block";
  // slides1[slideIndex].style.display = "block";
  
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  
  dots[slideIndex].classList.add("active");
}

// autoplay slides --------
let timer = 7; // sec
const _timer = timer;

// this function runs every 1 second
setInterval(() => {
  timer--;

  if (timer < 1) {
    nextSlide();
    timer = _timer; // reset timer
  }
}, 1000); // 1sec




// project 2

let slideIndex2 = 0;
showSlides2();

// Next-previous control
function nextSlide2() {
  slideIndex2++;
  showSlides2();
  timer2 = _timer2; // reset timer
}

function prevSlide2 () {
  slideIndex2--;
  showSlides2();
  timer2 = _timer2;
}

// Thumbnail image controlls
function currentSlide2(n) {
  slideIndex2 = n - 1;
  showSlides2();
  timer2 = _timer2;
}

function showSlides2() {
  // let slides = document.querySelectorAll(".mySlides");
  let slides2 = document.querySelectorAll(".mySlides1");
  let dots = document.querySelectorAll(".dots");

  // if (slideIndex2 > slides.length - 1) slideIndex2 = 0;
  if (slideIndex2 > slides2.length - 1) slideIndex2 = 0;
  if (slideIndex2 < 0) slideIndex2 = slides2.length - 1;
  
  // hide all slides
  // slides.forEach((slide) => {
  //   slide.style.display = "none";
  // });
  // hide all slides
  slides2.forEach((slide) => {
    slide.style.display = "none";
  });
  
  // show one slide base on index number
  // slides[slideIndex2].style.display = "block";
  slides2[slideIndex2].style.display = "block";
  
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  
  dots[slideIndex2].classList.add("active");
}

// autoplay slides --------
let timer2 = 7; // sec
const _timer2 = timer2;

// this function runs every 1 second
setInterval(() => {
  timer2--;

  if (timer2 < 1) {
    nextSlide2();
    timer2 = _timer2; // reset timer
  }
}, 1000); // 1sec




// project 3

let slideIndex3 = 0;
showSlides3();

// Next-previous control
function nextSlide3() {
  slideIndex3++;
  showSlides3();
  timer3 = _timer3; // reset timer
}

function prevSlide3 () {
  slideIndex3--;
  showSlides3();
  timer3 = _timer3;
}

// Thumbnail image controlls
function currentSlide3(n) {
  slideIndex3 = n - 1;
  showSlides3();
  timer3 = _timer3;
}

function showSlides3() {
  // let slides = document.querySelectorAll(".mySlides");
  let slides2 = document.querySelectorAll(".mySlides3");
  let dots = document.querySelectorAll(".dots");

  // if (slideIndex3 > slides.length - 1) slideIndex3 = 0;
  if (slideIndex3 > slides2.length - 1) slideIndex3 = 0;
  if (slideIndex3 < 0) slideIndex3 = slides2.length - 1;
  
  // hide all slides
  // slides.forEach((slide) => {
  //   slide.style.display = "none";
  // });
  // hide all slides
  slides2.forEach((slide) => {
    slide.style.display = "none";
  });
  
  // show one slide base on index number
  // slides[slideIndex3].style.display = "block";
  slides2[slideIndex3].style.display = "block";
  
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  
  dots[slideIndex3].classList.add("active");
}

// autoplay slides --------
let timer3 = 7; // sec
const _timer3 = timer3;

// this function runs every 1 second
setInterval(() => {
  timer3--;

  if (timer3 < 1) {
    nextSlide3();
    timer3 = _timer3; // reset timer
  }
}, 1000); // 1sec


// project 4

let slideIndex4 = 0;
showSlides4();

// Next-previous control
function nextSlide4() {
  slideIndex4++;
  showSlides4();
  timer4 = _timer4; // reset timer
}

function prevSlide4 () {
  slideIndex4--;
  showSlides4();
  timer4 = _timer4;
}

// Thumbnail image controlls
function currentSlide4(n) {
  slideIndex4 = n - 1;
  showSlides4();
  timer4 = _timer4;
}

function showSlides4() {
  // let slides = document.querySelectorAll(".mySlides");
  let slides2 = document.querySelectorAll(".mySlides4");
  let dots = document.querySelectorAll(".dots");

  // if (slideIndex4 > slides.length - 1) slideIndex4 = 0;
  if (slideIndex4 > slides2.length - 1) slideIndex4 = 0;
  if (slideIndex4 < 0) slideIndex4 = slides2.length - 1;
  
  // hide all slides
  // slides.forEach((slide) => {
  //   slide.style.display = "none";
  // });
  // hide all slides
  slides2.forEach((slide) => {
    slide.style.display = "none";
  });
  
  // show one slide base on index number
  // slides[slideIndex4].style.display = "block";
  slides2[slideIndex4].style.display = "block";
  
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  
  dots[slideIndex4].classList.add("active");
}

// autoplay slides --------
let timer4 = 7; // sec
const _timer4 = timer4;

// this function runs every 1 second
setInterval(() => {
  timer4--;

  if (timer4 < 1) {
    nextSlide4();
    timer4 = _timer4; // reset timer
  }
}, 1000); // 1sec



// project 5

let slideIndex5 = 0;
showSlides5();

// Next-previous control
function nextSlide5() {
  slideIndex5++;
  showSlides5();
  timer5 = _timer5; // reset timer
}

function prevSlide5 () {
  slideIndex5--;
  showSlides5();
  timer5 = _timer5;
}

// Thumbnail image controlls
function currentSlide5(n) {
  slideIndex5 = n - 1;
  showSlides5();
  timer5 = _timer5;
}

function showSlides5() {
  // let slides = document.querySelectorAll(".mySlides");
  let slides2 = document.querySelectorAll(".mySlides5");
  let dots = document.querySelectorAll(".dots");

  // if (slideIndex5 > slides.length - 1) slideIndex5 = 0;
  if (slideIndex5 > slides2.length - 1) slideIndex5 = 0;
  if (slideIndex5 < 0) slideIndex5 = slides2.length - 1;
  
  // hide all slides
  // slides.forEach((slide) => {
  //   slide.style.display = "none";
  // });
  // hide all slides
  slides2.forEach((slide) => {
    slide.style.display = "none";
  });
  
  // show one slide base on index number
  // slides[slideIndex5].style.display = "block";
  slides2[slideIndex5].style.display = "block";
  
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  
  dots[slideIndex5].classList.add("active");
}

// autoplay slides --------
let timer5 = 7; // sec
const _timer5 = timer5;

// this function runs every 1 second
setInterval(() => {
  timer5--;

  if (timer5 < 1) {
    nextSlide5();
    timer5 = _timer5; // reset timer
  }
}, 1000); // 1sec



// project 6

let slideIndex6 = 0;
showSlides6();

// Next-previous control
function nextSlide6() {
  slideIndex6++;
  showSlides6();
  timer6 = _timer6; // reset timer
}

function prevSlide6 () {
  slideIndex6--;
  showSlides6();
  timer6 = _timer6;
}

// Thumbnail image controlls
function currentSlide6(n) {
  slideIndex6 = n - 1;
  showSlides6();
  timer6 = _timer6;
}

function showSlides6() {
  // let slides = document.querySelectorAll(".mySlides");
  let slides2 = document.querySelectorAll(".mySlides6");
  let dots = document.querySelectorAll(".dots");

  // if (slideIndex6 > slides.length - 1) slideIndex6 = 0;
  if (slideIndex6 > slides2.length - 1) slideIndex6 = 0;
  if (slideIndex6 < 0) slideIndex6 = slides2.length - 1;
  
  // hide all slides
  // slides.forEach((slide) => {
  //   slide.style.display = "none";
  // });
  // hide all slides
  slides2.forEach((slide) => {
    slide.style.display = "none";
  });
  
  // show one slide base on index number
  // slides[slideIndex6].style.display = "block";
  slides2[slideIndex6].style.display = "block";
  
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  
  dots[slideIndex6].classList.add("active");
}

// autoplay slides --------
let timer6 = 7; // sec
const _timer6 = timer6;

// this function runs every 1 second
setInterval(() => {
  timer6--;

  if (timer6 < 1) {
    nextSlide6();
    timer6 = _timer6; // reset timer
  }
}, 1000); // 1sec


// project 7

let slideIndex7 = 0;
showSlides7();

// Next-previous control
function nextSlide7() {
  slideIndex7++;
  showSlides7();
  timer7 = _timer7; // reset timer
}

function prevSlide7 () {
  slideIndex7--;
  showSlides7();
  timer7 = _timer7;
}

// Thumbnail image controlls
function currentSlide7(n) {
  slideIndex7 = n - 1;
  showSlides7();
  timer7 = _timer7;
}

function showSlides7() {
  // let slides = document.querySelectorAll(".mySlides");
  let slides2 = document.querySelectorAll(".mySlides7");
  let dots = document.querySelectorAll(".dots");

  // if (slideIndex7 > slides.length - 1) slideIndex7 = 0;
  if (slideIndex7 > slides2.length - 1) slideIndex7 = 0;
  if (slideIndex7 < 0) slideIndex7 = slides2.length - 1;
  
  // hide all slides
  // slides.forEach((slide) => {
  //   slide.style.display = "none";
  // });
  // hide all slides
  slides2.forEach((slide) => {
    slide.style.display = "none";
  });
  
  // show one slide base on index number
  // slides[slideIndex7].style.display = "block";
  slides2[slideIndex7].style.display = "block";
  
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  
  dots[slideIndex7].classList.add("active");
}

// autoplay slides --------
let timer7 = 7; // sec
const _timer7 = timer7;

// this function runs every 1 second
setInterval(() => {
  timer7--;

  if (timer7 < 1) {
    nextSlide7();
    timer7 = _timer7; // reset timer
  }
}, 1000); // 1sec


// project 8

let slideIndex8 = 0;
showSlides8();

// Next-previous control
function nextSlide8() {
  slideIndex8++;
  showSlides8();
  timer8 = _timer8; // reset timer
}

function prevSlide8 () {
  slideIndex8--;
  showSlides8();
  timer8 = _timer8;
}

// Thumbnail image controlls
function currentSlide8(n) {
  slideIndex8 = n - 1;
  showSlides8();
  timer8 = _timer8;
}

function showSlides8() {
  // let slides = document.querySelectorAll(".mySlides");
  let slides2 = document.querySelectorAll(".mySlides8");
  let dots = document.querySelectorAll(".dots");

  // if (slideIndex8 > slides.length - 1) slideIndex8 = 0;
  if (slideIndex8 > slides2.length - 1) slideIndex8 = 0;
  if (slideIndex8 < 0) slideIndex8 = slides2.length - 1;
  
  // hide all slides
  // slides.forEach((slide) => {
  //   slide.style.display = "none";
  // });
  // hide all slides
  slides2.forEach((slide) => {
    slide.style.display = "none";
  });
  
  // show one slide base on index number
  // slides[slideIndex8].style.display = "block";
  slides2[slideIndex8].style.display = "block";
  
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  
  dots[slideIndex8].classList.add("active");
}

// autoplay slides --------
let timer8 = 7; // sec
const _timer8 = timer8;

// this function runs every 1 second
setInterval(() => {
  timer8--;

  if (timer8 < 1) {
    nextSlide8();
    timer8 = _timer8; // reset timer
  }
}, 1000); // 1sec