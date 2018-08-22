//godiva_main_contentBox.js //


(function($){

var contentBox = $('#contentBox');
var ladyText =  $('.lady_text');
var chocoText =  $('.choco_text');
var proText =  $('.pro_text');

var ladyTextOffsetT = ladyText.offset().top; //ladyText옵셋 계산 //
var chocoTextOffsetT = chocoText.offset().top; //chocoText옵셋 계산 //
var proTextOffsetT = proText.offset().top; //proText옵셋 계산 //

var who = [];
for(var i = 0; i < $('.content_text').length; i++){
  var conT = $('.content_text').eq(i).attr('class').split(' ');
  who[i] = conT[0];
}

var whoTop = [];
for(var i =0; i<who.length; i++){
  whoTop[i] = $('.' + who[i]).offset().top;
}


console.log( who );
console.log( whoTop );

var winH = $(window).outerHeight(true); //브라우저 전체 높이값 계산


  $(window).on('scroll',function(){
    var nowTop = $(this).scrollTop();
    var Landing_01 = function(top,that) {
      if(nowTop >= top-(winH/3*2) ){ 
         $('.' + that).addClass('ani');
         contentBox.addClass('contentR');
        } else {
         $('.' + that).removeClass('ani');}
    };


  for(var j = 0; j<who.length; j++){
    Landing_01( whoTop[j], who[j] );
   }
   
});

/* //step01
    // if(nowTop >= ladyTextOffsetT-(winH/3*2) ){ 
    //  ladyText.addClass('ani');
    //  contentBox.addClass('contentR');
    // } else {
    //   ladyText.removeClass('ani');}


    //  if(nowTop >= chocoTextOffsetT-(winH/3*2) ){ 
    //  chocoText.addClass('ani');
    //  contentBox.addClass('contentR');
    // } else {
    //   chocoText.removeClass('ani');}


    //  if(nowTop >= proTextOffsetT-(winH/3*2) ){ 
    //  proText.addClass('ani');
    //  contentBox.addClass('contentR');
    // } else {
    //   proText.removeClass('ani');}
*/
/* // step_02

    Landing_01(ladyTextOffsetT, ladyText );
    Landing_01(chocoTextOffsetT, chocoText );
    Landing_01(proTextOffsetT, proText );
*/




})(jQuery);