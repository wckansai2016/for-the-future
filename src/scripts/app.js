$(document).ready(function() {

// ハンバーガーメニュー
	$('header').prepend('<div class="overlay"></div>');

	$('.nav_btn').click(function() {
		$('#gnav').toggleClass('nav_open');
	});

	$('.overlay').click(function() {
		$('#gnav').removeClass('nav_open');
	});

}
