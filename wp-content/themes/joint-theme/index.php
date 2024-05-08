<?php get_header(); ?>
<style>

	/* container */
.blog {
	display:flex;
    flex-wrap:wrap;
    gap:1rem;
}

/* columns */
.blog > * {
    padding:1rem;
	margin:0 5px;
}

/* tablet breakpoint */
@media (min-width:768px) {
    .blog {
        display: grid;
        grid-auto-rows: 1fr;
        grid-template-columns: 1fr 1fr 1fr;
    }
}

/*  LESS THAN 480 PIXELS */

@media only screen and (max-width: 480px) {
	.col { margin: 1% 0 1% 0%;}
	.span_3_of_3, .span_2_of_3, .span_1_of_3 { width: 100%; }
	.blog-post {
		
		margin:0 10px 20px 10px;
		
	}
	.blog {
		padding:120px 20px 0 20px;
	}
}
	.blog {
		padding:120px 0 40px 0;
	}
	.blog-post {
		border-radius:10px;
		padding:30px;
		background-color:#ffffff;
		margin:0 0 5px 0;
	}
	.blog-post h3 {
		margin:10px 0 10px 0;
	}
	.blog-post span.btn {
		padding:0.25rem 1.8rem !important;
	}
	.blog-post img {
		border-radius:10px;
	}
	
</style>
<div class="blog">
	
			
				
					<?php while ( have_posts() ) : the_post(); ?>
				<div class="blog-post">
						<?php $url = wp_get_attachment_url( get_post_thumbnail_id($post->ID), 'thumbnail' ); ?>
					    <a href="<?php esc_url( the_permalink() ); ?>" title="Permalink to <?php the_title(); ?>"><img src="<?php echo $url ?>" /></a>
						<h3><a href="<?php esc_url( the_permalink() ); ?>" title="Permalink to <?php the_title(); ?>"><?php the_title(); ?></a></h3>
						<?php the_excerpt(); ?><br>
					<a href="<?php esc_url( the_permalink() ); ?>" title="Permalink to <?php the_title(); ?>"><span class="btn">Read more</span></a>
				</div>
				<?php endwhile; ?>
			
				
		
		
	
</div>


<?php get_footer(); ?>