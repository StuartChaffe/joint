<?php
/*
Active: true
UUID: 6
Title: Reviews
Description: Displays a review
Keywords: review, review
Post Types: null
Allow Multiple: true
*/
$content 	= get_field('reviews_content');
$reviews	= get_field('select_reviews');
$allowed_blocks 	= array( 'core/heading', 'core/paragraph', 'core/button', 'core/list' );
?>

<section class="reviews bkg--white">
	<div class="reviews--inner bkg--grey">
		<?php if( $content ) { ?><?php echo $content; ?><?php } ?>
		<?php echo '<InnerBlocks allowedBlocks="' . esc_attr( wp_json_encode( $allowed_blocks ) ) . '" />'; ?>
		
		<?php if( $reviews ) { ?>	
			<div class="reviews-slider">
			<?php foreach( $reviews as $review ):
				$name		= get_field('name', $review);
				$comment 	= get_field('comment', $review);
			?>
				<div class="reviews-slider--item">
					<p><strong><?php echo $name; ?></strong></p>
					<?php echo $comment; ?>
				</div>
			<?php endforeach; ?>
			</div>
		<?php } ?>
	</div>
</section>