<?php
/*
Active: true
UUID: 223
Title: Meal Plan
Description: Add a meal plan
Keywords: Meal plan
Post Types: null
Allow Multiple: true
*/
$titledays		= get_field('title_days');
$titlelist		= get_field('title_list');
$days			= get_field('plan_days');
$list			= get_field('plan_list');
$allowed_blocks = array( 'core/heading', 'core/paragraph', 'core/button', 'core/list' );
$bkg			= get_field('bkg_colour');
?>
<section class="meal-plan <?php echo $bkg; ?>">
	<div class="meal-plan__title">
		<?php echo '<InnerBlocks allowedBlocks="' . esc_attr( wp_json_encode( $allowed_blocks ) ) . '" />'; ?>
	</div>
	<div class="meal-plan__plan">
		<?php if($titledays) { ?><h2><?php echo $titledays; ?></h2><?php } ?>

		<?php if($days['monday']) { ?><h3 class="heading-2">Monday</h3> <p><?php echo $days['monday']; ?></p><?php } ?>
		<?php if($days['tuesday']) { ?><h3 class="heading-2">Tuesday</h3> <p><?php echo $days['tuesday']; ?></p><?php } ?>
		<?php if($days['wednesday']) { ?><h3 class="heading-2">Wednesday</h3> <p><?php echo $days['wednesday']; ?></p><?php } ?>
		<?php if($days['thursday']) { ?><h3 class="heading-2">Thursday</h3> <p><?php echo $days['thursday']; ?></p><?php } ?>
		<?php if($days['friday']) { ?><h3 class="heading-2">Friday</h3> <p><?php echo $days['friday']; ?></p><?php } ?>
		<?php if($days['saturday']) { ?><h3 class="heading-2">Saturday</h3> <p><?php echo $days['saturday']; ?></p><?php } ?>
		<?php if($days['sunday']) { ?><h3 class="heading-2">Sunday</h3> <p><?php echo $days['sunday']; ?></p><?php } ?>
	</div>
	<div class="meal-plan__list">
		<?php if($titlelist) { ?><h2><?php echo $titlelist; ?></h2><?php } ?>
		<?php if($list) { ?><?php echo $list; ?><?php } ?>
	</div>
</section>