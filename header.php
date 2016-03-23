<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
	<meta name="description" content="<?php bloginfo( 'description' ); ?>"/>

	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>"/>
	<link rel="stylesheet" type='text/css' href="<?php echo esc_url( get_template_directory_uri() ); ?>/font-awesome-4.5.0/css/font-awesome.min.css"/>
	<link rel='stylesheet' type='text/css' href='//fonts.googleapis.com/css?family=Noto+Sans:400,700|Noto+Serif:400,700'/>
	<link rel='stylesheet' type='text/css' href='//fonts.googleapis.com/earlyaccess/notosansjapanese.css'/>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	<div class="l-container">
		<header id="pagetop" class="site-head">
			<div class="overlay"></div>
			<h1 class="logo"><a href="<?php echo esc_url( home_url( '/' ) ); ?>">
			<?php
				$options = get_option('for_the_future_theme_options');
				if ( ! empty( $options['head_logo'] ) ) :
					print '<img src="'.$options['head_logo'].'" alt="'.get_bloginfo('name').'" />';
				else :
					echo bloginfo( 'name' );
				endif;
			?>
			</a></h1>
			<button type="button" class="nav-btn">
				<div class="nav-btn-line"></div>
				<span class="menu">MENU</span>
			</button>
			<nav class="gnav" data-gnav>
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
