<?php

add_action('init', 'origin_taxonomies');

function origin_taxonomies() {
	$taxonomy_name		= "client";
	$single_name		= "Client";
	$plural_name		= "Clients";
	$post_type			= "testimonials";
	$gutenberg_enabled	= false;

	$labels = array(
		'name'              => $single_name,
		'singular_name'     => $single_name,
		'search_items'      => 'Search ' . $plural_name,
		'all_items'         => 'All ' . $plural_name,
		'parent_item'       => 'Parent ' . $single_name,
		'parent_item_colon' => 'Parent ' . $single_name . ':',
		'edit_item'         => 'Edit ' . $single_name,
		'update_item'       => 'Update ' . $single_name,
		'add_new_item'      => 'Add New ' . $single_name,
		'new_item_name'     => 'New ' . $single_name . ' Name',
		'menu_name'         => $single_name
	);

	$args = array(
		'labels'            => $labels,
		'hierarchical'      => true,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'show_in_rest'      => $gutenberg_enabled,
		'rewrite'           => array( 'slug' => '' ),
	);
	// register_taxonomy( $taxonomy_name, $post_type, $args );

	$taxonomy_name		= "location";
	$single_name		= "Location";
	$plural_name		= "Locations";
	$post_type			= "accommodation";
	$gutenberg_enabled	= false;

	$labels = array(
	    'name'              => $single_name,
	    'singular_name'     => $single_name,
	    'search_items'      => 'Search ' . $plural_name,
	    'all_items'         => 'All ' . $plural_name,
	    'parent_item'       => 'Parent ' . $single_name,
	    'parent_item_colon' => 'Parent ' . $single_name . ':',
	    'edit_item'         => 'Edit ' . $single_name,
	    'update_item'       => 'Update ' . $single_name,
	    'add_new_item'      => 'Add New ' . $single_name,
	    'new_item_name'     => 'New ' . $single_name . ' Name',
	    'menu_name'         => $plural_name
	);

	$args = array(
	    'labels'            => $labels,
	    'hierarchical'      => true,
	    'show_ui'           => true,
	    'show_admin_column' => true,
	    'query_var'         => true,
		'show_in_rest'      => $gutenberg_enabled,
	    'rewrite'           => array( 'slug' => '' ),
	);
	register_taxonomy( $taxonomy_name, $post_type, $args );

	$taxonomy_name		= "features";
	$single_name		= "Feature";
	$plural_name		= "Features";
	$post_type			= "accommodation";
	$gutenberg_enabled	= false;

	$labels = array(
	    'name'              => $plural_name,
	    'singular_name'     => $single_name,
	    'search_items'      => 'Search ' . $plural_name,
	    'all_items'         => 'All ' . $plural_name,
	    'parent_item'       => 'Parent ' . $single_name,
	    'parent_item_colon' => 'Parent ' . $single_name . ':',
	    'edit_item'         => 'Edit ' . $single_name,
	    'update_item'       => 'Update ' . $single_name,
	    'add_new_item'      => 'Add New ' . $single_name,
	    'new_item_name'     => 'New ' . $single_name . ' Name',
	    'menu_name'         => $plural_name
	);

	$args = array(
	    'labels'            => $labels,
	    'hierarchical'      => true,
	    'show_ui'           => true,
	    'show_admin_column' => true,
	    'query_var'         => true,
		'show_in_rest'      => $gutenberg_enabled,
	    'rewrite'           => array( 'slug' => '' ),
	);
	register_taxonomy( $taxonomy_name, $post_type, $args );

	$taxonomy_name		= "amenities";
	$single_name		= "Amenity";
	$plural_name		= "Amenities";
	$post_type			= "accommodation";
	$gutenberg_enabled	= false;

	$labels = array(
	    'name'              => $plural_name,
	    'singular_name'     => $single_name,
	    'search_items'      => 'Search ' . $plural_name,
	    'all_items'         => 'All ' . $plural_name,
	    'parent_item'       => 'Parent ' . $single_name,
	    'parent_item_colon' => 'Parent ' . $single_name . ':',
	    'edit_item'         => 'Edit ' . $single_name,
	    'update_item'       => 'Update ' . $single_name,
	    'add_new_item'      => 'Add New ' . $single_name,
	    'new_item_name'     => 'New ' . $single_name . ' Name',
	    'menu_name'         => $plural_name
	);

	$args = array(
	    'labels'            => $labels,
	    'hierarchical'      => true,
	    'show_ui'           => true,
	    'show_admin_column' => true,
	    'query_var'         => true,
		'show_in_rest'      => $gutenberg_enabled,
	    'rewrite'           => array( 'slug' => '' ),
	);
	register_taxonomy( $taxonomy_name, $post_type, $args );

	$taxonomy_name		= "amenities";
	$single_name		= "Amenity";
	$plural_name		= "Amenities";
	$post_type			= "accommodation";
	$gutenberg_enabled	= false;

	$labels = array(
	    'name'              => $plural_name,
	    'singular_name'     => $single_name,
	    'search_items'      => 'Search ' . $plural_name,
	    'all_items'         => 'All ' . $plural_name,
	    'parent_item'       => 'Parent ' . $single_name,
	    'parent_item_colon' => 'Parent ' . $single_name . ':',
	    'edit_item'         => 'Edit ' . $single_name,
	    'update_item'       => 'Update ' . $single_name,
	    'add_new_item'      => 'Add ' . $single_name,
	    'new_item_name'     => 'New ' . $single_name . ' Name',
	    'menu_name'         => $plural_name
	);

	$args = array(
	    'labels'            => $labels,
	    'hierarchical'      => true,
	    'show_ui'           => true,
	    'show_admin_column' => true,
	    'query_var'         => true,
		'show_in_rest'      => $gutenberg_enabled,
	    'rewrite'           => array( 'slug' => '' ),
	);
	register_taxonomy( $taxonomy_name, $post_type, $args );

	$taxonomy_name		= "benefits";
	$single_name		= "Benefit";
	$plural_name		= "Benefits";
	$post_type			= "accommodation";
	$gutenberg_enabled	= false;

	$labels = array(
	    'name'              => $plural_name,
	    'singular_name'     => $single_name,
	    'search_items'      => 'Search ' . $plural_name,
	    'all_items'         => 'All ' . $plural_name,
	    'parent_item'       => 'Parent ' . $single_name,
	    'parent_item_colon' => 'Parent ' . $single_name . ':',
	    'edit_item'         => 'Edit ' . $single_name,
	    'update_item'       => 'Update ' . $single_name,
	    'add_new_item'      => 'Add ' . $single_name,
	    'new_item_name'     => 'New ' . $single_name . ' Name',
	    'menu_name'         => $plural_name
	);

	$args = array(
	    'labels'            => $labels,
	    'hierarchical'      => true,
	    'show_ui'           => true,
	    'show_admin_column' => true,
	    'query_var'         => true,
		'show_in_rest'      => $gutenberg_enabled,
	    'rewrite'           => array( 'slug' => '' ),
	);
	register_taxonomy( $taxonomy_name, $post_type, $args );
}
