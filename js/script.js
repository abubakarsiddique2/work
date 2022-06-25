// ===================testimonial part start======================
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
// ===================testimonial part end======================




// ===================customers part start======================

$(".say-slider").slick({
    slidesToShow:3,
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    
})
// ===================customers part end======================







