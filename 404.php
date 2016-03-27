<?php get_header(); ?>

<div class="l-container">
	<section class="error-404">
		<header>
			<h1 class="error-title">404</h1>
			<h2 class="error-content"><?php esc_html_e( 'Page not found.', 'for-the-future' ); ?></h2>
		</header>
		<p class="error-attention"><?php esc_html_e( 'Sorry, but the page you requested cannot be found.', 'for-the-future' ); ?></p>
		<?php get_search_form(); ?>
		<p class="link-home">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( '&raquo; Back to home', 'for-the-future' ); ?></a>
		</p>
	</section>
</div>

<?php get_footer(); ?>
