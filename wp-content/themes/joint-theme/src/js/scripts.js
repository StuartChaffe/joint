'use strict';

import './components/no-js';
// import './components/cookie';
import './components/unsupported-browsers';
import './components/toggle';
import './components/accordion';
import './components/menu';
import './components/slider';

// jQuery(document).ready(function($) {
// 	var cookie = localStorage.getItem('hideModal');
// 	$('.modal--close').click(function() {
// 		$('.modal').addClass('noshow');

// 		if (cookie === null) {  
// 			console.log('yes');
// 		}
// 		if (cookie === 'false' || cookie === null) {
// 			console.log('false');
// 		}
// 		console.log('other');
// 	});
// 	if (cookie === null) {  
// 		console.log('yes');
// 	}
// 	if (cookie === 'false' || cookie === null) {
// 		console.log('false');
// 	}
// 	console.log('other');
// });

(function () {
	var cookie = localStorage.getItem('hideModal');
	var cookieAlert = document.querySelector('.modal');
	var cookieBtn = document.querySelector('.modal--close');
		// if local storage key isn't found, set it to false
		if (cookie === null) {
			localStorage.setItem('hideModal', 'true');
		}
		// If key is false or not set, show banner
		if (cookie === 'false' || cookie === null) {
			cookieAlert.classList.add('show');
		}
		// Hide modal and set local storage key on click
		cookieBtn.addEventListener('click', function (event) {
		localStorage.setItem('hideModal', 'true');
		cookieAlert.classList.add('noshow');
	});
}());