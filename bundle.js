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
	var $to_top = (0, _jquery2.default)('.to-top');
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

		var scrollHeight = (0, _jquery2.default)(document).height();
		var scrollPosition = $window.height() + $window.scrollTop();
		var $footer = (0, _jquery2.default)('.site-footer');

		if (scrollHeight - scrollPosition + 10 <= $footer.height()) {
			$to_top.css({
				bottom: $footer.height()
			});
		} else {
			$to_top.css({
				bottom: "10px"
			});
		}
	});
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDQUE7Ozs7OztBQUVBLHNCQUFHLGFBQUk7QUFDTixLQUFNLFdBQVcsc0JBQUcsWUFBSCxFQUFrQixJQUFsQixDQUF3QixVQUF4QixDQUFqQjtBQUNBLEtBQU0sUUFBUSxzQkFBRyxhQUFILENBQWQ7O0FBRUEsdUJBQUcsVUFBSCxFQUFnQixLQUFoQixDQUF1QixhQUFJO0FBQzFCLFdBQVMsTUFBVDtBQUNBLFFBQU0sV0FBTixDQUFtQixVQUFuQjtBQUNBLEVBSEQ7QUFJQSxVQUFTLEtBQVQsQ0FBZ0IsYUFBSTtBQUNuQixXQUFTLE1BQVQ7QUFDQSxRQUFNLFdBQU4sQ0FBbUIsVUFBbkI7QUFDQSxFQUhEOzs7QUFNQSxLQUFNLFdBQVcsR0FBakI7QUFDQSxLQUFNLFVBQVUsc0JBQUcsU0FBSCxDQUFoQjtBQUNBLEtBQU0sVUFBVSxzQkFBRyxNQUFILENBQWhCO0FBQ0EsU0FBUSxJQUFSO0FBQ0EsU0FBUSxFQUFSLENBQVksT0FBWixFQUFxQixlQUFNO0FBQzFCLE1BQUksY0FBSjtBQUNBLHdCQUFHLFdBQUgsRUFBaUIsT0FBakIsQ0FBMEIsRUFBRSxXQUFXLENBQWIsRUFBMUIsRUFBNEMsR0FBNUM7QUFDQSxFQUhEOztBQUtBLFNBQVEsRUFBUixDQUFZLG9CQUFaLEVBQWtDLGFBQUk7QUFDckMsTUFBSSxRQUFRLFNBQVIsTUFBdUIsUUFBM0IsRUFBc0M7QUFDckMsV0FBUSxNQUFSLENBQWdCLFFBQWhCO0FBQ0EsR0FGRCxNQUVPLElBQUksUUFBUSxTQUFSLEtBQXNCLFFBQTFCLEVBQXFDO0FBQzNDLFdBQVEsT0FBUixDQUFpQixRQUFqQjtBQUNBOztBQUVELE1BQU0sZUFBZSxzQkFBRyxRQUFILEVBQWMsTUFBZCxFQUFyQjtBQUNBLE1BQU0saUJBQWlCLFFBQVEsTUFBUixLQUFtQixRQUFRLFNBQVIsRUFBMUM7QUFDQSxNQUFNLFVBQVUsc0JBQUcsY0FBSCxDQUFoQjs7QUFFQSxNQUFJLGVBQWUsY0FBZixHQUFnQyxFQUFoQyxJQUFzQyxRQUFRLE1BQVIsRUFBMUMsRUFBNkQ7QUFDNUQsV0FBUSxHQUFSLENBQWE7QUFDWixZQUFRLFFBQVEsTUFBUjtBQURJLElBQWI7QUFHQSxHQUpELE1BSU87QUFDTixXQUFRLEdBQVIsQ0FBYTtBQUNaLFlBQVE7QUFESSxJQUFiO0FBR0E7QUFDRCxFQXBCRDtBQXNCQSxDQTdDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4kKCBfPT4ge1xuXHRjb25zdCAkb3ZlcmxheSA9ICQoICcuc2l0ZS1oZWFkJyApLmZpbmQoICcub3ZlcmxheScgKTtcblx0Y29uc3QgJGduYXYgPSAkKCAnW2RhdGEtZ25hdl0nICk7XG5cdC8vIGhhbWJ1cmdlciBtZW51XG5cdCQoICcubmF2LWJ0bicgKS5jbGljayggXz0+IHtcblx0XHQkb3ZlcmxheS50b2dnbGUoKTtcblx0XHQkZ25hdi50b2dnbGVDbGFzcyggJ25hdi1vcGVuJyApO1xuXHR9ICk7XG5cdCRvdmVybGF5LmNsaWNrKCBfPT4ge1xuXHRcdCRvdmVybGF5LnRvZ2dsZSgpO1xuXHRcdCRnbmF2LnJlbW92ZUNsYXNzKCAnbmF2LW9wZW4nICk7XG5cdH0gKTtcblxuXHQvLyB0byB0b3AgYnV0dG9uXG5cdGNvbnN0IHNob3dfYnRuID0gMTAwO1xuXHRjb25zdCAkdG9fdG9wID0gJCggJy50by10b3AnICk7XG5cdGNvbnN0ICR3aW5kb3cgPSAkKCB3aW5kb3cgKTtcblx0JHRvX3RvcC5oaWRlKCk7XG5cdCR0b190b3Aub24oICdjbGljaycsIGV2dD0+IHtcblx0XHRldnQucHJldmVudERlZmF1bHQoKTtcblx0XHQkKCAnaHRtbCxib2R5JyApLmFuaW1hdGUoIHsgc2Nyb2xsVG9wOiAwIH0sIDUwMCApO1xuXHR9ICk7XG5cblx0JHdpbmRvdy5vbiggJ2xvYWQgc2Nyb2xsIHJlc2l6ZScsIF89PiB7XG5cdFx0aWYoICR3aW5kb3cuc2Nyb2xsVG9wKCkgPj0gc2hvd19idG4gKSB7XG5cdFx0XHQkdG9fdG9wLmZhZGVJbiggJ25vcm1hbCcgKTtcblx0XHR9IGVsc2UgaWYoICR3aW5kb3cuc2Nyb2xsVG9wKCkgPCBzaG93X2J0biApIHtcblx0XHRcdCR0b190b3AuZmFkZU91dCggJ25vcm1hbCcgKTtcblx0XHR9XG5cblx0XHRjb25zdCBzY3JvbGxIZWlnaHQgPSAkKCBkb2N1bWVudCApLmhlaWdodCgpO1xuXHRcdGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gJHdpbmRvdy5oZWlnaHQoKSArICR3aW5kb3cuc2Nyb2xsVG9wKCk7XG5cdFx0Y29uc3QgJGZvb3RlciA9ICQoICcuc2l0ZS1mb290ZXInICk7XG5cblx0XHRpZiggc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsUG9zaXRpb24gKyAxMCA8PSAkZm9vdGVyLmhlaWdodCgpICkge1xuXHRcdFx0JHRvX3RvcC5jc3MoIHtcblx0XHRcdFx0Ym90dG9tOiAkZm9vdGVyLmhlaWdodCgpXG5cdFx0XHR9ICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCR0b190b3AuY3NzKCB7XG5cdFx0XHRcdGJvdHRvbTogXCIxMHB4XCJcblx0XHRcdH0gKTtcblx0XHR9XG5cdH0gKTtcblxufSApO1xuIl19
