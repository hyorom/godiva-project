//godvia_collection.js//

(function($){


var collectionBox = $ ('#collectionBox');
var loyalMove = $('.loyal_move');
var loyalMove01 = $ ('.loyal_move_01');


var carreMove = $('.carre_move');
var goldMove = $('.gold_move');
var truffMove = $('.truff_move');


var loyalMoveOffset = loyalMove.offset().top;
var loyalMove01Offset = loyalMove01.offset().top;


var carreMoveOffset = carreMove.offset().top;
var goldMoveOffset = goldMove.offset().top;
var truffMoveOffset = truffMove.offset().top;

var winH = $(window).outerHeight(true); //브라우저 전체 높이값 계산



/*화면 전체에서 절반쯤 위치했을 때 text가 나타나게 하기 */
  $(window).on('scroll',function(){
    var nowTop = $(this).scrollTop();
    if(nowTop >= loyalMoveOffset-(winH/3*2) ){ //전체 삼등분한거에서 2/3만큼//
     loyalMove.addClass('ani');
     collectionBox.addClass('conR');
    } else {
      loyalMove.removeClass('ani');}


    if(nowTop >= loyalMove01Offset-(winH/3*2) ){ //전체 삼등분한거에서 2/3만큼//
     loyalMove01.addClass('ani');
     collectionBox.addClass('conR');
    } else {
      loyalMove01.removeClass('ani');}

   





   if(nowTop >= carreMoveOffset-(winH/3*2) ){ //전체 삼등분한거에서 2/3만큼//
     carreMove.addClass('ani');
     collectionBox.addClass('conR');
    } else {
      carreMove.removeClass('ani');}


   if(nowTop >= goldMoveOffset-(winH/3*2) ){ //전체 삼등분한거에서 2/3만큼//
     goldMove.addClass('ani');
     collectionBox.addClass('conR');
    } else {
      goldMove.removeClass('ani');}


   if(nowTop >= truffMoveOffset-(winH/3*2) ){ //전체 삼등분한거에서 2/3만큼//
     truffMove.addClass('ani');
     collectionBox.addClass('conR');
    } else {
      truffMove.removeClass('ani');}

});





})(jQuery);