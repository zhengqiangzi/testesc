webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports) {

	eval("module.exports = $.fn.extend({\n\n\t\tsetScore: function (target) {\n\n\t\t\t\tvar currentScore = parseInt($(this).html());\n\n\t\t\t\tif (currentScore == target) {\n\t\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tvar newTarget = target - 1000;\n\n\t\t\t\t$(this).html(newTarget);\n\n\t\t\t\tvar father = $(this);\n\t\t\t\tvar t = setInterval(function () {\n\n\t\t\t\t\t\tnewTarget = newTarget + 1;\n\t\t\t\t\t\tif (newTarget > target) {\n\n\t\t\t\t\t\t\t\tclearInterval(t);\n\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tfather.html(newTarget);\n\t\t\t\t}, 1);\n\t\t}\n\n});//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zY29yZS5qcz83MjkyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzPSQuZm4uZXh0ZW5kKHtcclxuXHJcblx0c2V0U2NvcmU6ZnVuY3Rpb24odGFyZ2V0KXtcclxuXHJcblx0XHR2YXIgY3VycmVudFNjb3JlPXBhcnNlSW50KCQodGhpcykuaHRtbCgpKTtcclxuXHJcblx0XHRpZihjdXJyZW50U2NvcmU9PXRhcmdldCl7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cdFx0dmFyIG5ld1RhcmdldD10YXJnZXQtMTAwMDtcclxuXHJcblx0XHQkKHRoaXMpLmh0bWwobmV3VGFyZ2V0KTtcclxuXHJcblx0XHR2YXIgZmF0aGVyPSQodGhpcylcclxuXHRcdHZhciB0PXNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHRuZXdUYXJnZXQ9bmV3VGFyZ2V0KzE7XHJcblx0XHRcdGlmKG5ld1RhcmdldD50YXJnZXQpe1xyXG5cclxuXHRcdFx0XHRjbGVhckludGVydmFsKHQpXHJcblx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdH1cclxuXHRcdFx0ZmF0aGVyLmh0bWwobmV3VGFyZ2V0KVxyXG5cclxuXHJcblx0XHR9LDEpXHJcblxyXG5cdH1cclxuXHJcbn0pXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc2NvcmUuanNcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})