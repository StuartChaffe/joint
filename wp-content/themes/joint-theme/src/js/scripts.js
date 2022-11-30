'use strict';

import './components/no-js';
// import './components/cookie';
import './components/unsupported-browsers';
import './components/toggle';
import './components/accordion';
import './components/menu';
import './components/slider';

jQuery(document).ready(function($) {
	$('.modal--close').click(function() {
		$('.modal').addClass('noshow');
	});
});


(function () {
	var cookie = localStorage.getItem('hideModal');
	var cookieAlert = document.querySelector('.modal');
	var cookieBtn = document.querySelector('.modal--close');
	// if local storage key isn't found, set it to false
	if (cookie === null) {
		localStorage.setItem('hideModal', 'false');
	}
	// If key is false or not set, show banner
	if (cookie === 'false' || cookie === null) {
		cookieAlert.classList.add('noshow');
	}
	// Hide banner and set local storage key on click
	    cookieBtn.addEventListener('click', function (event) {
		localStorage.setItem('hideModal', 'true');
		cookieAlert.classList.remove('noshow');
	});
}());