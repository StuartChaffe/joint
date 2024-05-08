<?php get_header(); ?>

<?php while ( have_posts() ) : the_post(); 

	$details = get_field('property_details', get_the_id());
	$id = get_the_ID();
	$postcode = $details['postcode'];
	$rooms = $details['total_rooms'];
	$available = $details['available_rooms'];
	$availabledate = $details['available_from'];
	$price = $details['price'];
	$pricebills = $details['price_bills'];
	$desc = $details['description'];

	$floors = $details['floors'];
	$bathrooms = $details['bathrooms'];
	$livingrooms = $details['living_rooms'];
	$wc = $details['wc'];
	$separatewc = $details['separate_wc'];
	$garden = $details['garden'];
	$kitchen = $details['kitchen'];
	$tour = $details['tour_link'];
	$propcta = get_field('property_cta', 'options');
	$propctabtn = get_field('property_button', 'options');
	$propform = get_field('property_form', 'options');
	$propformbtn= get_field('property_form_btn_text', 'options');	

	$images = get_field('images', get_the_id());
	$locations = get_the_terms( get_the_ID(), 'location' );
	$benefits = get_the_terms( get_the_ID(), 'benefits' );
	$features = get_the_terms( get_the_ID(), 'features' );
	$amenities = get_the_terms( get_the_ID(), 'amenities' );
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
		<div class="container">
			<div class="gallery-nav">
				<?php foreach( $images as $image ): ?>
					<div class="gallery-nav--item">
						<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
					</div>
				<?php endforeach; ?>
			</div>
		</div>

		<?php } ?>

		<div class="property__details">
			<div class="property__content">
				<div class="property__item">	
					<h4 class="text--orange text--body text--bold"><?php the_title(); ?>, 
						<?php foreach ( $locations as $location ) { ?><?php echo $location->name ; ?><?php } ?>, <?php if($postcode) { ?><?php echo $postcode; ?><?php } ?>
					</h4>
					<?php if($tour) { ?><a href="<?php echo $tour; ?>" target="_blank" class="btn btn--tour">Take 3D Tour <img src="<?php echo get_template_directory_uri(); ?>/src/images/tour-icon.png" alt="Tour icon" /></a><?php } ?>
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


				<?php if($propcta) { ?>
				<div class="property__item property__item-contact hidehidemobile">
					<?php echo $propcta; ?>
				</div>
				<a id ="form"></a>
				<?php echo $propform; ?>
				<?php } ?>

			</div>
			<div class="property__contact">

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

				<?php if($propcta) { ?>
				<div class="property__item property__item-contact">
					<?php if($propformbtn) { ?><a href="#form" class="btn btn--tour"><?php if($propformbtn) { ?><?php echo $propformbtn; ?><?php } ?>  <img src="<?php echo get_template_directory_uri(); ?>/src/images/tour-icon.png" alt="Tour icon" /></a><?php } ?>
				</div>
				<?php } ?>

				<?php
					$custom_terms = wp_get_post_terms( get_the_ID(), 'location');
					$properties = new WP_Query( array(
						
						'post_type' => 'accommodation',
						'posts_per_page' => 1,
						'orderby' => 'rand',
						'post__not_in' => array( $post->ID ),
						'tax_query' => array(
							array(
								'field' => 'slug',
								'taxonomy' => 'location',
								// 'terms' => $accommodation,
								'terms' => $custom_terms[0]->slug, 
							),
						),

					));
				?>

				<div class="property__item">
					<p><strong>In this property</strong></p>
					<div class="property__features-list">
						<?php if($floors) { ?><div class="property__features-list-item"><?php echo get_icon('floors'); ?> <p><?php echo $floors; ?> floor<?php if($floors > '1') { echo 's'; } ?></p></div><?php } ?>
						<?php if($bathrooms) { ?><div class="property__features-list-item"><?php echo get_icon('bathrooms'); ?> <p><?php echo $bathrooms; ?> bathroom<?php if($bathrooms > '1') { echo 's'; } ?></p></div><?php } ?>
						<?php if($livingrooms) { ?><div class="property__features-list-item"><?php echo get_icon('livingrooms'); ?> <p><?php echo $livingrooms; ?> living room<?php if($livingrooms > '1') { echo 's'; } ?></p></div><?php } ?>
						<?php if($wc) { ?><div class="property__features-list-item"><?php echo get_icon('wc'); ?> <p><?php echo $wc; ?> WC<?php if($wc > '1') { echo 's'; } ?></p></div><?php } ?>
						<?php if($separatewc) { ?><div class="property__features-list-item"><?php echo get_icon('wc'); ?> <p><?php echo $separatewc; ?> separate WC<?php if($separatewc > '1') { echo 's'; } ?></p></div><?php } ?>
						<?php if($garden) { ?><div class="property__features-list-item"><?php echo get_icon('gardens'); ?> <p><?php echo $garden; ?> garden<?php if($garden > '1') { echo 's'; } ?></p></div><?php } ?>
						<?php if($kitchen) { ?><div class="property__features-list-item"><?php echo get_icon('kitchens'); ?> <p><?php echo $kitchen; ?> kitchen<?php if($kitchen > '1') { echo 's'; } ?></p></div><?php } ?>
					</div>
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
				<?php if($amenities) { ?>
				<div class="property__item">
					<p><strong>What's included</strong></p>
					<div class="property__features-list">
					<?php foreach ( $amenities as $amenity ) { 
						$taximage = get_field('taxonomy_image', $amenity );
					?>
						<div class="property__features-list-item">
							<?php if($taximage) { ?><img src="<?php echo $taximage['url']; ?>" alt="<?php echo $taximage['alt']; ?>" /><?php } ?>
							<p><?php echo $amenity->name ; ?></p>
						</div>
					<?php } ?>
					</div>
				</div>
				<?php } ?>

				<?php if ($properties->have_posts()) { ?>
					<p><strong>Similar properties</strong></p>
					<div class="accommodation-featured">
					<?php while($properties->have_posts()) : $properties->the_post(); ?>
					<?php
						$details = get_field('property_details');
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
						<div class="accommodation__item">
							<div class="accommodation__image">
							<a href="<?php esc_url(the_permalink() );?>">
							<?php if( get_the_post_thumbnail() ) { ?>	
								<?php echo get_the_post_thumbnail(); ?>
							<?php } else { ?>
								<img src="<?php echo get_template_directory_uri(); ?>/src/images/property-default-thumb.png" alt="Property default image" />
							<?php } ?>
							</a>
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

								<?php if( have_rows('benefits', get_the_id()) ) { ?>
									<div class="property__benefits hidedesktop">
										<?php while( have_rows('benefits', get_the_id()) ): the_row(); 
											$title = get_sub_field('benefits_title');
											$image = get_sub_field('benefits_icon');
										?>
										<div class="property__benefits-item">
											<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
											<?php if($title) { ?><p class="text--green"><strong><?php echo $title; ?></strong></p><?php } ?>
										</div>
										<?php endwhile; ?>
									</div>
								<?php } ?>

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
								
								<a href="<?php esc_url(the_permalink() ); ?>" class="btn">Find out more</a>
							</div>
						</div>
					<?php endwhile; ?>
					</div>
				<?php } ?>

				<?php if($propcta) { ?>
				<div class="property__item property__item-contact hidedesktop">
					<p><?php echo $propcta; ?><p>
					<?php if($propctabtn) { ?><a href="<?php echo $propctabtn['url']; ?>" target="<?php echo $propctabtn['target']; ?>" class="btn btn--tour"><?php echo $propctabtn['title']; ?> <img src="<?php echo get_template_directory_uri(); ?>/src/images/tour-icon.png" alt="Tour icon" /></a><?php } ?>
				</div>
				<?php } ?>

			</div>
		</div>
	</article>

<script>
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'accomodation_view',
		'accomodation_id': '<?php echo $id; ?>',
		'accomodation_name': '<?php the_title(); ?>',
	});
</script>

<?php endwhile; ?>

<?php get_footer(); ?>
