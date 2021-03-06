var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  // loop: true,
  slidePerView: 1,
  spaceBetween: 10,
  // Breakpoint
  breakpoints: {
   	640: {
      slidesPerView: 2,
      slidesPerGroup: 2, 
      spaceBetween: 10
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 10
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 10
    },
    1366: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 10
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})