<?php
/*
Active: true
UUID: 1211
Title: All properties
Description: Show all accommodation
Keywords: accommodation, properties
Post Types: null
Allow Multiple: true
*/
$fullylet  = get_field('fully_let', 'options');
?>
<?php
	$properties = new WP_Query( array(
		'post_type' => 'accommodation',
		'posts_per_page' => -1,
		'order' => 'ASC',
		// 'tax_query' => array(
		// 	array(
		// 		'taxonomy' => 'location',
		// 	),
		// ),
	));
	$locations = get_terms(array(
		'taxonomy' => 'location',
		'hide_empty' => false, // Set to true if you only want terms with posts
	));
?>
<?php if ($properties->have_posts()) { ?>
<section class="feature-properties">
	<div class="mixitup-control">
		<?php if( ! empty( $locations ) ) {?>
			<button type="button" data-filter="all">All</button>
		<?php foreach ( $locations as $location ) { ?>
			<button type="button" data-filter=".<?php echo $location->slug; ?>"><?php echo $location->name; ?></button>
		<?php } ?>
		<?php } ?>
	</div>
	<div class="feature-properties__list mixitup" data-ref="mixitup">
	<?php while($properties->have_posts()) : $properties->the_post(); ?>
	<?php
		$status = get_field( 'status', get_the_id());
		$details = get_field('property_details', get_the_id());
		$postcode = $details['postcode'];
		$rooms = $details['total_rooms'];
		$availableinfo = $details['available_dates'];
		$available = $details['available_rooms'];
		$availabledate = $details['available_from'];
		$availabletext = $details['available_dates_text'];
		$price = $details['price'];
		$pricebills = $details['price_bills'];
		$shortdesc = $details['short_description'];
		$locations = get_the_terms( get_the_ID(), 'location' );

		$features = get_field('features', get_the_id());
		$benefits = get_the_terms( get_the_ID(), 'benefits' );
	?>
	<?php if ($status !== 'Available' or $status !== 'Both') { ?>
		<?php if( ! empty( $locations ) ) {?>
			
		<a href="<?php the_permalink(); ?>" class="feature-properties__item mix <?php if( ! empty( $locations ) ) {?><?php foreach ( $locations as $location ) { ?><?php echo $location->slug ; ?><?php } ?><?php } ?>">
			<?php if( get_the_post_thumbnail() ) { ?>	
				<?php echo get_the_post_thumbnail(); ?>
			<?php } else { ?>
				<img src="<?php echo get_template_directory_uri(); ?>/src/images/property-default-thumb.png" alt="Property default image" />
			<?php } ?>
			<div class="feature-properties__content">
				<h5 class="text--body text--bold"><?php the_title(); ?></h5>
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
		<?php } ?>

	<?php } ?>

<?php endwhile; ?>
</div>
</section>
<?php } ?>