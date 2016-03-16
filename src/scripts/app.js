$(document).ready(function() {

// ハンバーガーメニュー
	$('header').prepend('<div class="overlay"></div>');

	$('.nav-btn').click(function() {
		$('#gnav').toggleClass('nav-open');
	});

	$('.overlay').click(function() {
		$('#gnav').removeClass('nav-open');
	});

}
