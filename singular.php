<?php get_header(); ?>

<div class="singular-body">

	<?php
	while ( have_posts() ) : the_post();
	?>

		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
			<header class="entry-header">
				<div class="entry-eyecatch">
					<?php
						if( has_post_thumbnail() ) :
							echo get_the_post_thumbnail( $post->ID, 'full' );
						else :
					?>
						<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/img_noimg.png" alt="<?php the_title(); ?>" />
					<?php endif; ?>
				</div>

				<?php
					the_title( '<h1 class="entry-title">', '</h1>' );
				?>

				<?php if ( is_single() ) : ?>
					<div class="entry-meta clearfix">
						<time class="entry-date"><?php get_the_modified_time( 'Y/m/d' ); ?></time>
						<dl class="entry-category">
							<dt><i class="fa fa-folder-o" aria-label="category"></i></dt>
							<dd><?php the_category(', '); ?></dd>
						</dl>
						<?php if ( has_tag() ) : ?>
							<dl class="entry-tag">
								<dt><i class="fa fa-tags" aria-label="tag"></i></dt>
								<dd><?php the_tags(', '); ?></dd>
							</dl>
						<?php endif; ?>
					</div>
				<?php endif; ?>
			</header>

			<section class="entry-content">
				<?php the_content(); ?>
			</section>

			<?php if ( comments_open() || get_comments_number() ) : ?>
				<section class="entry-comments">
					<h1>Comments</h1>
					<?php comments_template(); ?>
				</section>
			<?php endif; ?>

		</article>

	<?php
		if ( is_single() ) :
		// arrow画像にしたい
			the_post_navigation(array(
				'prev_text' => '< PREV',
				'next_text' => 'NEXT >'
			));
		endif;

	endwhile;
	?>

</div>

<?php get_footer(); ?>
