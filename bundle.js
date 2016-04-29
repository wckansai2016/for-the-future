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
		$overlay.toggleClass('overlay-is-active');
		$gnav.attr('aria-expanded', $gnav.attr('aria-expanded') !== 'true');
	});
	$overlay.click(function (_) {
		$overlay.toggleClass('overlay-is-active');
		$gnav.attr('aria-expanded', $gnav.attr('aria-expanded') !== 'true');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDQUE7Ozs7OztBQUVBLHNCQUFHLGFBQUk7QUFDTixLQUFNLFdBQVcsc0JBQUcsWUFBSCxFQUFrQixJQUFsQixDQUF3QixVQUF4QixDQUFqQjtBQUNBLEtBQU0sUUFBUSxzQkFBRyxhQUFILENBQWQ7O0FBRUEsdUJBQUcsVUFBSCxFQUFnQixLQUFoQixDQUF1QixhQUFJO0FBQzFCLFdBQVMsV0FBVCxDQUFzQixtQkFBdEI7QUFDQSxRQUFNLElBQU4sQ0FBWSxlQUFaLEVBQTZCLE1BQU0sSUFBTixDQUFZLGVBQVosTUFBa0MsTUFBL0Q7QUFDQSxFQUhEO0FBSUEsVUFBUyxLQUFULENBQWdCLGFBQUk7QUFDbkIsV0FBUyxXQUFULENBQXNCLG1CQUF0QjtBQUNBLFFBQU0sSUFBTixDQUFZLGVBQVosRUFBNkIsTUFBTSxJQUFOLENBQVksZUFBWixNQUFrQyxNQUEvRDtBQUNBLEVBSEQ7OztBQU1BLEtBQU0sV0FBVyxHQUFqQjtBQUNBLEtBQU0sVUFBVSxzQkFBRyxTQUFILENBQWhCO0FBQ0EsS0FBTSxVQUFVLHNCQUFHLE1BQUgsQ0FBaEI7QUFDQSxTQUFRLElBQVI7QUFDQSxTQUFRLEVBQVIsQ0FBWSxPQUFaLEVBQXFCLGVBQU07QUFDMUIsTUFBSSxjQUFKO0FBQ0Esd0JBQUcsV0FBSCxFQUFpQixPQUFqQixDQUEwQixFQUFFLFdBQVcsQ0FBYixFQUExQixFQUE0QyxHQUE1QztBQUNBLEVBSEQ7O0FBS0EsU0FBUSxFQUFSLENBQVksb0JBQVosRUFBa0MsYUFBSTtBQUNyQyxNQUFJLFFBQVEsU0FBUixNQUF1QixRQUEzQixFQUFzQztBQUNyQyxXQUFRLE1BQVIsQ0FBZ0IsUUFBaEI7QUFDQSxHQUZELE1BRU8sSUFBSSxRQUFRLFNBQVIsS0FBc0IsUUFBMUIsRUFBcUM7QUFDM0MsV0FBUSxPQUFSLENBQWlCLFFBQWpCO0FBQ0E7O0FBRUQsTUFBTSxlQUFlLHNCQUFHLFFBQUgsRUFBYyxNQUFkLEVBQXJCO0FBQ0EsTUFBTSxpQkFBaUIsUUFBUSxNQUFSLEtBQW1CLFFBQVEsU0FBUixFQUExQztBQUNBLE1BQU0sVUFBVSxzQkFBRyxjQUFILENBQWhCOztBQUVBLE1BQUksZUFBZSxjQUFmLEdBQWdDLEVBQWhDLElBQXNDLFFBQVEsTUFBUixFQUExQyxFQUE2RDtBQUM1RCxXQUFRLEdBQVIsQ0FBYTtBQUNaLFlBQVEsUUFBUSxNQUFSO0FBREksSUFBYjtBQUdBLEdBSkQsTUFJTztBQUNOLFdBQVEsR0FBUixDQUFhO0FBQ1osWUFBUTtBQURJLElBQWI7QUFHQTtBQUNELEVBcEJEO0FBc0JBLENBN0NEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbiQoIF89PiB7XG5cdGNvbnN0ICRvdmVybGF5ID0gJCggJy5zaXRlLWhlYWQnICkuZmluZCggJy5vdmVybGF5JyApO1xuXHRjb25zdCAkZ25hdiA9ICQoICdbZGF0YS1nbmF2XScgKTtcblx0Ly8gaGFtYnVyZ2VyIG1lbnVcblx0JCggJy5uYXYtYnRuJyApLmNsaWNrKCBfPT4ge1xuXHRcdCRvdmVybGF5LnRvZ2dsZUNsYXNzKCAnb3ZlcmxheS1pcy1hY3RpdmUnICk7XG5cdFx0JGduYXYuYXR0ciggJ2FyaWEtZXhwYW5kZWQnLCAkZ25hdi5hdHRyKCAnYXJpYS1leHBhbmRlZCcgKSAhPT0gJ3RydWUnICk7XG5cdH0gKTtcblx0JG92ZXJsYXkuY2xpY2soIF89PiB7XG5cdFx0JG92ZXJsYXkudG9nZ2xlQ2xhc3MoICdvdmVybGF5LWlzLWFjdGl2ZScgKTtcblx0XHQkZ25hdi5hdHRyKCAnYXJpYS1leHBhbmRlZCcsICRnbmF2LmF0dHIoICdhcmlhLWV4cGFuZGVkJyApICE9PSAndHJ1ZScgKTtcblx0fSApO1xuXG5cdC8vIHRvIHRvcCBidXR0b25cblx0Y29uc3Qgc2hvd19idG4gPSAxMDA7XG5cdGNvbnN0ICR0b190b3AgPSAkKCAnLnRvLXRvcCcgKTtcblx0Y29uc3QgJHdpbmRvdyA9ICQoIHdpbmRvdyApO1xuXHQkdG9fdG9wLmhpZGUoKTtcblx0JHRvX3RvcC5vbiggJ2NsaWNrJywgZXZ0PT4ge1xuXHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdCQoICdodG1sLGJvZHknICkuYW5pbWF0ZSggeyBzY3JvbGxUb3A6IDAgfSwgNTAwICk7XG5cdH0gKTtcblxuXHQkd2luZG93Lm9uKCAnbG9hZCBzY3JvbGwgcmVzaXplJywgXz0+IHtcblx0XHRpZiggJHdpbmRvdy5zY3JvbGxUb3AoKSA+PSBzaG93X2J0biApIHtcblx0XHRcdCR0b190b3AuZmFkZUluKCAnbm9ybWFsJyApO1xuXHRcdH0gZWxzZSBpZiggJHdpbmRvdy5zY3JvbGxUb3AoKSA8IHNob3dfYnRuICkge1xuXHRcdFx0JHRvX3RvcC5mYWRlT3V0KCAnbm9ybWFsJyApO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNjcm9sbEhlaWdodCA9ICQoIGRvY3VtZW50ICkuaGVpZ2h0KCk7XG5cdFx0Y29uc3Qgc2Nyb2xsUG9zaXRpb24gPSAkd2luZG93LmhlaWdodCgpICsgJHdpbmRvdy5zY3JvbGxUb3AoKTtcblx0XHRjb25zdCAkZm9vdGVyID0gJCggJy5zaXRlLWZvb3RlcicgKTtcblxuXHRcdGlmKCBzY3JvbGxIZWlnaHQgLSBzY3JvbGxQb3NpdGlvbiArIDEwIDw9ICRmb290ZXIuaGVpZ2h0KCkgKSB7XG5cdFx0XHQkdG9fdG9wLmNzcygge1xuXHRcdFx0XHRib3R0b206ICRmb290ZXIuaGVpZ2h0KClcblx0XHRcdH0gKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHRvX3RvcC5jc3MoIHtcblx0XHRcdFx0Ym90dG9tOiBcIjEwcHhcIlxuXHRcdFx0fSApO1xuXHRcdH1cblx0fSApO1xuXG59ICk7XG4iXX0=
