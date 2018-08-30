//godiva_product_praline.js

(function($){

//초콜릿 썸네일을 누르면 초콜릿 큰 이미지와 설명 나오게 하기
//변수선언 

var pralinethumWrap = $('.praline_thum_wrap');
var pralinethumUl = pralinethumWrap.children('ul');
var pralinethumLi = pralinethumUl.children('li');
var pralinebigImg = $('.praline_bigimg');
var pralinedetail = $('.praline_detail');


/*배열*/
var addr = "../img/product/praline/";
var pralineImg = [
                 {thum:'praline_01', 
                  big:'praline_01', 
                  h5:'쾨르 레', 
                  h6:'Coeur Lait', 
                  p:'섬세한 풍미의 헤이즐넛 프랄린을 채운 하트 모양의 밀크 초콜렛'},

                 {thum:'praline_02', 
                  big:'praline_img02', 
                  h5:'투르비용 프랄리네',
                  h6:'Tourbillon Praliné',
                  p:'헤이즐넛 프랄린으로 채워진 밀크 초콜렛'},

                 {thum:'praline_03', 
                  big:'praline_img03', 
                  h5:'에끌라 푀이예틴', 
                  h6:'Éclat Feuilletine', 
                  p:'캐러멜라이즈드 헤이즐넛 조각을 올린 푀이예틴 헤이즐넛 프랄린 초콜릿'},

                 {thum:'praline_04', 
                  big:'praline_img04', 
                  h5:'모자이크 마카다미아 ',
                  h6:'Mosaïque Macadamia',
                  p:'로스티드 마카다미아 너트와 소프트 프랄린으로 속을 채운 밀크초콜릿' },

                 {thum:'praline_05', 
                  big:'praline_img05', 
                  h5:'쾨르 블랑', 
                  h6:'Coeur Blanc',
                  p:'헤이즐넛 프랄린으로 속을 채운 화이트 초콜릿' },

                 {thum:'praline_06', 
                  big:'praline_img06', 
                  h5:'륀 프랄리네', 
                  h6:'Lune Praliné', 
                  p:'부드러운 헤이즐넛 프랄린으로 채워진 밀크 초콜릿'},

                  {thum:'praline_07', 
                  big:'praline_img07', 
                  h5:'페피테 아망드', 
                  h6:'Pepite Amande', 
                  p:'구운 통 아몬드가 들어있고, 헤이즐넛 프랄린으로 채워진 밀크 초콜렛'},

                  {thum:'praline_08', 
                  big:'praline_img08', 
                  h5:'페를 아망드', 
                  h6:'Perle Amande', 
                  p:'로스티드 아몬드 크림을 채운 밀크 초콜릿'}

               ];

//===li 복제해서 처리하고 썸네일 이미지를 한번에 담기 
//1)복제
//2)반복되는 이미지 한번에 담기 --for문

var i = 0;
for (; i < pralineImg.length; i+=1){
  var pralinethumLiClone = pralinethumLi.eq(0).clone(true);
  pralinethumUl.append(pralinethumLiClone);
  pralinethumLi = pralinethumUl.children('li');
  var li = pralinethumLi.eq(i);
  li.css({backgroundImage:'url(' + addr + pralineImg[i].thum + '.png)',
          backgroundRepeat:'no-repeat',
          backgroundSize:'65%',
          backgroundPosition:'center center'});
   pralinedetail.find('h5').text(pralineImg[i].h5);
   pralinedetail.find('h6').text(pralineImg[i].h6);
   pralinedetail.find('p').text(pralineImg[i].p);
}

pralinethumLi.eq(i).remove();
pralinethumLi = pralinethumUl.children('li');


//큰 이미지 만들기 
//--배열 처리된 아이들 함수로 처리해서 한방에 만들기와 큰 이미지들 슬라이딩 처리 
var pralinebigimgWrap = $('.praline_bigimg_wrap');

var ImgSet = function(i){
var moreDiv = pralinebigimgWrap.append('<div>');
var pralinebigimgChildren = pralinebigimgWrap.children('div');
    pralinebigimgChildren.eq(0).css({zIndex:100});
    pralinebigimgChildren.eq(-1).css({backgroundImage:'url(' + addr + pralineImg[i].thum + '.png)'});
     pralinebigimgChildren.eq(0).stop().fadeOut(function() {
     pralinebigimgChildren.eq(1).siblings().remove();
       //일정시간이 지난 뒤에 
       setTimeout(function() {
         pralinebigimgChildren.css({zIndex:100});
       },1);
     });  
};

ImgSet(0);


//초콜렛설명 만들기 
 var DetailSet = function(i){
   pralinedetail.find('h5').text(pralineImg[i].h5);
   pralinedetail.find('h6').text(pralineImg[i].h6);
   pralinedetail.find('p').text(pralineImg[i].p);
 };
DetailSet(0);

//썸네일 이미지를 클릭했을 때 big이미지와 색상설명 나타나게 하기 
var awesomeNum = 0;
pralinethumLi.on('click',function(e){
  e.preventDefault();
  var i = $(this).index();
  if(awesomeNum !== i){
    awesomeNum = i;
    ImgSet(i);
    DetailSet(i);
  }
});


//----썸네일 이미지 마우스 올렸을 때 효과 
pralinethumLi.children('a').on('mouseenter focus',function(){
  $(this).parent().css({transform:'scale(1.2)', 
                        transition:'all 400ms ease'});
});

pralinethumLi.children('a').on('mouseleave blur',function(){
  $(this).parent().css({transform:'scale(1)', 
                        transition:'all 400ms ease'});
});





})(jQuery);