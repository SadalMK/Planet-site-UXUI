$(function() {
	
	$(".panel").css({
		"height":$(window).height()
	});

$.scrollify({
		section:".panel", // селектор для секций (разделов) на странице
	    scrollSpeed: 1100,
	    offset : 0, // расстояние в пикселях для комппенсации положения каждого раздела.
	    scrollbars: false //Будет ли видна полоса прокрутки
	});
});
//Анимации
$(window).scroll(function() {
    $('.mov').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos = topOfWindow) {
        $(this).addClass('fadeInUp');
      }
    });
  });

$(window).scroll(function() {
    $('.mov').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos > topOfWindow+1000) {
        $(this).removeClass('fadeInUp');
      }
    });
  });

$(window).scroll(function() {
    $('.mov1').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos = topOfWindow) {
        $(this).addClass('fadeInUpOf');
      }
    });
  });

$(window).scroll(function() {
    $('.mov1').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos > topOfWindow+1000) {
        $(this).removeClass('fadeInUpOf');
      }
    });
  });

$(window).scroll(function() {
    $('.mov2').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos = topOfWindow) {
        $(this).addClass('fadeInUpOs');
      }
    });
  });

$(window).scroll(function() {
    $('.mov2').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos > topOfWindow+1000) {
        $(this).removeClass('fadeInUpOs');
      }
    });
  });


