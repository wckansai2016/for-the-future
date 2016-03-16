(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(function () {

	(0, _jquery2.default)('header').prepend('<div class="overlay"></div>');

	(0, _jquery2.default)('.nav-btn').click(function () {
		(0, _jquery2.default)('.overlay').toggle();
		(0, _jquery2.default)('#gnav').toggleClass('nav-open');
	});

	(0, _jquery2.default)('.overlay').click(function () {
		(0, _jquery2.default)('.overlay').toggle();
		(0, _jquery2.default)('#gnav').removeClass('nav-open');
	});
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDQUE7Ozs7OztBQUVBLHNCQUFFLFlBQVc7O0FBRVosdUJBQUUsUUFBRixFQUFZLE9BQVosQ0FBb0IsNkJBQXBCLEVBRlk7O0FBSVosdUJBQUUsVUFBRixFQUFjLEtBQWQsQ0FBb0IsWUFBVztBQUM5Qix3QkFBRSxVQUFGLEVBQWMsTUFBZCxHQUQ4QjtBQUU5Qix3QkFBRSxPQUFGLEVBQVcsV0FBWCxDQUF1QixVQUF2QixFQUY4QjtFQUFYLENBQXBCLENBSlk7O0FBU1osdUJBQUUsVUFBRixFQUFjLEtBQWQsQ0FBb0IsWUFBVztBQUM5Qix3QkFBRSxVQUFGLEVBQWMsTUFBZCxHQUQ4QjtBQUU5Qix3QkFBRSxPQUFGLEVBQVcsV0FBWCxDQUF1QixVQUF2QixFQUY4QjtFQUFYLENBQXBCLENBVFk7Q0FBWCxDQUFGIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbiQoZnVuY3Rpb24oKSB7XG5cblx0JCgnaGVhZGVyJykucHJlcGVuZCgnPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48L2Rpdj4nKTtcblxuXHQkKCcubmF2LWJ0bicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdCQoJy5vdmVybGF5JykudG9nZ2xlKCk7XG5cdFx0JCgnI2duYXYnKS50b2dnbGVDbGFzcygnbmF2LW9wZW4nKTtcblx0fSk7XG5cblx0JCgnLm92ZXJsYXknKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHQkKCcub3ZlcmxheScpLnRvZ2dsZSgpO1xuXHRcdCQoJyNnbmF2JykucmVtb3ZlQ2xhc3MoJ25hdi1vcGVuJyk7XG5cdH0pO1xuXG59KTtcbiJdfQ==
