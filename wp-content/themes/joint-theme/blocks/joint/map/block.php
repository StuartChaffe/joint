<?php
/*
Active: true
UUID: 555
Title: Map
Description: Add a map
Keywords: Map
Post Types: null
Allow Multiple: true
*/

$content = get_field('grid_content', false, false);
$allowed_blocks = array( 'core/heading', 'core/paragraph', 'core/button', 'core/image', 'core/html' );

?>
<section class="map bkg--white">
	<div class="map--inner">
		<?php echo '<InnerBlocks allowedBlocks="' . esc_attr( wp_json_encode( $allowed_blocks ) ) . '" />'; ?>
	</div>
</section>