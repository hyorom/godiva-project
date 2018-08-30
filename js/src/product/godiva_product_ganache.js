//godiva_product_ganache.js

(function($){

//초콜릿 썸네일을 누르면 초콜릿 큰 이미지와 설명 나오게 하기
//변수선언 

var ganachethumWrap = $('.ganache_thum_wrap');
var ganachethumUl = ganachethumWrap.children('ul');
var ganachethumLi = ganachethumUl.children('li');
var ganachebigImg = $('.ganache_bigimg');
var ganachedetail = $('.ganache_detail');


/*배열*/
var addr = "../img/product/ganache/";
var ganacheImg = [
                 {thum:'ganache_01', 
                  big:'ganache_img01', 
                  h5:'시냐튀르 레 카페', 
                  h6:'Signature Lait Café', 
                  p:'커피 맛의 초콜릿 페이스트로 채운 밀크 초콜릿'},

                 {thum:'ganache_02', 
                  big:'ganache_img02', 
                  h5:'레이디 레',
                  h6:'Lady Lait',
                  p:'애플 & 시나몬 풍미의 초콜릿 페이스트로 채워진 밀크초콜릿'},

                 {thum:'ganache_03', 
                  big:'ganache_img03', 
                  h5:'레이디 누아르', 
                  h6:'Lady Noir', 
                  p:'마다가스카르 바닐라 풍미의 화이트 초콜릿 가나슈로 채워진 다크 초콜릿'},

                 {thum:'ganache_04', 
                  big:'ganache_img04', 
                  h5:'볼륍테 레',
                  h6:'Volupté Lait',
                  p:'밀크 초콜릿 가나슈로 채워진 밀크 초콜릿' },

                 {thum:'ganache_05', 
                  big:'ganache_img05', 
                  h5:'투르비용 85', 
                  h6:'Tourbillon 85',
                  p:'85% 코코아와 다크 초콜릿 가나슈로 속을 채운 다크 초콜릿' },

                 {thum:'ganache_06', 
                  big:'ganache_img06', 
                  h5:'륀 파시옹', 
                  h6:'Lune Passion', 
                  p:'패션 프루츠 소스를 가미하고 초콜릿 페이스트로 채운 다크 초콜릿'}

               ];

//===li 복제해서 처리하고 썸네일 이미지를 한번에 담기 
//1)복제
//2)반복되는 이미지 한번에 담기 --for문

var i = 0;
for (; i < ganacheImg.length; i+=1){
  var ganachethumLiClone = ganachethumLi.eq(0).clone(true);
  ganachethumUl.append(ganachethumLiClone);
  ganachethumLi = ganachethumUl.children('li');
  var li = ganachethumLi.eq(i);
  li.css({backgroundImage:'url(' + addr + ganacheImg[i].thum + '.png)',
          backgroundRepeat:'no-repeat',
          backgroundSize:'60%',
          backgroundPosition:'center center'});
   ganachedetail.find('h5').text(ganacheImg[i].h5);
   ganachedetail.find('h6').text(ganacheImg[i].h6);
   ganachedetail.find('p').text(ganacheImg[i].p);
}

ganachethumLi.eq(i).remove();
ganachethumLi = ganachethumUl.children('li');


//큰 이미지 만들기 
//--배열 처리된 아이들 함수로 처리해서 한방에 만들기와 큰 이미지들 슬라이딩 처리 
var ganachebigimgWrap = $('.ganache_bigimg_wrap');

var ImgSet = function(i){
var moreDiv = ganachebigimgWrap.append('<div>');
var ganachebigimgChildren = ganachebigimgWrap.children('div');
    ganachebigimgChildren.eq(0).css({zIndex:100});
    ganachebigimgChildren.eq(-1).css({backgroundImage:'url(' + addr + ganacheImg[i].big + '.jpg)'});
     ganachebigimgChildren.eq(0).stop().fadeOut(function() {
       ganachebigimgChildren.eq(1).siblings().remove();
       //일정시간이 지난 뒤에 
       setTimeout(function() {
         ganachebigimgChildren.css({zIndex:100});
       },1);
     });  
};

ImgSet(0);


//초콜렛설명 만들기 
 var DetailSet = function(i){
   ganachedetail.find('h5').text(ganacheImg[i].h5);
   ganachedetail.find('h6').text(ganacheImg[i].h6);
   ganachedetail.find('p').text(ganacheImg[i].p);
 };
DetailSet(0);

//썸네일 이미지를 클릭했을 때 big이미지와 색상설명 나타나게 하기 
var awesomeNum = 0;
ganachethumLi.on('click',function(e){
  e.preventDefault();
  var i = $(this).index();
  if(awesomeNum !== i){
    awesomeNum = i;
    ImgSet(i);
    DetailSet(i);
  }
});


//----썸네일 이미지 마우스 올렸을 때 효과 
ganachethumLi.children('a').on('mouseenter focus',function(){
  $(this).parent().css({transform:'scale(1.2)', 
                        transition:'all 400ms ease'});
});

ganachethumLi.children('a').on('mouseleave blur',function(){
  $(this).parent().css({transform:'scale(1)', 
                        transition:'all 400ms ease'});
});





})(jQuery);