$(function() {
  $('.city__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    arrows: false,
    fade: true,
    asNavFor: '.city__smallslider',
    draggable: false,
  });

  $('.city__smallslider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.city__inner',
    arrows: false,
    speed: 1500,
    centerMode: true,
    focusOnSelect: true,
    // centerPadding: '60px',
    centerPadding: '-10px'
    
  });

  $('.relaxation__top-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.relaxation__down',
    arrows: false,
    speed: 1500,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0px',
  });

  $('.relaxation__down').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    arrows: false,
    fade: true,
    asNavFor: '.relaxation__top-slider',
    draggable: false,
  });



  $(".city__smallslider .city__items").click(function () {
    $(".city__smallslider .city__items").removeClass("active");
    $(this).toggleClass("active");
  })

  $(".relaxation__top-slider .relaxation__item").click(function () {
    $(".relaxation__top-slider .relaxation__item").removeClass("active");
    $(this).toggleClass("active");
  })

});