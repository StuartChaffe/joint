<?php
/*
Active: true
UUID: 333
Title: Featured Properties
Description: Add featured properties
Keywords: Properties
Post Types: null
Allow Multiple: true
*/
$content 			= get_field('featured_content');
$featuredproperties	= get_field( 'select_properties' );
$allowed_blocks 	= array( 'core/heading', 'core/paragraph', 'core/button', 'core/list' );
$fullylet 			= get_field('fully_let', 'options');
?>
<section class="feature-properties">
	<?php echo $content; ?>
	<?php echo '<InnerBlocks allowedBlocks="' . esc_attr( wp_json_encode( $allowed_blocks ) ) . '" />'; ?>

	<div class="feature-properties__list">
	<?php if( $featuredproperties ) { ?>	
		<?php foreach( $featuredproperties as $property ):
			$image = get_the_post_thumbnail_url($property);
			$propertytitle = get_the_title($property);

			$details = get_field('property_details', $property);
			$postcode = $details['postcode'];
			$rooms = $details['total_rooms'];
			$available = $details['available_rooms'];
			$availableinfo = $details['available_dates'];
			$availabledate = $details['available_from'];
			$availabletext = $details['available_dates_text'];
			$price = $details['price'];
			$pricebills = $details['price_bills'];
		?>
			<a href="<?php the_permalink($property); ?>" class="feature-properties__item">
			<?php if( get_the_post_thumbnail($property) ) { ?>	
				<?php echo get_the_post_thumbnail($property); ?>
			<?php } else { ?>
				<img src="<?php echo get_template_directory_uri(); ?>/src/images/property-default-thumb.png" alt="Property default image" />
			<?php } ?>
				<div class="feature-properties__content">
					<h5 class="text--body text--bold"><?php echo $propertytitle; ?></h5>
					<div class="feature-properties__rooms">

						<?php if($rooms > '1') { ?>
						<?php if($rooms) { ?><p><strong><?php echo $rooms; ?> room<?php if($rooms > '1') { echo 's'; } ?> remaining</strong></p><?php } ?>
						<?php } else { ?><p><strong><?php echo $fullylet; ?></strong></p><?php } ?>
						<?php if($available) { ?><p><?php echo $available; ?> bedroom house</p><?php } ?>
					</div>

					<div class="feature-properties__price">
						<?php if($price) { ?><p><?php echo $price; ?></p><?php } ?>
						<?php if($pricebills) { ?><p class="small">Inc. bills: <?php echo $pricebills; ?></p><?php } ?>
					</div>
					<?php if ($availableinfo == 'true') { ?> 
						<?php if($availabledate) { ?><p class="small mb-s">Available <?php echo $availabledate; ?></p><?php } ?>
					<?php } else { ?>
					<p class="small mb-s"><?php echo $availabletext; ?></p><?php } ?>

				</div>
				<span class="btn">Find out more</span>
			</a>
		<?php endforeach; ?>
	<?php } ?>
	</div>
</section>