//godiva_product_truffe.js

(function($){

//초콜릿 썸네일을 누르면 초콜릿 큰 이미지와 설명 나오게 하기

//변수선언 

var truffethumWrap = $('.truffle_thum_wrap');
var truffethumUl = truffethumWrap.children('ul');
var truffethumLi = truffethumUl.children('li');
var truffebigImg = $('.truffle_bigimg');
var truffedetail = $('.truffle_detail');


/*배열*/
var addr = "../img/product/truffe/";
var truffeImg = [
                 {thum:'truffe_01', 
                  big:'truffe_img01', 
                  h5:'트뤼프 까라멜 쌀레', 
                  h6:'Truffe Caramel Salé', 
                  p:'프랑스산 천연소금 게랑드와 리치한 캬라멜층 다크 초콜릿 조각을 올린 트뤼프'},

                 {thum:'truffe_02', 
                  big:'truffe_img02', 
                  h5:'트뤼프 스뻬큘로스',
                  h6:'Truffe Speculoos',
                  p:'시나몬향 스페큘로스 비스킷 무스와 스페큘로스 크런치를 가미한 트뤼프'},

                 {thum:'truffe_03', 
                  big:'truffe_img03', 
                  h5:'트뤼프 무스 바니 미엘', 
                  h6:'Truffe Mousse Vanille Miel', 
                  p:'벌꿀을 가미한 가나슈에 바닐라 무스를 더하고 플레이크를 덧입힌 트뤼프'},

                 {thum:'truffe_04', 
                  big:'truffe_img04', 
                  h5:'트뤼프 무스 마차',
                  h6:'Truffe Mousse Matcha',
                  p:'이국적인 마차 티 무스에 마차 파우더로 감싼 고디바 오리지널 트뤼프' },

                 {thum:'truffe_05', 
                  big:'truffe_img05', 
                  h5:'트뤼프 프랄리네 아망데', 
                  h6:'Truffe Praliné Amande',
                  p:'아몬드, 푀이예틴, 베네수엘라산 카카오 20%가 함유된 다크 초콜릿으로 감싼 트뤼프' },

                 {thum:'truffe_06', 
                  big:'truffe_img06', 
                  h5:'트뤼프 무스 드 레', 
                  h6:'Truffe Mousse De Lait', 
                  p:'베네수엘라산 카카오 20%가 함유된 코코아 파우더로 감싼 깊은 풍미의 트뤼프'},

                 {thum:'truffe_07', 
                  big:'truffe_img07',
                  h5:'트뤼프 브레질리엔느', 
                  h6:'Truffe Praliné Brésilienne',
                  p:'고디바 시그니처 헤이즐넛 프랄리네를 캬라멜라이즈드 헤이즐넛 분태로 감싼 트뤼프' },

                 {thum:'truffe_08', 
                  big:'truffe_img08', 
                  h5:'트뤼프 샴빤느', 
                  h6:'Truffe Champagne', 
                  p:'샴페인이 가미된 화이트와 아이보리 슈거로 가볍게 감싼 트뤼프'},

                 {thum:'truffe_09', 
                  big:'truffe_img09', 
                  h5:'트뤼프 아망드 오 미엘',
                  h6:'Truffe Amande Au Miel', 
                  p:'밀크 초콜릿 쉘 안에 로스티드 캐러멜라이즈드 아몬드 조각과 꿀을 덧 입힌 트뤼프'},

                 {thum:'truffe_10', 
                  big:'truffe_img10', 
                  h5:'트뤼프 카푸치노', 
                  h6:'Truffe Cappuccino',
                  p:'다크 초콜릿으로 엔로빙하고 화이트 플레이크를 입힌 카푸치노 크림 트뤼프' },

                 {thum:'truffe_11',
                  big:'truffe_img11', 
                  h5:'트뤼프 크렘 브륄레', 
                  h6:'Truffe Crème Brûlée', 
                  p:'캐러멜라이즈드 바닐라 크림과 브라운 슈거를 올린 트뤼프'}
               ];

//===li 복제해서 처리하고 썸네일 이미지를 한번에 담기 
//1)복제
//2)반복되는 이미지 한번에 담기 --for문

var i = 0;
for (; i < truffeImg.length; i+=1){
  var truffethumLiClone = truffethumLi.eq(0).clone(true);
  truffethumUl.append(truffethumLiClone);
  truffethumLi = truffethumUl.children('li');
  var li = truffethumLi.eq(i);
  li.css({backgroundImage:'url(' + addr + truffeImg[i].thum + '.png)',
          backgroundRepeat:'no-repeat',
          backgroundSize:'60%',
          backgroundPosition:'center center'});
   truffedetail.find('h5').text(truffeImg[i].h5);
   truffedetail.find('h6').text(truffeImg[i].h6);
   truffedetail.find('p').text(truffeImg[i].p);
}

truffethumLi.eq(i).remove();
truffethumLi = truffethumUl.children('li');


//큰 이미지 만들기 
//--배열 처리된 아이들 함수로 처리해서 한방에 만들기와 큰 이미지들 슬라이딩 처리 
var truffebigimgWrap = $('.truffle_bigimg_wrap');

var ImgSet = function(i){
var moreDiv = truffebigimgWrap.append('<div>');
var truffebigimgChildren = truffebigimgWrap.children('div');
    truffebigimgChildren.eq(0).css({zIndex:100});
    truffebigimgChildren.eq(-1).css({backgroundImage:'url(' + addr + truffeImg[i].big + '.jpg)'});
    //truffebigimgChildren.eq(0).fadeIn();
     truffebigimgChildren.eq(0).stop().fadeOut(function() {
       truffebigimgChildren.eq(1).siblings().remove();
       //일정시간이 지난 뒤에 
       setTimeout(function() {
         truffebigimgChildren.css({zIndex:100});
       },1);
     });  
};

ImgSet(0);


//초콜렛설명 만들기 
 var DetailSet = function(i){
   truffedetail.find('h5').text(truffeImg[i].h5);
   truffedetail.find('h6').text(truffeImg[i].h6);
   truffedetail.find('p').text(truffeImg[i].p);
 };
DetailSet(0);

//썸네일 이미지를 클릭했을 때 big이미지와 색상설명 나타나게 하기 
var awesomeNum = 0;
truffethumLi.on('click',function(e){
  e.preventDefault();
  var i = $(this).index();
  if(awesomeNum !== i){
    awesomeNum = i;
    ImgSet(i);
    DetailSet(i);
  }
});


//----썸네일 이미지 마우스 올렸을 때 효과 
truffethumLi.children('a').on('mouseenter focus',function(){
  $(this).parent().css({transform:'scale(1.2)', 
                        transition:'all 400ms ease'});
});

truffethumLi.children('a').on('mouseleave blur',function(){
  $(this).parent().css({transform:'scale(1)', 
                        transition:'all 400ms ease'});
});





})(jQuery);