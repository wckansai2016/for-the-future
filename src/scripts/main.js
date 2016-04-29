import $ from 'jquery';

$( _=> {
	const $overlay = $( '.site-head' ).find( '.overlay' );
	const $gnav = $( '[data-gnav]' );
	// hamburger menu
	$( '.nav-btn' ).click( _=> {
		$overlay.toggleClass( 'overlay-is-active' );
		$gnav.attr( 'aria-expanded', $gnav.attr( 'aria-expanded' ) !== 'true' );
	} );
	$overlay.click( _=> {
		$overlay.toggleClass( 'overlay-is-active' );
		$gnav.attr( 'aria-expanded', $gnav.attr( 'aria-expanded' ) !== 'true' );
	} );

	// to top button
	const show_btn = 100;
	const $to_top = $( '.to-top' );
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
		const $footer = $( '.site-footer' );

		if( scrollHeight - scrollPosition + 10 <= $footer.height() ) {
			$to_top.css( {
				bottom: $footer.height()
			} );
		} else {
			$to_top.css( {
				bottom: "10px"
			} );
		}
	} );

} );
