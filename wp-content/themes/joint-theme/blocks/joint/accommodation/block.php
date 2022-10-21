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
	<?php while($properties->have_posts()) : $properties->the_post(); ?>
	<?php
		$details = get_field('property_details', get_the_id());
		$postcode = $details['postcode'];
		$rooms = $details['total_rooms'];
		$available = $details['available_rooms'];
		$availabledate = $details['available_from'];
		$price = $details['price'];
		$pricebills = $details['price_bills'];

		// $amenities = get_field('amenities', get_the_id()); var_dump($amenities);

		$features = get_field('features', get_the_id());
		$featuresshort = $features['features_short'];
	?>
		<a href="<?php esc_url(the_permalink() ); ?>" >
		<?php if( get_the_post_thumbnail() ) { ?>	
			<?php echo get_the_post_thumbnail(); ?>
		<?php } else { ?>
			<img src="<?php echo get_template_directory_uri(); ?>/src/images/property-default-thumb.png" alt="Property default image" />
		<?php } ?>

			<?php the_title(); ?>, 
			<?php foreach ( get_the_terms( get_the_ID(), 'location' ) as $location ) { ?>
				<?php echo $location->name ; ?>
			<?php } ?>
			, <?php if($postcode) { ?><?php echo $postcode; ?><?php } ?>
			<br />

			<?php if($rooms) { ?><?php echo $rooms; ?> room<?php if($rooms > '1') { echo 's'; } ?> remaining<?php } ?><br />
			<?php if($available) { ?><?php echo $available; ?> bedroom house<?php } ?><br />

			<?php if($price) { ?><?php echo $price; ?><?php } ?><br />
			<?php if($pricebills) { ?>Inc. bills: <?php echo $pricebills; ?><?php } ?><br />
			<?php if($availabledate) { ?>Available from <?php echo $availabledate; ?><?php } ?><br />

			<?php if($featuresshort) { ?><strong>Features:</strong> <?php echo $featuresshort; ?><?php } ?> <br />


			<?php if( have_rows('amenities', get_the_id()) ): ?>
				<?php while( have_rows('amenities', get_the_id()) ): the_row(); 
					$title = get_sub_field('amenity_title');
				?>
					<strong><?php echo $title; ?> </strong> <br />
					<?php if( have_rows('amenity', get_the_id()) ): ?>
						<?php while( have_rows('amenity', get_the_id()) ): the_row(); 
							$amenity = get_sub_field('amenity');
							$distance = get_sub_field('amenity_distance');
						?>
							<strong><?php echo $amenity; ?> </strong>
							<?php echo $distance; ?> 
							<br />
						<?php endwhile; ?>
					<?php endif; ?>
					
				<?php endwhile; ?>
			<?php endif; ?>


			

		</a>
	<?php endwhile; ?>
<?php } ?>