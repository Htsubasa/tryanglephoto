
$(function () {
  $(".slider").slick({
    arrow: true,
    autoplay: true,
    autoplaySpeed: 15000,
    centerMode: true,
    dots: true,
    // fade: true,
    slidesToShow: 2,
    speed: 1000,
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





$(function () {
  var topBtn = $('.footer-center'); // ボタンを指定
  topBtn.hide(); //最初は隠しておく。CSSで隠してもオッケー
 
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 150) { // 100px以上スクロールしたら出てくる
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
 
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("#footer").innerHeight(); // ここでフッターの高さを取得
    if ( scrollHeight - scrollPosition  <= footHeight ) { // フッター付近まで来たら
      topBtn.css({
        "position":"absolute",
        "bottom": footHeight + 0 // フッターの65px上で止まる
      });
    } else { // それ以外は画面下から20pxの位置に固定
      topBtn.css({
      "position":"fixed",
    });
    }
 
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






