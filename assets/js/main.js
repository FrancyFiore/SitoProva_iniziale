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
    
    
    // Durante Caricamento
    $("#Azienda").addClass('etichetta');
    
    $("#Lavorazioni").addClass('hide-before');
    $("#Lavorazioni").addClass('hide-after');
            
    $("#Certificati").addClass('hide-before');
    $("#Certificati").addClass('hide-after');
    
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
        $("#aziendabtn").click(function() {
            //$( "#aziendatxt" ).toggle();
            //$("#wrapperhome").removeClass('stylecyan');
            //$("#wrapperhome").removeClass('stylered');
            //$("#wrapperhome").addClass('stylegreen');
            
            $("#Azienda").removeClass('hide-before');
            $("#Azienda").removeClass('hide-after');
            $("#Azienda").addClass('etichetta');
            
            $("#Lavorazioni").addClass('hide-before');
            $("#Lavorazioni").addClass('hide-after');
            $("#Lavorazioni").removeClass('etichetta');
            
            $("#Certificati").addClass('hide-before');
            $("#Certificati").addClass('hide-after');
            $("#Certificati").removeClass('etichetta');
            
            
            document.getElementById("aziendatxt").style.display = "block";
            document.getElementById("lavorazionitxt").style.display = "none";
            document.getElementById("certificatitxt").style.display = "none";
        });
        
        //Mostra/Nascondi Lavorazioni
        $("#lavorazionibtn").click(function() {
            
            $("#Azienda").addClass('hide-before');
            $("#Azienda").addClass('hide-after');
            $("#Azienda").removeClass('etichetta');
            
            
            $("#Lavorazioni").removeClass('hide-before');
            $("#Lavorazioni").removeClass('hide-after');
            $("#Lavorazioni").addClass('etichetta');
            
            $("#Certificati").addClass('hide-before');
            $("#Certificati").addClass('hide-after');
            $("#Certificati").removeClass('etichetta');
            
            
            document.getElementById("aziendatxt").style.display = "none";
            document.getElementById("lavorazionitxt").style.display = "block";
            document.getElementById("certificatitxt").style.display = "none";
        });
        
        //Mostra/Nascondi Certificati
        $("#certificatibtn").click(function() {
            
            $("#Azienda").addClass('hide-before');
            $("#Azienda").addClass('hide-after');
            $("#Azienda").removeClass('etichetta');
            
            $("#Lavorazioni").addClass('hide-before');
            $("#Lavorazioni").addClass('hide-after');
            $("#Lavorazioni").removeClass('etichetta');
            
            $("#Certificati").removeClass('hide-before');
            $("#Certificati").removeClass('hide-after');
            $("#Certificati").addClass('etichetta');
            
            
            document.getElementById("aziendatxt").style.display = "none";
            document.getElementById("lavorazionitxt").style.display = "none";
            document.getElementById("certificatitxt").style.display = "block";
        });
        
        //$("#Privacy").click(function() {
        
        // });
        
        
        // Scrolly.
			$('.scrolly').scrolly({
				offset: function() { return $("footer-wrapper").height(); }
			});
        
        // Lightbox gallery.
				$window.on('load', function() {
                    
                    //$('#gallery, #gallery2').poptrox({
					$('.gallery').poptrox({
						caption: function($a) { return $a.nextAll('text').html(); },
						overlayColor: '#2c2c2c',
						overlayOpacity: 0.85,
						popupCloserText: '',
						popupLoaderText: '',
						selector: '.work-item a.image',
						usePopupCaption: true,
						usePopupDefaultStyling: false,
						usePopupEasyClose: false,
						usePopupNav: true,
						
					});

				});

	});

})(jQuery);