$(function () {
    $('a[href*="#"]').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 1000, 'linear');
    });
  });
  AOS.init({
    duration: 1200,
  })
  

$(".services div").hover(function () {
  console.log($(this));
  $(this).children('img').toggleClass("hidden")
  $(this).children('span').toggleClass("hidden")
  $(this).children('div').toggleClass("visible")
})
$(".small-services div").hover(function () {
  console.log($(this));
  $(this).children('img').toggleClass("hidden")
  $(this).children('span').toggleClass("hidden")
  $(this).children('div').toggleClass("visible")
})


$(function () {
  $.srSmoothscroll({
    // defaults
    step: 55,
    speed: 1000,
    ease: 'swing',
    target: $('body'),
    container: $(window)
  })
})