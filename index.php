<?php get_header(); ?>

<div class="gallery-container">
<?php if( have_posts() ): while( have_posts() ): the_post(); ?>
<article <?php post_class(); ?>>

	<div class="img-center">
		<a href="<?php the_permalink(); ?>">
		<?php
			if( has_post_thumbnail() ) :
				echo get_the_post_thumbnail( $post->ID, 'large' );
			else :
		?>
		<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/img_noimg.png" alt="<?php the_title(); ?>" style="width: 100%;" />
		<?php
			endif;
		?>
		</a>
	</div>
	<!--
	<h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
	-->
	<!--
	<?php the_content(); ?>
	-->
</article>
<?php endwhile; endif; ?>
</div>

<?php get_footer(); ?>
