(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(function (_) {
	var $overlay = (0, _jquery2.default)('.site-head').find('.overlay');
	var $gnav = (0, _jquery2.default)('[data-gnav]');
	// hamburger menu
	(0, _jquery2.default)('.nav-btn').click(function (_) {
		$overlay.toggle();
		$gnav.toggleClass('nav-open');
	});
	$overlay.click(function (_) {
		$overlay.toggle();
		$gnav.removeClass('nav-open');
	});

	// to top button
	var show_btn = 100;
	var $to_top = (0, _jquery2.default)('.site-footer .to-top');
	var $window = (0, _jquery2.default)(window);
	$to_top.hide();
	$to_top.on('click', function (evt) {
		evt.preventDefault();
		(0, _jquery2.default)('html,body').animate({ scrollTop: 0 }, 500);
	});

	$window.on('load scroll resize', function (_) {
		if ($window.scrollTop() >= show_btn) {
			$to_top.fadeIn('normal');
		} else if ($window.scrollTop() < show_btn) {
			$to_top.fadeOut('normal');
		}
	});
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDQUE7Ozs7OztBQUVBLHNCQUFHLGFBQUk7QUFDTixLQUFNLFdBQVcsc0JBQUcsWUFBSCxFQUFrQixJQUFsQixDQUF3QixVQUF4QixDQUFYLENBREE7QUFFTixLQUFNLFFBQVEsc0JBQUcsYUFBSCxDQUFSOztBQUZBLHNCQUlOLENBQUcsVUFBSCxFQUFnQixLQUFoQixDQUF1QixhQUFJO0FBQzFCLFdBQVMsTUFBVCxHQUQwQjtBQUUxQixRQUFNLFdBQU4sQ0FBbUIsVUFBbkIsRUFGMEI7RUFBSixDQUF2QixDQUpNO0FBUU4sVUFBUyxLQUFULENBQWdCLGFBQUk7QUFDbkIsV0FBUyxNQUFULEdBRG1CO0FBRW5CLFFBQU0sV0FBTixDQUFtQixVQUFuQixFQUZtQjtFQUFKLENBQWhCOzs7QUFSTSxLQWNBLFdBQVcsR0FBWCxDQWRBO0FBZU4sS0FBTSxVQUFVLHNCQUFHLHNCQUFILENBQVYsQ0FmQTtBQWdCTixLQUFNLFVBQVUsc0JBQUcsTUFBSCxDQUFWLENBaEJBO0FBaUJOLFNBQVEsSUFBUixHQWpCTTtBQWtCTixTQUFRLEVBQVIsQ0FBWSxPQUFaLEVBQXFCLGVBQU07QUFDMUIsTUFBSSxjQUFKLEdBRDBCO0FBRTFCLHdCQUFHLFdBQUgsRUFBaUIsT0FBakIsQ0FBMEIsRUFBRSxXQUFXLENBQVgsRUFBNUIsRUFBNEMsR0FBNUMsRUFGMEI7RUFBTixDQUFyQixDQWxCTTs7QUF1Qk4sU0FBUSxFQUFSLENBQVksb0JBQVosRUFBa0MsYUFBSTtBQUNyQyxNQUFJLFFBQVEsU0FBUixNQUF1QixRQUF2QixFQUFrQztBQUNyQyxXQUFRLE1BQVIsQ0FBZ0IsUUFBaEIsRUFEcUM7R0FBdEMsTUFFTyxJQUFJLFFBQVEsU0FBUixLQUFzQixRQUF0QixFQUFpQztBQUMzQyxXQUFRLE9BQVIsQ0FBaUIsUUFBakIsRUFEMkM7R0FBckM7RUFIMEIsQ0FBbEMsQ0F2Qk07Q0FBSixDQUFIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbiQoIF89PiB7XG5cdGNvbnN0ICRvdmVybGF5ID0gJCggJy5zaXRlLWhlYWQnICkuZmluZCggJy5vdmVybGF5JyApO1xuXHRjb25zdCAkZ25hdiA9ICQoICdbZGF0YS1nbmF2XScgKTtcblx0Ly8gaGFtYnVyZ2VyIG1lbnVcblx0JCggJy5uYXYtYnRuJyApLmNsaWNrKCBfPT4ge1xuXHRcdCRvdmVybGF5LnRvZ2dsZSgpO1xuXHRcdCRnbmF2LnRvZ2dsZUNsYXNzKCAnbmF2LW9wZW4nICk7XG5cdH0gKTtcblx0JG92ZXJsYXkuY2xpY2soIF89PiB7XG5cdFx0JG92ZXJsYXkudG9nZ2xlKCk7XG5cdFx0JGduYXYucmVtb3ZlQ2xhc3MoICduYXYtb3BlbicgKTtcblx0fSApO1xuXG5cdC8vIHRvIHRvcCBidXR0b25cblx0Y29uc3Qgc2hvd19idG4gPSAxMDA7XG5cdGNvbnN0ICR0b190b3AgPSAkKCAnLnNpdGUtZm9vdGVyIC50by10b3AnICk7XG5cdGNvbnN0ICR3aW5kb3cgPSAkKCB3aW5kb3cgKTtcblx0JHRvX3RvcC5oaWRlKCk7XG5cdCR0b190b3Aub24oICdjbGljaycsIGV2dD0+IHtcblx0XHRldnQucHJldmVudERlZmF1bHQoKTtcblx0XHQkKCAnaHRtbCxib2R5JyApLmFuaW1hdGUoIHsgc2Nyb2xsVG9wOiAwIH0sIDUwMCApO1xuXHR9ICk7XG5cblx0JHdpbmRvdy5vbiggJ2xvYWQgc2Nyb2xsIHJlc2l6ZScsIF89PiB7XG5cdFx0aWYoICR3aW5kb3cuc2Nyb2xsVG9wKCkgPj0gc2hvd19idG4gKSB7XG5cdFx0XHQkdG9fdG9wLmZhZGVJbiggJ25vcm1hbCcgKTtcblx0XHR9IGVsc2UgaWYoICR3aW5kb3cuc2Nyb2xsVG9wKCkgPCBzaG93X2J0biApIHtcblx0XHRcdCR0b190b3AuZmFkZU91dCggJ25vcm1hbCcgKTtcblx0XHR9XG5cdH0gKTtcblxufSApO1xuIl19
