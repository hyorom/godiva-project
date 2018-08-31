//godiva_shop_coffee.js//


(function($){


//변수 선언

var coffeeWrap = $('.coffee_content_wrap');
var coffeeUl = coffeeWrap.children('ul');
var coffeeLi = coffeeUl.children('li');
var coffeeP = $('.coffee_title');

var addr = "../img/shop/coffee/";
var coffeeImg = [
                 {thum:'coffee_01', 
                  hover:'coffee_01_hover', 
                  p:'Hot Cocoa, Set of 3'},

                 {thum:'coffee_02', 
                  hover:'coffee_02_hover', 
                  p:'Dark Cocoa, 10 Servings'},

                 {thum:'coffee_03', 
                  hover:'coffee_03_hover', 
                  p:'Milk Cocoa, 10 Servings'},

                 {thum:'coffee_04', 
                  hover:'coffee_04', 
                  p:'Signature Gift Set'},

                 {thum:'coffee_05', 
                  hover:'coffee_05', 
                  p:'Ground, Set of 3'},

                 {thum:'coffee_06', 
                  hover:'coffee_06_hover', 
                  p:'Coffee & Cocoa Set'},

                 {thum:'coffee_07', 
                  hover:'coffee_07_hover', 
                  p:'Live This Day'}

               ];



//===li 복제해서 처리하고 썸네일 이미지를 한번에 담기 
//1)복제
//2)반복되는 이미지 한번에 담기 --for문

var i = 0;
for (; i < coffeeImg.length; i+=1){
  var coffeeLiClone = coffeeLi.eq(0).clone(true);
  coffeeUl.append(coffeeLiClone);
  coffeeLi = coffeeUl.children('li');
  coffeeP = $('.coffee_title');
  var li = coffeeLi.eq(i);
  li.css({backgroundImage:'url(' + addr + coffeeImg[i].thum + '.png)',
          backgroundRepeat:'no-repeat',
          backgroundSize:'75%',
          backgroundPosition:'center center'});
  coffeeP.eq(i).text(coffeeImg[i].p);

}

coffeeLi.eq(i).remove();
coffeeLi = coffeeUl.children('li');



var Img = function(i){
  var li = coffeeLi.eq(i);
    li.css({backgroundImage:'url(' + addr + coffeeImg[i].thum + '.png)'});  
};  Img(0);



//초콜렛이름 만들기 
 var DetailSet = function(i){
   coffeeP.eq(i).text(coffeeImg[i].p);
 };
DetailSet(0);

//이미지 호버 만들기
var ImgHover = function(i){
var liHover = coffeeLi.eq(i).css({backgroundImage:'url(' + addr + coffeeImg[i].hover + '.png)',
        backgroundRepeat:'no-repeat',
        backgroundSize:'75%',
        backgroundPosition:'center'});
};


//썸네일 이미지를 클릭했을 때 hover 이미지 나오게 하기
coffeeLi.on('mouseenter focus',function(e){
  e.preventDefault();
  var i = $(this).index();
  ImgHover(i);
});

coffeeLi.on('mouseleave blur',function(e){
  e.preventDefault();
  var i = $(this).index();
    Img(i);
});


})(jQuery);