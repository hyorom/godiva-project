//godiva_main_mainBox.js//


(function($){

var mainBox = $('#mainBox');
var mainBtn = $('#mainBtn');
var contentBox = $('#contentBox');


var winH = $(window).outerHeight(true); //브라우저 전체 높이값 계산
var contentBoxOffset = contentBox.offset().top; //contentBox 옵셋 계산 //


mainBtn.on('click',function(e){
  console.log('!');
  e.preventDefault();
  $('html, body').animate({scrollTop:winH});
});





})(jQuery); 