import $ from 'jquery';

$(function() {

	$('header').prepend('<div class="overlay"></div>');

	$('.nav-btn').click(function() {
		$('.overlay').toggle();
		$('#gnav').toggleClass('nav-open');
	});

	$('.overlay').click(function() {
		$('.overlay').toggle();
		$('#gnav').removeClass('nav-open');
	});

});
