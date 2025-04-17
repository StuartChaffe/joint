<?php
/*
Active: true
UUID: 666
Title: FAQs
Description: Displays an faq
Keywords: faq, questions
Post Types: null
Allow Multiple: true
*/
$content 	= get_field('faqs_content');
$faqs	= get_field('select_faqs');
$allowed_blocks 	= array( 'core/heading', 'core/paragraph', 'core/button', 'core/list' );
$counter = 0;
?>

<section class="faqs bkg--green">
	<div class="faqs--inner">
		<?php if( $content ) { ?><?php echo $content; ?><?php } ?>
		<?php echo '<InnerBlocks allowedBlocks="' . esc_attr( wp_json_encode( $allowed_blocks ) ) . '" />'; ?>
		
		<?php if( $faqs ) { ?>	
			<div class="faqs-slider">
			<?php foreach( $faqs as $faq ) { $counter++;
				$question	= get_field('question', $faq);
				$answer 	= get_field('answer', $faq);

			?>
				<div class="faqs-slider--item bkg--white">
					<button aria-expanded="false" class="accordion__handle" aria-controls="accordion-<?php echo $block['id'] . '_' . $counter; ?>" id="<?php echo sanitize_title($question); ?>">
						<p><strong><?php echo $question; ?></strong></p>
						<div class="accordion__icon">&nbsp;</div>
					</button>
					<div class="accordion__body" id="accordion-<?php echo $block['id'] . '_' . $counter; ?>" role="region" aria-labelledby="<?php echo sanitize_title($question); ?>">
						<?php echo $answer; ?>
					</div>
				</div>
			<?php } ?>
			</div>
		<?php } ?>
	</div>
</section>