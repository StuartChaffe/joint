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

		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
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
});