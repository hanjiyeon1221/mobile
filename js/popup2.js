// 소형배터리 popup
$.ajax({
  url: './data/sub2_2.json',
  dataType: 'json',
  success: function(data){
      var useData = data.car;  // 객체배열이 저장된다
      var txt='';
      var ind1 = 0;
      var total1 = useData.length; // 총 6개
      //console.log(total1);
              
      function dataPrint(){
              //for(var i=0; i<useData.length; i++){}   ↓ for in문
             
                  var $title = useData[ind1].title;  //담아두고 써도되고, 그대로 써도 되고~
                  var $contxt = useData[ind1].contxt;
                  var $sub1 = useData[ind1].sub1;
                  var $sub2 = useData[ind1].sub2;
                  var $sub3 = useData[ind1].sub3;
                  var $sub4 = useData[ind1].sub4;


                  $(".pop .popup img").attr("src","./images/pop0" + (ind1 + 1) + "_2.jpg");
                  
                  txt = "<dl>";
                  txt += "<dt>" + $title + "</dt>";
                  txt += "<dd>" + $contxt + "</dd>";
                  txt += "</dl>";
                  txt += "<ul><li>" + $sub1 + "</li>";
                  txt += "<li>" + $sub2 + "</li>";
                  txt += "<li>" + $sub3 + "</li>";
                  txt += "<li>" + $sub4 + "</li>";
                  txt += "</ul>";
                  // $(".pop .popup .txt").html(txt);
                  
                  $('.popup .txt').html(txt);
              
              // console.log(txt);
      
            }
    

      //버튼 이벤트
      $(".content_area3 .app_box a").click(function (e) {
        e.preventDefault();
    
        ind1 = $(this).index(".content_area3 .app_box a"); // 0 1 2 3 4 5 
    
        $('.pop_btn').fadeIn('fast');
        // $(".pop .modal_box").fadeIn("fast");
        $(".pop .popup").fadeIn("fast");
        $('body').css('overflow','hidden');
        dataPrint();
      });
    
      $(".close_btn").click(function (e) {
        e.preventDefault();
        // $(".pop .modal_box").fadeOut("fast");
        $(".pop .popup").fadeOut("fast");
        $('.pop_btn').fadeOut('fast')
        $('body').css('overflow','initial');


      });
     
      $('.pop_btn a').click(function(e){
        e.preventDefault();
    
        $('.pop .popup').fadeIn('fast');
    
        if($(this).hasClass('pre')){
          if(ind1==0)ind1=total1;    // 5 4 3 2 1 0 5 4 3 2 1 0...
          ind1--;
          dataPrint();
        }else if($(this).hasClass('next')){
          if(ind1==total1-1)ind1=-1;   // 0 1 2 3 4 5 0 1 2 3 4 5...
          ind1++;
          dataPrint();
        }
    
      });

    }
  });






