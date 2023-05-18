//인덱스 FAQ js
//    버튼 이벤트 js 위치
var article = $('#content .faq ul li'); //모든 li들..(질문답변들...)

$('#content .faq ul li a').click(function(e){   //각각의 질문을 클릭하면
    e.preventDefault();

    var myArticle = $(this).parents('li');  //클릭한 해당 메뉴에 li(리스트) 

    if(myArticle.hasClass('hide')){   //클릭한 해당 리스트가 닫혀있냐??
    article.find('p').find('a').css('background-image', 'url(./images/down_arrow.png)');
    article.find('.a').slideUp(100); // 모든 리스트의 답변을 닫아라
    article.removeClass('show').addClass('hide'); //모든 리스트의 클래스 hide로 바꾼다
    

    myArticle.removeClass('hide').addClass('show');  // 클래스를 show로 바꾼다
    myArticle.find('p').find('a').css('background-image', 'url(./images/up_arrow.png)');
    myArticle.find('.a').slideDown(100);  //해당 리스트의 답변을 열어라~~~
    
        } else {  //클릭한 해당 리스트가 열려있냐?? (show)
    myArticle.removeClass('show').addClass('hide');  //클래스 hide로 바꾼다
    myArticle.find('p').find('a').css('background-image', 'url(./images/down_arrow.png)');
    myArticle.find('.a').slideUp(100);   //해당 리스트의 답변을 닫아라~~~
    
    }  
});     

    

// FAQ 페이지 js



    //jQuery ajax의 문법형식
    /*
        $.ajax({
            url: json파일 경로,                    -> 속성
            dataType : 파일형식(종류),              -> 속성
            success : function(data){ //파일의 접근이 완료되면.. data매개변수에 json파일의 객체배열이 자동으로 담긴다 }   -> 메소드

        });
    */
   
   $.ajax({
       url: './data/sub6_3.json',
       dataType: 'json',
       success: function(data){
           var useData = data.faq;  // 객체배열이 저장된다
           
           function dataPrint(){
               
                    var txt ='<h3 class="hidden">자주묻는질문 리스트</h3>';
                    txt +="<p>더 자세한 내용은 채용담당자 이메일 sdi.recruit@samsung.com 으로 문의해 주십시오.<br>채용 외 기타 문의는 '<strong>문의하기</strong>' 를 통해 문의 바랍니다.</p>";
                    txt += '<span>';
                    txt+='<a class="all" href="#">답변 모두 열기</a>';
                    txt+='</span>'
                    txt+='<ul>'
                   
                   //for(var i=0; i<useData.length; i++){}   ↓ for in문
                   for(var i in useData){
                       
                       var $Question = useData[i].Question;  //담아두고 써도되고, 그대로 써도 되고~
                       var $Answer = useData[i].Answer;

                       txt+= '<li class="hide">';
                       txt+=    '<p class="q">';
                       txt+=       '<a href="#">' +$Question+ '</a>';
                       txt+=    '</p>';
                       txt+=    '<p class="a">' +$Answer+ '</p>';
                       txt+= '</li>';
                   }

                   txt += '</ul>';

                   $('.content_area .sdi_faq').html(txt);
                   console.log(txt);
              
           };
           
           //초기실행, 함수호출
           dataPrint();

        //    버튼 이벤트 js 위치
        var article = $('.sdi_faq li'); //모든 li들..(질문답변들...)

         $('.sdi_faq li a').click(function(e){   //각각의 질문을 클릭하면
         e.preventDefault();

	    var myArticle = $(this).parents('li');  //클릭한 해당 메뉴에 li(리스트) 
	
	    if(myArticle.hasClass('hide')){   //클릭한 해당 리스트가 닫혀있냐??
	    article.find('.a').slideUp(100); // 모든 리스트의 답변을 닫아라
        article.removeClass('show').addClass('hide'); //모든 리스트의 클래스 hide로 바꾼다
	    
		myArticle.removeClass('hide').addClass('show');  // 클래스를 show로 바꾼다
	    myArticle.find('.a').slideDown(100);  //해당 리스트의 답변을 열어라~~~
	     } else {  //클릭한 해당 리스트가 열려있냐?? (show)
	   myArticle.removeClass('show').addClass('hide');  //클래스 hide로 바꾼다
	   myArticle.find('.a').slideUp(100);   //해당 리스트의 답변을 닫아라~~~
	    }  
     });   

        //모두여닫기
        $('.all').toggle(function(e){  //홀수번째 클릭
        e.preventDefault(); 
        article.find('.a').slideDown(100);
        article.removeClass('hide').addClass('show');
        //$(this).text('모두닫기');
        $(this).text('답변 모두 닫기').css('background-image','url(./images/arrow_up.png)');
        },function(e){   //짝수번째 클릭
        e.preventDefault();
        article.find('.a').slideUp(100);
        article.removeClass('show').addClass('hide');
        //$(this).text('모두열기');
        $(this).text('답변 모두 열기').css('background-image','url(./images/arrow_down.png)');
        });

       } 
   });



   
  
  