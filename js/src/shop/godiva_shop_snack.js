//godiva_shop_snack.js//


(function($){


//변수 선언

var snackWrap = $('.snack_content_wrap');
var snackUl = snackWrap.children('ul');
var snackLi = snackUl.children('li');
var snackP = $('.snack_title');

var addr = "../img/shop/snack/";
var snackImg = [
                 {thum:'snack_01', 
                  hover:'snack_01_hover', 
                  p:'Milk Pretzels, 1 lb.'},

                 {thum:'snack_02', 
                  hover:'snack_02_hover', 
                  p:'Dark Pretzel, 1 lb.'},

                 {thum:'snack_03', 
                  hover:'snack_03_hover', 
                  p:'Assorted Pretzels, Set of 2'},

                 {thum:'snack_04', 
                  hover:'snack_04', 
                  p:'Milk Cashews, 8.5 oz.'},

                 {thum:'snack_05', 
                  hover:'snack_05', 
                  p:'Dark Almonds, 8.5 oz.'},

                 {thum:'snack_09', 
                  hover:'snack_09', 
                  p:'Milk & Dark Nuts, Set Of 3'},

                 {thum:'snack_06', 
                  hover:'snack_06_hover', 
                  p:'Almond Bark Tin'},

                 {thum:'snack_07', 
                  hover:'snack_07_hover', 
                  p:'Party Snacks Delight Gift Box'},

                 {thum:'snack_08', 
                  hover:'snack_08_hover', 
                  p:'Nutty Favorites Bundle'}



               ];



//===li 복제해서 처리하고 썸네일 이미지를 한번에 담기 
//1)복제
//2)반복되는 이미지 한번에 담기 --for문

var i = 0;
for (; i < snackImg.length; i+=1){
  var snackLiClone = snackLi.eq(0).clone(true);
  snackUl.append(snackLiClone);
  snackLi = snackUl.children('li');
  snackP = $('.snack_title');
  var li = snackLi.eq(i);
  li.css({backgroundImage:'url(' + addr + snackImg[i].thum + '.png)',
          backgroundRepeat:'no-repeat',
          backgroundSize:'75%',
          backgroundPosition:'center center'});
  snackP.eq(i).text(snackImg[i].p);

}

snackLi.eq(i).remove();
snackLi = snackUl.children('li');


var Img = function(i){
  var li = snackLi.eq(i);
    li.css({backgroundImage:'url(' + addr + snackImg[i].thum + '.png)'});  
};  Img(0);



//초콜렛이름 만들기 
 var DetailSet = function(i){
   snackP.eq(i).text(snackImg[i].p);
 };
DetailSet(0);

//이미지 호버 만들기
var ImgHover = function(i){
var liHover = snackLi.eq(i).css({backgroundImage:'url(' + addr + snackImg[i].hover + '.png)',});
};



//썸네일 이미지를 클릭했을 때 hover 이미지 나오게 하기
snackLi.on('mouseenter focus',function(e){
  e.preventDefault();
  var i = $(this).index();
  ImgHover(i);
});

snackLi.on('mouseleave blur',function(e){
  e.preventDefault();
  var i = $(this).index();
  Img(i);
});


})(jQuery);