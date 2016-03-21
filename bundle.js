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
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDQUE7Ozs7OztBQUVBLHNCQUFFLFlBQVc7OztBQUdaLHVCQUFFLFVBQUYsRUFBYyxLQUFkLENBQW9CLFlBQVc7QUFDOUIsd0JBQUUscUJBQUYsRUFBeUIsTUFBekIsR0FEOEI7QUFFOUIsd0JBQUUsT0FBRixFQUFXLFdBQVgsQ0FBdUIsVUFBdkIsRUFGOEI7RUFBWCxDQUFwQixDQUhZOztBQVFaLHVCQUFFLHFCQUFGLEVBQXlCLEtBQXpCLENBQStCLFlBQVc7QUFDekMsd0JBQUUscUJBQUYsRUFBeUIsTUFBekIsR0FEeUM7QUFFekMsd0JBQUUsT0FBRixFQUFXLFdBQVgsQ0FBdUIsVUFBdkIsRUFGeUM7RUFBWCxDQUEvQjs7O0FBUlksS0FjUixhQUFhLHNCQUFFLE1BQUYsRUFBVSxLQUFWLENBZEw7QUFlWixLQUFJLGNBQWMsc0JBQUUscUJBQUYsRUFBeUIsS0FBekIsRUFBZCxDQWZRO0FBZ0JaLEtBQUksWUFBSixDQWhCWTtBQWlCWix1QkFBRSxxQkFBRixFQUF5QixJQUF6QixDQUE4QixNQUE5QixFQUFzQyxZQUFXO0FBQzlDLGlCQUFlLHNCQUFFLElBQUYsRUFBUSxNQUFSLEVBQWYsQ0FEOEM7RUFBWCxDQUF0Qzs7QUFqQlksS0FxQlIsY0FBYyxTQUFTLGNBQVksWUFBWixHQUF5QixVQUF6QixHQUFvQyxHQUFwQyxDQUFULEdBQWtELENBQWxEOzs7Q0FyQmpCLENBQUY7QUFBYSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4kKGZ1bmN0aW9uKCkge1xuXG5cdC8vIGhhbWJ1cmdlciBtZW51XG5cdCQoJy5uYXYtYnRuJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0JCgnLnNpdGUtaGVhZCAub3ZlcmxheScpLnRvZ2dsZSgpO1xuXHRcdCQoJy5nbmF2JykudG9nZ2xlQ2xhc3MoJ25hdi1vcGVuJyk7XG5cdH0pO1xuXG5cdCQoJy5zaXRlLWhlYWQgLm92ZXJsYXknKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHQkKCcuc2l0ZS1oZWFkIC5vdmVybGF5JykudG9nZ2xlKCk7XG5cdFx0JCgnLmduYXYnKS5yZW1vdmVDbGFzcygnbmF2LW9wZW4nKTtcblx0fSk7XG5cblx0Ly8gZW50cnktZXllY2F0Y2hcblx0dmFyIHZpZXdfd2lkdGggPSAkKHdpbmRvdykud2lkdGg7XG5cdHZhciBpbWFnZV93aWR0aCA9ICQoJy5lbnRyeS1leWVjYXRjaCBpbWcnKS53aWR0aCgpO1xuXHR2YXIgaW1hZ2VfaGVpZ2h0O1xuXHQkKCcuZW50cnktZXllY2F0Y2ggaW1nJykuYmluZCgnbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgIGltYWdlX2hlaWdodCA9ICQodGhpcykuaGVpZ2h0KCk7XG4gIH0pO1xuXHQvL3ZhciBpbWFnZV9oZWlnaHQgPSAkKCcuZW50cnktZXllY2F0Y2ggaW1nJykuaGVpZ2h0KCk7XG5cdHZhciB0cmltX2hlaWdodCA9IHBhcnNlSW50KGltYWdlX3dpZHRoL2ltYWdlX2hlaWdodCp2aWV3X3dpZHRoLTQwMCkvMjtcblx0Ly9hbGVydChpbWFnZV9oZWlnaHQpO1xuXHQvLyQoJy5lbnRyeS1leWVjYXRjaCBpbWcnKS5jc3MoJ3RvcCc6Jy0nK3RyaW1faGVpZ2h0KydweCcpO1xuXG59KTtcbiJdfQ==
