 //godiva_shop_bar.js//


(function($){


//변수 선언

var barWrap = $('.bar_content_wrap');
var barUl = barWrap.children('ul');
var barLi = barUl.children('li');
var barP = $('.bar_title');

var addr = "../img/shop/bar/";
var barImg = [
                 {thum:'bar_01_hover', 
                  hover:'bar_01', 
                  p:'Pink Himalayan'},

                 {thum:'bar_02', 
                  hover:'bar_02_hover', 
                  p:'Orange & Ginger Bar'},

                 {thum:'bar_03', 
                  hover:'bar_03_hover', 
                  p:'Blond Caramel Bar'},

                 {thum:'bar_04', 
                  hover:'bar_04_hover', 
                  p:'Inclusions Gift, 4'},

                 {thum:'bar_05',  
                  hover:'bar_05_hover', 
                  p:'Bar Sellers Gift, 4'},

                 {thum:'bar_06', 
                  hover:'bar_06_hover', 
                  p:'Bar Variety Pack, 6'},

                 {thum:'bar_07', 
                  hover:'bar_07_hover', 
                  p:'Inclusions Gift, 4'},

                 {thum:'bar_08', 
                  hover:'bar_08', 
                  p:'Milk Gift, 4'},

                 {thum:'bar_09', 
                  hover:'bar_09', 
                  p:'Favorites Gift, 4'}


               ];



//===li 복제해서 처리하고 썸네일 이미지를 한번에 담기 
//1)복제 
//2)반복되는 이미지 한번에 담기 --for문

var i = 0;
for (; i < barImg.length; i+=1){
  var barLiClone = barLi.eq(0).clone(true);
  barUl.append(barLiClone);
  barLi = barUl.children('li');
  barP = $('.bar_title');
  var li = barLi.eq(i);
  li.css({backgroundImage:'url(' + addr + barImg[i].thum + '.png)',
          backgroundRepeat:'no-repeat',
          backgroundSize:'75%',
          backgroundPosition:'center'});
  barP.eq(i).text(barImg[i].p);

}

barLi.eq(i).remove();
barLi = barUl.children('li');
barP = $('.bar_title');

var Img = function(i){
var li = barLi.eq(i);
  li.css({backgroundImage:'url(' + addr + barImg[i].thum + '.png)',
          backgroundRepeat:'no-repeat',
          backgroundSize:'75%',
          backgroundPosition:'center'});  
}
Img(0);


//이미지 호버 만들기
var ImgHover = function(i){
var liHover = barLi.eq(i).css({backgroundImage:'url(' + addr + barImg[i].hover + '.png)'});
};


//초콜렛이름 만들기 
 var DetailSet = function(i){
   barP.eq(i).text(bisImg[i].p);
 };
DetailSet(0);


//썸네일 이미지를 클릭했을 때 hover 이미지 나오게 하기
barLi.on('mouseenter focus',function(e){
  e.preventDefault();
  var i = $(this).index();
  ImgHover(i);

});

barLi.on('mouseleave blur',function(e){
  e.preventDefault();
  var i = $(this).index();
    Img(i);

});



})(jQuery);