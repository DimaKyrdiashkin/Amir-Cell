// Tariffs slider
$("#tariffs_slider").slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrow: true,
  prevArrow: `<div class="prevArrow sliderArrow">
      <img src="./static/svg/prevArrow.svg" alt="prevArrow" />
    </div>`,
  nextArrow: `<div class="nextArrow sliderArrow">
      <img src="./static/svg/nextArrow.svg" alt="nextArrow" />
    </div>`,
  speed: 1000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
      },
    },
  ],
});

// Banner #1 slider
$("#greenBanner_slider").slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  arrow: true,
  prevArrow: `<div class="prevArrow sliderArrow">
      <img src="./static/svg/prevArrow.svg" alt="prevArrow" />
    </div>`,
  nextArrow: `<div class="nextArrow sliderArrow">
      <img src="./static/svg/nextArrow.svg" alt="nextArrow" />
    </div>`,
  speed: 1000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
      },
    },
  ],
});
