/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

// document.querySelector(".flip-card").addEventListener("click",function(){
//   const card=document.querySelector(".flip-card");
//   if(card.style.transform!='rotateY(180deg)'){
//     document.querySelector(".flip-card-inner").style.transform='rotateY(180deg)';
//   }
//   else{
//     console.log('yo');
//     document.querySelector(".flip-card-inner").style.transform='rotateY(0deg)';
//   }
// })

function flip(clickedCard) {
  const card = clickedCard.querySelector(".flip-card-inner");
  const currentRotation = getComputedStyle(card).getPropertyValue("transform");

  if (currentRotation === "none" || currentRotation === "matrix(1, 0, 0, 1, 0, 0)") {
      card.style.transform = 'rotateY(180deg)';
  } else {
      card.style.transform = 'rotateY(0deg)';
  }
};