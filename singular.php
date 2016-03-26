<?php get_header(); ?>

	<div class="singular-body">

		<?php
		while ( have_posts() ) : the_post();
			?>

			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				<header class="entry-header">
					<?php if( has_post_thumbnail() ) : ?>
						<div class="entry-eyecatch">
							<?php echo get_the_post_thumbnail( $post->ID, 'full' ); ?>
						</div>
					<?php endif; ?>

					<div class="l-container">
						<?php
						the_title( '<h1 class="entry-title">', '</h1>' );
						?>

						<?php if ( is_single() ) : ?>
							<div class="entry-meta clearfix">
								<time class="entry-date"><?php the_modified_date( 'Y/m/d' ); ?></time>
								<p class="entry-category">
									<i class="fa fa-folder-o" aria-label="category"></i><?php the_category(', '); ?>
								</p>
								<?php if ( has_tag() ) : ?>
									<p class="entry-tag">
										<i class="fa fa-tags" aria-label="tag"></i><?php the_tags(''); ?>
									</p>
								<?php endif; ?>
							</div>
						<?php endif; ?>
					</div>
				</header>

				<div class="l-container">
					<section class="entry-content">
						<?php the_content(); ?>
					</section>

					<?php
						if ( comments_open() || get_comments_number() ) :
							comments_template();
						endif;
					?>
				</div>

			</article>

			<?php
			if ( is_single() ) :
				$temp_dir = esc_url( get_template_directory_uri() );
				the_post_navigation(array(
					'prev_text' => '<i class="fa fa-angle-left"></i> PREV',
					'next_text' => 'NEXT <i class="fa fa-angle-right"></i>',
				));
			endif;

		endwhile;
		?>

	</div>

</div>

<?php get_footer(); ?>
