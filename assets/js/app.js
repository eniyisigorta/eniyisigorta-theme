$(function () {

	$('.hero-area').css({
		height: $(window).height() - ($('.global-nav').height() + $('.local-nav').height())
	});

	$(window).resize(function () {
		$('.hero-area').css({
			height: $(window).height() - ($('.global-nav').height() + $('.local-nav').height())
		});
	});

	$('.hero-arrow, .hero-button').click(function () {
		$('html, body').animate({
			scrollTop: $('.local-nav').height() + $('.hero-area').height()
		}, 'slow');
	});

})
