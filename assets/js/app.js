$(function () {

	/**
	 * "Hero Background"s height on load
	 */
	$('.hero-area').css({
		height: $(window).height() - ($('.global-nav').height() + $('.local-nav').height())
	});

	/**
	 * "Hero Background"s height on window resize
	 */
	$(window).resize(function () {
		$('.hero-area').css({
			height: $(window).height() - ($('.global-nav').height() + $('.local-nav').height())
		});
	});

	/**
	 * Scroll top to "Main" on click "Hero Arrow" or "Hero Button"
	 */
	$('.hero-arrow, .hero-button').click(function () {
		$('html, body').animate({
			scrollTop: $('.local-nav').height() + $('.hero-area').height()
		}, 'slow');
	});

	/**
	 * Show "Search View" and hide "Nav" on click "Search Button"
	 */
	$('#search-btn').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 'normal', function () {

			$('body').css('overflow', 'hidden');
			$('#gn-curtain').show();

			$('#nav').hide('slide', { direction: 'left' }, 500, function () {
				$('#searchview').show('slide', { direction: 'left' }, 500, function () {
					$('input', this).css('pointer-events', 'auto');
					$('input', this).focus();
					$('#sv-close').css('pointer-events', 'auto');

					$('#sv-results').show('slide', { direction: 'up' }, 500);
				});
			});

		});
	});

	/**
	 * Hide "Search View" and show "Nav" on click "Search Button"
	 */
	$('#gn-curtain, #sv-close').click(function () {

		$('body').css('overflow', 'auto');
		$('#gn-curtain').hide();

		$('#sv-results').hide('slide', { direction: 'up' }, 500, function () {

			$('#searchview').hide('slide', { direction: 'left' }, 500, function () {
				$('input', this).css('pointer-events', 'none');
				$('#sv-close').css('pointer-events', 'none');

				$('#nav').show('slide', { direction: 'left' }, 500);
			});

		});

	});

})
