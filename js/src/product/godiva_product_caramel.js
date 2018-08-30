//godiva_product caramel.js

(function($){

//초콜릿 썸네일을 누르면 초콜릿 큰 이미지와 설명 나오게 하기
//변수선언 


var caramelthumWrap = $('.caramel_thum_wrap');
var caramelthumUl = caramelthumWrap.children('ul');
var caramelthumLi = caramelthumUl.children('li');
var caramelbigImg = $('.caramel_bigimg');
var carameldetail = $('.caramel_detail');


/*배열*/
var addr = "../img/product/caramel/";
var caramelImg = [
                 {thum:'caramel_01', 
                  big:'caramel_img01', 
                  h5:'무알뢰 캬라멜 프랑보아즈', 
                  h6:'Moelleux Caramel Framboise', 
                  p:'다크 초콜릿으로 엔로빙한 라즈베리 맛의 캬라멜 초콜릿'},

                 {thum:'caramel_02', 
                  big:'caramel_img02', 
                  h5:'무알뢰 캬라멜 쇼콜라',
                  h6:'Moelleux Caramel Chocolate',
                  p:'다크 초콜릿을 입힌 부드러운 캬라멜 초콜릿'}
               ];

//===li 복제해서 처리하고 썸네일 이미지를 한번에 담기 
//1)복제
//2)반복되는 이미지 한번에 담기 --for문

var i = 0;
for (; i < caramelImg.length; i+=1){
  var caramelthumLiClone = caramelthumLi.eq(0).clone(true);
  caramelthumUl.append(caramelthumLiClone);
  caramelthumLi = caramelthumUl.children('li');
  var li = caramelthumLi.eq(i);
  li.css({backgroundImage:'url(' + addr + caramelImg[i].thum + '.png)',
          backgroundRepeat:'no-repeat',
          backgroundSize:'60%',
          backgroundPosition:'center center'});
   carameldetail.find('h5').text(caramelImg[i].h5);
   carameldetail.find('h6').text(caramelImg[i].h6);
   carameldetail.find('p').text(caramelImg[i].p);
}

caramelthumLi.eq(i).remove();
caramelthumLi = caramelthumUl.children('li');


//큰 이미지 만들기 
//--배열 처리된 아이들 함수로 처리해서 한방에 만들기와 큰 이미지들 슬라이딩 처리 
var caramelbigimgWrap = $('.caramel_bigimg_wrap');

var ImgSet = function(i){
var moreDiv = caramelbigimgWrap.append('<div>');
var caramelbigimgChildren = caramelbigimgWrap.children('div');
    caramelbigimgChildren.eq(0).css({zIndex:100});
    caramelbigimgChildren.eq(-1).css({backgroundImage:'url(' + addr + caramelImg[i].big + '.jpg)'});
    caramelbigimgChildren.eq(0).stop().fadeOut(function() {
       caramelbigimgChildren.eq(1).siblings().remove();
       //일정시간이 지난 뒤에 
       setTimeout(function() {
         caramelbigimgChildren.css({zIndex:100});
       },1);
     });  
};

ImgSet(0);


//초콜렛설명 만들기 
 var DetailSet = function(i){
   carameldetail.find('h5').text(caramelImg[i].h5);
   carameldetail.find('h6').text(caramelImg[i].h6);
   carameldetail.find('p').text(caramelImg[i].p);
 };
DetailSet(0);

//썸네일 이미지를 클릭했을 때 big이미지와 색상설명 나타나게 하기 
var awesomeNum = 0;
caramelthumLi.on('click',function(e){
  e.preventDefault();
  var i = $(this).index();
  if(awesomeNum !== i){
    awesomeNum = i;
    ImgSet(i);
    DetailSet(i);
  }
});


//----썸네일 이미지 마우스 올렸을 때 효과 
caramelthumLi.children('a').on('mouseenter focus',function(){
  $(this).parent().css({transform:'scale(1.2)', 
                        transition:'all 400ms ease'});
});

caramelthumLi.children('a').on('mouseleave blur',function(){
  $(this).parent().css({transform:'scale(1)', 
                        transition:'all 400ms ease'});
});





})(jQuery);