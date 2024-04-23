new Swiper('.main', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1.2,
  breakpoints: {
    576: {
      enabled: false,
    },
  },
});