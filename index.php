<?php get_header(); ?>

<div class="l-container">
	<div>
		<?php if( is_search() ) : ?>
			<h2 class="archive-title"><?php _e( 'Search Result', 'for-the-future' );?> : <?php the_search_query();?></h2>
		<?php endif;?>
		<?php if( is_category() ) : ?>
			<h2 class="archive-title"><?php _e( 'Category', 'for-the-future' );?> : <?php single_cat_title();?></h2>
		<?php endif;?>
		<?php if( is_tag() ) : ?>
			<h2 class="archive-title"><?php _e( 'Tag', 'for-the-future' );?> : <?php single_tag_title();?></h2>
		<?php endif;?>
		
		<div class="l-grid">
			<?php if( have_posts() ): while( have_posts() ): the_post(); ?>
				<div class="l-grid-col l-grid-col--1-2 l-grid-col--large-1-4">
					<article <?php post_class(); ?>>

						<a  href="<?php the_permalink(); ?>">
							<?php
							if( has_post_thumbnail() ) :?>
								<div class="square-thumbnail" style="background-image: url('<?php echo get_the_post_thumbnail_url();?>');">
									<?php the_post_thumbnail();?>
								</div>
								<?php
							else : ?>
								<div class="square-thumbnail" style="background-image: url('<?php echo esc_url( get_template_directory_uri() ); ?>/images/img_noimg.png');">
									<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/img_noimg.png" alt="" />
								</div>
								<?php
							endif;
							?>
						</a>
						<!--
	<h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
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
						'show_all'  => false,
						'end_size'  => 1,
						'mid_size'  => 1,
						'prev_next' => true,
						'prev_text' => '<i class="fa fa-angle-left"></i> PREV',
						'next_text' => 'NEXT <i class="fa fa-angle-right"></i>',
					);
					echo paginate_links( $args );
				?>
				</div>
			</div>
		</div>

	</div>
</div>


<?php get_footer(); ?>
