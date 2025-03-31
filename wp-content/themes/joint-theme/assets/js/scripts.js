/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/accordion.js":
/*!****************************************!*\
  !*** ./src/js/components/accordion.js ***!
  \****************************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var accordion = document.querySelectorAll('.accordion__handle');\n  if (accordion) {\n    accordion.forEach(function (item) {\n      item.addEventListener('click', function () {\n        var expanded = this.getAttribute('aria-expanded'),\n          did = this.getAttribute('aria-controls'),\n          target = document.getElementById(did);\n        if (target) {\n          target.classList.toggle('is-open');\n        }\n        expanded = expanded == 'true' ? 'false' : 'true';\n        this.setAttribute(\"aria-expanded\", expanded);\n        this.classList.toggle('is-active');\n      });\n    });\n  }\n  var showAll = document.getElementById('toggleAll');\n  var accordionBtns = document.querySelectorAll('.accordion__handle');\n  var accordionItems = document.querySelectorAll('.accordion__body');\n  if (showAll) {\n    showAll.addEventListener('click', function (e) {\n      e.preventDefault();\n      for (var i = 0; i < accordionItems.length; i++) {\n        accordionItems[i].classList.add('is-open');\n      }\n      for (var x = 0; x < accordionBtns.length; x++) {\n        accordionBtns[i].setAttribute(\"aria-expanded\", \"true\");\n        accordionBtns[i].classList.add('is-active');\n      }\n    });\n  }\n  var getAccordion = window.location.hash.substring(1),\n    accordionEntry = false;\n  if (getAccordion.length > 0) {\n    try {\n      accordionEntry = document.getElementById(getAccordion);\n    } catch (e) {}\n  }\n  if (accordionEntry) {\n    var did = accordionEntry.getAttribute('aria-controls'),\n      target = document.getElementById(did);\n    if (target) {\n      target.classList.toggle('is-open');\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhY2NvcmRpb24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJleHBhbmRlZCIsImdldEF0dHJpYnV0ZSIsImRpZCIsInRhcmdldCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwic2V0QXR0cmlidXRlIiwic2hvd0FsbCIsImFjY29yZGlvbkJ0bnMiLCJhY2NvcmRpb25JdGVtcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImkiLCJsZW5ndGgiLCJhZGQiLCJ4IiwiZ2V0QWNjb3JkaW9uIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3Vic3RyaW5nIiwiYWNjb3JkaW9uRW50cnkiXSwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3JpZ2luLy4vc3JjL2pzL2NvbXBvbmVudHMvYWNjb3JkaW9uLmpzPzhmZTIiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG5cblx0dmFyIGFjY29yZGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2hhbmRsZScpO1xuXHRpZiAoYWNjb3JkaW9uKSB7XG5cdFx0YWNjb3JkaW9uLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuXHRcdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgZXhwYW5kZWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpLFxuXHRcdFx0XHRkaWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpLFxuXHRcdFx0XHR0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaWQpO1xuXG5cdFx0XHRcdGlmICh0YXJnZXQpIHtcblx0XHRcdFx0XHR0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZXhwYW5kZWQgPSBleHBhbmRlZCA9PSAndHJ1ZScgPyAnZmFsc2UnIDogJ3RydWUnO1xuXG5cdFx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBleHBhbmRlZCk7XG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBzaG93QWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZUFsbCcpO1xuXHR2YXIgYWNjb3JkaW9uQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2hhbmRsZScpO1xuXHR2YXIgYWNjb3JkaW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19ib2R5Jyk7XG5cblx0aWYoc2hvd0FsbCkge1xuXHRcdHNob3dBbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFjY29yZGlvbkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGFjY29yZGlvbkl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcblx0XHRcdH1cblx0XHRcdGZvciAodmFyIHggPSAwOyB4IDwgYWNjb3JkaW9uQnRucy5sZW5ndGg7IHgrKykge1xuXHRcdFx0XHRhY2NvcmRpb25CdG5zW2ldLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJ0cnVlXCIpO1xuXHRcdFx0XHRhY2NvcmRpb25CdG5zW2ldLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGdldEFjY29yZGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSxcblx0YWNjb3JkaW9uRW50cnkgPSBmYWxzZTtcblxuXHRpZiAoZ2V0QWNjb3JkaW9uLmxlbmd0aCA+IDApIHtcblx0XHR0cnkge1xuXHRcdFx0YWNjb3JkaW9uRW50cnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnZXRBY2NvcmRpb24pO1xuXHRcdH0gY2F0Y2goZSkgeyB9XG5cdH1cblxuXHRpZiAoYWNjb3JkaW9uRW50cnkpIHtcblx0XHR2YXIgZGlkID0gYWNjb3JkaW9uRW50cnkuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyksXG5cdFx0dGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGlkKTtcblxuXHRcdGlmICh0YXJnZXQpIHtcblx0XHRcdHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XG5cdFx0fVxuXHR9XG5cbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO0VBRXhELElBQUlDLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQztFQUMvRCxJQUFJRCxTQUFTLEVBQUU7SUFDZEEsU0FBUyxDQUFDRSxPQUFPLENBQUMsVUFBU0MsSUFBSSxFQUFFO01BQ2hDQSxJQUFJLENBQUNKLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFXO1FBQ3pDLElBQUlLLFFBQVEsR0FBRyxJQUFJLENBQUNDLFlBQVksQ0FBQyxlQUFlLENBQUM7VUFDakRDLEdBQUcsR0FBRyxJQUFJLENBQUNELFlBQVksQ0FBQyxlQUFlLENBQUM7VUFDeENFLE1BQU0sR0FBR1QsUUFBUSxDQUFDVSxjQUFjLENBQUNGLEdBQUcsQ0FBQztRQUVyQyxJQUFJQyxNQUFNLEVBQUU7VUFDWEEsTUFBTSxDQUFDRSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkM7UUFFQU4sUUFBUSxHQUFHQSxRQUFRLElBQUksTUFBTSxHQUFHLE9BQU8sR0FBRyxNQUFNO1FBRWhELElBQUksQ0FBQ08sWUFBWSxDQUFDLGVBQWUsRUFBRVAsUUFBUSxDQUFDO1FBQzVDLElBQUksQ0FBQ0ssU0FBUyxDQUFDQyxNQUFNLENBQUMsV0FBVyxDQUFDO01BQ25DLENBQUMsQ0FBQztJQUNILENBQUMsQ0FBQztFQUNIO0VBRUEsSUFBSUUsT0FBTyxHQUFHZCxRQUFRLENBQUNVLGNBQWMsQ0FBQyxXQUFXLENBQUM7RUFDbEQsSUFBSUssYUFBYSxHQUFHZixRQUFRLENBQUNHLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDO0VBQ25FLElBQUlhLGNBQWMsR0FBR2hCLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsa0JBQWtCLENBQUM7RUFFbEUsSUFBR1csT0FBTyxFQUFFO0lBQ1hBLE9BQU8sQ0FBQ2IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVNnQixDQUFDLEVBQUU7TUFDN0NBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFDbEIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdILGNBQWMsQ0FBQ0ksTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtRQUMvQ0gsY0FBYyxDQUFDRyxDQUFDLENBQUMsQ0FBQ1IsU0FBUyxDQUFDVSxHQUFHLENBQUMsU0FBUyxDQUFDO01BQzNDO01BQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdQLGFBQWEsQ0FBQ0ssTUFBTSxFQUFFRSxDQUFDLEVBQUUsRUFBRTtRQUM5Q1AsYUFBYSxDQUFDSSxDQUFDLENBQUMsQ0FBQ04sWUFBWSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUM7UUFDdERFLGFBQWEsQ0FBQ0ksQ0FBQyxDQUFDLENBQUNSLFNBQVMsQ0FBQ1UsR0FBRyxDQUFDLFdBQVcsQ0FBQztNQUM1QztJQUNELENBQUMsQ0FBQztFQUNIO0VBRUEsSUFBSUUsWUFBWSxHQUFHQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3BEQyxjQUFjLEdBQUcsS0FBSztFQUV0QixJQUFJTCxZQUFZLENBQUNILE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDNUIsSUFBSTtNQUNIUSxjQUFjLEdBQUc1QixRQUFRLENBQUNVLGNBQWMsQ0FBQ2EsWUFBWSxDQUFDO0lBQ3ZELENBQUMsQ0FBQyxPQUFNTixDQUFDLEVBQUUsQ0FBRTtFQUNkO0VBRUEsSUFBSVcsY0FBYyxFQUFFO0lBQ25CLElBQUlwQixHQUFHLEdBQUdvQixjQUFjLENBQUNyQixZQUFZLENBQUMsZUFBZSxDQUFDO01BQ3RERSxNQUFNLEdBQUdULFFBQVEsQ0FBQ1UsY0FBYyxDQUFDRixHQUFHLENBQUM7SUFFckMsSUFBSUMsTUFBTSxFQUFFO01BQ1hBLE1BQU0sQ0FBQ0UsU0FBUyxDQUFDQyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ25DO0VBQ0Q7QUFFRCxDQUFDLENBQUMiLCJpZ25vcmVMaXN0IjpbXSwiZmlsZSI6Ii4vc3JjL2pzL2NvbXBvbmVudHMvYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/components/accordion.js\n");

/***/ }),

/***/ "./src/js/components/menu.js":
/*!***********************************!*\
  !*** ./src/js/components/menu.js ***!
  \***********************************/
/***/ (() => {

eval("jQuery(document).ready(function ($) {\n  // Primary nav\n  var $menuBtn = $(\".site-header--nav-btn\");\n  var $menuContainer = $(\".site-header--nav__mobile\");\n  $menuBtn.click(function () {\n    $(this).toggleClass(\"is-active\");\n    $(\"body\").toggleClass(\"menu-active\");\n    $menuContainer.toggleClass(\"is-active\");\n  });\n  // $(window).scroll(function(){\n  // \tif ($(this).scrollTop() > 50) {\n  // \t\t$('.site-header').removeClass('site-header__down').addClass('site-header__up')\n  // \t\t} else {\n  // \t\t$('.site-header').addClass('site-header__down').removeClass('site-header__up')\n  // \t\t}\n  // });\n});\njQuery(document).ready(function ($) {\n  $(\".site-header--nav__mobile .menu-item-has-children > a\").after('<span class=\"dropdown-button\">&nbsp;</span>');\n  $('.dropdown-button').click(function () {\n    if ($(this).hasClass(\"is-active\")) {\n      $(this).removeClass('is-active');\n      $(this).next('.sub-menu').slideUp('normal');\n    } else {\n      $(this).addClass('is-active');\n      $(this).next('.sub-menu').slideDown('normal');\n    }\n    return false;\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiJCIsIiRtZW51QnRuIiwiJG1lbnVDb250YWluZXIiLCJjbGljayIsInRvZ2dsZUNsYXNzIiwiYWZ0ZXIiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwibmV4dCIsInNsaWRlVXAiLCJhZGRDbGFzcyIsInNsaWRlRG93biJdLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcmlnaW4vLi9zcmMvanMvY29tcG9uZW50cy9tZW51LmpzP2JiNWEiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XG5cdC8vIFByaW1hcnkgbmF2XG5cdHZhciAkbWVudUJ0biA9ICQoXCIuc2l0ZS1oZWFkZXItLW5hdi1idG5cIik7XG5cdHZhciAkbWVudUNvbnRhaW5lciA9ICQoXCIuc2l0ZS1oZWFkZXItLW5hdl9fbW9iaWxlXCIpO1xuXHQkbWVudUJ0bi5jbGljayhmdW5jdGlvbigpIHtcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiaXMtYWN0aXZlXCIpO1xuXHRcdCQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwibWVudS1hY3RpdmVcIik7XG5cdFx0JG1lbnVDb250YWluZXIudG9nZ2xlQ2xhc3MoXCJpcy1hY3RpdmVcIik7XG5cdH0pO1xuXHQvLyAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG5cdC8vIFx0aWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiA1MCkge1xuXHQvLyBcdFx0JCgnLnNpdGUtaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ3NpdGUtaGVhZGVyX19kb3duJykuYWRkQ2xhc3MoJ3NpdGUtaGVhZGVyX191cCcpXG5cdC8vIFx0XHR9IGVsc2Uge1xuXHQvLyBcdFx0JCgnLnNpdGUtaGVhZGVyJykuYWRkQ2xhc3MoJ3NpdGUtaGVhZGVyX19kb3duJykucmVtb3ZlQ2xhc3MoJ3NpdGUtaGVhZGVyX191cCcpXG5cdC8vIFx0XHR9XG5cdC8vIH0pO1xuXG59KTtcblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiggJCApIHtcblx0JCggXCIuc2l0ZS1oZWFkZXItLW5hdl9fbW9iaWxlIC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiICkuYWZ0ZXIoICc8c3BhbiBjbGFzcz1cImRyb3Bkb3duLWJ1dHRvblwiPiZuYnNwOzwvc3Bhbj4nICk7XG5cdCQoJy5kcm9wZG93bi1idXR0b24nKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImlzLWFjdGl2ZVwiKSkge1xuXHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG5cdFx0XHQkKHRoaXMpLm5leHQoJy5zdWItbWVudScpLnNsaWRlVXAoJ25vcm1hbCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblx0XHRcdCQodGhpcykubmV4dCgnLnN1Yi1tZW51Jykuc2xpZGVEb3duKCdub3JtYWwnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xufSk7Il0sIm1hcHBpbmdzIjoiQUFBQUEsTUFBTSxDQUFDQyxRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFVBQVNDLENBQUMsRUFBRTtFQUNsQztFQUNBLElBQUlDLFFBQVEsR0FBR0QsQ0FBQyxDQUFDLHVCQUF1QixDQUFDO0VBQ3pDLElBQUlFLGNBQWMsR0FBR0YsQ0FBQyxDQUFDLDJCQUEyQixDQUFDO0VBQ25EQyxRQUFRLENBQUNFLEtBQUssQ0FBQyxZQUFXO0lBQ3pCSCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNJLFdBQVcsQ0FBQyxXQUFXLENBQUM7SUFDaENKLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0ksV0FBVyxDQUFDLGFBQWEsQ0FBQztJQUNwQ0YsY0FBYyxDQUFDRSxXQUFXLENBQUMsV0FBVyxDQUFDO0VBQ3hDLENBQUMsQ0FBQztFQUNGO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBRUQsQ0FBQyxDQUFDO0FBRUZQLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQyxVQUFVQyxDQUFDLEVBQUc7RUFDcENBLENBQUMsQ0FBRSx1REFBd0QsQ0FBQyxDQUFDSyxLQUFLLENBQUUsNkNBQThDLENBQUM7RUFDbkhMLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDRyxLQUFLLENBQUMsWUFBVztJQUN0QyxJQUFJSCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNNLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtNQUNsQ04sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDTyxXQUFXLENBQUMsV0FBVyxDQUFDO01BQ2hDUCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNRLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUM1QyxDQUFDLE1BQU07TUFDTlQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDVSxRQUFRLENBQUMsV0FBVyxDQUFDO01BQzdCVixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNRLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQ0csU0FBUyxDQUFDLFFBQVEsQ0FBQztJQUM5QztJQUVBLE9BQU8sS0FBSztFQUNiLENBQUMsQ0FBQztBQUNILENBQUMsQ0FBQyIsImlnbm9yZUxpc3QiOltdLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9tZW51LmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/components/menu.js\n");

/***/ }),

/***/ "./src/js/components/no-js.js":
/*!************************************!*\
  !*** ./src/js/components/no-js.js ***!
  \************************************/
/***/ (() => {

"use strict";
eval("\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  document.body.classList.remove(\"no-js\");\n  document.body.classList.add(\"js\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9uby1qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYkEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO0VBQ3hERCxRQUFRLENBQUNFLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsT0FBTyxDQUFDO0VBQ3ZDSixRQUFRLENBQUNFLElBQUksQ0FBQ0MsU0FBUyxDQUFDRSxHQUFHLENBQUMsSUFBSSxDQUFDO0FBQ2xDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29yaWdpbi8uL3NyYy9qcy9jb21wb25lbnRzL25vLWpzLmpzPzZkYmQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tanNcIik7XG5cdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImpzXCIpO1xufSk7XG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYm9keSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/components/no-js.js\n");

/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/***/ (() => {

eval("jQuery(document).ready(function ($) {\n  $(\".gallery\").slick({\n    // settings: \"unslick\",\n    // speed: 200,\n    // slidesToShow: 1,\n    // slidesToScroll: 1,\n    // autoplay: true,\n    // autoplaySpeed: 5000,\n    // arrows: false,\n    // infinite: true,\n    // dots: true,\n    // adaptiveHeight: true,\n\n    dots: false,\n    arrows: false,\n    infinite: true,\n    speed: 300,\n    slidesToShow: 1,\n    adaptiveHeight: true,\n    asNavFor: '.gallery-nav'\n  });\n  $('.gallery-nav').slick({\n    slidesToShow: 5,\n    slidesToScroll: 1,\n    asNavFor: '.gallery',\n    dots: false,\n    centerMode: true,\n    focusOnSelect: true\n  });\n  $(\".reviews-slider\").slick({\n    // settings: \"unslick\",\n    speed: 200,\n    slidesToShow: 2,\n    slidesToScroll: 1,\n    autoplay: true,\n    autoplaySpeed: 3000,\n    arrows: true,\n    infinite: true,\n    dots: false,\n    responsive: [{\n      breakpoint: 930,\n      settings: {\n        slidesToShow: 1\n      }\n    }, {\n      breakpoint: 400,\n      settings: {\n        slidesToShow: 1\n      }\n    }]\n  });\n\n  // $(\".feature-properties__list\").slick({\n  // \t// settings: \"unslick\",\n  // \tspeed: 200,\n  // \tslidesToShow: 4,\n  // \tslidesToScroll: 1,\n  // \tautoplay: false,\n  // \tarrows: true,\n  // \tinfinite: true,\n  // \tdots: false,\n  // \tresponsive: [\n  // \t\t{\n  // \t\t\tbreakpoint: 1170,\n  // \t\t\tsettings: {\n  // \t\t\tslidesToShow: 3,\n  // \t\t\t}\n  // \t\t},\n  // \t\t{\n  // \t\t\tbreakpoint: 670,\n  // \t\t\tsettings: {\n  // \t\t\tslidesToShow: 2,\n  // \t\t\t}\n  // \t\t},\n  // \t\t{\n  // \t\t\tbreakpoint: 600,\n  // \t\t\tsettings: {\n  // \t\t\tslidesToShow: 2,\n  // \t\t\t}\n  // \t\t}\n  // \t]\n  // }); \n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiJCIsInNsaWNrIiwiZG90cyIsImFycm93cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJhZGFwdGl2ZUhlaWdodCIsImFzTmF2Rm9yIiwic2xpZGVzVG9TY3JvbGwiLCJjZW50ZXJNb2RlIiwiZm9jdXNPblNlbGVjdCIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiXSwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3JpZ2luLy4vc3JjL2pzL2NvbXBvbmVudHMvc2xpZGVyLmpzPzU5MjUiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XG5cblx0JChcIi5nYWxsZXJ5XCIpLnNsaWNrKHtcblx0XHQvLyBzZXR0aW5nczogXCJ1bnNsaWNrXCIsXG5cdFx0Ly8gc3BlZWQ6IDIwMCxcblx0XHQvLyBzbGlkZXNUb1Nob3c6IDEsXG5cdFx0Ly8gc2xpZGVzVG9TY3JvbGw6IDEsXG5cdFx0Ly8gYXV0b3BsYXk6IHRydWUsXG5cdFx0Ly8gYXV0b3BsYXlTcGVlZDogNTAwMCxcblx0XHQvLyBhcnJvd3M6IGZhbHNlLFxuXHRcdC8vIGluZmluaXRlOiB0cnVlLFxuXHRcdC8vIGRvdHM6IHRydWUsXG5cdFx0Ly8gYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG5cblx0XHRkb3RzOiBmYWxzZSxcblx0XHRhcnJvd3M6IGZhbHNlLFxuXHRcdGluZmluaXRlOiB0cnVlLFxuXHRcdHNwZWVkOiAzMDAsXG5cdFx0c2xpZGVzVG9TaG93OiAxLFxuXHRcdGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuXHRcdGFzTmF2Rm9yOiAnLmdhbGxlcnktbmF2Jyxcblx0fSk7IFxuXHRcblx0JCgnLmdhbGxlcnktbmF2Jykuc2xpY2soe1xuXHRcdHNsaWRlc1RvU2hvdzogNSxcblx0XHRzbGlkZXNUb1Njcm9sbDogMSxcblx0XHRhc05hdkZvcjogJy5nYWxsZXJ5Jyxcblx0XHRkb3RzOiBmYWxzZSxcblx0XHRjZW50ZXJNb2RlOiB0cnVlLFxuXHRcdGZvY3VzT25TZWxlY3Q6IHRydWVcblx0ICB9KTtcblxuXHQgICQoXCIucmV2aWV3cy1zbGlkZXJcIikuc2xpY2soe1xuXHRcdC8vIHNldHRpbmdzOiBcInVuc2xpY2tcIixcblx0XHRzcGVlZDogMjAwLFxuXHRcdHNsaWRlc1RvU2hvdzogMixcblx0XHRzbGlkZXNUb1Njcm9sbDogMSxcblx0XHRhdXRvcGxheTogdHJ1ZSxcblx0XHRhdXRvcGxheVNwZWVkOiAzMDAwLFxuXHRcdGFycm93czogdHJ1ZSxcblx0XHRpbmZpbml0ZTogdHJ1ZSxcblx0XHRkb3RzOiBmYWxzZSxcblxuXHRcdHJlc3BvbnNpdmU6IFtcblx0XHRcdHtcblx0XHRcdFx0YnJlYWtwb2ludDogOTMwLFxuXHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRzbGlkZXNUb1Nob3c6IDEsXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGJyZWFrcG9pbnQ6IDQwMCxcblx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0c2xpZGVzVG9TaG93OiAxLFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XVxuXHR9KTsgXG5cblx0Ly8gJChcIi5mZWF0dXJlLXByb3BlcnRpZXNfX2xpc3RcIikuc2xpY2soe1xuXHQvLyBcdC8vIHNldHRpbmdzOiBcInVuc2xpY2tcIixcblx0Ly8gXHRzcGVlZDogMjAwLFxuXHQvLyBcdHNsaWRlc1RvU2hvdzogNCxcblx0Ly8gXHRzbGlkZXNUb1Njcm9sbDogMSxcblx0Ly8gXHRhdXRvcGxheTogZmFsc2UsXG5cdC8vIFx0YXJyb3dzOiB0cnVlLFxuXHQvLyBcdGluZmluaXRlOiB0cnVlLFxuXHQvLyBcdGRvdHM6IGZhbHNlLFxuXHQvLyBcdHJlc3BvbnNpdmU6IFtcblx0Ly8gXHRcdHtcblx0Ly8gXHRcdFx0YnJlYWtwb2ludDogMTE3MCxcblx0Ly8gXHRcdFx0c2V0dGluZ3M6IHtcblx0Ly8gXHRcdFx0c2xpZGVzVG9TaG93OiAzLFxuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHR9LFxuXHQvLyBcdFx0e1xuXHQvLyBcdFx0XHRicmVha3BvaW50OiA2NzAsXG5cdC8vIFx0XHRcdHNldHRpbmdzOiB7XG5cdC8vIFx0XHRcdHNsaWRlc1RvU2hvdzogMixcblx0Ly8gXHRcdFx0fVxuXHQvLyBcdFx0fSxcblx0Ly8gXHRcdHtcblx0Ly8gXHRcdFx0YnJlYWtwb2ludDogNjAwLFxuXHQvLyBcdFx0XHRzZXR0aW5nczoge1xuXHQvLyBcdFx0XHRzbGlkZXNUb1Nob3c6IDIsXG5cdC8vIFx0XHRcdH1cblx0Ly8gXHRcdH1cblx0Ly8gXHRdXG5cdC8vIH0pOyBcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQyxVQUFTQyxDQUFDLEVBQUU7RUFFbENBLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsS0FBSyxDQUFDO0lBQ25CO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBQyxJQUFJLEVBQUUsS0FBSztJQUNYQyxNQUFNLEVBQUUsS0FBSztJQUNiQyxRQUFRLEVBQUUsSUFBSTtJQUNkQyxLQUFLLEVBQUUsR0FBRztJQUNWQyxZQUFZLEVBQUUsQ0FBQztJQUNmQyxjQUFjLEVBQUUsSUFBSTtJQUNwQkMsUUFBUSxFQUFFO0VBQ1gsQ0FBQyxDQUFDO0VBRUZSLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQ0MsS0FBSyxDQUFDO0lBQ3ZCSyxZQUFZLEVBQUUsQ0FBQztJQUNmRyxjQUFjLEVBQUUsQ0FBQztJQUNqQkQsUUFBUSxFQUFFLFVBQVU7SUFDcEJOLElBQUksRUFBRSxLQUFLO0lBQ1hRLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxhQUFhLEVBQUU7RUFDZCxDQUFDLENBQUM7RUFFRlgsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNDLEtBQUssQ0FBQztJQUM1QjtJQUNBSSxLQUFLLEVBQUUsR0FBRztJQUNWQyxZQUFZLEVBQUUsQ0FBQztJQUNmRyxjQUFjLEVBQUUsQ0FBQztJQUNqQkcsUUFBUSxFQUFFLElBQUk7SUFDZEMsYUFBYSxFQUFFLElBQUk7SUFDbkJWLE1BQU0sRUFBRSxJQUFJO0lBQ1pDLFFBQVEsRUFBRSxJQUFJO0lBQ2RGLElBQUksRUFBRSxLQUFLO0lBRVhZLFVBQVUsRUFBRSxDQUNYO01BQ0NDLFVBQVUsRUFBRSxHQUFHO01BQ2ZDLFFBQVEsRUFBRTtRQUNWVixZQUFZLEVBQUU7TUFDZDtJQUNELENBQUMsRUFDRDtNQUNDUyxVQUFVLEVBQUUsR0FBRztNQUNmQyxRQUFRLEVBQUU7UUFDVlYsWUFBWSxFQUFFO01BQ2Q7SUFDRCxDQUFDO0VBRUgsQ0FBQyxDQUFDOztFQUVGO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNELENBQUMsQ0FBQyIsImlnbm9yZUxpc3QiOltdLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/components/slider.js\n");

/***/ }),

/***/ "./src/js/components/toggle.js":
/*!*************************************!*\
  !*** ./src/js/components/toggle.js ***!
  \*************************************/
/***/ (() => {

"use strict";
eval("\n\n/**\n * Toggle script that is useful for showing navigation, modals, etc.\n *\n * The following data attributes are supported:\n *\n * data-toggle\n * data-toggle-class\n * data-toggle-body-class\n */\n(function () {\n  var elements = document.querySelectorAll('[data-toggle]');\n  if (elements.length === 0) {\n    return false;\n  }\n  elements.forEach(function (element) {\n    var targetElement = document.querySelector(element.dataset.toggle);\n    if (!targetElement) {\n      return;\n    }\n    var bodyClass = element.dataset.toggleBodyClass;\n    var toggleClass = element.dataset.toggleClass || 'is-toggled';\n    element.addEventListener('click', function () {\n      var isToggled = element.classList.contains(toggleClass);\n      targetElement.classList.toggle(toggleClass);\n      element.classList.toggle(toggleClass);\n      element.setAttribute('aria-expanded', isToggled ? 'false' : 'true');\n      targetElement.setAttribute('aria-hidden', isToggled ? 'true' : 'false');\n      if (bodyClass) {\n        document.body.classList.toggle(bodyClass);\n      }\n    }, false);\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy90b2dnbGUuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUMsYUFBWTtFQUNaLElBQU1BLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7RUFFM0QsSUFBSUYsUUFBUSxDQUFDRyxNQUFNLEtBQUssQ0FBQyxFQUFFO0lBQzFCLE9BQU8sS0FBSztFQUNiO0VBRUFILFFBQVEsQ0FBQ0ksT0FBTyxDQUFDLFVBQUFDLE9BQU8sRUFBSTtJQUMzQixJQUFNQyxhQUFhLEdBQUdMLFFBQVEsQ0FBQ00sYUFBYSxDQUFDRixPQUFPLENBQUNHLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDO0lBRXBFLElBQUksQ0FBQ0gsYUFBYSxFQUFFO01BQ25CO0lBQ0Q7SUFFQSxJQUFNSSxTQUFTLEdBQUdMLE9BQU8sQ0FBQ0csT0FBTyxDQUFDRyxlQUFlO0lBQ2pELElBQU1DLFdBQVcsR0FBR1AsT0FBTyxDQUFDRyxPQUFPLENBQUNJLFdBQVcsSUFBSSxZQUFZO0lBRS9EUCxPQUFPLENBQUNRLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQ3ZDLElBQU1DLFNBQVMsR0FBR1QsT0FBTyxDQUFDVSxTQUFTLENBQUNDLFFBQVEsQ0FBQ0osV0FBVyxDQUFDO01BQ3pETixhQUFhLENBQUNTLFNBQVMsQ0FBQ04sTUFBTSxDQUFDRyxXQUFXLENBQUM7TUFDM0NQLE9BQU8sQ0FBQ1UsU0FBUyxDQUFDTixNQUFNLENBQUNHLFdBQVcsQ0FBQztNQUVyQ1AsT0FBTyxDQUFDWSxZQUFZLENBQUMsZUFBZSxFQUFFSCxTQUFTLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQztNQUNuRVIsYUFBYSxDQUFDVyxZQUFZLENBQUMsYUFBYSxFQUFFSCxTQUFTLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQztNQUV2RSxJQUFJSixTQUFTLEVBQUU7UUFDZFQsUUFBUSxDQUFDaUIsSUFBSSxDQUFDSCxTQUFTLENBQUNOLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO01BQzFDO0lBQ0QsQ0FBQyxFQUFFLEtBQUssQ0FBQztFQUNWLENBQUMsQ0FBQztBQUNILENBQUMsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3JpZ2luLy4vc3JjL2pzL2NvbXBvbmVudHMvdG9nZ2xlLmpzPzY0ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFRvZ2dsZSBzY3JpcHQgdGhhdCBpcyB1c2VmdWwgZm9yIHNob3dpbmcgbmF2aWdhdGlvbiwgbW9kYWxzLCBldGMuXG4gKlxuICogVGhlIGZvbGxvd2luZyBkYXRhIGF0dHJpYnV0ZXMgYXJlIHN1cHBvcnRlZDpcbiAqXG4gKiBkYXRhLXRvZ2dsZVxuICogZGF0YS10b2dnbGUtY2xhc3NcbiAqIGRhdGEtdG9nZ2xlLWJvZHktY2xhc3NcbiAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHRjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZV0nKTtcblx0XG5cdGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0XG5cdGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0Y29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudC5kYXRhc2V0LnRvZ2dsZSk7XG5cdFxuXHRcdGlmICghdGFyZ2V0RWxlbWVudCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHRjb25zdCBib2R5Q2xhc3MgPSBlbGVtZW50LmRhdGFzZXQudG9nZ2xlQm9keUNsYXNzO1xuXHRcdGNvbnN0IHRvZ2dsZUNsYXNzID0gZWxlbWVudC5kYXRhc2V0LnRvZ2dsZUNsYXNzIHx8ICdpcy10b2dnbGVkJztcblx0XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGNvbnN0IGlzVG9nZ2xlZCA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRvZ2dsZUNsYXNzKTtcblx0XHRcdHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSh0b2dnbGVDbGFzcyk7XG5cdFx0XHRlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUodG9nZ2xlQ2xhc3MpO1xuXHRcdFx0XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGlzVG9nZ2xlZCA/ICdmYWxzZScgOiAndHJ1ZScpO1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgaXNUb2dnbGVkID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG5cdFx0XHRcblx0XHRcdGlmIChib2R5Q2xhc3MpIHtcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKGJvZHlDbGFzcyk7XG5cdFx0XHR9XG5cdFx0fSwgZmFsc2UpO1xuXHR9KTtcbn0oKSk7XG4iXSwibmFtZXMiOlsiZWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJmb3JFYWNoIiwiZWxlbWVudCIsInRhcmdldEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGF0YXNldCIsInRvZ2dsZSIsImJvZHlDbGFzcyIsInRvZ2dsZUJvZHlDbGFzcyIsInRvZ2dsZUNsYXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImlzVG9nZ2xlZCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic2V0QXR0cmlidXRlIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/components/toggle.js\n");

/***/ }),

/***/ "./src/js/components/unsupported-browsers.js":
/*!***************************************************!*\
  !*** ./src/js/components/unsupported-browsers.js ***!
  \***************************************************/
/***/ (() => {

"use strict";
eval("\n\n(function () {\n  var ua = window.navigator.userAgent;\n  var msie = ua.indexOf('MSIE ');\n  var trident = ua.indexOf('Trident/');\n  var browserAlert = document.querySelector('.unsupported-browser');\n  if (msie > 0 || trident > 0) {\n    browserAlert.setAttribute('style', 'display: block;');\n  }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy91bnN1cHBvcnRlZC1icm93c2Vycy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFWixhQUFZO0VBRVosSUFBSUEsRUFBRSxHQUFHQyxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUztFQUNuQyxJQUFJQyxJQUFJLEdBQUdKLEVBQUUsQ0FBQ0ssT0FBTyxDQUFDLE9BQU8sQ0FBQztFQUM5QixJQUFJQyxPQUFPLEdBQUdOLEVBQUUsQ0FBQ0ssT0FBTyxDQUFDLFVBQVUsQ0FBQztFQUNwQyxJQUFJRSxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHNCQUFzQixDQUFDO0VBRWpFLElBQUlMLElBQUksR0FBRyxDQUFDLElBQUlFLE9BQU8sR0FBRyxDQUFDLEVBQUU7SUFDNUJDLFlBQVksQ0FBQ0csWUFBWSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQztFQUN0RDtBQUVELENBQUMsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3JpZ2luLy4vc3JjL2pzL2NvbXBvbmVudHMvdW5zdXBwb3J0ZWQtYnJvd3NlcnMuanM/ZGQwNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cblx0dmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG5cdHZhciBtc2llID0gdWEuaW5kZXhPZignTVNJRSAnKTtcblx0dmFyIHRyaWRlbnQgPSB1YS5pbmRleE9mKCdUcmlkZW50LycpO1xuXHR2YXIgYnJvd3NlckFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuc3VwcG9ydGVkLWJyb3dzZXInKTtcblxuXHRpZiAobXNpZSA+IDAgfHwgdHJpZGVudCA+IDApIHtcblx0XHRicm93c2VyQWxlcnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jazsnKTtcblx0fVxuXG59KCkpO1xuIl0sIm5hbWVzIjpbInVhIiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibXNpZSIsImluZGV4T2YiLCJ0cmlkZW50IiwiYnJvd3NlckFsZXJ0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/components/unsupported-browsers.js\n");

/***/ }),

/***/ "./src/js/scripts.js":
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_no_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/no-js */ \"./src/js/components/no-js.js\");\n/* harmony import */ var _components_no_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_no_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_unsupported_browsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/unsupported-browsers */ \"./src/js/components/unsupported-browsers.js\");\n/* harmony import */ var _components_unsupported_browsers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_unsupported_browsers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/toggle */ \"./src/js/components/toggle.js\");\n/* harmony import */ var _components_toggle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_toggle__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/accordion */ \"./src/js/components/accordion.js\");\n/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_accordion__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu */ \"./src/js/components/menu.js\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_menu__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/slider */ \"./src/js/components/slider.js\");\n/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_slider__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n// import './components/cookie';\n\n\n\n\n\n\n// jQuery(document).ready(function($) {\n// \t$('.modal--close').click(function() {\n// \t\t$('.modal').addClass('noshow');\n// \t});\n// });\n\njQuery(document).ready(function ($) {\n  var cookie = localStorage.getItem('hideModal');\n\n  // if local storage key isn't found, set it to false\n  if (cookie === null) {\n    localStorage.setItem('hideModal', 'false');\n  }\n\n  // If key is false or not set, show banner\n  if (cookie === 'false' || cookie === null) {\n    $('.modal').addClass('is-visible');\n  }\n  $('.modal--close').click(function () {\n    $('.modal').removeClass('is-visible');\n    localStorage.setItem('hideModal', 'true');\n  });\n  $('a[href*=\"#\"]:not([href=\"#\"])').click(function () {\n    var offset = -220; // <-- change the value here\n    if (location.pathname.replace(/^\\//, '') == this.pathname.replace(/^\\//, '') && location.hostname == this.hostname) {\n      var target = $(this.hash);\n      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');\n      if (target.length) {\n        $('html, body').animate({\n          scrollTop: target.offset().top + offset\n        }, 0);\n        return false;\n      }\n    }\n  });\n  var className = \"inverted\";\n  var scrollTrigger = 60;\n  window.onscroll = function () {\n    // We add pageYOffset for compatibility with IE.\n    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {\n      document.getElementsByTagName(\"header\")[0].classList.add(className);\n    } else {\n      document.getElementsByTagName(\"header\")[0].classList.remove(className);\n    }\n  };\n});\n\n// (function () {\n// \tvar cookie = localStorage.getItem('hideModal');\n// \tvar cookieAlert = document.querySelector('.modal');\n// \tvar cookieBtn = document.querySelector('.modal--close');\n// \t\t// if local storage key isn't found, set it to false\n// \t\tif (cookie === null) {\n// \t\t\tlocalStorage.setItem('hideModal', 'true');\n// \t\t}\n// \t\t// If key is false or not set, show banner\n// \t\tif (cookie === 'false' || cookie === null) {\n// \t\t\tcookieAlert.classList.add('show');\n// \t\t}\n// \t\t// Hide modal and set local storage key on click\n// \t\tcookieBtn.addEventListener('click', function (event) {\n// \t\tlocalStorage.setItem('hideModal', 'true');\n// \t\tcookieAlert.classList.remove('show');\n// \t});\n// }());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2pzL3NjcmlwdHMuanM/YWI4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9jb21wb25lbnRzL25vLWpzJztcbi8vIGltcG9ydCAnLi9jb21wb25lbnRzL2Nvb2tpZSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy91bnN1cHBvcnRlZC1icm93c2Vycyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy90b2dnbGUnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYWNjb3JkaW9uJztcbmltcG9ydCAnLi9jb21wb25lbnRzL21lbnUnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2xpZGVyJztcblxuLy8galF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XG4vLyBcdCQoJy5tb2RhbC0tY2xvc2UnKS5jbGljayhmdW5jdGlvbigpIHtcbi8vIFx0XHQkKCcubW9kYWwnKS5hZGRDbGFzcygnbm9zaG93Jyk7XG4vLyBcdH0pO1xuLy8gfSk7XG5cbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xuICB2YXIgY29va2llID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZGVNb2RhbCcpO1xuICBcbiAgLy8gaWYgbG9jYWwgc3RvcmFnZSBrZXkgaXNuJ3QgZm91bmQsIHNldCBpdCB0byBmYWxzZVxuXHRpZiAoY29va2llID09PSBudWxsKSB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZGVNb2RhbCcsICdmYWxzZScpO1xuXHR9XG4gIFxuICAvLyBJZiBrZXkgaXMgZmFsc2Ugb3Igbm90IHNldCwgc2hvdyBiYW5uZXJcblx0aWYgKGNvb2tpZSA9PT0gJ2ZhbHNlJyB8fCBjb29raWUgPT09IG51bGwpIHtcbiAgICAkKCcubW9kYWwnKS5hZGRDbGFzcygnaXMtdmlzaWJsZScpO1xuXHR9XG4gIFxuICAkKCcubW9kYWwtLWNsb3NlJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgJCgnLm1vZGFsJykucmVtb3ZlQ2xhc3MoJ2lzLXZpc2libGUnKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlkZU1vZGFsJywgJ3RydWUnKTtcbiAgfSk7XG5cbiAgJCgnYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHR2YXIgb2Zmc2V0ID0gLTIyMDsgLy8gPC0tIGNoYW5nZSB0aGUgdmFsdWUgaGVyZVxuXHRcdGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywnJykgJiYgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZSkge1xuXHRcdFx0dmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcblx0XHRcdHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsnXScpO1xuXHRcdFx0aWYgKHRhcmdldC5sZW5ndGgpIHtcblx0XHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuXHRcdFx0XHRcdHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcCArIG9mZnNldFxuXHRcdFx0XHR9LCAwKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblxuXHR2YXIgY2xhc3NOYW1lID0gXCJpbnZlcnRlZFwiO1xuXHR2YXIgc2Nyb2xsVHJpZ2dlciA9IDYwO1xuXG5cdHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuXHQvLyBXZSBhZGQgcGFnZVlPZmZzZXQgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBJRS5cblx0aWYgKHdpbmRvdy5zY3JvbGxZID49IHNjcm9sbFRyaWdnZXIgfHwgd2luZG93LnBhZ2VZT2Zmc2V0ID49IHNjcm9sbFRyaWdnZXIpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRlclwiKVswXS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdH0gZWxzZSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkZXJcIilbMF0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuXHR9XG5cdH07XG5cbn0pO1xuXG4vLyAoZnVuY3Rpb24gKCkge1xuLy8gXHR2YXIgY29va2llID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZGVNb2RhbCcpO1xuLy8gXHR2YXIgY29va2llQWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbi8vIFx0dmFyIGNvb2tpZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC0tY2xvc2UnKTtcbi8vIFx0XHQvLyBpZiBsb2NhbCBzdG9yYWdlIGtleSBpc24ndCBmb3VuZCwgc2V0IGl0IHRvIGZhbHNlXG4vLyBcdFx0aWYgKGNvb2tpZSA9PT0gbnVsbCkge1xuLy8gXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZGVNb2RhbCcsICd0cnVlJyk7XG4vLyBcdFx0fVxuLy8gXHRcdC8vIElmIGtleSBpcyBmYWxzZSBvciBub3Qgc2V0LCBzaG93IGJhbm5lclxuLy8gXHRcdGlmIChjb29raWUgPT09ICdmYWxzZScgfHwgY29va2llID09PSBudWxsKSB7XG4vLyBcdFx0XHRjb29raWVBbGVydC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4vLyBcdFx0fVxuLy8gXHRcdC8vIEhpZGUgbW9kYWwgYW5kIHNldCBsb2NhbCBzdG9yYWdlIGtleSBvbiBjbGlja1xuLy8gXHRcdGNvb2tpZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuLy8gXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaWRlTW9kYWwnLCAndHJ1ZScpO1xuLy8gXHRcdGNvb2tpZUFsZXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbi8vIFx0fSk7XG4vLyB9KCkpOyJdLCJuYW1lcyI6WyJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiJCIsImNvb2tpZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiYWRkQ2xhc3MiLCJjbGljayIsInJlbW92ZUNsYXNzIiwib2Zmc2V0IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInJlcGxhY2UiLCJob3N0bmFtZSIsInRhcmdldCIsImhhc2giLCJsZW5ndGgiLCJzbGljZSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ0b3AiLCJjbGFzc05hbWUiLCJzY3JvbGxUcmlnZ2VyIiwid2luZG93Iiwib25zY3JvbGwiLCJzY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/scripts.js\n");

/***/ }),

/***/ "./src/styles/editor-style.scss":
/*!**************************************!*\
  !*** ./src/styles/editor-style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2VkaXRvci1zdHlsZS5zY3NzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL29yaWdpbi8uL3NyYy9zdHlsZXMvZWRpdG9yLXN0eWxlLnNjc3M/MjJlMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/editor-style.scss\n");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL29yaWdpbi8uL3NyYy9zdHlsZXMvc3R5bGVzLnNjc3M/OTFjYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/styles.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/scripts": 0,
/******/ 			"css/editor-style": 0,
/******/ 			"css/styles": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkorigin"] = self["webpackChunkorigin"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/editor-style","css/styles"], () => (__webpack_require__("./src/js/scripts.js")))
/******/ 	__webpack_require__.O(undefined, ["css/editor-style","css/styles"], () => (__webpack_require__("./src/styles/styles.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/editor-style","css/styles"], () => (__webpack_require__("./src/styles/editor-style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;