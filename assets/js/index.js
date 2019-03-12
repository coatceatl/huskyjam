$(document).ready( function() {
  //active class for language
  $(".lang-link").click(function() {
    $('.lang-link').toggleClass('active');
  });

  //slider
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

});
