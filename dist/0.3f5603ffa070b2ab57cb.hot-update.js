webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports) {

	eval("module.exports = $.fn.extend({\n\n\tsetScore: function (target) {\n\n\t\tvar currentScore = parseInt($(this).html());\n\n\t\tif (currentScore == target) {\n\t\t\treturn;\n\t\t}\n\t\tvar newTarget = target - 100;\n\n\t\t$(this).html(newTarget);\n\n\t\tvar father = $(this);\n\t\tvar t = setInterval(function () {\n\n\t\t\tnewTarget = newTarget + 1;\n\t\t\tif (newTarget > target) {\n\t\t\t\tclearInterval(t);\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tfather.html(newTarget);\n\t\t}, 1);\n\t}\n\n});//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zY29yZS5qcz83MjkyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzPSQuZm4uZXh0ZW5kKHtcclxuXHJcblx0c2V0U2NvcmU6ZnVuY3Rpb24odGFyZ2V0KXtcclxuXHJcblx0XHR2YXIgY3VycmVudFNjb3JlPXBhcnNlSW50KCQodGhpcykuaHRtbCgpKTtcclxuXHJcblx0XHRpZihjdXJyZW50U2NvcmU9PXRhcmdldCl7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cdFx0dmFyIG5ld1RhcmdldD10YXJnZXQtMTAwO1xyXG5cclxuXHRcdCQodGhpcykuaHRtbChuZXdUYXJnZXQpO1xyXG5cclxuXHRcdHZhciBmYXRoZXI9JCh0aGlzKTtcclxuXHRcdHZhciB0PXNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFxyXG5cdFx0XHRuZXdUYXJnZXQ9bmV3VGFyZ2V0KzE7XHJcblx0XHRcdGlmKG5ld1RhcmdldD50YXJnZXQpe1xyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodClcclxuXHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0fVxyXG5cdFx0XHRmYXRoZXIuaHRtbChuZXdUYXJnZXQpXHJcblx0XHR9LDEpXHJcblxyXG5cdH1cclxuXHJcbn0pXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc2NvcmUuanNcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})