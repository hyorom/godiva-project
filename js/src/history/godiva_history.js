//godiva_history.js//


(function($){

var conBox = $ ('.content');
var con01Text = $('.content_01_text');
var con02Text = $('.content_02_text');
var con03Text = $('.content_03_text');
var con04Text = $('.content_04_text');
var con05Text = $('.content_05_text');

var con01TextOffsetT = con01Text.offset().top;
var con02TextOffsetT = con02Text.offset().top;
var con03TextOffsetT = con03Text.offset().top;
var con04TextOffsetT = con04Text.offset().top;
var con05TextOffsetT = con05Text.offset().top;
var winH = $(window).outerHeight(true); //브라우저 전체 높이값 계산



/*화면 전체에서 절반쯤 위치했을 때 text가 나타나게 하기 */
  $(window).on('scroll',function(){
    var nowTop = $(this).scrollTop();
    if(nowTop >= con01TextOffsetT-(winH/3*2) ){ //전체 삼등분한거에서 2/3만큼//
     con01Text.addClass('ani');
     conBox.addClass('conR');
    } else {
      con01Text.removeClass('ani');}

   if(nowTop >= con02TextOffsetT-(winH/3*2) ){ //전체 삼등분한거에서 2/3만큼//
     con02Text.addClass('ani');
     conBox.addClass('conR');
    } else {
      con02Text.removeClass('ani');}


   if(nowTop >= con03TextOffsetT-(winH/3*2) ){ //전체 삼등분한거에서 2/3만큼//
     con03Text.addClass('ani');
     conBox.addClass('conR');
    } else {
      con03Text.removeClass('ani');}


   if(nowTop >= con04TextOffsetT-(winH/3*2) ){ //전체 삼등분한거에서 2/3만큼//
     con04Text.addClass('ani');
     conBox.addClass('conR');
    } else {
      con04Text.removeClass('ani');}


   if(nowTop >= con05TextOffsetT-(winH/3*2) ){ //전체 삼등분한거에서 2/3만큼//
     con05Text.addClass('ani');
     conBox.addClass('conR');
    } else {
      con05Text.removeClass('ani');}

});





})(jQuery);