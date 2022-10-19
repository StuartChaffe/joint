<?php
/*
Active: true
UUID: 2
Title: Banner
Description: Displays a large banner
Keywords: banner
Post Types: null
Allow Multiple: true
*/

$image		= get_field('banner_image');
$content	= get_field('banner_content');
$button		= get_field('banner_button');
$bkg 		= get_field('banner_content_bkg');
?>
<section class="banner text--white<?php if ( $bkg == '1' ) { ?> f-aligncenter<?php } ?>" <?php if ( $image['large'] ) { ?>style="background-image: url('<?php echo $image['large']['url']; ?>')"<?php } ?>>
	<div class="banner__content">
		<?php if ( $bkg == '1' ) { ?><div class="banner__content--bkg"><?php } ?>
		<?php if ( $content ) { ?><h1><?php echo $content; ?></h1><?php } ?>
		<?php if ($button) { ?>
			<a class="btn btn--block" href="<?php echo $button['url']; ?>" target="<?php echo $button['target']; ?>"><?php echo $button['title']; ?></a>
		<?php } ?>
		<?php if ( $bkg == '1' ) { ?></div><?php } ?>
	</div>
	<?php if ( $image['large'] ) { ?><img loading="lazy" class="banner__image hidemobile" src="<?php echo $image['large']['url']; ?>" alt="<?php echo $image['large']['alt']; ?>" /><?php } ?>
	<?php if ( $image['mobile'] ) { ?><img loading="lazy" class="banner__image hidedesktop" src="<?php echo $image['mobile']['url']; ?>" alt="<?php echo $image['mobile']['alt']; ?>" /><?php } ?>
</section>