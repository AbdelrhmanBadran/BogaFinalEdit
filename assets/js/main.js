/*---------------------------
      Table of Contents
    --------------------
    
    01- Mobile Menu
    02- Sticky Navbar
    03- Search Popup
    04- Cart Popup
    05- Scroll Top Button
    06- Set Background-img to section 
    07- Increase and Decrease Input Value
    08- Add active class to accordions
    09- Switch Between List view and Grid View
    10- Owl Carousel
    11- Products Filtering and Sorting
    12- Range Slider
    13- lightbox Gallery 
    14- NiceSelect Plugin
    15- image zoomsl Plugin 
    16- AOS Animation Plugin
    
 ----------------------------*/

 /*----------------------------*/

$(function () {
  // Global variables
  var $win = $(window);

  /*==========   Mobile Menu   ==========*/
  var $navToggler = $(".navbar-toggler");
  $navToggler.on("click", function () {
    $(this).toggleClass("active");
  });
  $navToggler.on("click", function () {
    $(".navbar-collapse").toggleClass("menu-opened");
  });

  // Toggle dropdown Menu in Mobile
  $(".dropdown-menu [data-toggle=dropdown]").on("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).parent().siblings().removeClass("opened");
    $(this).parent().toggleClass("opened");
  });
  $(".dropdown-submenu [data-toggle=dropdown]").on("click", function (e) {
    $(this).next().toggleClass("show");
    $(this).parent().siblings().find(".dropdown-menu").removeClass("show");
  });

  /*==========   Sticky Navbar   ==========*/
  // $win.on('scroll', function () {
  //     if ($win.width() >= 992) {
  //         var $navbar = $('.sticky-navbar');
  //         if ($win.scrollTop() > 100) {
  //             $navbar.addClass('fixed-navbar');
  //         } else {
  //             $navbar.removeClass('fixed-navbar');
  //         }
  //     }
  // });

  /*==========  Search Popup ==========*/
  var $moduleBtnSearch = $(".search-popup-trigger"),
    $searchPopup = $(".search-popup");
  // Show Module Search
  $moduleBtnSearch.on("click", function (e) {
    e.preventDefault();
    $searchPopup.toggleClass("active", "inActive").removeClass("inActive");
  });
  // Close Module Search
  $(".close-search").on("click", function () {
    $searchPopup.removeClass("active").addClass("inActive");
  });

  /*==========  Cart Popup   ==========*/
  var $cartPopup = $(".cart-popup");
  // show module cart
  $(".navbar__action-btn-cart").on("click", function (e) {
    e.preventDefault();
    $cartPopup.toggleClass("active");
  });
  // Close Module Cart
  $(".close-cart").on("click", function () {
    $cartPopup.removeClass("active");
  });
  $(document).on("mouseup", function (e) {
    if (
      !$cartPopup.is(e.target) &&
      !$(".navbar__action-btn-cart").is(e.target) &&
      $cartPopup.has(e.target).length === 0 &&
      $cartPopup.has(e.target).length === 0
    ) {
      $cartPopup.removeClass("active");
    }
  });

  /*==========   Scroll Top Button   ==========*/
  var $scrollTopBtn = $("#scrollTopBtn");
  // Show Scroll Top Button
  $win.on("scroll", function () {
    if ($(this).scrollTop() > 700) {
      $scrollTopBtn.addClass("actived");
    } else {
      $scrollTopBtn.removeClass("actived");
    }
  });
  // Animate Body after Clicking on Scroll Top Button
  $scrollTopBtn.on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  /*==========   Set Background-img to section   ==========*/
  $(".bg-img").each(function () {
    var imgSrc = $(this).children("img").attr("src");
    $(this)
      .parent()
      .css({
        "background-image": "url(" + imgSrc + ")",
        "background-size": "cover",
        "background-position": "center  ",
        "background-repeat": "no-repeat",
      });
    $(this).parent().addClass("bg-img");
    $(this).remove();
  });

  /*==========   Increase and Decrease Input Value   ==========*/
  // Increase Value
  $(".increase-qty").on("click", function () {
    var $qty = $(this).parent().find(".qty-input");
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal)) {
      $qty.val(currentVal + 1);
    }
  });
  // Decrease Value
  $(".decrease-qty").on("click", function () {
    var $qty = $(this).parent().find(".qty-input");
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal) && currentVal > 1) {
      $qty.val(currentVal - 1);
    }
  });

  /*==========   Add active class to accordions   ==========*/
  $(".accordion__item-header").on("click", function () {
    $(this).parent(".accordion-item").addClass("opened");
    $(this).parent(".accordion-item").siblings().removeClass("opened");
  });
  $(".accordion__item-title").on("click", function (e) {
    e.preventDefault();
  });

  /*==========   Switch Between List view and Grid View   ==========*/
  $(".filter-option-view a").on("click", function (e) {
    e.preventDefault();
    $(this).addClass("active").siblings().removeClass("active");
  });
  $("#listView").on("click", function (e) {
    $(".product-item").parent().addClass("list-view");
  });
  $("#gridView").on("click", function (e) {
    $(".product-item").parent().removeClass("list-view");
  });

  /*==========   Owl Carousel  ==========*/
  $(".carousel").each(function () {
    $(this).owlCarousel({
      nav: $(this).data("nav"),
      dots: $(this).data("dots"),
      loop: $(this).data("loop"),
      margin: $(this).data("space"),
      center: $(this).data("center"),
      dotsSpeed: $(this).data("speed"),
      autoplay: $(this).data("autoplay"),
      transitionStyle: $(this).data("transition"),
      animateOut: $(this).data("animate-out"),
      animateIn: $(this).data("animate-in"),
      autoplayTimeout: 15000,
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: $(this).data("slide-sm"),
        },
        700: {
          items: $(this).data("slide-md"),
        },
        1000: {
          items: $(this).data("slide"),
        },
      },
    });
  });

  /*==========   Products Filtering and Sorting  ==========*/
  $(".filtered-items-wrap").mixItUp();
  $(".portfolio-filter li a").on("click", function (e) {
    e.preventDefault();
  });

  $(".loadMoreportfolio").on("click", function (e) {
    e.preventDefault();
    $(".portfolio-hidden > .portfolio-item").fadeIn();
    $(this).fadeOut();
  });

  /*==========   Range Slider  ==========*/
  var $rangeSlider = $("#rangeSlider"),
    $rangeSliderResult = $("#rangeSliderResult");
  $rangeSlider.slider({
    range: true,
    min: 0,
    max: 300,
    values: [50, 200],
    slide: function (event, ui) {
      $rangeSliderResult.val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });
  $rangeSliderResult.val(
    "$" +
      $rangeSlider.slider("values", 0) +
      " - $" +
      $rangeSlider.slider("values", 1)
  );

  /*==========   lightbox PLugin  ==========*/
  lightbox.option({
    fadeDuration: 300,
  });

  /*==========  NiceSelect Plugin  ==========*/
  $("select").niceSelect();

  /*==========  image zoomsl Plugin  ==========*/
  $(".zoomin").imagezoomsl();

  /*==========  AOS Animation Plugin  ==========*/
});

$(document).ready(function () {
  let homeSlider = $(".home-slider  .slider-cont");
  let menuSlider = $(".slick-slider");

  $('.spec-slider').slick({
    infinite: true,
    arrows:false,
    dots:true,
    focusOnSelect: true,
    dotsClass:'slick-dots',
  });


  if (homeSlider.length) {
    homeSlider.slick({
      dots: false,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      fade: true,
      cssEase: 'linear',
      draggable:true,
      pauseOnFocus:false,
      pauseOnHover:false
    }).slickAnimation();
  }

  if (menuSlider.length) {
    menuSlider.slick({
      dots: true,
      infinite: true,
      arrows: true,
      speed: 300,
      autoplaySpeed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }

  if ($(".customer-favorite").length) {
    AOS.init({ duration: 800, offset: 500 });
  } else {
    AOS.init({ duration: 800 });
  }
});



$("[data-toggle='tab']").click(function(){
  $('.slick-slider').slick('refresh');
  });
  
  $("[data-toggle='tab']").click(function(){
  $('.slick-slider').slick('refresh');
  });
  
  $("[data-toggle='tab']").click(function(){
  $('.slick-slider').slick('refresh');
  });

  let logoss = document.getElementsByClassName('logo-container')
  logoss[0]?.classList.add('border-logo')
  

$('.nourish-link').click((e)=>{
  e.preventDefault();
})

$('.nourish-link').click(function () {
$(this).addClass('border-nourish')
$(this).parent().siblings().children().removeClass('border-nourish')
})  


  
$('.tabs-container').height($('.tabs-container .tab-content').height() + $('.tab').height() + $('.tabs-container .tab-label').height());




$('.tabs-container .tab-label').click(function() {
  let h = $(this).next().height() + $(this).height() + $('.tab').height()  ;
  ($(this).parent().parent().parent().height(h));
})


window.addEventListener('resize' , function() {
  $('.tabs-container').height($('.tabs-container .tab-content').height() + $('.tab').height() + $('.tabs-container .tab-label').height());
})
