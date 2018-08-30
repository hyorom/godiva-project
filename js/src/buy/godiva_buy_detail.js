//godiva_buy_detail.js//

(function($){

//scrolltop 과 offsettop + 해당하는 박스높이를 계산해서 그 박스의 높이가 일치하면 사라져라 

var Detail = $('.iconic_detail');
var DetailOffsetT = Detail.offset().top; 
var DetailScrollT = Detail.scrollTop(); 

var recom = $('#recomBox');
var winW = $(window).outerWidth();
var windowH = $(window).outerHeight();
var recomOffsetT = recom.offset().top;
var recomTop = recomOffsetT - windowH;
console.log(recomTop);

$(window).on('scroll', function(e){
  e.preventDefault();
  var st = $(this).scrollTop();
console.log(st);
if(winW>769 && st >= recomTop){
  Detail.fadeOut(); 
}else{
  Detail.fadeIn();
}

});

  //===자동으로 새로고침 처리하기
  $(window).on('resize',function(e){
    var nowW = $(window).outerWidth();
    if(winW !== nowW){
      location.reload();
    }
  });



 //counter 기능 
// ---------------------------------------
var up = $('.counter').children('.up');
var down = $('.counter').children('.down');
var count = $('.counter').children('p');
var j = 1;

up.on('click',function(e) {
  e.preventDefault();
  j+=1;
  count.text(j);
});
down.on('click',function(e) {
  e.preventDefault();
  if(j > 0){
    j-=1;
  }
  count.text(j);
});
// ---------------------------------------

})(jQuery);
