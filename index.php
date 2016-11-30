<?php get_header(); ?>

<div class="l-container l-gallery-container">
	<div>
		<?php if( is_search() ) : ?>
			<h2 class="archive-title"><?php _e( 'Search Result', 'for-the-future' ); ?> : <?php the_search_query(); ?></h2>
		<?php endif; ?>
		<?php if( is_category() ) : ?>
			<h2 class="archive-title"><?php _e( 'Category', 'for-the-future' ); ?> : <?php single_cat_title(); ?></h2>
		<?php endif; ?>
		<?php if( is_tag() ) : ?>
			<h2 class="archive-title"><?php _e( 'Tag', 'for-the-future' ); ?> : <?php single_tag_title(); ?></h2>
		<?php endif; ?>

		<div class="l-grid">
			<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
				<div class="l-grid-col l-grid-col--1-2 l-grid-col--medium-1-4 l-grid-col--large-1-4">
					<article class="thumbnail-title-wrapper">
						<div <?php post_class(); ?>><!-- div for post_class -->
							<a href="<?php the_permalink(); ?>">
								<?php if( has_post_thumbnail() ) : ?>
									<div class="square-thumbnail" style="background-image: url('<?php echo esc_url( get_the_post_thumbnail_url() ); ?>');">
										<?php the_post_thumbnail(); ?>
									</div>
								<?php else : ?>
									<div class="square-thumbnail" style="background-image: url('<?php echo esc_url( get_template_directory_uri() ); ?>/images/img_noimg.png');">
										<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/img_noimg.png" alt="" />
									</div>
								<?php endif; ?>
								<?php
									$title = esc_html( get_the_title() );
									if ( mb_strlen( $title ) > 160 ) :
										$title = mb_substr( $title, 0, 160 ) . '...';
									endif;
								?>
								<?php if( is_sticky() ) : ?>
								<div class="sticky-label"><i class="fa fa-heart" aria-hidden="true"></i><br><span><?php _e( 'STICKY', 'for-the-future' ); ?></span></div><!-- for sticky -->
								<?php endif; ?>
								<h1 class="thumbnail-title">
									<span class="thumbnail-title-body-wrap">
										<span class="thumbnail-title-body">
											<?php echo $title; ?>
										</span>
									</span>
								</h1>
							</a>
						</div>
					</article>
				</div>

			<?php endwhile; endif; ?>

		</div><!-- /.l-grid -->

		<div class="l-grid">
			<div class="index-nav-links-wrapper">
				<div class="index-nav-links">
					<?php
					$args = array(
						'prev_text' => '<i class="fa fa-angle-left"></i>' . __( 'PREV', 'for-the-future' ),
						'next_text' => __( 'NEXT', 'for-the-future' ) . '<i class="fa fa-angle-right"></i>'
					);
					the_posts_pagination( $args );
					?>
				</div>
			</div>
		</div>

	</div>
</div>

<?php get_footer(); ?>
