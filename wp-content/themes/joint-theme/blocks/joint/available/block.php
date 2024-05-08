<?php
/*
Active: true
UUID: 444
Title: Available
Description: Show available accommodation
Keywords: accommodation, properties, available
Post Types: null
Allow Multiple: true
*/
?>

<?php
	$properties = new WP_Query( array(
		'post_type' => 'accommodation',
		'posts_per_page' => -1,
		'orderby' => 'rand',
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
		<?php if ($status == 'Available' or $status == 'Both') { ?>
		<div class="accommodation__item accommodation__available">
			<div class="accommodation__image">
			<?php if( get_the_post_thumbnail() ) { ?>	
				<?php echo get_the_post_thumbnail(); ?>
			<?php } else { ?>
				<img src="<?php echo get_template_directory_uri(); ?>/src/images/property-default-thumb.png" alt="Property default image" />
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
						<?php if($availabledate) { ?><p><strong>Available NOW</strong></p><?php } ?>

						<?php if($shortdesc) { ?>
							<div class="accommodation__features">
								<?php echo $shortdesc; ?>
							</div>
						<?php } ?>
					</div>
					<div>
						<div class="accommodation__price">
							<p>Price available on request</p>
						</div>

						

						<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
						<script>
						hbspt.forms.create({
							region: "na1",
							portalId: "7287208",
							formId: "a7facc18-c8ee-44c6-bf36-724a9c0e3794"
						});
						</script>
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
			</div>
		</div>
		<?php } ?>
		<?php endwhile; ?>
	</div>
<?php } ?>