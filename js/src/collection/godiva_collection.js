//godvia_collection.js//

(function($){

//parallax 구현하기 

//변수선언
var move = $('.move');
var move01 = $('.move_01');
var move02 = $('.move_02');
var move03 = $('.move_03');


//높이값 설정
var move_01H = move01.innerHeight();
var move_02H = move02.innerHeight();
var nowT=0, per, myP;

//스크롤되었을 때 움직임을 줘라  
var myScroll = function(){
    per = nowT / move_01H * 100;
    (per >= 100) ? per = 100 : per = per;
    myP = 'center' + ' ' + per;
    move.css({backgroundPosition:myP+'%'});
    move01.stop(true, false).animate({transform:'translateY('+ per*-20 + 'px)'},300);
  };

myScroll();


$(window).on('scroll',function(){ 
  nowT = $(this).scrollTop();
  myScroll();
});



})(jQuery);



