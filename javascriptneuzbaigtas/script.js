let navs = document.querySelector(".nav-bar");
let navsImg = document.querySelector(".top-logo");
let desertBtn = document.querySelector(".desert");
let juicesBtn = document.querySelector(".juices");
let desertGallery = document.querySelector(".img-id1");
let juicesGallery = document.querySelector(".img-id2");

let gallary = document.getElementById("nav-gallery");
let extra = document.getElementById("nav-extra");
let about = document.getElementById("nav-about");
let home = document.getElementById("nav-home");
// leftBtn.addEventListener("click",scrollLeft);
// rightBtn.addEventListener("click",scrollRight);
desertBtn.addEventListener("click", desertShow);
juicesBtn.addEventListener("click", juicesShow);









gallary.addEventListener("click", function() {
document.querySelector(".our-menu").scrollIntoView({behavior: "smooth"});
})

home.addEventListener("click", function() {
  document.querySelector(".top-header").scrollIntoView({behavior: "smooth"});
});


extra.addEventListener("click", function() {
  document.querySelector(".selection").scrollIntoView({behavior: "smooth"});
})


about.addEventListener("click", function() {
  document.querySelector(".main-container").scrollIntoView({behavior: "smooth"});
})

window.onscroll = function () {
  scrollFunction();
};

// function hidePictures() {

//     for (i = 0; i < displayDesert.length; i++) {
//         displayDesert[i].style.display = "none";

//     }
// }
// displayPictures();
// function displayPictures() {
//     // hidePictures();
//     // for (let i = 0; i < howManyDisplay; i++) {
//     //     currentIndex++;

//     //     if (currentIndex < 0) {
//     //         currentIndex = displayDesert.length - 1;
//     //     } else if (currentIndex >= displayDesert.length - 1) {
//     //         currentIndex = 0;
//     //     }
//     //     console.log("pradedu displayint:", currentIndex);
//     //     displayDesert[currentIndex].style.display = "flex";
//     //     // displayDesert[currentIndex].style.display = "flex";

//     //     // currentIndex++;

//     // }

// }

// function scrollLeft() {
//     currentIndex = currentIndex - 2;
//     if (currentIndex < 0) {
//         currentIndex = displayDesert.length - 1;
//     } else if (currentIndex > displayDesert.length) {
//         currentIndex = displayDesert.length - 1;

//     }

//     console.log("Start", currentIndex);
//     // console.log("hi", currentIndex);
//     displayPictures();

// }

//     console.log("Start", currentIndex);
//     // console.log("hi", currentIndex);
//     displayPictures();

// }

function juicesShow() {
  desertGallery.style.display = "none";
  juicesGallery.style.display = "flex";
}

function desertShow() {
  juicesGallery.style.display = "none";
  desertGallery.style.display = "flex";
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    hideBar();
  } else {
    showBar();
  }
}

function hideBar() {
  navs.classList.remove("expanded");
  navs.classList.add("collapsed");
  navsImg.style.display = "none";
}

function showBar() {
  navs.classList.remove("collapsed");
  navs.classList.add("expanded");
  navsImg.style.display = "block";
  navs.style.display = block;
}
