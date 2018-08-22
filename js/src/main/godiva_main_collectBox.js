// godiva_main_collectBox.js//


(function($){

var winH = $(window).outerHeight();
var collBox = $('#colletBox');
var collText = $('.collet_text');
var collBoxTop = collBox.offset().top;

var collHTop = winH + collBoxTop;

$(window).on('scroll',function() {
  var nowTop = $(this).scrollTop();
  var per = (100+(nowTop - collHTop) / (winH*2) * 100)+'%';
  console.log(per);

  // if(nowTop >= collHTop){
    collBox.css({backgroundPosition:'center ' + per});
  // }


});



})(jQuery);