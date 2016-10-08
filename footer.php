<div class="site-footer">
	<footer>
		<div class="l-container">
			<h1 class="logo"><a href="<?php echo esc_url( home_url( '/' ) ); ?>">
					<?php
					$options = get_option( 'for_the_future_theme_options' );
					if ( ! empty( $options['foot_logo'] ) ) :
						print '<img src="' . esc_url( $options['foot_logo'] ) . '" alt="' . esc_attr( get_bloginfo( 'name' ) ) . '" />';
					else :
						bloginfo( 'name' );
					endif;
					?>
				</a></h1>
			<?php if ( has_nav_menu( 'footer_nav' ) ) :
				wp_nav_menu( array(
					'theme_location' => 'footer_nav',
					'container'      => '',
					'menu_class'     => '',
					'depth'          => 1,
					'items_wrap'     => '<ul class="sns-icon">%3$s</ul>',
				) );
			endif;
			?>
			<p class="copyright">&copy;<?php echo date('Y '); bloginfo('name'); ?> All rights reserved.</p>
		</div>
	</footer>
</div>
<div class="to-top">
	<a href="#pagetop"><i class="fa fa-chevron-up"></i></a>
</div>
<?php wp_footer(); ?>
</body>
</html>
