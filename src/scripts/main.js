import $ from 'jquery';

$(function() {

	// hamburger menu
	$('.nav-btn').click(function() {
		$('.site-head .overlay').toggle();
		$('.gnav').toggleClass('nav-open');
	});

	$('.site-head .overlay').click(function() {
		$('.site-head .overlay').toggle();
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

	// to top button
	var show_btn = 100;
	var to_top = $('.site-footer .to-top');
	to_top.hide();
	to_top.on('click',function(){
		$('html,body').animate({scrollTop:'0'},500);
	});
	$(window).on('load scroll resize',function(){
		if($(window).scrollTop() >= show_btn){
			to_top.fadeIn('normal');
		} else if($(window).scrollTop() < show_btn){
			to_top.fadeOut('normal');
		}
	});

});
