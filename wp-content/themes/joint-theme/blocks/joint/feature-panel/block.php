<?php
/*
Active: true
UUID: 22
Title: Feature Panel
Description: Add an image and text
Keywords: Image, text
Post Types: null
Allow Multiple: true
*/
$image			= get_field('image');
$imagepos		= get_field('image_position');
$textpos		= get_field('text_position');
$imagetype		= get_field('image_type');
$allowed_blocks = array( 'core/heading', 'core/paragraph', 'core/button', 'core/list' );
$bkg			= get_field('bkg_colour');
?>
<section class="feature-panel<?php if ($image) { ?> <?php echo $imagepos; ?><?php } ?> <?php echo $bkg; ?><?php if ( $textpos == 'feature-panel__text--top' ) { ?> <?php echo $textpos; ?><?php } ?><?php if ($imagetype == 'feature-panel__image--bkg') { ?> <?php echo $imagetype; ?><?php } ?>">
	<?php if ($image) { ?>
	<div class="feature-panel__item feature-panel__image<?php if ($imagetype == 'feature-panel__image--bkg') { ?> <?php echo $imagetype; ?><?php } ?>">
		<?php if ($imagetype == 'feature-panel__image--bkg') { ?><div class="feature-panel--bkg__image"><?php } ?>
		<img loading="lazy" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
		<?php if ($imagetype == 'feature-panel__image--bkg') { ?></div><?php } ?>
	</div>
	<?php } ?>
	<div class="feature-panel__item feature-panel__text">
		<?php echo '<InnerBlocks allowedBlocks="' . esc_attr( wp_json_encode( $allowed_blocks ) ) . '" />'; ?>
	</div>
</section>