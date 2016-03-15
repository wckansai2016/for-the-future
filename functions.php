<?php

if ( ! function_exists( 'theme_env_sample_setup' ) ) :

	function theme_env_sample_setup() {

		load_theme_textdomain( 'theme-env-sample', get_template_directory() . '/languages' );
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'primary' => esc_html__( 'Primary', 'theme_env_sample' ),
		) );

		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		add_theme_support( 'post-formats', array(
			'aside',
			'image',
			'video',
			'quote',
			'link',
		) );
		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'theme_env_sample_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );
	}
endif;
add_action( 'after_setup_theme', 'theme_env_sample_setup' );

function theme_env_sample_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'theme_env_sample_content_width', 640 );
}
add_action( 'after_setup_theme', 'theme_env_sample_content_width', 0 );

/**
 * Enqueue scripts and styles.
 */
function theme_env_sample_scripts() {
	$theme = wp_get_theme();
	$theme_version = $theme->get( 'Version' );
	wp_enqueue_style( 'theme-env-sample-style', get_stylesheet_uri(), array(), $theme_version );
	wp_enqueue_script( 'theme-env-sample-script', get_template_directory_uri() . '/bundle.js', array( 'jquery' ), $theme_version, true );
}
add_action( 'wp_enqueue_scripts', 'theme_env_sample_scripts' );

/**
 * first image
 */
function catch_that_image() {
	global $post, $posts;
	$first_img = '';
	ob_start();
	ob_end_clean();
	$output = preg_match_all('/<img.+src=&#91;'"&#93;(&#91;^'"&#93;+)&#91;'"&#93;.*>/i', $post->post_content, $matches);
	$first_img = $matches [1] [0];

	if(empty($first_img)){ //Defines a default image
		$first_img = "/images/default.jpg";
	}
	return $first_img;
}
