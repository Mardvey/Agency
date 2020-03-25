$(function() {
  $('.city__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    arrows: false,
    fade: true,
    asNavFor: '.city__smallslider',
    draggable: false,
    // afterChange: slick, currentSlide,
  });

  $('.city__smallslider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.city__inner',
    arrows: false,
    speed: 1500,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '60px',
    
  });


  $(".city__smallslider .city__items").click(function () {
    $(".city__smallslider .city__items").removeClass("active");
    $(this).toggleClass("active");
  })

});