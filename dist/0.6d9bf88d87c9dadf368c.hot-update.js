webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports) {

	eval("module.exports = $.fn.extend({\n\n\tsetScore: function (target) {\n\t\tvar currentScore = parseInt($(this).html());\n\t\t$(this).html(target);\n\t\tvar max = Math.max(target, currentScore);\n\t\tvar min = Math.min(target, currentScore);\n\n\t\tvar time = 2000 / (max - min);\n\t\tvar father = $(this);\n\n\t\tvar t = setInterval(function () {\n\t\t\tvar p = parseInt(father.html());\n\n\t\t\tif (p + 1 > target) {\n\t\t\t\tclearInterval(t);\n\t\t\t} else {\n\t\t\t\tfather.html(p + 1);\n\t\t\t}\n\t\t}, time);\n\t}\n\n});//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zY29yZS5qcz83MjkyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzPSQuZm4uZXh0ZW5kKHtcclxuXHJcblx0c2V0U2NvcmU6ZnVuY3Rpb24odGFyZ2V0KXtcclxuXHRcdHZhciBjdXJyZW50U2NvcmU9cGFyc2VJbnQoJCh0aGlzKS5odG1sKCkpO1xyXG5cdFx0JCh0aGlzKS5odG1sKHRhcmdldCk7XHJcblx0XHR2YXIgbWF4PU1hdGgubWF4KHRhcmdldCxjdXJyZW50U2NvcmUpO1xyXG5cdFx0dmFyIG1pbj1NYXRoLm1pbih0YXJnZXQsY3VycmVudFNjb3JlKTtcclxuXHJcblx0XHR2YXIgdGltZT0yMDAwLyhtYXgtbWluKTtcclxuXHRcdHZhciBmYXRoZXI9JCh0aGlzKVxyXG5cdFx0XHJcblxyXG5cdFx0dmFyIHQ9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuXHRcdFx0dmFyIHA9cGFyc2VJbnQoZmF0aGVyLmh0bWwoKSk7XHJcblxyXG5cdFx0XHRcdGlmKHArMT50YXJnZXQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0KTtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdGZhdGhlci5odG1sKHArMSlcclxuXHRcdFx0XHR9XHJcblx0XHR9LHRpbWUpXHJcblxyXG5cclxuXHR9XHJcblxyXG59KVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNjb3JlLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})