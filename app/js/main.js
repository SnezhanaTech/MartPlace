$ (function () { 
 
    $(".rate-star").rateYo({
      rating: 4.5,
      starWidth: '15px',
      readOnly: true
    });

    $('.slider__inner').slick({
      dots: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'linear',
      prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/arrow-left.png" alt=""></button>',
      nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/arrow-right.png"" alt=""></button>'
    });

    var mixer = mixitup('.products__box');


  });

