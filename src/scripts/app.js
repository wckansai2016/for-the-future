$(document).ready(function() {

	// hamburger menu
	$('.site-head').prepend('<div class="overlay"></div>');

	$('.nav-btn').click(function() {
		$('#gnav').toggleClass('nav-open');
	});

	$('.overlay').click(function() {
		$('#gnav').removeClass('nav-open');
	});

}
