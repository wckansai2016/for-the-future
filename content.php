<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php if ( has_post_thumbnail() ) : ?>
			<div class="entry-eyecatch">
				<?php the_post_thumbnail( 'full' ); ?>
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
						<i class="fa fa-folder-o" aria-label="category"></i><?php the_category( ', ' ); ?>
					</p>
					<?php if ( has_tag() ) : ?>
						<p class="entry-tag">
							<i class="fa fa-tags" aria-label="tag"></i><?php the_tags( '' ); ?>
						</p>
					<?php endif; ?>
				</div>
			<?php endif; ?>
		</div>
	</header>

	<div class="l-container">
		<section class="entry-content">
			<?php
			the_content();

			wp_link_pages( array(
				'before'      => '<div class="page-links"><span class="page-links-title screen-reader-text">' . esc_html__( 'Pages:', 'for-the-future' ) . '</span>',
				'after'       => '</div>',
				'link_before' => '<span class="page-numbers">',
				'link_after'  => '</span>',
				'pagelink'    => '<span class="screen-reader-text">' . esc_html__( 'Page', 'for-the-future' ) . ' </span>%',
				'separator'   => '<span class="screen-reader-text">, </span>',
			) );

			?>
		</section>

		<?php
		if ( comments_open() || get_comments_number() ) :
			comments_template();
		endif;
		?>
	</div>

</article>
