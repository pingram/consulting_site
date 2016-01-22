jQuery(document).ready(function($) {
   'use strict';

   /* ==============================================
		MODERNIZR
	=============================================== */
	Modernizr.load({
	  	test: Modernizr.input.placeholder,
	  	nope: 'js/placeholder.js',
	  	complete : function () {
			if(!Modernizr.input.placeholder) {
      			$('input, textarea').placeholder();
			}
		}
	});

	/* ==============================================
		PULSE FALLBACK
	=============================================== */
	if(!Modernizr.cssanimations) {
		$('.btn').addClass('btn-noanimated');
	}

   /* ==============================================
		WAYPOINTS
	=============================================== */

	// Only load parallax when not on mobile devices
	if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

		$('.animated').waypoint(function() {
			$(this).each(function(){
				var animation = $(this).attr( "data-animation" );
				$(this).addClass( animation );
				$(this).addClass( 'visible' );
			});
		},
		{
			offset: '70%',
			triggerOnce: true
		});

	} else {

		$('.animated').addClass( 'visible' );

	}

	$('#about').waypoint(function() {
			$('#about .progress-bar').each(function(){
				var percent = $(this).attr( "data-value" ) + '%';
				$(this).css( "width", percent );
			});
		},
		{
			offset: '70%',
			triggerOnce: true
		});

	/* ==============================================
		MMENU
	 =============================================== */

	function mmenuw() {
		var wi = $(window).width();
		var nb = $("#mmenu-side-menu").length;
		if(wi < 760) {
			if(nb < 1) {
				$('#side-menu').clone( true ).attr("id", "mmenu-side-menu").mmenu({
					position: "right",
					zposition:"front",
					moveBackground:true,
					clone:true,
					dragOpen:false,
					});
				$('#mmenu-side-menu ul').removeClass('nav navbar-nav navbar-right');
			}
		}
	}

	function mmenuw_class() {
		var wi = $(window).width();
		if(wi < 992) {
			$('#nav .container').addClass('container-fluid');
			$('#nav .container').removeClass('container');
		} else {
			$('#nav .container-fluid').addClass('container');
			$('#nav .container-fluid').removeClass('container-fluid');
		}
	}

	mmenuw();
	mmenuw_class();
	$(window).resize(function() {
		mmenuw();
		mmenuw_class();
	});

	/* ==============================================
		Count Factors
	 =============================================== */

	 (function($) {
		$.fn.countTo = function(options) {
			// merge the default plugin settings with the custom options
			options = $.extend({}, $.fn.countTo.defaults, options || {});

			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(options.speed / options.refreshInterval),
				increment = (options.to - options.from) / loops;

			return $(this).each(function() {
				var _this = this,
					loopCount = 0,
					value = options.from,
					interval = setInterval(updateTimer, options.refreshInterval);

				function updateTimer() {
					value += increment;
					loopCount++;
					$(_this).html(value.toFixed(options.decimals));

					if (typeof(options.onUpdate) == 'function') {
						options.onUpdate.call(_this, value);
					}

					if (loopCount >= loops) {
						clearInterval(interval);
						value = options.to;

						if (typeof(options.onComplete) == 'function') {
							options.onComplete.call(_this, value);
						}
					}
				}
			});
		};

		$.fn.countTo.defaults = {
			from: 0,  // the number the element should start at
			to: 100,  // the number the element should end at
			speed: 1000,  // how long it should take to count between the target numbers
			refreshInterval: 100,  // how often the element should be updated
			decimals: 0,  // the number of decimal places to show
			onUpdate: null,  // callback method for every time the element is updated,
			onComplete: null,  // callback method for when the element finishes updating
		};
	})(jQuery);

	 function countUp() {
			var dataperc;
			$('.fact-number').each(function(){
				dataperc = $(this).attr('data-perc'),
				$(this).find('.factor').delay(6000).countTo({
					from: 10,
					to: dataperc,
					speed: 1000,
					refreshInterval: 10,
				});
			});
		}

	$('.fact-number').waypoint(function() {
		countUp();
	},
	{
		offset: '70%',
		triggerOnce: true
	});

   /* ==============================================
		BUTTON TO TOP
	=============================================== */
	// fade in #back-top
	$(function () {
		// scroll body to 0px on click
		$('#back-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 3000);
			return false;
		});
	});

	/* ==============================================
		OWL CAROUSEL
	=============================================== */

	$("#slides ul").owlCarousel({
		// navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		nav: false,
      	// animateOut: 'fadeOut',
      	// animateIn: 'fadeIn',
		items:1,
		margin:0,
		loop:true,
		autoplay:false,
		autoplayTimeout:5000,
		autoplayHoverPause:false,
		dots: false,
		stagePadding:0,
		smartSpeed:1000,
	});

	// $("#slides ul").owlCarousel({
	// 	navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	// 	nav: true,
 //      	animateOut: 'fadeOut',
 //      	animateIn: 'fadeIn',
	// 	items:1,
	// 	margin:0,
	// 	loop:true,
	// 	autoplay:true,
	// 	autoplayTimeout:5000,
	// 	autoplayHoverPause:false,
	// 	dots: false,
	// 	stagePadding:0,
	// 	smartSpeed:1000,
	// });

	$("#quote-slider").owlCarousel({
	  	items: 1,
	  });

	$("#clients-slider").owlCarousel({
	   	dots:false,
	  	responsive:{
			0:{
			  items:1
			},
			420:{
			  items:2
			},
			768:{
			  items:3
			},
			1000:{
			  items:5
			},
			1400: {
				items:6
			},
			1600: {
				items:7
			}
		}
	  });


  $("#blog-slider").owlCarousel({
	  dots:true,
	  nav: false,
	  responsive:{
			0:{
			  items:1
			},
			420:{
			  items:2
			},
			768:{
			  items:3
			},
			1400: {
				items:5
			},
			1600: {
				items:6
			}
		}
	  });

	 /* ==============================================
		TOOLTIP
	=============================================== */
	jQuery('[data-toggle~="tooltip"]').tooltip({
		container: 'body'
	});


   /* ==============================================
		MIXITUP PORTFOLIO
	=============================================== */
	//Mixitup
	$(function(){
    	$('.home-projects').mixItUp();
	});

	/* ==============================================
		MAGNIFIC POPUP
	=============================================== */
	$('.popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		},
    });

 	/* ==============================================
		PARALLAX
	=============================================== */

	// Only load parallax when not on mobile devices
	if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('.image1').parallax("0%", -0.3);
		$('.image2').parallax("0%", -0.3);
		$('.image3').parallax("0%", -0.3);
	}


	/* ==============================================
		NAV
	=============================================== */
	$("#nav").sticky({
		topSpacing: 0
	});

	$('.home-nav').onePageNav({
		scrollSpeed: 1200,
		currentClass: 'active',
		changeHash: true,
		filter: ':not(.external)'
	});


	/* ==============================================
		AJAX CONTACT FORM
	=============================================== */
	$('#contactform').submit(function(){

		var action = $(this).attr('action');

		$("#message").slideUp(750,function() {
		$('#message').hide();

 		$('#submit')
			.after('<img src="images/ajax-loader.gif" class="loader" />')
			.attr('disabled','disabled');

		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			subject: $('#subject').val(),
			comments: $('#comments').val(),
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform').slideUp('slow');

			}
		);

		});

		return false;

	});


});
//End Document.ready


$(window).load(function() {
	'use strict';

	/* ==============================================
		PAGE LOADER
	=============================================== */

	$(".loader-item").delay(7000).fadeOut();
	$("#pageloader").delay(12000).fadeOut("slow");

});
//End window.load