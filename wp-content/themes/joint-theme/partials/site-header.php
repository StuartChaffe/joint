<?php
$logo = get_field('company_logo', 'options');
$tel = get_field('telephone', 'options');
?>
<header class="site-header">
	<div class="site-header__inner">
		<div class="site-header__contact">Call <a href="tel:<?php echo $tel; ?>"><?php echo $tel; ?></a> to book now!</div>
		<div class="site-header__logo">
			<a href="<?php echo home_url(); ?>">
			<?php if($logo) { ?>
				<img src="<?php echo $logo['url']; ?>" alt="<?php echo $logo['alt']; ?>" />
			<?php } else { ?>
			<img src="<?php echo get_template_directory_uri(); ?>/src/images/logo.svg" alt="Joint logo" />
			<?php } ?>
			</a>
		</div>

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
		<a href="tel:<?php echo $tel; ?>" class="site-header--nav__contact">Call <strong><?php echo $tel; ?></strong> to book now!</a>
		<?php wp_nav_menu( array('theme_location' => 'mobile') ); ?>
		<div class="site-header--nav__image"><img src="<?php echo get_template_directory_uri(); ?>/src/images/menu-image.png" /></div>
	</nav>
</header>