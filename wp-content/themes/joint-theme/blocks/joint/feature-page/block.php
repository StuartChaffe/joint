<?php
/*
Active: true
UUID: 222
Title: Feature Page
Description: Add a featured page / location
Keywords: Locations
Post Types: null
Allow Multiple: true
*/
$content 			= get_field('featured_content');
$pages				= get_field('select_page');
$allowed_blocks 	= array( 'core/heading', 'core/paragraph', 'core/button', 'core/list' );
?>

<section class="feature-pages">
	<?php echo $content; ?>
	<?php echo '<InnerBlocks allowedBlocks="' . esc_attr( wp_json_encode( $allowed_blocks ) ) . '" />'; ?>

	<div class="feature-pages__list">
	<?php if( $pages ) { ?>	
		<?php foreach( $pages as $page ):
			$image = get_the_post_thumbnail_url($page);
			$pagetitle = get_the_title($page);
			$excerpt = get_the_excerpt($page);
		?>
			<a href="<?php esc_url(the_permalink($page) ); ?>" class="feature-pages__item" style="background-image: url('<?php echo $image; ?>');">
				<p><?php echo $pagetitle; ?></p>
			</a>
		<?php endforeach; ?>
	<?php } ?>
	</div>
</section>