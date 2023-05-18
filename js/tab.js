// 지도맵 tab
$('.tab_map li:eq(0) a').addClass('current');

$('.tab_map li').click(function(){
    $('.tab_map li a').removeClass('current');
    $(this).children().addClass('current');
});

 
    $('.map .map1').show(); // 첫번째 탭 내용만 열어라
    $('.map .tab1').addClass('current'); //첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
      


    $('.map .tab').click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
          
          var ind = $(this).parent().index();  // 클릭시 해당 index를 뽑아준다
        //   console.log(ind);
          // $('.map_area .mapbox').css('overflow','visible').css('height','auto');

          $('.maps').hide(); //모든 탭내용을 안보이게...
          $('.map .map'+(ind+1)).show(); //클릭한 해당 탭내용만 보여라
          $('.map .tab').removeClass('current'); //모든 탭메뉴를 비활성화
          $(this).addClass('current'); // 클릭한 해당 탭메뉴만 활성화

     });

     var eventstop = false; //false(동작전-페이지로딩시) / true(스크롤이 동작했을 때)
     $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if(scroll>0 && eventstop == false){
            $(".map .map2").hide();
            $(".map .map3").hide();
            eventstop = true;

            $(window).off('scroll');  
            // 이벤트 1번 실행 후 제거 (중복된 scroll이벤트가 있다면 깨질 수 있음)
            // 위처럼 변수 생성한 방법을 추천함
        }
    });
   
