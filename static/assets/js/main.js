/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/


(function($) {

	//show feature descriptions and benefits
	$('#wireless').click(function(){
		$('#wireless_description').show();
		$('#multiple_description').hide();
		$('#looper_description').hide();
		$('#audio_description').hide();
		$('#midi_description').hide();
		$('#tilt_description').hide();
		$('#share_description').hide();
	});

	$('#multiple').click(function(){
		$('#wireless_description').hide();
		$('#multiple_description').show();
		$('#looper_description').hide();
		$('#audio_description').hide();
		$('#midi_description').hide();
		$('#tilt_description').hide();
		$('#share_description').hide();
	});

	$('#looper').click(function(){
		$('#wireless_description').hide();
		$('#multiple_description').hide();
		$('#looper_description').show();
		$('#audio_description').hide();
		$('#midi_description').hide();
		$('#tilt_description').hide();
		$('#share_description').hide();
	});

	$('#audio').click(function(){
		$('#wireless_description').hide();
		$('#multiple_description').hide();
		$('#looper_description').hide();
		$('#audio_description').show();
		$('#midi_description').hide();
		$('#tilt_description').hide();
		$('#share_description').hide();
	});

	$('#midi').click(function(){
		$('#wireless_description').hide();
		$('#multiple_description').hide();
		$('#looper_description').hide();
		$('#audio_description').hide();
		$('#midi_description').show();
		$('#tilt_description').hide();
		$('#share_description').hide();
	});

	$('#tilt').click(function(){
		$('#wireless_description').hide();
		$('#multiple_description').hide();
		$('#looper_description').hide();
		$('#audio_description').hide();
		$('#midi_description').hide();
		$('#tilt_description').show();
		$('#share_description').hide();
	});

	$('#share').click(function(){
		$('#wireless_description').hide();
		$('#multiple_description').hide();
		$('#looper_description').hide();
		$('#audio_description').hide();
		$('#midi_description').hide();
		$('#tilt_description').hide();
		$('#share_description').show();
	});


	//this changes swot context
	$('#pedal').click(function(){
		$('#pedalSWOT').show();
		$('#line6SWOT').hide();
		$('#bossSWOT').hide();
		$('#digitechSWOT').hide();
	});

	$('#line6').click(function(){
		$('#pedalSWOT').hide();
		$('#line6SWOT').show();
		$('#bossSWOT').hide();
		$('#digitechSWOT').hide();
	});

	$('#boss').click(function(){
		$('#pedalSWOT').hide();
		$('#line6SWOT').hide();
		$('#bossSWOT').show();
		$('#digitechSWOT').hide();
	});

	$('#digitech').click(function(){
		$('#pedalSWOT').hide();
		$('#line6SWOT').hide();
		$('#bossSWOT').hide();
		$('#digitechSWOT').show();
	});


	//this changes contact buttons to say "thank you"
	$('#sendMessage').click(function(){
		$('#sendMessage').hide();
		$('#resetMessage').hide();
		$('#thankyou').show();
	});

	$('#learnMore').click(function(){
		$('#moreStory').show();
		$('#learnMore').hide();
		$('#summary').hide();
	});

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				mode: 'fade',
				noOpenerFade: true,
				alignment: 'center',
				detach: false
			});

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
						'<span class="title">' + $('#logo').html() + '</span>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');

	});

})(jQuery);