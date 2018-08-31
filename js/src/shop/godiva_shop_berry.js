//godiva_shop_berry.js//


(function($){


//변수 선언

var berryWrap = $('.berry_content_wrap');
var berryUl = berryWrap.children('ul');
var berryLi = berryUl.children('li');
var berryP = $('.berry_title');

var addr = "../img/shop/berry/";
var berryImg = [
                 {thum:'berry_01', 
                  p:'Milk, Half Dozen '},

                 {thum:'berry_02', 
                  p:'Milk, Dozen'},

                 {thum:'berry_03',  
                  p:'Dark, Half Dozen '},

                 {thum:'berry_04',  
                  p:'Dark, Dozen'},

                 {thum:'berry_05', 
                  p:'Milk & Dark, Half Dozen '},

                 {thum:'berry_06',  
                  p:'Milk & Dark, Dozen '},

                 {thum:'berry_07', 
                  p:'Milk, Half Dozen'}
               ]; 



//===li 복제해서 처리하고 썸네일 이미지를 한번에 담기 
//1)복제
//2)반복되는 이미지 한번에 담기 --for문

var i = 0;
for (; i < berryImg.length; i+=1){
  var berryLiClone = berryLi.eq(0).clone(true);
  berryUl.append(berryLiClone);
  berryLi = berryUl.children('li');
  berryP = $('.berry_title');
  var li = berryLi.eq(i);
  li.css({backgroundImage:'url(' + addr + berryImg[i].thum + '.png)',
          backgroundRepeat:'no-repeat',
          backgroundSize:'75%',
          backgroundPosition:'center center'});
  berryP.eq(i).text(berryImg[i].p);

}

berryLi.eq(i).remove();
berryLi = berryUl.children('li');
berryP = $('.berry_title');



//초콜렛이름 만들기 
 var DetailSet = function(i){
   berryP.eq(i).text(berryImg[i].p);
 };
DetailSet(0);



})(jQuery);