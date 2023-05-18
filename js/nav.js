  //메뉴 여닫기
  var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
 	
   $(".menu_open").click(function(e) { //메뉴버튼 클릭시
      e.preventDefault();   

       var documentHeight =  $(document).height();  //전체 페이지의 높이 (모든 컨텐츠의 높이)
       $("#gnb").css('height',documentHeight);   //네비의 높이를 전체 페이지의 높이로-
       
      if(op==false){  //메뉴가 닫혀있는 상태에서 클릭했는지
        $("#gnb").animate({right:0,opacity:1}, 'fast');
        $('#headerArea').addClass('mn_open');
        $('html').css('overflow','hidden'); 
        $('#headerArea').addClass('off');
        op=true;  //메뉴가 열리있는 상태로-
      }else{  //메뉴가 열리있는 상태에서 클릭했는지
        $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
        $('#headerArea').removeClass('mn_open');
        $('html').css('overflow','visible'); 
        $('#headerArea').removeClass('off');
        op=false;  //메뉴가 닫혀있는 상태로-
      }


   
   
    //2depth 메뉴 교대로 열기 처리 
    var onoff=[false,false,false,false,false,false];  //가정법: false(서브닫힘), true(서브열림)  / 각각 열림,닫힘 상태를 알아야하기때문에 하나의 변수에 배열로 넣어준 것.
    var arrcount=onoff.length;  //배열의 개수 6개
    
    // console.log(arrcount);
    
    $('#gnb .depth1 h3 a').click(function(e){   //1depth메뉴를 클릭하면
        e.preventDefault();

        var ind=$(this).parents('.depth1').index();   // 0~5
        //var ind=$(this).index('#gnb .depth1 h3 a');
        
        // console.log(ind);
        
       if(onoff[ind]==false){   //각각의 1depth메뉴의 서브가 닫혀있는지
        //$('#gnb .depth1 ul').hide();
        $(this).parents('.depth1').find('ul').slideDown('slow');  //자신의 서브를 열어라
        $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');  //자신을 제외한 모든 서브를 닫아라
         for(var i=0; i<arrcount; i++) onoff[i]=false;   //모든 배열값을 false로-
         onoff[ind]=true;  //자신에 대한 배열만 true로 변경
           
         $('.depth1').find('h3').find('a').css('background-image', 'url(./images/down_arrow.png)');   //전부 +
         $(this).parents('.depth1').find('h3').find('a').css('background-image', 'url(./images/up_arrow.png)');   //자신만 -
            
       }else{   //각각의 1depth메뉴의 서브가 열려있는지
         $(this).parents('.depth1').find('ul').slideUp('fast');   //자신의 서브 닫기 
         onoff[ind]=false;    // true -> false 변경
           
         $(this).parents('.depth1').find('h3').find('a').css('background-image', 'url(./images/down_arrow.png)');     // 자신만 +
       }
    });    

  });
    


  // 비주얼 벗어날 때 gnb변화
var smh=$('#wrap .visual').height();
var on_off=false;  // -> no오버  /  true: 오버
// console.log(smh);

$(window).on('scroll',function(){     //스크롤의 거리가 발생하면
  var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
//    console.log(scroll);

  if(scroll>smh-76){  //스크롤300까지 내리면
      $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
      $('h1').addClass('on');
      $('#headerArea').addClass('on');
      // $('.menu_open span').css('background', '#333').addClass('on');
  }else{      //스크롤 내리기 전 디폴트(마우스올리지않음)
     if(on_off==false){  //헤더에서 마우스가 벗어난 상태
          $('#headerArea').css('background','none').css('border-bottom','none');
          $('h1').removeClass('on');
          $('#headerArea').removeClass('on');
          // $('.menu_open span').css('background', '#fff').removeClass('on'); 
     }
  }; 
});



//패밀리사이트 코드

$('.family .site_open').toggle(function(){
  $('.family .fList').slideDown('slow');
  $(this).css('background','#333').css('color','#fff');
  $(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
},function(){
  $('.family .fList').slideUp('fast');
  $(this).css('background','#ccc').css('color','#666');
  $(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');	
});



// top메뉴 상단이동

$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
  var scroll = $(window).scrollTop(); //스크롤의 거리
  var winh = $(window).height()/3;
 
  $('.text').text(scroll);

  if(scroll>winh){ //화면높이/3 이상의 거리가 발생되면
      $('.top_move').fadeIn('slow');  //top보여라~~~~
  }else{
      $('.top_move').fadeOut('fast');//top안보여라~~~~
  }
});

$('.top_move').click(function(e){
 e.preventDefault();
  //상단으로 스르륵 이동합니다.
 $("html,body").stop().animate({"scrollTop":0},1000); 
});