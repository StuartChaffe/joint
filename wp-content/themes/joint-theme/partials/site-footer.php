<footer class="site-footer">
	<div class="site-footer__inner">
		<div class="site-footer__left">
			<div class="site-footer__form">
				<h3>Keep me updated</h3>
				FORM
			</div>

			<div class="site-footer__logos">
				Logos
			</div>
		</div>

		<div class="site-footer__right">
			<div class="site-footer__links">
				<ul>
					<li><a href="">Brighton</a></li>
					<li><a href="">Bath</a></li>
					<li><a href="">Bristol</a></li>
					<li><a href="">Newcastle</a></li>
				</ul>
				<ul>
					<li><a href="">About</a></li>
					<li><a href="">Contact</a></li>
				</ul>
				
				<p>&copy; <?php echo date('Y'); ?> All rights reserved</p>
			</div>

			<div class="site-footer__links">
				<ul class="social-links">
				<?php if(get_field('twitter', 'options')): ?>
					<li class="social-links__item"><a href="<?php the_field('twitter', 'options'); ?>" class="social-links__link">Twitter</a></li>
				<?php endif; ?>
				<?php if(get_field('facebook', 'options')): ?>
					<li class="social-links__item"><a href="<?php the_field('facebook', 'options'); ?>" class="social-links__link">Facebook</a></li>
				<?php endif; ?>
				<?php if(get_field('instagram', 'options')): ?>
					<li class="social-links__item"><a href="<?php the_field('instagram', 'options'); ?>" class="social-links__link">Instagram</a></li>
				<?php endif; ?>
				<?php if(get_field('youtube', 'options')): ?>
					<li class="social-links__item"><a href="<?php the_field('youtube', 'options'); ?>" class="social-links__link">Youtube</a></li>
				<?php endif; ?>
				</ul>
				<ul>
					<li><a href="">Terms & Conditions</a></li>
					<li><a href="">Privacy Policy</a></li>
					<li><a href="">Cookie Policy</a></li>
				</ul>
			</div>

		</div>
	</div>
</footer>
