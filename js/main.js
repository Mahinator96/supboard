$(function(){
  $('.header__slider').slick({
    fade: true,
    infinite: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrows left">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="arrows right">',
    asNavFor: '.slider-dots, .slider-dots--mini ',
  });
  
  $('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
  });
  $('.slider-dots--mini').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
  });

  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left " src="img/arrows-left.svg" alt="arrows left">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="arrows right">',
    asNavFor: '.slider-map,.slider-map__coords,.surf__suptitle' ,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
    ]
  });

  $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider,.slider-map__coords,.surf__suptitle',
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 1040,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 1,
            centerMode: true,
          }
        },
      ]
  });

  $('.surf__suptitle').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.surf-slider,.slider-map,.slider-map__coords'
  });

  $('.slider-map__coords').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider,.slider-map,.surf__suptitle',
  });

  $('.holder__slider, .shop__slider').slick({
    fade: true,
    infinite: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrows left">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="arrows right">',
  });

  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg"></div><div class="quantity-button quantity-down"><img src="img/minus.svg"></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function() {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

  $('.quantity-button').on('click', function() {
    let summ = $('.nights').val() * $('.summ').data('night') + ($('.guests').val() - 1) * $('.summ').data('guest');
    $('.summ').html(summ);
  });
  
  let summ = $('.nights').val() * $('.summ').data('night') + ($('.guests').val() - 1) * $('.summ').data('guest');
  $('.summ').html(summ);

  $('.surfboard-box__circle').on('click', function() {
    $(this).toggleClass('active');
  });

  $('.menu-btn').on('click', function() {
    $('.menu-mini').toggleClass('active');
  });

  new WOW().init();
});