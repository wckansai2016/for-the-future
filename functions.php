<?php

if ( ! function_exists( 'for_the_future_setup' ) ) :

	function for_the_future_setup() {

		load_theme_textdomain( 'for-the-future' );
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'jetpack-responsive-videos' );

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

		add_theme_support( 'custom-logo', array(
			'width'       => 250,
			'height'      => 37,
			'flex-width'  => true,
		) );

		add_editor_style( array(
			'editor-style.css',
			'//fonts.googleapis.com/css?family=Noto+Sans:400,700|Noto+Serif:400,700',
		) );

		set_post_thumbnail_size( 475, 475, true );
		add_image_size( 'for-the-future-post-thumbnail-2x', 950, 950, true );

	}
endif;
add_action( 'after_setup_theme', 'for_the_future_setup' );

/**
 * customizer
 *
 * @param WP_Customize_Manager $wp_customize
 */
function for_the_future_customize_register( $wp_customize ) {

	$wp_customize->add_section( 'for_the_future_design', array(
		'title'    => _x( 'Design settings', 'for-the-future theme-customizer', 'for-the-future' ),
		'priority' => 500,
	) );

	// footer logo
	$wp_customize->add_setting( 'for_the_future_theme_options[foot_logo]', array(
		'default'           => '',
		'type'              => 'option',
		'capability'        => 'edit_theme_options',
		'sanitize_callback' => 'esc_url_raw',
	) );

	$wp_customize->add_control( new WP_Customize_Image_Control(
		$wp_customize,
		'foot_logo',
		array(
			'label'    => _x( 'Footer logo image', 'Label in customizer for footer logo.', 'for-the-future' ),
			'section'  => 'for_the_future_design',
			'settings' => 'for_the_future_theme_options[foot_logo]',
			'priority' => 501,
		)
	) );

}

add_action( 'customize_register', 'for_the_future_customize_register' );


/**
 * setup content width.
 */
function for_the_future_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'for_the_future_content_width', 900 );
}

add_action( 'after_setup_theme', 'for_the_future_content_width', 0 );

/**
 * Enqueue scripts and styles.
 */
function for_the_future_scripts() {
	$theme         = wp_get_theme();
	$theme_version = $theme->get( 'Version' );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
	wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/font-awesome/css/font-awesome.min.css', array(), '4.5.0' );
	wp_enqueue_style( 'for-the-future-noto-sans', '//fonts.googleapis.com/css?family=Noto+Sans:400,700|Noto+Serif:400,700' );
	wp_enqueue_style( 'for-the-future-noto-sans-japanese', '//fonts.googleapis.com/earlyaccess/notosansjapanese.css' );
	wp_enqueue_style( 'for-the-future-style', get_stylesheet_uri(), array(), $theme_version );
	wp_enqueue_script( 'for-the-future-script', get_template_directory_uri() . '/bundle.js', array( 'jquery' ), $theme_version, true );
}

add_action( 'wp_enqueue_scripts', 'for_the_future_scripts' );
