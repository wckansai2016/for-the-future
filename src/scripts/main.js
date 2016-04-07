import $ from 'jquery';

$( _=> {
	const $overlay = $( '.site-head' ).find( '.overlay' );
	const $gnav = $( '[data-gnav]' );
	// hamburger menu
	$( '.nav-btn' ).click( _=> {
		$overlay.toggle();
		$gnav.attr( 'data-gnav', 'open' );
	} );
	$overlay.click( _=> {
		$overlay.toggle();
		$gnav.attr( 'data-gnav', 'close' );
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

		const scrollHeight = $( document ).height();
		const scrollPosition = $window.height() + $window.scrollTop();
		const $footer = $( 'footer' );

		if( scrollHeight - scrollPosition + 10 <= $footer.height() ) {
			$to_top.css( {
				position: 'absolute',
				bottom: $footer.height()
			} );
		} else {
			$to_top.css( {
				position: 'fixed',
				bottom: "10px"
			} );
		}
	} );

} );
