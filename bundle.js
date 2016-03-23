(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(function () {

	// hamburger menu
	(0, _jquery2.default)('.nav-btn').click(function () {
		(0, _jquery2.default)('.site-head .overlay').toggle();
		(0, _jquery2.default)('.gnav').toggleClass('nav-open');
	});

	(0, _jquery2.default)('.site-head .overlay').click(function () {
		(0, _jquery2.default)('.site-head .overlay').toggle();
		(0, _jquery2.default)('.gnav').removeClass('nav-open');
	});

	// entry-eyecatch
	var view_width = (0, _jquery2.default)(window).width;
	var image_width = (0, _jquery2.default)('.entry-eyecatch img').width();
	var image_height;
	(0, _jquery2.default)('.entry-eyecatch img').bind('load', function () {
		image_height = (0, _jquery2.default)(this).height();
	});
	//var image_height = $('.entry-eyecatch img').height();
	var trim_height = parseInt(image_width / image_height * view_width - 400) / 2;
	//alert(image_height);
	//$('.entry-eyecatch img').css('top':'-'+trim_height+'px');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDQUE7Ozs7OztBQUVBLHNCQUFFLFlBQVc7OztBQUdaLHVCQUFFLFVBQUYsRUFBYyxLQUFkLENBQW9CLFlBQVc7QUFDOUIsd0JBQUUscUJBQUYsRUFBeUIsTUFBekIsR0FEOEI7QUFFOUIsd0JBQUUsT0FBRixFQUFXLFdBQVgsQ0FBdUIsVUFBdkIsRUFGOEI7RUFBWCxDQUFwQixDQUhZOztBQVFaLHVCQUFFLHFCQUFGLEVBQXlCLEtBQXpCLENBQStCLFlBQVc7QUFDekMsd0JBQUUscUJBQUYsRUFBeUIsTUFBekIsR0FEeUM7QUFFekMsd0JBQUUsT0FBRixFQUFXLFdBQVgsQ0FBdUIsVUFBdkIsRUFGeUM7RUFBWCxDQUEvQjs7O0FBUlksS0FjUixhQUFhLHNCQUFFLE1BQUYsRUFBVSxLQUFWLENBZEw7QUFlWixLQUFJLGNBQWMsc0JBQUUscUJBQUYsRUFBeUIsS0FBekIsRUFBZCxDQWZRO0FBZ0JaLEtBQUksWUFBSixDQWhCWTtBQWlCWix1QkFBRSxxQkFBRixFQUF5QixJQUF6QixDQUE4QixNQUE5QixFQUFzQyxZQUFXO0FBQzlDLGlCQUFlLHNCQUFFLElBQUYsRUFBUSxNQUFSLEVBQWYsQ0FEOEM7RUFBWCxDQUF0Qzs7QUFqQlksS0FxQlIsY0FBYyxTQUFTLGNBQVksWUFBWixHQUF5QixVQUF6QixHQUFvQyxHQUFwQyxDQUFULEdBQWtELENBQWxEOzs7OztBQXJCTixLQTBCTixXQUFXLEdBQVgsQ0ExQk07QUEyQlosS0FBTSxVQUFVLHNCQUFHLHNCQUFILENBQVYsQ0EzQk07QUE0QlosS0FBTSxVQUFVLHNCQUFHLE1BQUgsQ0FBVixDQTVCTTtBQTZCWixTQUFRLElBQVIsR0E3Qlk7QUE4QlosU0FBUSxFQUFSLENBQVksT0FBWixFQUFxQixlQUFNO0FBQzFCLE1BQUksY0FBSixHQUQwQjtBQUUxQix3QkFBRyxXQUFILEVBQWlCLE9BQWpCLENBQTBCLEVBQUUsV0FBVyxDQUFYLEVBQTVCLEVBQTRDLEdBQTVDLEVBRjBCO0VBQU4sQ0FBckIsQ0E5Qlk7QUFrQ1osU0FBUSxFQUFSLENBQVksb0JBQVosRUFBa0MsYUFBSTtBQUNyQyxNQUFJLFFBQVEsU0FBUixNQUF1QixRQUF2QixFQUFrQztBQUNyQyxXQUFRLE1BQVIsQ0FBZ0IsUUFBaEIsRUFEcUM7R0FBdEMsTUFFTyxJQUFJLFFBQVEsU0FBUixLQUFzQixRQUF0QixFQUFpQztBQUMzQyxXQUFRLE9BQVIsQ0FBaUIsUUFBakIsRUFEMkM7R0FBckM7RUFIMEIsQ0FBbEMsQ0FsQ1k7Q0FBWCxDQUFGIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbiQoZnVuY3Rpb24oKSB7XG5cblx0Ly8gaGFtYnVyZ2VyIG1lbnVcblx0JCgnLm5hdi1idG4nKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHQkKCcuc2l0ZS1oZWFkIC5vdmVybGF5JykudG9nZ2xlKCk7XG5cdFx0JCgnLmduYXYnKS50b2dnbGVDbGFzcygnbmF2LW9wZW4nKTtcblx0fSk7XG5cblx0JCgnLnNpdGUtaGVhZCAub3ZlcmxheScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdCQoJy5zaXRlLWhlYWQgLm92ZXJsYXknKS50b2dnbGUoKTtcblx0XHQkKCcuZ25hdicpLnJlbW92ZUNsYXNzKCduYXYtb3BlbicpO1xuXHR9KTtcblxuXHQvLyBlbnRyeS1leWVjYXRjaFxuXHR2YXIgdmlld193aWR0aCA9ICQod2luZG93KS53aWR0aDtcblx0dmFyIGltYWdlX3dpZHRoID0gJCgnLmVudHJ5LWV5ZWNhdGNoIGltZycpLndpZHRoKCk7XG5cdHZhciBpbWFnZV9oZWlnaHQ7XG5cdCQoJy5lbnRyeS1leWVjYXRjaCBpbWcnKS5iaW5kKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgaW1hZ2VfaGVpZ2h0ID0gJCh0aGlzKS5oZWlnaHQoKTtcbiAgfSk7XG5cdC8vdmFyIGltYWdlX2hlaWdodCA9ICQoJy5lbnRyeS1leWVjYXRjaCBpbWcnKS5oZWlnaHQoKTtcblx0dmFyIHRyaW1faGVpZ2h0ID0gcGFyc2VJbnQoaW1hZ2Vfd2lkdGgvaW1hZ2VfaGVpZ2h0KnZpZXdfd2lkdGgtNDAwKS8yO1xuXHQvL2FsZXJ0KGltYWdlX2hlaWdodCk7XG5cdC8vJCgnLmVudHJ5LWV5ZWNhdGNoIGltZycpLmNzcygndG9wJzonLScrdHJpbV9oZWlnaHQrJ3B4Jyk7XG5cblx0Ly8gdG8gdG9wIGJ1dHRvblxuXHRjb25zdCBzaG93X2J0biA9IDEwMDtcblx0Y29uc3QgJHRvX3RvcCA9ICQoICcuc2l0ZS1mb290ZXIgLnRvLXRvcCcgKTtcblx0Y29uc3QgJHdpbmRvdyA9ICQoIHdpbmRvdyApO1xuXHQkdG9fdG9wLmhpZGUoKTtcblx0JHRvX3RvcC5vbiggJ2NsaWNrJywgZXZ0PT4ge1xuXHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdCQoICdodG1sLGJvZHknICkuYW5pbWF0ZSggeyBzY3JvbGxUb3A6IDAgfSwgNTAwICk7XG5cdH0gKTtcblx0JHdpbmRvdy5vbiggJ2xvYWQgc2Nyb2xsIHJlc2l6ZScsIF89PiB7XG5cdFx0aWYoICR3aW5kb3cuc2Nyb2xsVG9wKCkgPj0gc2hvd19idG4gKSB7XG5cdFx0XHQkdG9fdG9wLmZhZGVJbiggJ25vcm1hbCcgKTtcblx0XHR9IGVsc2UgaWYoICR3aW5kb3cuc2Nyb2xsVG9wKCkgPCBzaG93X2J0biApIHtcblx0XHRcdCR0b190b3AuZmFkZU91dCggJ25vcm1hbCcgKTtcblx0XHR9XG5cdH0gKTtcblxufSk7XG4iXX0=
