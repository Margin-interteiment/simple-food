$(function () {
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

    prevArrow:
      '<button type="button" class="reviews__arrows   reviews--prev"> <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18.5" fill="white" fill-opacity="0.01" stroke="#C2C2C2" stroke-width="3"/><path d="M21.1968 29.0492L13.4508 21.3033C12.8497 20.699 12.8497 19.7231 13.4508 19.1189L21.1968 11.3729C21.7761 10.8757 22.6328 10.8757 23.2122 11.3729C23.8614 11.9291 23.9372 12.9082 23.3811 13.5573L16.7351 20.2033L23.3811 26.8648C23.9822 27.469 23.9822 28.445 23.3811 29.0492C22.7769 29.6503 21.8009 29.6503 21.1968 29.0492Z" fill="#C2C2C2"/></svg></button>',
    nextArrow:
      '<button type="button" class="reviews__arrows reviews--next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18.5" fill="white" fill-opacity="0.01" stroke="#C2C2C2" stroke-width="3"/><path d="M21.1968 29.0492L13.4508 21.3033C12.8497 20.699 12.8497 19.7231 13.4508 19.1189L21.1968 11.3729C21.7761 10.8757 22.6328 10.8757 23.2122 11.3729C23.8614 11.9291 23.9372 12.9082 23.3811 13.5573L16.7351 20.2033L23.3811 26.8648C23.9822 27.469 23.9822 28.445 23.3811 29.0492C22.7769 29.6503 21.8009 29.6503 21.1968 29.0492Z" fill="#C2C2C2"/></svg></button>',
  });

  $(".burger-one__slide").slick({
    arrows: true,
    dots: false,
    fade: true,
    autoplay: false,
    autoplaySpeed: 2000,

    prevArrow:
      '<button type="button" class="slick-prev slick-arrow burger--prev"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><rect width="60" height="60" rx="6" fill="white" fill-opacity="0.8"/><path d="M21.3847 29.2262L37.398 14.8399C37.9234 14.3245 38.7756 14.3245 39.3011 14.8399C39.8266 15.3553 39.8266 16.1915 39.3011 16.7069L24.2534 30.2267L39.2998 43.7465C39.8253 44.2619 39.8253 45.0981 39.2998 45.6135C38.7743 46.1288 37.9221 46.1288 37.3967 45.6135L21.3833 31.2273C21.1033 30.9525 20.9832 30.5883 21.0019 30.228C20.9845 29.8665 21.1045 29.5023 21.3847 29.2262Z" fill="#363853"/></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next slick-arrow burger--next "> <img src="images/icons-svg/arrow-next.svg" alt="right"></button>',
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

$(".star").rateYo({
  rating: 4,
  starWidth: "16px",
  normalFill: "#C1C1C14D",
  ratedFill: "#FFB800",
  readOnly: true,
});

const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");

modalCall.on("click", function (event) {
  let $this = $(this);
  let modalid = $this.data("modal");

  $("#burgermenu").addClass("show");
  $("body").addClass("no-scroll");
});

modalClose.on("click", function (event) {
  event.preventDefault();
  let $this = $(this);
  let modalParent = $this.parents(".modal");

  modalParent.removeClass("show");
  $("body").removeClass("no-scroll");
});




// $(".modal-window__content").slick({
//   // infinite: true,
//   arrows: true,
//   dots: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
// });




// let timer = null;
// let slider = document.querySelector("#slider"),
//   slides = slider.querySelectorAll(".slide_item"),
//   len = slides.length,
//   index = len - 1,
//   dir = 1;

// function move() {
//   slides[index].style.opacity = "";
//   slides[index].style.Zindex = "";
//   index = (index + dir + len) % len;
//   slides[index].style.opacity = 1;
//   slides[index].style.Zindex = 1;
//   timer = window.setTimeout(move, 2000);
// }

// function show(state) {
//   if (state === "block") {
//     timer = window.setTimeout(move, 1000);
//   } else {
//     clearTimeout(timer);
//   }
//   document.getElementById("window9").style.display = state;
//   document.getElementById("wrap9").style.display = state;
// }



$(".product-tabs__top-item").on("click", function (e) {
  e.preventDefault();

  $(".product-tabs__top-item").removeClass("product-tabs__top-item--active");

  $(this).addClass("product-tabs__top-item--active");

  $(".product-tabs__content-item").removeClass(
    "product-tabs__content-item--active"
  );

  $($(this).attr("href")).addClass("product-tabs__content-item--active");
});



 $(".interests-slider__menu").slick({
   arrows: true,
   dots: false,
   infinite: true,
   slidesToShow: 4,
   slidesToScroll: 5,

   prevArrow:
     '<button type="button" class="slick-arrow interests-slider__prev"> <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18.5" fill="white" fill-opacity="0.01" stroke="#C2C2C2" stroke-width="3"/><path d="M21.1968 29.0492L13.4508 21.3033C12.8497 20.699 12.8497 19.7231 13.4508 19.1189L21.1968 11.3729C21.7761 10.8757 22.6328 10.8757 23.2122 11.3729C23.8614 11.9291 23.9372 12.9082 23.3811 13.5573L16.7351 20.2033L23.3811 26.8648C23.9822 27.469 23.9822 28.445 23.3811 29.0492C22.7769 29.6503 21.8009 29.6503 21.1968 29.0492Z" fill="#C2C2C2"/></svg></button>',
   nextArrow:
     '<button type="button" class="slick-arrow interests-slider__next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18.5" fill="white" fill-opacity="0.01" stroke="#C2C2C2" stroke-width="3"/><path d="M21.1968 29.0492L13.4508 21.3033C12.8497 20.699 12.8497 19.7231 13.4508 19.1189L21.1968 11.3729C21.7761 10.8757 22.6328 10.8757 23.2122 11.3729C23.8614 11.9291 23.9372 12.9082 23.3811 13.5573L16.7351 20.2033L23.3811 26.8648C23.9822 27.469 23.9822 28.445 23.3811 29.0492C22.7769 29.6503 21.8009 29.6503 21.1968 29.0492Z" fill="#C2C2C2"/></svg></button>',
 });



 $(".modal-window__content").slick({
   arrows: true,
   dots: true,
   prevArrow:
     '<button type="button" class="modal__prev"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><rect width="60" height="60" rx="6" fill="white" fill-opacity="0.8"/><path d="M21.0383 31.0149L37.0516 45.6079C37.5771 46.1307 38.4293 46.1307 38.9548 45.6079C39.4802 45.0851 39.4802 44.2369 38.9548 43.7141L23.907 30L38.9534 16.2859C39.4789 15.7631 39.4789 14.9148 38.9534 14.3921C38.428 13.8693 37.5758 13.8693 37.0503 14.3921L21.037 28.9851C20.7569 29.2638 20.6369 29.6332 20.6556 29.9986C20.6381 30.3654 20.7582 30.7348 21.0383 31.0149Z" fill="#505050"/></svg> </button>',
   nextArrow:
     '<button type="button" class="modal__next"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><rect width="60" height="60" rx="6" fill="white" fill-opacity="0.8"/><path d="M38.9641 28.9851L22.9508 14.3921C22.4254 13.8693 21.5731 13.8693 21.0477 14.3921C20.5222 14.9149 20.5222 15.7631 21.0477 16.2859L36.0954 30L21.049 43.7141C20.5235 44.2369 20.5235 45.0852 21.049 45.6079C21.5745 46.1307 22.4267 46.1307 22.9521 45.6079L38.9654 31.0149C39.2455 30.7362 39.3656 30.3668 39.3469 30.0014C39.3643 29.6346 39.2443 29.2652 38.9641 28.9851Z" fill="#505050"/></svg></button>',
 });











 




