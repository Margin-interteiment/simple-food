$(function(){
  



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













