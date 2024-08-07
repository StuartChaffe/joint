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
		// 'orderby' => 'menu_order',
		// 'order' => 'ASC',
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
		$status = get_field( 'status', get_the_id());
		$details = get_field('property_details', get_the_id());
		$postcode = $details['postcode'];
		$rooms = $details['total_rooms'];
		$available = $details['available_rooms'];
		$availabledate = $details['available_from'];
		$price = $details['price'];
		$pricebills = $details['price_bills'];
		$shortdesc = $details['short_description'];

		$features = get_field('features', get_the_id());
		$benefits = get_the_terms( get_the_ID(), 'benefits' );
	?>
	<?php if ($status !== 'Available' or $status !== 'Both') { ?>
		<div class="accommodation__item">
			<div class="accommodation__image">
			<a href="<?php the_permalink(); ?>">
			<?php if( get_the_post_thumbnail() ) { ?>	
				<?php echo get_the_post_thumbnail(); ?>
			<?php } else { ?>
				<img src="<?php echo get_template_directory_uri(); ?>/src/images/property-default-thumb.png" alt="Property default image" />
			<?php } ?>
			</a>

			<?php if($benefits) { ?>
				<div class="property__benefits hidemobile">
					<?php foreach ( $benefits as $benefit ) { 
						$taximage = get_field('taxonomy_image', $benefit );
					?>
						<div class="property__benefits-item">
							<?php if($taximage) { ?><img src="<?php echo $taximage['url']; ?>" alt="<?php echo $taximage['alt']; ?>" /><?php } ?>
							<p class="text--green"><strong><?php echo $benefit->name ; ?></strong></p>
						</div>
					<?php } ?>
				</div>
				<?php } ?>
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

				<?php if($benefits) { ?>
				<div class="property__benefits hidedesktop">
					<?php foreach ( $benefits as $benefit ) { 
						$taximage = get_field('taxonomy_image', $benefit );
					?>
						<div class="property__benefits-item">
							<?php if($taximage) { ?><img src="<?php echo $taximage['url']; ?>" alt="<?php echo $taximage['alt']; ?>" /><?php } ?>
							<p class="text--green"><strong><?php echo $benefit->name ; ?></strong></p>
						</div>
					<?php } ?>
				</div>
				<?php } ?>

				<a href="<?php the_permalink(); ?>" class="btn">Find out more</a>
			</div>
		</div>
	<?php } ?>
	<?php endwhile; ?>
	</div>
<?php } ?>