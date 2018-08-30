
(function($){


//tab 기능
//변수선언 
  var tabBox  = $('.tab_box');
  var tabUl = tabBox.children('ul');
  var tabLi   = tabUl.children('li');
  var tabContent = $('.tab_content').children('div');

//tab li를 누르면 tab content 나오게 하기 
  tabLi.on('click',function(e) {
    e.preventDefault();
   var i = $(this).index();

   // 선택한 li에 .select적용
   tabLi.eq(i).addClass('select');
   tabLi.eq(i).siblings().removeClass('select');

  // tab_text내의 순서에맞는 내용에 .select적용
   tabContent.eq(i).addClass('select');
   tabContent.eq(i).siblings().removeClass('select');
  });







})(jQuery);
