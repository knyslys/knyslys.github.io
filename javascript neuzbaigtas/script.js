let navs = document.querySelector(".nav-bar");
let navsImg = document.querySelector(".top-logo");
let desertBtn = document.querySelector(".desert");
let juicesBtn = document.querySelector(".juices");
let desertGallery = document.querySelector(".img-id1");
let juicesGallery = document.querySelector(".img-id2");
let currentIndex = 3;
let howManyDisplay = 3;
let leftBtn = document.querySelector(".left");
let rightBtn = document.querySelector(".right");
let displayDesert = desertGallery.querySelectorAll(".gallery-card");





// leftBtn.addEventListener("click",scrollLeft);
// rightBtn.addEventListener("click",scrollRight);
desertBtn.addEventListener("click",desertShow);
juicesBtn.addEventListener("click",juicesShow);


window.onscroll = function() {
    scrollFunction();
}

// function hidePictures() {
    
//     for (i = 0; i < displayDesert.length; i++) {
//         displayDesert[i].style.display = "none";
  
//     }
// }
// displayPictures();
// function displayPictures() {
//     // hidePictures();
//     // // startPicture++;
//     // // middlePicture = startPicture + 1;
//     // // endPicture = middlePicture + 1;
//     // // if (startPicture >= displayDesert.length - 1) {
//     // //     startPicture = 0;
//     // //     middlePicture = 1;
//     // //     endPicture = 2;
//     // // }
//     // // if (endPicture > displayDesert.length - 1) {
//     // //     startPicture = middlePicture;
//     // //     middlePicture = 1;
//     // //     endPicture = 0;
//     // // }
//     // // console.log("Start : " + startPicture + " Middle: "+ middlePicture + " End: " + endPicture);
//     // // displayDesert[startPicture].style.display = "flex";
//     // // displayDesert[middlePicture].style.display = "flex";
//     // // displayDesert[endPicture].style.display = "flex";
//     // for (let i = 0; i < howManyDisplay; i++) {
//     //     currentIndex++;

//     //     if (currentIndex < 0) {
//     //         currentIndex = displayDesert.length - 1;
//     //     } else if (currentIndex >= displayDesert.length - 1) {
//     //         currentIndex = 0;
//     //     }
//     //     console.log("pradedu displayint:", currentIndex);
//     //     displayDesert[currentIndex].style.display = "flex";
        
       
//     //     // if (currentIndex < 0) {
//     //     //     currentIndex = displayDesert.length;
//     //     // } else if (currentIndex === displayDesert.length) {
//     //     //     displayDesert[displayDesert.length - 1].style.display = "flex";
//     //     //     displayDesert[displayDesert.length - 1].style.display = "flex";
//     //     //     currentIndex = 0;
//     //     //     console.log("Daugiau!", currentIndex);
//     //     //     continue;
//     //     // }
        
//     //     // displayDesert[currentIndex].style.display = "flex";
//     //     // console.log("Display: ", currentIndex);
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

// function scrollRight() {
//     currentIndex = currentIndex + 2;
//     if (currentIndex < 0) {
//         currentIndex = displayDesert.length - 1;
//     } else if (currentIndex > displayDesert.length) {
//         currentIndex = displayDesert.length - 1;
        
//     }

    
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
    }else {
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
