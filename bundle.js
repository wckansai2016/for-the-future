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

		var scrollHeight = (0, _jquery2.default)(document).height();
		var scrollPosition = $window.height() + $window.scrollTop();
		var $footer = (0, _jquery2.default)('footer');

		if (scrollHeight - scrollPosition + 10 <= $footer.height()) {
			$to_top.css({
				position: 'absolute',
				bottom: $footer.height()
			});
		} else {
			$to_top.css({
				position: 'fixed',
				bottom: "10px"
			});
		}
	});
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDQUE7Ozs7OztBQUVBLHNCQUFHLGFBQUk7QUFDTixLQUFNLFdBQVcsc0JBQUcsWUFBSCxFQUFrQixJQUFsQixDQUF3QixVQUF4QixDQUFqQjtBQUNBLEtBQU0sUUFBUSxzQkFBRyxhQUFILENBQWQ7O0FBRUEsdUJBQUcsVUFBSCxFQUFnQixLQUFoQixDQUF1QixhQUFJO0FBQzFCLFdBQVMsTUFBVDtBQUNBLFFBQU0sV0FBTixDQUFtQixVQUFuQjtBQUNBLEVBSEQ7QUFJQSxVQUFTLEtBQVQsQ0FBZ0IsYUFBSTtBQUNuQixXQUFTLE1BQVQ7QUFDQSxRQUFNLFdBQU4sQ0FBbUIsVUFBbkI7QUFDQSxFQUhEOzs7QUFNQSxLQUFNLFdBQVcsR0FBakI7QUFDQSxLQUFNLFVBQVUsc0JBQUcsc0JBQUgsQ0FBaEI7QUFDQSxLQUFNLFVBQVUsc0JBQUcsTUFBSCxDQUFoQjtBQUNBLFNBQVEsSUFBUjtBQUNBLFNBQVEsRUFBUixDQUFZLE9BQVosRUFBcUIsZUFBTTtBQUMxQixNQUFJLGNBQUo7QUFDQSx3QkFBRyxXQUFILEVBQWlCLE9BQWpCLENBQTBCLEVBQUUsV0FBVyxDQUFiLEVBQTFCLEVBQTRDLEdBQTVDO0FBQ0EsRUFIRDs7QUFLQSxTQUFRLEVBQVIsQ0FBWSxvQkFBWixFQUFrQyxhQUFJO0FBQ3JDLE1BQUksUUFBUSxTQUFSLE1BQXVCLFFBQTNCLEVBQXNDO0FBQ3JDLFdBQVEsTUFBUixDQUFnQixRQUFoQjtBQUNBLEdBRkQsTUFFTyxJQUFJLFFBQVEsU0FBUixLQUFzQixRQUExQixFQUFxQztBQUMzQyxXQUFRLE9BQVIsQ0FBaUIsUUFBakI7QUFDQTs7QUFFRCxNQUFNLGVBQWUsc0JBQUcsUUFBSCxFQUFjLE1BQWQsRUFBckI7QUFDQSxNQUFNLGlCQUFpQixRQUFRLE1BQVIsS0FBbUIsUUFBUSxTQUFSLEVBQTFDO0FBQ0EsTUFBTSxVQUFVLHNCQUFHLFFBQUgsQ0FBaEI7O0FBRUEsTUFBSSxlQUFlLGNBQWYsR0FBZ0MsRUFBaEMsSUFBc0MsUUFBUSxNQUFSLEVBQTFDLEVBQTZEO0FBQzVELFdBQVEsR0FBUixDQUFhO0FBQ1osY0FBVSxVQURFO0FBRVosWUFBUSxRQUFRLE1BQVI7QUFGSSxJQUFiO0FBSUEsR0FMRCxNQUtPO0FBQ04sV0FBUSxHQUFSLENBQWE7QUFDWixjQUFVLE9BREU7QUFFWixZQUFRO0FBRkksSUFBYjtBQUlBO0FBQ0QsRUF0QkQ7QUF3QkEsQ0EvQ0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuJCggXz0+IHtcblx0Y29uc3QgJG92ZXJsYXkgPSAkKCAnLnNpdGUtaGVhZCcgKS5maW5kKCAnLm92ZXJsYXknICk7XG5cdGNvbnN0ICRnbmF2ID0gJCggJ1tkYXRhLWduYXZdJyApO1xuXHQvLyBoYW1idXJnZXIgbWVudVxuXHQkKCAnLm5hdi1idG4nICkuY2xpY2soIF89PiB7XG5cdFx0JG92ZXJsYXkudG9nZ2xlKCk7XG5cdFx0JGduYXYudG9nZ2xlQ2xhc3MoICduYXYtb3BlbicgKTtcblx0fSApO1xuXHQkb3ZlcmxheS5jbGljayggXz0+IHtcblx0XHQkb3ZlcmxheS50b2dnbGUoKTtcblx0XHQkZ25hdi5yZW1vdmVDbGFzcyggJ25hdi1vcGVuJyApO1xuXHR9ICk7XG5cblx0Ly8gdG8gdG9wIGJ1dHRvblxuXHRjb25zdCBzaG93X2J0biA9IDEwMDtcblx0Y29uc3QgJHRvX3RvcCA9ICQoICcuc2l0ZS1mb290ZXIgLnRvLXRvcCcgKTtcblx0Y29uc3QgJHdpbmRvdyA9ICQoIHdpbmRvdyApO1xuXHQkdG9fdG9wLmhpZGUoKTtcblx0JHRvX3RvcC5vbiggJ2NsaWNrJywgZXZ0PT4ge1xuXHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdCQoICdodG1sLGJvZHknICkuYW5pbWF0ZSggeyBzY3JvbGxUb3A6IDAgfSwgNTAwICk7XG5cdH0gKTtcblxuXHQkd2luZG93Lm9uKCAnbG9hZCBzY3JvbGwgcmVzaXplJywgXz0+IHtcblx0XHRpZiggJHdpbmRvdy5zY3JvbGxUb3AoKSA+PSBzaG93X2J0biApIHtcblx0XHRcdCR0b190b3AuZmFkZUluKCAnbm9ybWFsJyApO1xuXHRcdH0gZWxzZSBpZiggJHdpbmRvdy5zY3JvbGxUb3AoKSA8IHNob3dfYnRuICkge1xuXHRcdFx0JHRvX3RvcC5mYWRlT3V0KCAnbm9ybWFsJyApO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNjcm9sbEhlaWdodCA9ICQoIGRvY3VtZW50ICkuaGVpZ2h0KCk7XG5cdFx0Y29uc3Qgc2Nyb2xsUG9zaXRpb24gPSAkd2luZG93LmhlaWdodCgpICsgJHdpbmRvdy5zY3JvbGxUb3AoKTtcblx0XHRjb25zdCAkZm9vdGVyID0gJCggJ2Zvb3RlcicgKTtcblxuXHRcdGlmKCBzY3JvbGxIZWlnaHQgLSBzY3JvbGxQb3NpdGlvbiArIDEwIDw9ICRmb290ZXIuaGVpZ2h0KCkgKSB7XG5cdFx0XHQkdG9fdG9wLmNzcygge1xuXHRcdFx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHRcdFx0Ym90dG9tOiAkZm9vdGVyLmhlaWdodCgpXG5cdFx0XHR9ICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCR0b190b3AuY3NzKCB7XG5cdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHRib3R0b206IFwiMTBweFwiXG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9ICk7XG5cbn0gKTtcbiJdfQ==
