$(window).scroll(function() {
$('nav').toggleClass('scrolled',$(this).scrollTop() > 50);
	if($(this).scrollTop() > 50){
		$('.text-scrolled').addClass('prevText');
	}else{
		$('.text-scrolled').removeClass('prevText')
	}
});

