'use strict';

import './components/no-js';
// import './components/cookie';
import './components/unsupported-browsers';
import './components/toggle';
import './components/accordion';
import './components/menu';
import './components/slider';

// jQuery(document).ready(function($) {
// 	$('.modal--close').click(function() {
// 		$('.modal').addClass('noshow');
// 	});
// });

jQuery(document).ready(function($) {
  var cookie = localStorage.getItem('hideModal');
  
  // if local storage key isn't found, set it to false
	if (cookie === null) {
		localStorage.setItem('hideModal', 'false');
	}
  
  // If key is false or not set, show banner
	if (cookie === 'false' || cookie === null) {
    $('.modal').addClass('is-visible');
	}
  
  $('.modal--close').click(function() {
    $('.modal').removeClass('is-visible');
		localStorage.setItem('hideModal', 'true');
  });

  $('a[href*="#"]:not([href="#"])').click(function() {
		var offset = -220; // <-- change the value here
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top + offset
				}, 0);
				return false;
			}
		}
	});


	var className = "inverted";
	var scrollTrigger = 60;

	window.onscroll = function() {
	// We add pageYOffset for compatibility with IE.
	if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
		document.getElementsByTagName("header")[0].classList.add(className);
	} else {
		document.getElementsByTagName("header")[0].classList.remove(className);
	}
	};

});

// (function () {
// 	var cookie = localStorage.getItem('hideModal');
// 	var cookieAlert = document.querySelector('.modal');
// 	var cookieBtn = document.querySelector('.modal--close');
// 		// if local storage key isn't found, set it to false
// 		if (cookie === null) {
// 			localStorage.setItem('hideModal', 'true');
// 		}
// 		// If key is false or not set, show banner
// 		if (cookie === 'false' || cookie === null) {
// 			cookieAlert.classList.add('show');
// 		}
// 		// Hide modal and set local storage key on click
// 		cookieBtn.addEventListener('click', function (event) {
// 		localStorage.setItem('hideModal', 'true');
// 		cookieAlert.classList.remove('show');
// 	});
// }());