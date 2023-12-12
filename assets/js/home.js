/* slick carousel */

$(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3.7,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 1062,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".multiple-items1").slick({
    infinite: true,
    slidesToShow: 3.7,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".prev1"),
    nextArrow: $(".next1"),
    responsive: [
      {
        breakpoint: 1062,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $('.single-item').slick(
    {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $(".prev-btn"),
      nextArrow: $(".next-btn"),}
  );

  