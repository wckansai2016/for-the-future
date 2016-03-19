<footer class="site-footer">

	<div class="l-container">
		<h1 class="logo"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php bloginfo( 'name' ); ?></a></h1><!-- ロゴが登録されていたらロゴ画像、されてなければブログ名 -->
		<ul class="sns-icon">
			<?php if ( is_active_sidebar( 'footer_tw' ) ) : ?>
				<li><a href="<?php dynamic_sidebar( 'footer_tw' ); ?>" target="_blank"><i class="fa fa-twitter"></i></a></li>
			<?php endif; ?>
			<?php if ( is_active_sidebar( 'footer_fb' ) ) : ?>
				<li><a href="<?php dynamic_sidebar( 'footer_fb' ); ?>" target="_blank"><i class="fa fa-facebook"></i></a></li>
			<?php endif; ?>
			<?php if ( is_active_sidebar( 'footer_gp' ) ) : ?>
				<li><a href="<?php dynamic_sidebar( 'footer_gp' ); ?>" target="_blank"><i class="fa fa-google-plus"></i></a></li>
			<?php endif; ?>
			<?php if ( is_active_sidebar( 'footer_pin' ) ) : ?>
				<li><a href="<?php dynamic_sidebar( 'footer_pin' ); ?>" target="_blank"><i class="fa fa-pinterest-p"></i></a></li>
			<?php endif; ?>
		</ul>
		<p class="copyright">&copy;<?php echo date('Y '); bloginfo('name'); ?> All rights reserved.</p>
	</div>

</footer>

<?php wp_footer(); ?>
</body>
</html>
