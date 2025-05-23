<?php


/**
 * Add custom styles and colour palette
 */
function origin_gutenberg_setup() {
	add_theme_support( 'editor-styles' );
	add_editor_style( 'assets/css/editor-style.css' );

	add_theme_support( 'disable-custom-colors' );
	add_theme_support( 'disable-custom-gradients' );

	add_theme_support( 'editor-color-palette', array(
		array(
			'name'  => __( 'White', 'origin-colors' ),
			'slug'  => 'white',
			'color'	=> '#fff',
		),
		array(
			'name'  => __( 'Black', 'origin-colors' ),
			'slug'  => 'black',
			'color'	=> '#000',
		),
		array(
			'name'  => __( 'Primary', 'origin-colors' ),
			'slug'  => 'primary',
			'color'	=> '#59BACC',
		),
		array(
			'name'  => __( 'Secondary', 'origin-colors' ),
			'slug'  => 'secondary',
			'color' => '#58AD69',
		),
		array(
			'name'  => __( 'Tertiary', 'origin-colors' ),
			'slug'  => 'tertiary',
			'color' => '#FFBC49',
		),
		array(
			'name'  => __( 'Quaternary', 'origin-colors' ),
			'slug'  => 'quaternary',
			'color' => '#E2574C',
		),
	) );
}
add_action( 'after_setup_theme', 'origin_gutenberg_setup' );


/**
 * Remove Gutenberg styling - Uncomment this add_action if you want to remove styles
 */
function origin_deregister_styles() {
	if ( !is_admin() ) {
		wp_dequeue_style( 'wp-block-library' );
		wp_dequeue_style( 'wp-block-library-theme' );
		wp_dequeue_style( 'wc-block-style' );
	}
}
// add_action( 'wp_enqueue_scripts', 'origin_deregister_styles', 100);


// add_action( 'wp_enqueue_scripts', 'origin_deregister_styles', 100);
function joint_acf_block_render_callback( $block ) {
	$slug = str_replace('acf/', '', $block['name']);

	if( file_exists( get_theme_file_path("/blocks/{$slug}.php") ) ) {
		include( get_theme_file_path("/blocks/{$slug}.php") );
	}
}

add_filter( 'allowed_block_types_all', 'joint_allowed_block_types' );
 
function joint_allowed_block_types( $allowed_blocks ) {
 
	return array(
		'acf/custom-block-joint-1',
		'acf/custom-block-joint-121',
		'acf/custom-block-joint-2',
		// 'acf/custom-block-joint-3',
		// 'acf/custom-block-joint-4',
		// 'acf/custom-block-joint-5',
		'acf/custom-block-joint-6',
		'acf/custom-block-joint-22',
		'acf/custom-block-joint-222',
		'acf/custom-block-joint-223',
		'acf/custom-block-joint-224',
		'acf/custom-block-joint-333',
		'acf/custom-block-joint-444',
		'acf/custom-block-joint-555',
		'acf/custom-block-joint-666',
		'acf/custom-block-joint-1211',
		
		
		'core/paragraph',
		'core/heading',
		'core/button',
		'core/list',
		'core/image',
		'core/html',
	);
 
}