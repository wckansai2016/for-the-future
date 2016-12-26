<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
	<meta name="description" content="<?php bloginfo( 'description' ); ?>"/>
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>"/>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	<div class="l-container">
		<header id="pagetop" class="site-head">
			<div class="overlay"></div>
			<h1 class="logo">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php
					if( has_custom_logo() ) :
						$custom_logo_id = get_theme_mod( 'custom_logo' );
						$image = wp_get_attachment_image_src( $custom_logo_id , 'full' );
						echo '<img src="' . $image[0] . '" alt="">';
					endif;
					bloginfo( 'name' );
				?></a>
			</h1>
			<button type="button" class="nav-btn">
				<div class="nav-btn-line"></div>
				<span class="menu"><?php _e( 'MENU', 'for-the-future' ); ?></span>
			</button>
			<nav class="gnav" data-gnav aria-expanded="false">
				<?php get_search_form(); ?>
				<?php wp_nav_menu( array(
					'theme_location' => 'global_nav',
					'container'      => 'div',
					'menu_class'     => 'drawer-menu',
					'depth'          => 3,
					'items_wrap'     => '<ul>%3$s</ul>',
				) );
				?>
			</nav>
		</header>

	</div>
