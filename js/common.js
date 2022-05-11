$(function(){
  // meseege-btn
  $('.messege-btn').click(function(){
    if ( $(this).hasClass('changed') ) {
      $(this).animate({
        marginLeft: 0,
        width: 80,
      }, 400);
      $('#sidebar').animate({marginLeft: -220}, 400);
      $('.messege-btn span:nth-of-type(1)').animate({
        marginLeft: 55,
        marginTop: 17,
        width: 8,
        height: 2,
      }, 400);
      $('.messege-btn span:nth-of-type(2)').animate({
        marginLeft: 55,
        marginTop: 3,
        width: 8,
        height: 2,
      }, 400);
      $('.messege-btn span').css('background', '#b71c08');
    } else {
      $(this).animate({
        marginLeft: 220,
        width: 40,
      }, 400);
      $('#sidebar').animate({marginLeft: 0}, 400);
      $('.messege-btn span:nth-of-type(1)').animate({
        marginLeft: 7.5,
        marginTop: 19,
        width: '60%',
        height: 3,
      }, 400);
      $('.messege-btn span:nth-of-type(2)').animate({
        marginLeft: 7.5,
        marginTop: -3,
        width: '60%',
        height: 3,
      }, 400);
      $('.messege-btn span').css('background', '#b7b7b7');
    }
    $(this).toggleClass('changed');
  });

  // sidebar hover 시 border-left 속성 변경
  $('#sidebar ul li:nth-child(3) a').hover(function(){
    $(this).parent().css('border-left', '4px solid #b71c08');
  }, function(){
    $(this).parent().css('border-left', '4px solid #5e5e5e');
  });

  // quick icon 생성
  $('.quick ul li a').hover(function(){
    $(this).find('div').css('opacity', '1');
  }, function(){
    $(this).find('div').css('opacity', '0');
  });

});
