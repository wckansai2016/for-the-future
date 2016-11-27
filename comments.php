<?php
if ( post_password_required() ) {
	return;
}
?>
<section class="comments-area">
	<h1 class="comments-title"><?php _e( 'Comments', 'for-the-future' ); ?></h1>

	<?php if ( have_comments() ) : ?>

		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // Are there comments to navigate through? ?>
		<nav id="comment-nav-above" class="navigation comment-navigation" role="navigation">
			<h2 class="screen-reader-text"><?php esc_html_e( 'Comment navigation', 'for-the-future' ); ?></h2>
			<div class="nav-links clearfix">

				<div class="nav-previous"><?php previous_comments_link( esc_html__( '&lt;&nbsp;PREV', 'for-the-future' ) ); ?></div>
				<div class="nav-next"><?php next_comments_link( esc_html__( 'NEXT&nbsp;&gt;', 'for-the-future' ) ); ?></div>

			</div><!-- .nav-links -->
		</nav><!-- #comment-nav-above -->
		<?php endif; // Check for comment navigation. ?>

		<ul class="comment-list">
			<?php
				wp_list_comments( array(
					'style'      => 'div',
					'short_ping' => true,
					'avatar_size'=> 60
				) );
			?>
		</ul><!-- .comment-list -->

		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // Are there comments to navigate through? ?>
		<nav id="comment-nav-below" class="navigation comment-navigation" role="navigation">
			<h2 class="screen-reader-text"><?php esc_html_e( 'Comment navigation', 'for-the-future' ); ?></h2>
			<div class="nav-links clearfix">

				<div class="nav-previous"><?php previous_comments_link( esc_html__( '&lt;&nbsp;PREV', 'for-the-future' ) ); ?></div>
				<div class="nav-next"><?php next_comments_link( esc_html__( 'NEXT&nbsp;&gt;', 'for-the-future' ) ); ?></div>

			</div><!-- .nav-links -->
		</nav><!-- #comment-nav-below -->
		<?php
		endif; // Check for comment navigation.
	endif; // Check for have_comments().
	// If comments are closed and there are comments, let's leave a little note, shall we?
	if ( ! comments_open() && get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) : ?>

		<p class="no-comments"><?php esc_html_e( 'Comments are closed.', 'for-the-future' ); ?></p>
	<?php endif;

	comment_form(array(
		'title_reply'=>'',
		'comment_notes_before'=>'<p class="comment-notes">' . __( 'Your email address will not be published.', 'for-the-future') . '</p>'
	)); ?>
</section>
