import $ from 'jquery';

$( _=> {
	const $overlay = $( '.site-head' ).find( '.overlay' );
	const $gnav = $( '[data-gnav]' );
	// hamburger menu
	$( '.nav-btn' ).click( _=> {
		$overlay.toggle();
		$gnav.toggleClass( 'nav-open' );
	} );
	$overlay.click( _=> {
		$overlay.toggle();
		$gnav.removeClass( 'nav-open' );
	} );

	// to top button
	const show_btn = 100;
	const $to_top = $( '.site-footer .to-top' );
	const $window = $( window );
	$to_top.hide();
	$to_top.on( 'click', evt=> {
		evt.preventDefault();
		$( 'html,body' ).animate( { scrollTop: 0 }, 500 );
	} );

	$window.on( 'load scroll resize', _=> {
		if( $window.scrollTop() >= show_btn ) {
			$to_top.fadeIn( 'normal' );
		} else if( $window.scrollTop() < show_btn ) {
			$to_top.fadeOut( 'normal' );
		}
	} );

	// gnav expand link area
	$( '.gnav li' ).click(function() {
		window.location=$(this).find( 'a' ).attr( 'href' );
		return false;
	} );

} );
