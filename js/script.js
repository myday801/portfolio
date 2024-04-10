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

const navbarMenu = document.querySelector(".header__menu");
const navbarToggle = document.querySelector(".header__toggle");

navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});
