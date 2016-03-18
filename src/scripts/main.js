import $ from 'jquery';

$(function() {

	// hamburger menu
	$('.site-head').prepend('<div class="overlay"></div>');

	$('.nav-btn').click(function() {
		$('.overlay').toggle();
		$('.gnav').toggleClass('nav-open');
	});

	$('.overlay').click(function() {
		$('.overlay').toggle();
		$('.gnav').removeClass('nav-open');
	});

	// entry-eyecatch
	var view_width = $(window).width;
	var image_width = $('.entry-eyecatch img').width();
	var image_height;
	$('.entry-eyecatch img').bind('load', function() {
    image_height = $(this).height();
  });
	//var image_height = $('.entry-eyecatch img').height();
	var trim_height = parseInt(image_width/image_height*view_width-400)/2;
	//alert(image_height);
	//$('.entry-eyecatch img').css('top':'-'+trim_height+'px');

});
