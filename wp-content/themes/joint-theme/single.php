<?php get_header(); ?>

<?php while ( have_posts() ) : the_post(); 

	$details = get_field('property_details', get_the_id());
	$postcode = $details['postcode'];
	$rooms = $details['total_rooms'];
	$available = $details['available_rooms'];
	$availabledate = $details['available_from'];
	$price = $details['price'];
	$pricebills = $details['price_bills'];
	$desc = $details['description'];

	$images = get_field('images', get_the_id());
	$locations = get_the_terms( get_the_ID(), 'location' );
	$features = get_the_terms( get_the_ID(), 'features' );
?>

	<article id="content" class="property">
		<div class="property__title">
			<h1><?php the_title(); ?>, <br />
			<?php foreach ( $locations as $location ) { ?><?php echo $location->name ; ?><?php } ?>, <?php if($postcode) { ?><?php echo $postcode; ?><?php } ?></h1>
		</div>
		<?php if($images) { ?>
		<div class="gallery">
			<?php foreach( $images as $image ): ?>
				<div class="gallery--item">
					<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
				</div>
			<?php endforeach; ?>
		</div>
		<?php } ?>

		<div class="property__details">
			<div class="property__content">
				<div class="property__item">	
					<h4 class="text--orange text--body text--bold"><?php the_title(); ?>, 
						<?php foreach ( $locations as $location ) { ?><?php echo $location->name ; ?><?php } ?>, <?php if($postcode) { ?><?php echo $postcode; ?><?php } ?>
					</h4>
				</div>

				<div class="property__item">
					<?php if($price) { ?><strong><?php echo $price; ?><?php } ?></strong><br />
					<?php if($pricebills) { ?>Inc. bills: <?php echo $pricebills; ?><?php } ?>
				</div>

				<div class="property__item property__rooms">
					<div>
						<?php if($rooms) { ?><strong><?php echo $rooms; ?> room<?php if($rooms > '1') { echo 's'; } ?> remaining<?php } ?></strong><br />
						<?php if($available) { ?><?php echo $available; ?> bedroom house<?php } ?>
					</div>
					<div>
						<?php if($availabledate) { ?><strong>Available from</strong><br />
							<?php echo $availabledate; ?>
						<?php } ?>
					</div>
				</div>

				<div class="property__item property__amenities">
				<?php if( have_rows('amenities', get_the_id()) ) { ?>
					<?php while( have_rows('amenities', get_the_id()) ): the_row(); 
						$title = get_sub_field('amenity_title');
					?>
					<div class="property__amenities-item">
						<?php if($title) { ?><strong><?php echo $title; ?></strong> <br /><?php } ?>
						<?php if( have_rows('amenity', get_the_id()) ) { ?>
							<?php while( have_rows('amenity', get_the_id()) ): the_row(); 
								$amenity = get_sub_field('amenity');
								$distance = get_sub_field('amenity_distance');
							?>
							
								<p><?php echo $amenity; ?> - <?php echo $distance; ?> </p>
							
							<?php endwhile; ?>
						<?php } ?>
					</div>
					<?php endwhile; ?>
				<?php } ?>
				</div>

				<?php if($desc) { ?>
				<div class="property__item">
					<?php echo $desc; ?>
				</div>
				<?php } ?>

				<div class="property__item">
					IN THIS PROPERTY
				</div>
				<?php if($features) { ?>
				<div class="property__item">
					<p><strong>Features</strong></p>
					<div class="property__features-list">
					<?php foreach ( $features as $feature ) { 
						$taximage = get_field('taxonomy_image', $feature );
					?>
						<div class="property__features-list-item">
							<?php if($taximage) { ?><img src="<?php echo $taximage['url']; ?>" alt="<?php echo $taximage['alt']; ?>" /><?php } ?>
							<p><?php echo $feature->name ; ?></p>
						</div>
					<?php } ?>
					</div>
				</div>
				<?php } ?>
				<div class="property__item">
					IN THIS PROPERTY
				</div>

			</div>
			<div class="property__contact">
				BENEFIT <br />
				MAP<br />
				FORM<br />

				Similar properties<br />

				<a href="<?php esc_url(the_permalink() ); ?>" class="btn">Find out more</a>
			</div>
		</div>
	</article>

<?php endwhile; ?>

<?php get_footer(); ?>
