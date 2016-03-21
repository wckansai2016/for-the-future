<?php

if ( ! function_exists( 'for_the_future_setup' ) ) :

	function for_the_future_setup() {

		load_theme_textdomain( 'for-the-future', get_template_directory() . '/languages' );
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		//  navigations
		register_nav_menus( array(
			'global_nav' => esc_html__( 'global navigation', 'for-the-future' ),
			'footer_nav' => esc_html__( 'footer menu for SNS etc.', 'for-the-future' ),
		) );

		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'for_the_future_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

	}
endif;
add_action( 'after_setup_theme', 'for_the_future_setup' );

function for_the_future_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'for_the_future_content_width', 640 );
}

add_action( 'after_setup_theme', 'for_the_future_content_width', 0 );

/**
 * Enqueue scripts and styles.
 */
function for_the_future_scripts() {
	$theme         = wp_get_theme();
	$theme_version = $theme->get( 'Version' );
	wp_enqueue_style( 'for-the-future-style', get_stylesheet_uri(), array(), $theme_version );
	wp_enqueue_script( 'for-the-future-script', get_template_directory_uri() . '/bundle.js', array( 'jquery' ), $theme_version, true );
}

add_action( 'wp_enqueue_scripts', 'for_the_future_scripts' );
