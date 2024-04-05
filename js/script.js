const swiper = new Swiper(".pfSwiper", {
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
