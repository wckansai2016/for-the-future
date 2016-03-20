<footer class="site-footer">

	<div class="l-container">
		<h1 class="logo"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php bloginfo( 'name' ); ?></a></h1><!-- ロゴが登録されていたらロゴ画像、されてなければブログ名 -->
		<?php wp_nav_menu( array(
			'theme_location' => 'footer_nav',
			'container' => '',
			'menu_class' => '',
			'depth' => 1,
			'items_wrap' => '<ul class="sns-icon">%3$s</ul>'));
		?>

		<p class="copyright">&copy;<?php echo date('Y '); bloginfo('name'); ?> All rights reserved.</p>
	</div>

</footer>

<?php wp_footer(); ?>
</body>
</html>
