// Clients slider

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 8,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Intro Slider

function onChangeMainSliderProgress(data) {
  var progressPercent = ((data.index + 1) / data.count) * 100 + "%";
  $(".main-slider-progress-index").html(data.index + 1);
  $(".main-slider-progress-line").css("width", progressPercent);
  $(".main-slider-progress-count").html(data.count);
}

var mainSlider = $(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  items: 1,
  onInitialized(event) {
    onChangeMainSliderProgress({ index: 0, count: event.item.count });
  },
  nav: true,
  navText: [
    "<div class='nav-button owl-prev'>prev</div>",
    "<div class='nav-button owl-next'>next</div>",
  ],
});

mainSlider.on("changed.owl.carousel", function (event) {
  onChangeMainSliderProgress({
    index: event.page.index,
    count: event.page.count,
  });
});

// Mobile Nav

var navToggle = $("#navToggle");
var nav = $("#nav");

navToggle.on("click", function (event) {
  event.preventDefault();
  $(".burger").toggleClass("pressed");
});
