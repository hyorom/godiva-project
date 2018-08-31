//godiva_shop_biscuit.js//


(function($){


//변수 선언

var bisWrap = $('.bis_content_wrap');
var bisUl = bisWrap.children('ul');
var bisLi = bisUl.children('li');
var bisP = $('.bis_title');

var addr = "../img/shop/biscuit/";
var bisImg = [
                 {thum:'biscuit_01', 
                  hover:'biscuit_01_hover', 
                  p:'Congratulations Ribbon’'},

                 {thum:'biscuit_02', 
                  hover:'biscuit_02_hover', 
                  p:'Striped Tie Ribbon’'},

                 {thum:'biscuit_03', 
                  hover:'biscuit_01_hover', 
                  p:'Happy Birthday Ribbon’'},

                 {thum:'biscuit_04', 
                  hover:'biscuit_04_hover', 
                  p:'Lady Noir, 12 pc.’'},

                 {thum:'biscuit_05', 
                  hover:'biscuit_05_hover', 
                  p:'Lady Milk, 12 pc.’'},

                 {thum:'biscuit_06', 
                  hover:'biscuit_06_hover', 
                  p:'Signature Milk, Set of 3,’'},

                 {thum:'biscuit_08', 
                  hover:'biscuit_02_hover', 
                  p:'Assorted Tin, 46 pc.’'},

                 {thum:'biscuit_09', 
                  hover:'biscuit_09', 
                  p:'Summer Set for 4'},

                 {thum:'biscuit_07', 
                  hover:'biscuit_07', 
                  p:'Sharing Sampler'}


               ];



//===li 복제해서 처리하고 썸네일 이미지를 한번에 담기 
//1)복제
//2)반복되는 이미지 한번에 담기 --for문

var i = 0;
for (; i < bisImg.length; i+=1){
  var bisLiClone = bisLi.eq(0).clone(true);
  bisUl.append(bisLiClone);
  bisLi = bisUl.children('li');
  bisP = $('.bis_title');
  var li = bisLi.eq(i);
  li.css({backgroundImage:'url(' + addr + bisImg[i].thum + '.png)',
          backgroundRepeat:'no-repeat',
          backgroundSize:'75%',
          backgroundPosition:'center'});
  li.children('p').text(bisImg[i].p);
}
bisLi.eq(i).remove();
bisLi = bisUl.children('li');
bisP = $('.bis_title');

var Img = function(i){
  var li = bisLi.eq(i);
    li.css({backgroundImage:'url(' + addr + bisImg[i].thum + '.png)'});  
};  Img(0);

//이미지 호버 만들기
var ImgHover = function(i){
  var liHover = bisLi.eq(i);
  liHover.css({backgroundImage:'url(' + addr + bisImg[i].hover + '.png)'});
};  //ImgHover(0);
 

//초콜렛이름 만들기 
 var DetailSet = function(i){
   bisP.eq(i).text(bisImg[i].p);
 };
DetailSet(0);


//썸네일 이미지를 클릭했을 때 hover 이미지 나오게 하기

bisLi.on('mouseenter focus',function(e){
  e.preventDefault();
  var i = $(this).index();
  ImgHover(i);
  ImgHover(i).fadein();
 // }
});

bisLi.on('mouseleave blur',function(e){
  e.preventDefault();
  var i = $(this).index();
  console.log(i);

    Img(i);
  // }
});



})(jQuery);