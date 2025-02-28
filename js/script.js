
// *********** SCRIPT SLIDER SWIPER  *********** 

var swiper  = new Swiper('.slide-content', {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide:'true',
    fade:'true',
    grabCurner:'true',
    pagination:{
      el:".swiper-pagination",
      clickable:true,
      dinamicBullets:true,
    },
    navigation:{
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev",
  
    },
    breakpoints:{
      0:{
        slidesPerView: 1,
      },
      520:{
        slidesPerView: 2,
      },
      950:{
        slidesPerView: 3
      },
    },
  });



  // *********** SCRIPT POPUP LIGHTBOX  *********** 

  document.querySelectorAll(".section_products--info img").forEach(image=> {
    image.onclick = () => {
        document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src = image.getAttribute("src");
    }
});

document.querySelector(".popup-image span").onclick = () => {
    document.querySelector(".popup-image").style.display = "none";
}

/*
function menuHandler (){

    document.querySelectorAll("#id_navList").addEventListener("click", function(){
      document.querySelector(".links-container").classList.remove(".links-container");
    })
}

menuHandler();
*/

