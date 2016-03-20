<?php get_header(); ?>

<div class="l-container">
	<div>
		<div class="l-grid">
			<?php if( have_posts() ): while( have_posts() ): the_post(); ?>
				<div class="l-grid-col l-grid-col--1-2 l-grid-col--large-1-4">
					<article <?php post_class(); ?> style="overflow: hidden">

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
				</div>

			<?php endwhile; endif; ?>

		</div><!-- /.l-grid -->

		<div class="l-grid">
			<div class="index-nav-links-wrapper">
				<div class="nav-links index-nav-links">
				<?php
					$temp_dir = esc_url( get_template_directory_uri() );
					$args = array(
						'show_all'           => False,
						'end_size'           => 1,
						'mid_size'           => 1,
						'prev_next'          => True,
						'prev_text'          => '<img src="'.$temp_dir.'/images/ico_arrow_prev.png">'.'PREV',
						'next_text'          => 'NEXT'.'<img src="'.$temp_dir.'/images/ico_arrow_next.png">'
					);
					echo paginate_links( $args );
				?>
				</div>
			</div>
		</div>

	</div>
</div>


<?php get_footer(); ?>
