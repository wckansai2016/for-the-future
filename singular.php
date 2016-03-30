<?php get_header(); ?>

<div class="singular-body">

	<?php
	while ( have_posts() ) : the_post();

		get_template_part( 'content', 'single' );

		if ( is_single() ) :
			$temp_dir = esc_url( get_template_directory_uri() );
			the_post_navigation( array(
				'prev_text' => '<span title="%title" ><i class="fa fa-angle-left"></i> PREV</span>',
				'next_text' => 'NEXT <i class="fa fa-angle-right"></i>',
			) );
		endif;

	endwhile;
	?>

</div>

<?php get_footer(); ?>
