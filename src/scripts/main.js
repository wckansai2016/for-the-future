import $ from 'jquery';

$(function() {

	$('header').prepend('<div class="overlay"></div>');

	$('.nav_btn').click(function() {
		$('.overlay').toggle();
		$('#gnav').toggleClass('nav_open');
	});

	$('.overlay').click(function() {
		$('.overlay').toggle();
		$('#gnav').removeClass('nav_open');
	});

});
