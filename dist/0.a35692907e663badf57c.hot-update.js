webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports) {

	eval("module.exports = $.fn.extend({\n\n\t\tsetScore: function (target) {\n\n\t\t\t\tvar currentScore = parseInt($(this).html());\n\n\t\t\t\tif (currentScore == target) {\n\t\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tvar newTarget = null;\n\n\t\t\t\ttarget - 100;\n\n\t\t\t\t$(this).html(newTarget);\n\n\t\t\t\tvar father = $(this);\n\n\t\t\t\tvar t = setInterval(function () {\n\n\t\t\t\t\t\tnewTarget = newTarget + 1;\n\n\t\t\t\t\t\tif (newTarget > target) {\n\n\t\t\t\t\t\t\t\tclearInterval(t);\n\n\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tfather.html(newTarget);\n\t\t\t\t}, 1);\n\t\t}\n\n});//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zY29yZS5qcz83MjkyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzPSQuZm4uZXh0ZW5kKHtcclxuXHJcblx0c2V0U2NvcmU6ZnVuY3Rpb24odGFyZ2V0KXtcclxuXHJcblx0XHR2YXIgY3VycmVudFNjb3JlPXBhcnNlSW50KCQodGhpcykuaHRtbCgpKTtcclxuXHJcblx0XHRpZihjdXJyZW50U2NvcmU9PXRhcmdldCl7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBuZXdUYXJnZXQ9bnVsbDtcclxuXHJcblx0XHR0YXJnZXQtMTAwO1xyXG5cclxuXHRcdCQodGhpcykuaHRtbChuZXdUYXJnZXQpO1xyXG5cclxuXHRcdHZhciBmYXRoZXI9JCh0aGlzKTtcclxuXHJcblx0XHR2YXIgdD1zZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0bmV3VGFyZ2V0PW5ld1RhcmdldCsxO1xyXG5cclxuXHRcdFx0aWYobmV3VGFyZ2V0PnRhcmdldCl7XHJcblxyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodClcclxuXHJcblx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdH1cclxuXHRcdFx0ZmF0aGVyLmh0bWwobmV3VGFyZ2V0KVxyXG5cdFx0fSwxKVxyXG5cclxuXHR9XHJcblxyXG59KVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNjb3JlLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})