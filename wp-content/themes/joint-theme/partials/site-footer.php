<?php 
$popup = get_field('show_popup');
$popupcontent = get_field('modal_content', 'options');
?>
<footer class="site-footer">
	<div class="site-footer__inner">
		<div class="site-footer__left">
			<div class="site-footer__form">
				<p>Keep me updated</p>
				<br />
				<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
				<script>
				hbspt.forms.create({
					region: "na1",
					portalId: "7287208",
					formId: "2343c70e-4e9b-40fc-b18c-93860c58d3e3"
				});
				</script>
			</div>

			<div class="site-footer__logos">
			<?php if( have_rows('footer_logos', 'options') ) { ?>
				<?php while( have_rows('footer_logos', 'options') ): the_row();
					$image 	= get_sub_field('logo');
				?>
				<div class="site-footer__logos-item">
					<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
				</div>
				<?php endwhile; ?>
			<?php } ?>
			</div>
		</div>

		<div class="site-footer__right">
			<div class="site-footer__links">
				<ul>
					<li><a href="/cities/brighton/">Brighton</a></li>
					<li><a href="/cities/bath/">Bath</a></li>
					<li><a href="/cities/bristol/">Bristol</a></li>
					<li><a href="/cities/newcastle/">Newcastle</a></li>
					<li><a href="/cities/nottingham/">Nottingham</a></li>
					<li><a href="/cities/oxford/">Oxford</a></li>
				</ul>
				<ul>
					<li><a href="/about">About</a></li>
					<li><a href="/contact">Contact</a></li>
					<li><a href="mailto:hello@jointliving.co.uk">hello@jointliving.co.uk</a></li>
				</ul>
				
				<p>&copy; <?php echo date('Y'); ?> All rights reserved</p>
			</div>

			<div class="site-footer__links">
				<ul class="social-links">
				<?php if(get_field('twitter', 'options')) { ?>
					<li class="social-links__item"><a href="<?php the_field('twitter', 'options'); ?>" class="social-links__link">Twitter</a></li>
				<?php } ?>
				<?php if(get_field('facebook', 'options')) { ?>
					<li class="social-links__item"><a href="<?php the_field('facebook', 'options'); ?>" class="social-links__link">Facebook</a></li>
				<?php } ?>
				<?php if(get_field('instagram', 'options')) { ?>
					<li class="social-links__item"><a href="<?php the_field('instagram', 'options'); ?>" class="social-links__link">Instagram</a></li>
				<?php } ?>
				<?php if(get_field('youtube', 'options')) { ?>
					<li class="social-links__item"><a href="<?php the_field('youtube', 'options'); ?>" class="social-links__link">Youtube</a></li>
				<?php } ?>
				</ul>
				<ul>
					<li><a href="/terms-conditions">Terms & Conditions</a></li>
					<li><a href="/privacy-policy">Privacy Policy</a></li>
					<li><a href="/cookie-policy">Cookie Policy</a></li>
				</ul>
				
				<?php if (get_field('footer_award_logo', 'options')) { 
					$image 	= get_field('footer_award_logo', 'options');
				?>
					<div class="site-footer__logos-award">
						<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
					</div>
				<?php } ?>
			</div>

		</div>
	</div>
</footer>
<?php if ( $popup  == '1' ) { ?>
<div class="modal">
	<div class="modal--inner">
		<button class="modal--close" aria-label="Close">✕</button>
		<?php echo $popupcontent ?>
	</div>
</div>
<?php } ?>