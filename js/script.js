$(document).ready(function() {

	// mobile menu, overlay, hamburger icon

	$('#navIcon').click(function() {
		$(this).toggleClass('active');

		if($(this).hasClass('active')) {
			$('#mobile-nav').addClass('slideRight');
			$('.overlay').fadeIn();
		} else {
			$('#mobile-nav').removeClass('slideRight');
			$('.overlay').fadeOut();
		}
	});

	// scroll to selected section

	$('a[href^="#"]').on('click', function(event) {

	    var target = $(this.getAttribute('href'));

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});

	// shrink header on scroll

	$(document).on('scroll', function() {
		if($(document).scrollTop() >= 200) {
			$('.header').addClass('active');
		} else {
			$('.header').removeClass('active');
		}
	});

});

