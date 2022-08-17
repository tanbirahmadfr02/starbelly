// ====food menu part start ==

$('.venobox').venobox()


$('.menu_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    prevArrow:'<i class="fa-solid fa-arrow-left-long prevarrow arrow"></i>',
    nextArrow:'<i class="fa-solid fa-arrow-right-long nextarrow arrow"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
          

// ====food menu part end ==

// ====rivew part start ====

$('.rivew_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay:true,
  prevArrow:'<i class="fa-solid fa-arrow-left-long prevarrow arrow"></i>',
  nextArrow:'<i class="fa-solid fa-arrow-right-long nextarrow arrow"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// ====rivew part end ====


 // =========sticky menu part ========
 var main_menu = document.getElementById("main_menu");
 window.addEventListener("scroll",function(){
 main_menu.classList.toggle("sticky",window.scrollY > 100);
 })
 // =========sticky menu part ========

 // ========back to top part ======
 var back_to_top = document.querySelector(".back_to_top")

 window.addEventListener("scroll",function(){
 
   back_to_top.classList.toggle("bottom_to_top",window.scrollY > 150)
 })
 // ========back to top part ======