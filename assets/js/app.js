$(function () {

	/**
	 * "Hero Background"s height on load
	 */
	$('.hero-area').css({
		height: $(window).height() - ($('.global-nav').height() + $('.local-nav').height())
	});

	$(window).resize(function () {

		/**
		 * "Hero Background"s height on window resize
		 */
		$('.hero-area').css({
			height: $(window).height() - ($('.global-nav').height() + $('.local-nav').height())
		});

		hideSearchView();
		closeMobileMenu();

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
		showSearchView();
	});

	/**
	 * Hide "Search View" and show "Nav" on click "Close Button" or "Curtain"
	 */
	$('#gn-curtain, #sv-close').click(function () {
		hideSearchView();
	});

	$('#menu-btn').click(function () {

		let menuCloseBtn = $('.global-nav').hasClass('menu-active');

		if (!menuCloseBtn) {
			openMobileMenu();
		} else {
			closeMobileMenu();
		}

		menuCloseBtn = menuCloseBtn ? false : true;

	});

	function hideSearchView() {
		$('body').css('overflow', 'auto');
		$('#gn-curtain').hide();

		$('#sv-results').hide('slide', { direction: 'up' }, 500, function () {

			$('#searchview').hide('slide', { direction: 'left' }, 500, function () {
				$('input', this).css('pointer-events', 'none');
				$('#sv-close').css('pointer-events', 'none');

				$('#nav').show('slide', { direction: 'left' }, 500);
			});

		});
	}

	function showSearchView() {
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
	}

	function closeMobileMenu() {
		$('#menu-btn i').attr('class', 'feather-menu');
		$('.login-btn').removeClass('menu-btn');

		$('body').css('overflow', 'auto');
		$('.global-nav').removeClass('menu-active');

		$('.gn-menu-wrapper').slideUp(500).removeClass('active', function () {
			$('#menu-container').hide();
		});
	}

	function openMobileMenu() {
		$('html, body').animate({
			scrollTop: 0
		}, 'normal');

		$('#menu-btn i').attr('class', 'feather-x');
		$('.login-btn').addClass('menu-btn');

		$('body').css('overflow', 'hidden');
		$('.global-nav').addClass('menu-active');

		$('#menu-container').show();

		$('.gn-menu-wrapper').addClass('active')
			.hide()
			.slideDown(500);
	}

})
