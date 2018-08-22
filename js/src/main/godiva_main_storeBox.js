//godiva_main_storeBox.js//


(function($){


// 변수선언
var storeBox = $('#storeBox');
var storeList = $('.store_list');
var storeUl =  storeList.children('ul');
var storeLi =  storeUl.children('li');




//== 첫list를 마지막 위치에 복제 ==//
var storeLiClone = storeLi.clone();
  storeList.children('ul').append(storeLiClone);
  storeLi =  storeUl.children('li');
var per = storeUl.children('li').eq(0).outerWidth(true);
var storeLiLen = storeLi.length -1;
    storeList.children('ul').css({width:storeLiLen * per});



//== list의 값주기 ==//
var storeUl = $('.store_list').children('ul');
var i = 0;
var move = function(a){
  // storeLi.eq(a).addClass('active');
  // storeLi.eq(a).siblings(storeLi).removeClass('active');
  var per = storeUl.children('li').eq(0).outerWidth(true);
  storeUl.stop().animate({marginLeft:-per},function() {
    storeUl.stop().css({marginLeft:0});
    storeLi.eq(0).appendTo(storeUl);
    storeLi =  storeUl.children('li');
  });
};

// move(i);



//=== list가 자동으로 움직이게 하기 ===//

//list의 갯수를 파악해서 마지막갯수가 되면 처음으로 오게 만들기

// var store = function(i){ 
// var num = i * -15 +'%';
//   if (i < storeLiLen){
//     storeList.children('ul').animate({marginLeft:num});
//   }else {
//     i = 0;
//     storeList.children('ul').animate({marginLeft:num}, function(){
//       $(this).css({marginLeft:0});
//     });
//   }

//   storeLi.eq(i).addClass('active');
//   storeLi.eq(i).siblings('li').removeClass('active');
// };

//   store(i);




//--list가 일정한 시간이 되면 자동으로 이동하게 하기 
    //(setInterval : 일정시간마다 반복실행하는 함수) 
    //(clearInterval)

  var timed = 1500;
  var autoStart;
 
  var StartSlide = function(){
      autoStart = setInterval(function(){ move(0); }, timed); };

  var StopSlide = function(){
            clearInterval(autoStart); };


  StartSlide();

  storeUl.on({mouseenter:StopSlide, mouseleave:StartSlide});

})(jQuery);