<?php
/*
Active: true
UUID: 121
Title: Accommodation
Description: Show accommodation
Keywords: accommodation, properties
Post Types: null
Allow Multiple: true
*/
$accommodation = get_field( 'select_location');
?>
<?php
	$properties = new WP_Query( array(
		'post_type' => 'accommodation',
		'posts_per_page' => -1,
		'orderby' => 'rand',
		'tax_query' => array(
			array(
				'taxonomy' => 'location',
				'terms' => $accommodation,
			),
		),

	));
?>
<?php if ($properties->have_posts()) { ?>
	<div class="accommodation">
	<?php while($properties->have_posts()) : $properties->the_post(); ?>
	<?php
		$details = get_field('property_details', get_the_id());
		$postcode = $details['postcode'];
		$rooms = $details['total_rooms'];
		$available = $details['available_rooms'];
		$availabledate = $details['available_from'];
		$price = $details['price'];
		$pricebills = $details['price_bills'];
		$shortdesc = $details['short_description'];

		$features = get_field('features', get_the_id());
		$featuresshort = $features['features_short'];
	?>
		<div class="accommodation__item">
			<div class="accommodation__image">
			<?php if( get_the_post_thumbnail() ) { ?>	
				<?php echo get_the_post_thumbnail(); ?>
			<?php } else { ?>
				<img src="<?php echo get_template_directory_uri(); ?>/src/images/property-default-thumb.png" alt="Property default image" />
			<?php } ?>
				BENEFIT
			</div>

			<div class="accommodation__content">
				<h4 class="text--orange text--body text--bold"><?php the_title(); ?>, 
					<?php foreach ( get_the_terms( get_the_ID(), 'location' ) as $location ) { ?><?php echo $location->name ; ?><?php } ?>
				</h4>
				<div class="accommodation__details">
					<div>
						<div class="accommodation__rooms">
							<?php if($rooms) { ?><p><strong><?php echo $rooms; ?> room<?php if($rooms > '1') { echo 's'; } ?> remaining<?php } ?></strong></p>
							<?php if($available) { ?><p><?php echo $available; ?> bedroom house</p><?php } ?>
						</div>
						<div class="accommodation__amenities">
						<?php if( have_rows('amenities', get_the_id()) ): ?>
							<?php while( have_rows('amenities', get_the_id()) ): the_row(); ?>
								<?php if( have_rows('amenity', get_the_id()) ): ?>
									<?php while( have_rows('amenity', get_the_id()) ): the_row(); 
										$amenity = get_sub_field('amenity');
										$distance = get_sub_field('amenity_distance');
									?>
									<div class="accommodation__amenities-item">
										<p><strong><?php echo $amenity; ?></strong><br />
										<?php echo $distance; ?> </p>
									</div>
									<?php endwhile; ?>
								<?php endif; ?>
							<?php endwhile; ?>
						<?php endif; ?>
						</div>
						<?php if($availabledate) { ?><p><strong>Available</strong><br/>
							<?php echo $availabledate; ?></p><?php } ?>
					</div>
					<div>
						<div class="accommodation__price">
							<?php if($price) { ?><p><strong><?php echo $price; ?><?php } ?></strong></p>
							<?php if($pricebills) { ?><p>Inc. bills: <?php echo $pricebills; ?></p><?php } ?>
						</div>

						<?php if($shortdesc) { ?>
							<div class="accommodation__features">
								<?php echo $shortdesc; ?>
							</div>
						<?php } ?>
					</div>	
				</div>
				<a href="<?php esc_url(the_permalink() ); ?>" class="btn">Find out more</a>
			</div>
		</div>
	<?php endwhile; ?>
	</div>
<?php } ?>