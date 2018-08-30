//godiva_product_white.js

(function($){

//초콜릿 썸네일을 누르면 초콜릿 큰 이미지와 설명 나오게 하기
//변수선언 


var whitethumWrap = $('.white_thum_wrap');
var whitethumUl = whitethumWrap.children('ul');
var whitethumLi = whitethumUl.children('li');
var whitebigImg = $('.white_bigimg');
var whitedetail = $('.white_detail');


/*배열*/
var addr = "../img/product/white/";
var whiteImg = [
                 {thum:'beyaz-01', 
                  h5:'코어 블랑', 
                  h6:'Cœur Blanc', 
                  p:'고디바의 상징적인 화이트 초콜렛과 부드러운 헤이즐린 프랄린.'},

                 {thum:'beyaz-02', 
                  h5:'멜로디',
                  h6:'Miélodi',
                  p:'벌꿀 아몬드 프랄린 손수 화이트 초콜릿.'},

                 {thum:'beyaz-03', 
                  h5:'시그 네쳐 블랑 카페', 
                  h6:'Éclat Feuilletine', 
                  p:'바람과 함께 사라지다 영화를 위해 만든 가나슈의 화이트 초콜릿 버전'},

                 {thum:'beyaz-04',  
                  h5:'코스트에 ',
                  h6:'Croust',
                  p:'캐러멜 처리 된 헤이즐넛과 풍부한 프롤린 장식 된 화이트 초콜렛' },

                 {thum:'beyaz-05', 
                  h5:'세티 마카다미아', 
                  h6:'Seti Macadamia',
                  p:'달콤한 화이트 초콜릿, 어두운 초콜렛 줄무늬에 마카디미아너트.' }

               ];

//===li 복제해서 처리하고 썸네일 이미지를 한번에 담기 
//1)복제
//2)반복되는 이미지 한번에 담기 --for문

var i = 0;
for (; i < whiteImg.length; i+=1){
  var whitethumLiClone = whitethumLi.eq(0).clone(true);
  whitethumUl.append(whitethumLiClone);
  whitethumLi = whitethumUl.children('li');
  var li = whitethumLi.eq(i);
  li.css({backgroundImage:'url(' + addr + whiteImg[i].thum + '.png)',
          backgroundRepeat:'no-repeat',
          backgroundSize:'100%',
          backgroundPosition:'center center'});
   whitedetail.find('h5').text(whiteImg[i].h5);
   whitedetail.find('h6').text(whiteImg[i].h6);
   whitedetail.find('p').text(whiteImg[i].p);
}

whitethumLi.eq(i).remove();
whitethumLi = whitethumUl.children('li');


//큰 이미지 만들기 
//--배열 처리된 아이들 함수로 처리해서 한방에 만들기와 큰 이미지들 슬라이딩 처리 
var whitebigimgWrap = $('.white_bigimg_wrap');

var ImgSet = function(i){
var moreDiv = whitebigimgWrap.append('<div>');
var whitebigimgChildren = whitebigimgWrap.children('div');
    whitebigimgChildren.eq(0).css({zIndex:100});
    whitebigimgChildren.eq(-1).css({backgroundImage:'url(' + addr + whiteImg[i].thum + '.png)',backgroundSize:'135%'});
    whitebigimgChildren.eq(0).stop().fadeOut(function() {
       whitebigimgChildren.eq(1).siblings().remove();
       //일정시간이 지난 뒤에 
       setTimeout(function() {
         whitebigimgChildren.css({zIndex:100});
       },1);
     });  
};

ImgSet(0);


//초콜렛설명 만들기 
 var DetailSet = function(i){
   whitedetail.find('h5').text(whiteImg[i].h5);
   whitedetail.find('h6').text(whiteImg[i].h6);
   whitedetail.find('p').text(whiteImg[i].p);
 };
DetailSet(0);

//썸네일 이미지를 클릭했을 때 big이미지와 색상설명 나타나게 하기 
var awesomeNum = 0;
whitethumLi.on('click',function(e){
  e.preventDefault();
  var i = $(this).index();
  if(awesomeNum !== i){
    awesomeNum = i;
    ImgSet(i);
    DetailSet(i);
  }
});


//----썸네일 이미지 마우스 올렸을 때 효과 
whitethumLi.children('a').on('mouseenter focus',function(){
  $(this).parent().css({transform:'scale(1.2)', 
                        transition:'all 400ms ease'});
});

whitethumLi.children('a').on('mouseleave blur',function(){
  $(this).parent().css({transform:'scale(1)', 
                        transition:'all 400ms ease'});
});





})(jQuery);