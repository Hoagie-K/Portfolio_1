$(function(){
  
  const arrTopVal = [];

  arrTopVal[0] = $('.arti-1').offset().top;
  arrTopVal[1] = $('.arti-2').offset().top;
  arrTopVal[2] = $('.arti-3').offset().top;
  arrTopVal[3] = $('.arti-4').offset().top;

  console.log('arrTopVal =',arrTopVal);

  const moveFn = function(idx){
    $('html,body').animate({scrollTop:arrTopVal[idx]},'easeInOutCubic');

    $mnu.eq(idx).parent().addClass('on');
    $mnu.eq(idx).parent().siblings().removeClass('on');
  };

  const $mnu = $('header > nav > .gnb > li > a');

  $mnu.on('click', (evt)=>{
    evt.preventDefault();

    const nowIdx = $mnu.index(evt.currentTarget);

    moveFn(nowIdx);
  });

  $(window).on('load', function(){
    moveFn(0);
  });
  
  // nav 메뉴 스크롤에 따른 볼드
  $(window).scroll(function() {
    let scroll = $(window).scrollTop();
    console.log(scroll);
    let m = matchMedia("screen and (max-width: 1024px)");
      
    if(scroll >= 0 && scroll < 1080){
        $('header > nav > .gnb > li > a').css('font-weight', '500');
        $('header > nav > .gnb > li:nth-of-type(1) > a').css('font-weight', '800');
      }
      
      else if(scroll >= 1080 && scroll < 2160){
      $('header > nav > .gnb > li > a').css('font-weight', '500');
        $('header > nav > .gnb > li:nth-of-type(2) > a').css('font-weight', '800');
      }
      else if(scroll >= 2160 && scroll < 3240){
        $('header > nav > .gnb > li > a').css('font-weight', '500');
        $('header > nav > .gnb > li:nth-of-type(3) > a').css('font-weight', '800');
      }
      
      else if(scroll >= 3240 && scroll < 4320){
        $('header > nav > .gnb > li > a').css('font-weight', '500');
        $('header > nav > .gnb > li:nth-of-type(4) > a').css('font-weight', '800');
      }
      
      if (matchMedia("screen and (max-width: 1024px)").matches) {
        if(scroll >= 0 && scroll < 1024){
          $('header > nav > .gnb > li > a').css('font-weight', '500');
          $('header > nav > .gnb > li:nth-of-type(1) > a').css('font-weight', '800');
        }
        
        else if(scroll >= 1024 && scroll < 2048){
          $('header > nav > .gnb > li > a').css('font-weight', '500');
          $('header > nav > .gnb > li:nth-of-type(2) > a').css('font-weight', '800');
        }
        else if(scroll >= 2048 && scroll < 3072){
          $('header > nav > .gnb > li > a').css('font-weight', '500');
          $('header > nav > .gnb > li:nth-of-type(3) > a').css('font-weight', '800');
        }
        
        else if(scroll >= 3072 && scroll < 4096){
          $('header > nav > .gnb > li > a').css('font-weight', '500');
          $('header > nav > .gnb > li:nth-of-type(4) > a').css('font-weight', '800');
        }
      };

      const $indicator = $('#slides>.slides-pagination>li>a');
        const $container = $('#slides>.slides-container');
        const $btnPrev = $('#slides>.slides-nav.slides-prev');
        const $btnNext = $('#slides>.slides-nav.slides-next');
      
        let nowIdx = 0;
      
      
        const moveFn = function(){
          $container.stop().animate({
            left : -(100 * nowIdx)+'%'
          });
          $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
        };
      
      
        $indicator.on('click', function(evt){
          evt.preventDefault();
      
          nowIdx = $indicator.index(this);
          moveFn();
        });
      
        
        $btnPrev.on('click', function(evt){
          evt.preventDefault();
          if(nowIdx>0){
            nowIdx--;
          }else{
            nowIdx=3;
          }
          moveFn();
        });
      
      
        $btnNext.on('click', function(evt){
          evt.preventDefault();
          if(nowIdx<3){
            nowIdx++;
          }else{
            nowIdx=0;
          }
          moveFn();
        });
      
      
        const slidePC = [
          'images/naksan_temple_1.png',
          'images/hottub1.jpg',
          'images/Hajodea1.png',
          'images/huehueam1.jpg'
        ];
      
        const slideMO = [
          'images/naksan_temple_1.png',
          'images/hottub1.jpg',
          'images/Hajodea1.png',
          'images/huehueam1.jpg'
        ];
      
      
        $(window).on('load resize', function(){
      
          const $slideImg = $('#slides>ul>li>a>img');
      
          if($(window).width()<=768){
            for(let i=0;i<4;i++){
              $slideImg.eq(i).attr({
                src : slideMO[i]
              });
            }
          }else{
            for(let i=0;i<4;i++){
              $slideImg.eq(i).attr({
                src : slidePC[i]
              });
            }
          }
        });
      
      });      
      
      });