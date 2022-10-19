<header class="site-header">
	<div class="site-header__inner">
		<div class="site-header__contact">Call <a href="tel:01273 257 141">01273 257 141</a> to book now!</div>


		<div class="site-header__logo"><a href="<?php echo home_url(); ?>"><img src="<?php echo get_template_directory_uri(); ?>/src/images/logo.svg" alt="Space logo" /></a></div>

		<div class="site-header__content">
			<nav class="site-header__nav">
				<?php wp_nav_menu( array('theme_location' => 'primary') ); ?>
			</nav>
		</div>
		<button class="site-header--nav-btn" type="button">
			<span class="site-header--nav-box">
				<span class="site-header--nav-inner"><span>Show menu</span></span>
			</span>
		</button>
	</div>
	<nav class="site-header--nav site-header--nav__mobile">
		<?php wp_nav_menu( array('theme_location' => 'mobile') ); ?>
		<div class="site-header--nav__image"><img src="<?php echo get_template_directory_uri(); ?>/src/images/menu-image.png" /></div>
	</nav>
</header>