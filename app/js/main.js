$(function(){


$(".filter-price__input").ionRangeSlider({
    // skin: "modern",
  type: "double",
  onStart: function (data) {
    $(".filter-price__from").text(data.from);
    $(".filter-price__to").text(data.to);
  },
  onChange: function (data) {
    $(".filter-price__from").text(data.from);
    $(".filter-price__to").text(data.to);
  },
});



  

$(".reviews__slider").slick({
  dots: true,
  arrows: true,
  // fade: true,
  // autoplay: true,
  // autoplaySpeed: 2000,

  prevArrow:
    '<button type="button" class="  reviews__arrows   reviews--prev"> <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18.5" fill="white" fill-opacity="0.01" stroke="#C2C2C2" stroke-width="3"/><path d="M21.1968 29.0492L13.4508 21.3033C12.8497 20.699 12.8497 19.7231 13.4508 19.1189L21.1968 11.3729C21.7761 10.8757 22.6328 10.8757 23.2122 11.3729C23.8614 11.9291 23.9372 12.9082 23.3811 13.5573L16.7351 20.2033L23.3811 26.8648C23.9822 27.469 23.9822 28.445 23.3811 29.0492C22.7769 29.6503 21.8009 29.6503 21.1968 29.0492Z" fill="#C2C2C2"/></svg></button>',
  nextArrow:
    '<button type="button" class="  reviews__arrows reviews--next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18.5" fill="white" fill-opacity="0.01" stroke="#C2C2C2" stroke-width="3"/><path d="M21.1968 29.0492L13.4508 21.3033C12.8497 20.699 12.8497 19.7231 13.4508 19.1189L21.1968 11.3729C21.7761 10.8757 22.6328 10.8757 23.2122 11.3729C23.8614 11.9291 23.9372 12.9082 23.3811 13.5573L16.7351 20.2033L23.3811 26.8648C23.9822 27.469 23.9822 28.445 23.3811 29.0492C22.7769 29.6503 21.8009 29.6503 21.1968 29.0492Z" fill="#C2C2C2"/></svg></button>',

  // responsive: [
  //   {
  //     breakpoint: 769,
  //     settings: {
  //       arrows: false,
  //     },
  //   },
  // ],
});








$(".menu__list-link, .logo").on("click", function (e) {
  e.preventDefault();
  var id = $(this).attr("href"),
    top = $(id).offset().top;
  $("body,html").animate({ scrollTop: top }, 1600);
});







var header = $(".header__inner");
var scrollChange = 10;
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= scrollChange) {
    header.addClass("bg");
  } else {
    header.removeClass("bg");
  }

  
});









var mixer = mixitup(".category__inner");
});













