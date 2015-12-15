webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports) {

	eval("module.exports = $.fn.extend({\n\n\tsetScore: function (target) {\n\t\tvar currentScore = parseInt($(this).html());\n\t\t$(this).html(target);\n\t\tvar max = Math.max(target, currentScore);\n\t\tvar min = Math.min(target, currentScore);\n\n\t\tconsole.log(500 / max - min);\n\t}\n\n});//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zY29yZS5qcz83MjkyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzPSQuZm4uZXh0ZW5kKHtcclxuXHJcblx0c2V0U2NvcmU6ZnVuY3Rpb24odGFyZ2V0KXtcclxuXHRcdHZhciBjdXJyZW50U2NvcmU9cGFyc2VJbnQoJCh0aGlzKS5odG1sKCkpO1xyXG5cdFx0JCh0aGlzKS5odG1sKHRhcmdldCk7XHJcblx0XHR2YXIgbWF4PU1hdGgubWF4KHRhcmdldCxjdXJyZW50U2NvcmUpO1xyXG5cdFx0dmFyIG1pbj1NYXRoLm1pbih0YXJnZXQsY3VycmVudFNjb3JlKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyg1MDAvbWF4LW1pbilcclxuXHR9XHJcblxyXG59KVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNjb3JlLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})