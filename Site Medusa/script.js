let more = document.querySelector(".icon");
let content = document.querySelectorAll(".content");
let off = document.querySelector(".off");
let index = 0;
let slider = document.querySelector(".slider");
let about = document.querySelector(".about");
let gallery = document.querySelector(".gallery");
let contact = document.querySelector(".contact");
let content_container = document.querySelectorAll(".content-container");
let previous = "gallery";

more.addEventListener("click", () => {
  if (index === 0) {
    slideText(0, 1);
    index++;
  } else if (index === 1) {
    slideText(1, 2);
    index++;
  } else if (index >= 2) {
    slideText(2, 0);
    index = 0;
  }
  slideSlider();
});

about.addEventListener("click", () => {
  content_container[0].classList.add("off");
  content_container[0].classList.remove("apear");
  content_container[1].classList.remove("off");
  content_container[1].classList.add("apear");
  about.classList.remove("unt-nav");
  about.classList.add("act-nav", "apear");
  document.querySelector("." + previous).classList.remove("act-nav");
  document.querySelector("." + previous).classList.add("unt-nav");
  previous = "about";
});

gallery.addEventListener("click", () => {
  content_container[1].classList.add("off");
  content_container[1].classList.remove("apear");
  content_container[0].classList.remove("off");
  content_container[0].classList.add("apear");
  gallery.classList.remove("unt-nav");
  gallery.classList.add("act-nav");
  document.querySelector("." + previous).classList.remove("act-nav");
  document.querySelector("." + previous).classList.add("unt-nav");
  previous = "gallery";
});

function slideText(a, b) {
  content[a].classList.add("float-left");
  content[a].classList.remove("on");

  setTimeout(() => {
    content[a].classList.add("off");
    content[a].classList.remove("float-left");
  }, 1000);

  content[b].classList.remove("off");
  content[b].classList.add("on", "apear");

  setTimeout(() => {
    content[b].classList.remove("apear");
  }, 1000);
}

function slideSlider() {
  if (index === 0) {
    slider.style.backgroundImage =
      "linear-gradient(90deg, #ffffffea, rgba(255, 255, 255, 1) 20%, rgba(205, 205, 205, 1) 10%, rgba(71, 70, 70, 1) 40%)";
  } else if (index === 1) {
    slider.style.backgroundImage =
      "linear-gradient(90deg, #ffffffea, rgba(255, 255, 255, 1) 60%, rgba(205, 205, 205, 1) 10%, rgba(71, 70, 70, 1) 40%)";
  } else if (index === 2) {
    slider.style.backgroundImage =
      "linear-gradient(90deg, #ffffffea, rgba(255, 255, 255, 1) 100%, rgba(205, 205, 205, 1) 10%, rgba(71, 70, 70, 1) 40%)";
  }
}
