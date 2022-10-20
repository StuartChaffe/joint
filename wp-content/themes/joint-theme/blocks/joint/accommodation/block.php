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

if ($accommodation) {
  if (!is_array($accommodation)) {
    $accommodation = array($accommodation);
  }
  $args = array(
    'post_type' => 'accommodation',
    'posts_per_page' => -1,
    'orderby' => 'rand',
    'tax_query' => array(
      array(
        'taxonomy' => 'location',
        'terms' => $accommodation,
      ),
    ),
  );
  $quote_query = new WP_Query($args);
  if ($quote_query->have_posts()) {
    while($quote_query->have_posts()) {
      $quote_query->the_post(); 
      echo '<p>',get_the_content(),'</p>';
	  echo '<p>',get_the_title(),'</p>';
	  echo '<p>',get_the_permalink(),'</p>';
    }
  }
  wp_reset_postdata();
}
?>