<?php
/*
Active: true
UUID: 1
Title: Accordion
Description: A simple accordion
Keywords: faq
Post Types: null
Allow Multiple: true
*/

$counter = 0;

$accordion = get_field('accordion_items');
// $title = get_field('accordion_title');
$allowed_blocks = array( 'core/heading', 'core/paragraph', 'core/button', 'core/list' );

if($accordion) {
?>
<section class="accordion bkg--white">
	<div class="accordion--title"><?php echo '<InnerBlocks allowedBlocks="' . esc_attr( wp_json_encode( $allowed_blocks ) ) . '" />'; ?></div>
	<?php foreach($accordion as $item) { $counter++; ?>
		<div class="accordion__item">
			<button aria-expanded="false" class="accordion__handle" aria-controls="accordion-<?php echo $block['id'] . '_' . $counter; ?>" id="<?php echo sanitize_title($item['accordion_title']); ?>">
				<h3 class="accordion__title"><?php echo $item['accordion_title']; ?></h3>
				<div class="accordion__icon">&nbsp;</div>
			</button>
			<div class="accordion__body" id="accordion-<?php echo $block['id'] . '_' . $counter; ?>" role="region" aria-labelledby="<?php echo sanitize_title($item['accordion_title']); ?>">
				<?php if ($item['accordion_content']) { ?><div class="accordion__body--left"><?php echo $item['accordion_content']; ?></div><?php } ?>
				<?php if ($item['accordion_body']) { ?><div class="accordion__body--right"><?php echo $item['accordion_body']; ?></div><?php } ?>
			</div>
		</div>
	<?php } ?>
</section>
<?php } ?>