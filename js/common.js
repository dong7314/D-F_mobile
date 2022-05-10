$(function(){
  // sidebar hover 시 border-left 속성 변경
  $('#sidebar ul li:nth-child(3) a').hover(function(){
    $(this).parent().css('border-left', '4px solid #b71c08');
  }, function(){
    $(this).parent().css('border-left', '4px solid #5e5e5e');
  });
});
