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
  