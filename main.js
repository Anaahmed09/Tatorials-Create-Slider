let sliderImages = Array.from(document.querySelectorAll("img"));
let slidesCount = sliderImages.length;
let currentSlide = 1;
let slideNumberElement = document.querySelector(".slide-number");
let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;
let paginationElement = document.createElement("ul");
paginationElement.id = "pagination-ul";
for (let i = 1; i <= slidesCount; i++) {
  let paginationItem = document.createElement("li");
  paginationItem.dataset.index = i;
  paginationItem.innerHTML = i;
  paginationElement.appendChild(paginationItem);
}

document.getElementById("indicators").appendChild(paginationElement);
let paginationCreatedUl = document.getElementById("pagination-ul");
let paginationsBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);
for (let i = 0; i < paginationsBullets.length; i++) {
  paginationsBullets[i].onclick = function () {
    currentSlide = parseInt(this.dataset.index);
    theChecker();
  };
}
theChecker();
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}
function theChecker() {
  slideNumberElement.innerHTML = `Slide #${currentSlide} of ${slidesCount}`;
  removeAlltheChecker();
  sliderImages[currentSlide - 1].classList.add("active");
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");
  if (currentSlide === 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }
  if (currentSlide === slidesCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

function removeAlltheChecker() {
  // Loop Through Images
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });

  // Loop Through Pagination Bullets
  paginationsBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
