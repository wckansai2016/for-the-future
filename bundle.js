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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDQUE7Ozs7OztBQUVBLHNCQUFHLGFBQUk7QUFDTixLQUFNLFdBQVcsc0JBQUcsWUFBSCxFQUFrQixJQUFsQixDQUF3QixVQUF4QixDQUFqQjtBQUNBLEtBQU0sUUFBUSxzQkFBRyxhQUFILENBQWQ7QUFDQTtBQUNBLHVCQUFHLFVBQUgsRUFBZ0IsS0FBaEIsQ0FBdUIsYUFBSTtBQUMxQixXQUFTLFdBQVQsQ0FBc0IsbUJBQXRCO0FBQ0EsUUFBTSxJQUFOLENBQVksZUFBWixFQUE2QixNQUFNLElBQU4sQ0FBWSxlQUFaLE1BQWtDLE1BQS9EO0FBQ0EsRUFIRDtBQUlBLFVBQVMsS0FBVCxDQUFnQixhQUFJO0FBQ25CLFdBQVMsV0FBVCxDQUFzQixtQkFBdEI7QUFDQSxRQUFNLElBQU4sQ0FBWSxlQUFaLEVBQTZCLE1BQU0sSUFBTixDQUFZLGVBQVosTUFBa0MsTUFBL0Q7QUFDQSxFQUhEOztBQUtBO0FBQ0EsS0FBTSxXQUFXLEdBQWpCO0FBQ0EsS0FBTSxVQUFVLHNCQUFHLFNBQUgsQ0FBaEI7QUFDQSxLQUFNLFVBQVUsc0JBQUcsTUFBSCxDQUFoQjtBQUNBLFNBQVEsSUFBUjtBQUNBLFNBQVEsRUFBUixDQUFZLE9BQVosRUFBcUIsZUFBTTtBQUMxQixNQUFJLGNBQUo7QUFDQSx3QkFBRyxXQUFILEVBQWlCLE9BQWpCLENBQTBCLEVBQUUsV0FBVyxDQUFiLEVBQTFCLEVBQTRDLEdBQTVDO0FBQ0EsRUFIRDs7QUFLQSxTQUFRLEVBQVIsQ0FBWSxvQkFBWixFQUFrQyxhQUFJO0FBQ3JDLE1BQUksUUFBUSxTQUFSLE1BQXVCLFFBQTNCLEVBQXNDO0FBQ3JDLFdBQVEsTUFBUixDQUFnQixRQUFoQjtBQUNBLEdBRkQsTUFFTyxJQUFJLFFBQVEsU0FBUixLQUFzQixRQUExQixFQUFxQztBQUMzQyxXQUFRLE9BQVIsQ0FBaUIsUUFBakI7QUFDQTs7QUFFRCxNQUFNLGVBQWUsc0JBQUcsUUFBSCxFQUFjLE1BQWQsRUFBckI7QUFDQSxNQUFNLGlCQUFpQixRQUFRLE1BQVIsS0FBbUIsUUFBUSxTQUFSLEVBQTFDO0FBQ0EsTUFBTSxVQUFVLHNCQUFHLGNBQUgsQ0FBaEI7O0FBRUEsTUFBSSxlQUFlLGNBQWYsR0FBZ0MsRUFBaEMsSUFBc0MsUUFBUSxNQUFSLEVBQTFDLEVBQTZEO0FBQzVELFdBQVEsR0FBUixDQUFhO0FBQ1osWUFBUSxRQUFRLE1BQVI7QUFESSxJQUFiO0FBR0EsR0FKRCxNQUlPO0FBQ04sV0FBUSxHQUFSLENBQWE7QUFDWixZQUFRO0FBREksSUFBYjtBQUdBO0FBQ0QsRUFwQkQ7QUFzQkEsQ0E3Q0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuJCggXz0+IHtcblx0Y29uc3QgJG92ZXJsYXkgPSAkKCAnLnNpdGUtaGVhZCcgKS5maW5kKCAnLm92ZXJsYXknICk7XG5cdGNvbnN0ICRnbmF2ID0gJCggJ1tkYXRhLWduYXZdJyApO1xuXHQvLyBoYW1idXJnZXIgbWVudVxuXHQkKCAnLm5hdi1idG4nICkuY2xpY2soIF89PiB7XG5cdFx0JG92ZXJsYXkudG9nZ2xlQ2xhc3MoICdvdmVybGF5LWlzLWFjdGl2ZScgKTtcblx0XHQkZ25hdi5hdHRyKCAnYXJpYS1leHBhbmRlZCcsICRnbmF2LmF0dHIoICdhcmlhLWV4cGFuZGVkJyApICE9PSAndHJ1ZScgKTtcblx0fSApO1xuXHQkb3ZlcmxheS5jbGljayggXz0+IHtcblx0XHQkb3ZlcmxheS50b2dnbGVDbGFzcyggJ292ZXJsYXktaXMtYWN0aXZlJyApO1xuXHRcdCRnbmF2LmF0dHIoICdhcmlhLWV4cGFuZGVkJywgJGduYXYuYXR0ciggJ2FyaWEtZXhwYW5kZWQnICkgIT09ICd0cnVlJyApO1xuXHR9ICk7XG5cblx0Ly8gdG8gdG9wIGJ1dHRvblxuXHRjb25zdCBzaG93X2J0biA9IDEwMDtcblx0Y29uc3QgJHRvX3RvcCA9ICQoICcudG8tdG9wJyApO1xuXHRjb25zdCAkd2luZG93ID0gJCggd2luZG93ICk7XG5cdCR0b190b3AuaGlkZSgpO1xuXHQkdG9fdG9wLm9uKCAnY2xpY2snLCBldnQ9PiB7XG5cdFx0ZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0JCggJ2h0bWwsYm9keScgKS5hbmltYXRlKCB7IHNjcm9sbFRvcDogMCB9LCA1MDAgKTtcblx0fSApO1xuXG5cdCR3aW5kb3cub24oICdsb2FkIHNjcm9sbCByZXNpemUnLCBfPT4ge1xuXHRcdGlmKCAkd2luZG93LnNjcm9sbFRvcCgpID49IHNob3dfYnRuICkge1xuXHRcdFx0JHRvX3RvcC5mYWRlSW4oICdub3JtYWwnICk7XG5cdFx0fSBlbHNlIGlmKCAkd2luZG93LnNjcm9sbFRvcCgpIDwgc2hvd19idG4gKSB7XG5cdFx0XHQkdG9fdG9wLmZhZGVPdXQoICdub3JtYWwnICk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2Nyb2xsSGVpZ2h0ID0gJCggZG9jdW1lbnQgKS5oZWlnaHQoKTtcblx0XHRjb25zdCBzY3JvbGxQb3NpdGlvbiA9ICR3aW5kb3cuaGVpZ2h0KCkgKyAkd2luZG93LnNjcm9sbFRvcCgpO1xuXHRcdGNvbnN0ICRmb290ZXIgPSAkKCAnLnNpdGUtZm9vdGVyJyApO1xuXG5cdFx0aWYoIHNjcm9sbEhlaWdodCAtIHNjcm9sbFBvc2l0aW9uICsgMTAgPD0gJGZvb3Rlci5oZWlnaHQoKSApIHtcblx0XHRcdCR0b190b3AuY3NzKCB7XG5cdFx0XHRcdGJvdHRvbTogJGZvb3Rlci5oZWlnaHQoKVxuXHRcdFx0fSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdG9fdG9wLmNzcygge1xuXHRcdFx0XHRib3R0b206IFwiMTBweFwiXG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9ICk7XG5cbn0gKTtcbiJdfQ==
