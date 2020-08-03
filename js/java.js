
$(function () {
  $(".slider").slick({
    arrow: true,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    dots: true,
    // fade: true,
    slidesToShow: 2,
    speed: 2000,
    variableWidth: true,
    centerMode: true,
    centerPadding: '30%',
    cssEase: 'linear',
  });
});



$(function(){
  $('.btn-gnavi').on('click',function(){
    var rightVal = 0;
    if($(this).hasClass('hb-open')){
      rightVal = 0;
      $(this).removeClass('hb-open');
    }else{
      $(this).addClass('hb-open');
    }
  });
});






$(function(){
	$(".btn-gnavi").click(function(){
		$(".header-nav").slideToggle(400);
	});
	$(".header-nav li a").click(function(){
		$(".btn-gnavi").css({display:"none"});
	});
});





$(window).scroll(function (){
  $('.works-item').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).addClass('active');
          }
      });
    });



    $(window).scroll(function (){
      $('table').each(function(){
          var elemPos = $(this).offset().top,
              scroll = $(window).scrollTop(),
              windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 50){
                $(this).addClass('active');
              }
          });
        });


    $(window).scroll(function (){
      $('.profile').each(function(){
          var elemPos = $(this).offset().top,
              scroll = $(window).scrollTop(),
              windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 50){
                $(this).addClass('active');
              }
          });
        });



    $(window).scroll(function (){
      $('.intro-wrap img').each(function(){
          var elemPos = $(this).offset().top,
              scroll = $(window).scrollTop(),
              windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 50){
                $(this).addClass('active');
        }
      });
    });

    $(window).scroll(function (){
      $('.intro-box').each(function(){
          var elemPos = $(this).offset().top,
              scroll = $(window).scrollTop(),
              windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 50){
                $(this).addClass('active');
        }
      });
    });






