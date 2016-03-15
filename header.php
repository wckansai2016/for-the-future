<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<meta name="description" content="<?php bloginfo('description'); ?>" />
	<!--[if lt IE 9]>
	<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/src/scripts/html5.js"></script>
	<![endif]-->

	<link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/font-awesome-4.5.0/css/font-awesome.min.css" />
	<link href='//fonts.googleapis.com/css?family=Noto+Sans:400,700|Noto+Serif:400,700' rel='stylesheet' type='text/css'>
	<link href='//fonts.googleapis.com/earlyaccess/notosansjapanese.css' rel='stylesheet' type='text/css'>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	<header>
		<h1 class="logo"><?php bloginfo( 'name' ); ?></h1><!-- ロゴが登録されていたらロゴ画像、されてなければブログ名 -->
		<p class="nav_btn">
			<span></span>
			<span></span>
			<span></span>
			<span class="menu">MENU</span>
		</p>
		<nav id="gnav">
			<?php get_search_form(); ?>
			<!-- カスタムメニュー -->
			<ul>
				<li>大カテゴリー1</li>
				<li>大カテゴリー2</li>
				<li>大カテゴリー3
					<ul>
						<li>中カテゴリー1</li>
						<li>中カテゴリー2</li>
						<li>中カテゴリー3
							<ul>
								<li>小カテゴリー1</li>
								<li>小カテゴリー2</li>
								<li>小カテゴリー3</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	</header>
