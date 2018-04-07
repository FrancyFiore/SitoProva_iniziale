/*
	Escape Velocity by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function($) {

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
                speed: 300, //Aggiunto
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
        
        //Mostra/Nascondi Azienda
        $( "#aziendabtn" ).click(function() {
            //$( "#aziendatxt" ).toggle();
            $("#wrapperhome").removeClass('stylered');
            $("#wrapperhome").removeClass('stylegreen');
            $("#wrapperhome").addClass('stylecyan');
            
            
            $("#Azienda").removeClass('hide-before');
            $("#Azienda").removeClass('hide-after');
            
            $("#Lavorazioni").addClass('hide-before');
            $("#Lavorazioni").addClass('hide-after');
            
            $("#Certificati").addClass('hide-before');
            $("#Certificati").addClass('hide-after');
            
            
            document.getElementById("aziendatxt").style.display = "block";
            document.getElementById("lavorazionitxt").style.display = "none";
            document.getElementById("certificatitxt").style.display = "none";
        });
        
        //Mostra/Nascondi Lavorazioni
        $( "#lavorazionibtn" ).click(function() {
            $("#wrapperhome").addClass('stylered');
            $("#wrapperhome").removeClass('stylegreen');
            $("#wrapperhome").removeClass('stylecyan');
            
            
            $("#Azienda").addClass('hide-before');
            $("#Azienda").addClass('hide-after');
            
            $("#Lavorazioni").removeClass('hide-before');
            $("#Lavorazioni").removeClass('hide-after');
            
            $("#Certificati").addClass('hide-before');
            $("#Certificati").addClass('hide-after');
            
            
            document.getElementById("aziendatxt").style.display = "none";
            document.getElementById("lavorazionitxt").style.display = "block";
            document.getElementById("certificatitxt").style.display = "none";
        });
        
        //Mostra/Nascondi Certificati
        $( "#certificatibtn" ).click(function() {
            $("#wrapperhome").removeClass('stylered');
            $("#wrapperhome").addClass('stylegreen');
            $("#wrapperhome").removeClass('stylecyan');
            
            
            $("#Azienda").addClass('hide-before');
            $("#Azienda").addClass('hide-after');
            
            $("#Lavorazioni").addClass('hide-before');
            $("#Lavorazioni").addClass('hide-after');
            
            $("#Certificati").removeClass('hide-before');
            $("#Certificati").removeClass('hide-after');
            
            
            document.getElementById("aziendatxt").style.display = "none";
            document.getElementById("lavorazionitxt").style.display = "none";
            document.getElementById("certificatitxt").style.display = "block";
        });

	});

})(jQuery);