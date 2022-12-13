<?php
/*
Active: true
UUID: 224
Title: Grid
Description: Add a grid
Keywords: Grid
Post Types: null
Allow Multiple: true
*/
$bkg	= get_field('bkg_colour');
$type	= get_field('grid_type');
$grid	= get_field('grid');
$content = get_field('grid_content', false, false);
$allowed_blocks = array( 'core/heading', 'core/paragraph', 'core/button', 'core/image' );

if($grid) {
?>
<section class="grid bkg--white <?php echo $type; ?>">
	<div class="grid__title"><?php echo '<InnerBlocks allowedBlocks="' . esc_attr( wp_json_encode( $allowed_blocks ) ) . '" />'; ?></div>
	<?php foreach($grid as $item) {; ?>
		<div class="grid-item bkg--green">
			<?php if ($item['grid_content']) { ?><?php echo $item['grid_content']; ?><?php } ?>
		</div>
	<?php } ?>
</section>
<?php } ?>