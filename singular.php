<?php get_header(); ?>

<div class="singular-body">

	<?php
	while ( have_posts() ) : the_post();

		get_template_part( 'content', 'single' );

		if ( is_single() ) :
			the_post_navigation( array(
				'prev_text' => '<span title="%title" ><i class="fa fa-angle-left"></i>' . __( 'PREV', 'for-the-future') . '</span>',
				'next_text' => __( 'NEXT', 'for-the-future' ) . '<i class="fa fa-angle-right"></i>',
			) );
		endif;

	endwhile;
	?>

</div>

<?php get_footer(); ?>
