<?php get_header(); ?>

<div class="gallery_container">
<?php if(have_posts()): while(have_posts()):the_post();?>
<article <?php post_class();?>>

	<div class="img_list"><a href="<?php the_permalink();?>">
		<?php
			if(has_post_thumbnail()) :
				echo get_the_post_thumbnail($post->ID, 'full');
			else :
				echo "<img src=".catch_that_image()." alt='' />";
			endif;
		?>
	</a></div>
	<!--
	<h1><a href="<?php the_permalink();?>"><?php the_title();?></a></h1>
	-->
	<!--
	<?php the_content();?>
	-->
</article>
<?php endwhile; endif;?>
</div>
<?php wp_footer();?>
</body>
</html>
