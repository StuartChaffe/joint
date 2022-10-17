<?php
/*
Active: true
UUID: 3
Title: 2 Column
Description: Displays 2 columns of content, text and image
Keywords: column, content, image
Post Types: null
Allow Multiple: true
*/
$content		= get_field('twocol_content');
$leftcontent	= $content['left_content_text'];
$rightcontent	= $content['right_content_text'];
$leftimage		= $content['left_content_image'];
$rightimage		= $content['right_content_image'];
$bkg			= get_field('bkg_colour');
?>
<section class="<?php echo $bkg; ?> sp">
	<div class="two-col" <?php if ($leftimage || $rightimage) { ?>style="align-items: center;"<?php } ?>>
		<div class="two-col__item <?php if (empty($rightimage) && empty($rightcontent)) { ?>two-col__item--full<?php } ?>">
			<?php if ($leftcontent) { ?><?php echo $leftcontent; ?><?php } ?>
			<?php if ($leftimage) { ?><img loading="lazy" class="" src="<?php echo $leftimage['url']; ?>" alt="<?php echo $leftimage['alt']; ?>" /><?php } ?>
		</div>
		<div class="two-col__item <?php if ($rightimage) { ?>two-col__item--order<?php } ?> <?php if (empty($rightimage) && empty($rightcontent)) { ?>hide<?php } ?>">
			<?php if ($rightcontent) { ?><?php echo $rightcontent; ?><?php } ?>
			<?php if ($rightimage) { ?><img loading="lazy" class="" src="<?php echo $rightimage['url']; ?>" alt="<?php echo $rightimage['alt']; ?>" /><?php } ?>
		</div>
	</div>
</section>