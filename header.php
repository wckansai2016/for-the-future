<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
	<meta name="description" content="<?php bloginfo('description'); ?>" />

	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	<link rel="stylesheet" type='text/css' href="<?php echo esc_url( get_template_directory_uri() ); ?>/font-awesome-4.5.0/css/font-awesome.min.css" />
	<link rel='stylesheet' type='text/css' href='//fonts.googleapis.com/css?family=Noto+Sans:400,700|Noto+Serif:400,700' />
	<link rel='stylesheet' type='text/css' href='//fonts.googleapis.com/earlyaccess/notosansjapanese.css' />
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	<div class="l-container">
		<header class="site-head">
			<div class="overlay"></div>
			<h1 class="logo"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php bloginfo( 'name' ); ?></a></h1><!-- ロゴが登録されていたらロゴ画像、されてなければブログ名 -->
			<button type="button" class="nav-btn">
				<span></span>
				<span></span>
				<span></span>
				<span class="menu">MENU</span>
			</button>
			<nav class="gnav">
				<?php get_search_form(); ?>
				<?php wp_nav_menu( array(
					'theme_location' => 'global_nav',
					'container' => '',
					'menu_class' => '',
					'depth' => 3,
					'items_wrap' => '<ul>%3$s</ul>'));
				?>
			</nav>
		</header>

	</div>
