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
$size			= get_field('panel_size');
$type			= get_field('panel_type');
$tips			= get_field('tips');
$allowed_blocks = array( 'core/heading', 'core/paragraph', 'core/button', 'core/list' );
$bkg			= get_field('bkg_colour');
?>
<?php if ($size == 'Contained') { ?> <div class="bkg--white ptb-l"><?php } ?>
<section class="feature-panel<?php if ($image) { ?> <?php echo $imagepos; ?><?php } ?> <?php echo $bkg; ?><?php if ( $textpos == 'feature-panel__text--top' ) { ?> <?php echo $textpos; ?><?php } ?><?php if ($imagetype == 'feature-panel__image--bkg') { ?> <?php echo $imagetype; ?><?php } ?> <?php if ($size == 'Contained') { ?> feature-panel--contained<?php } ?><?php if ($type == 'Tips') { ?> feature-panel__tips<?php } ?>">
	<?php if ($image) { ?>
	<div class="feature-panel__item feature-panel__image<?php if ($imagetype == 'feature-panel__image--bkg') { ?> <?php echo $imagetype; ?><?php } ?>">
		<?php if ($imagetype == 'feature-panel__image--bkg') { ?><div class="feature-panel--bkg__image"><?php } ?>
		<img loading="lazy" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
		<?php if ($imagetype == 'feature-panel__image--bkg') { ?></div><?php } ?>
	</div>
	<?php } ?>
	<div class="feature-panel__item feature-panel__text">
		<?php echo '<InnerBlocks allowedBlocks="' . esc_attr( wp_json_encode( $allowed_blocks ) ) . '" />'; ?>

		<?php if($tips) { ?>
			<div class="feature-panel__tips-list">
			<?php foreach($tips as $item) {; ?>
				<div class="feature-panel__tips-list-item">
					<?php if ($item['tip_title']) { ?><h3><?php echo $item['tip_title']; ?></h3><?php } ?>
					<?php if ($item['tip_content']) { ?><?php echo $item['tip_content']; ?><?php } ?>
				</div>
			<?php } ?>
		<?php } ?>
	</div>
</section>
<?php if ($size == 'Contained') { ?> </div><?php } ?>