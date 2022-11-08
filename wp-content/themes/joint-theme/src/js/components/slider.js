jQuery(document).ready(function($) {

	$(".gallery").slick({
		// settings: "unslick",
		// speed: 200,
		// slidesToShow: 1,
		// slidesToScroll: 1,
		// autoplay: true,
		// autoplaySpeed: 5000,
		// arrows: false,
		// infinite: true,
		// dots: true,
		// adaptiveHeight: true,

		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		asNavFor: '.gallery-nav',
	}); 
	
	$('.gallery-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.gallery',
		dots: false,
		centerMode: true,
		focusOnSelect: true
	  });

	  $(".reviews-slider").slick({
		// settings: "unslick",
		speed: 200,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		infinite: true,
		dots: false,

		responsive: [
			{
				breakpoint: 930,
				settings: {
				slidesToShow: 1,
				}
			},
			{
				breakpoint: 400,
				settings: {
				slidesToShow: 1,
				}
			}
		]
	}); 

	$(".feature-properties__list").slick({
		// settings: "unslick",
		speed: 200,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		arrows: true,
		infinite: true,
		dots: false,
		responsive: [
			{
				breakpoint: 1170,
				settings: {
				slidesToShow: 3,
				}
			},
			{
				breakpoint: 670,
				settings: {
				slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 1,
				}
			}
		]
	}); 
});