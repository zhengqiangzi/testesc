webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports) {

	eval("module.exports = $.fn.extend({\n\n\tsetScore: function (target) {\n\t\tvar currentScore = parseInt($(this).html());\n\t\t//$(this).html(target);\n\t\tvar max = Math.max(target, currentScore);\n\t\tvar min = Math.min(target, currentScore);\n\n\t\tvar time = 2000 / (max - min);\n\t\tvar father = $(this);\n\n\t\tvar t = setInterval(function () {\n\t\t\tvar p = parseInt(father.html());\n\n\t\t\tif (p + 1 > target) {\n\t\t\t\tclearInterval(t);\n\t\t\t} else {\n\t\t\t\tfather.html(p + 1);\n\t\t\t}\n\t\t}, time);\n\t}\n\n});//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zY29yZS5qcz83MjkyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzPSQuZm4uZXh0ZW5kKHtcclxuXHJcblx0c2V0U2NvcmU6ZnVuY3Rpb24odGFyZ2V0KXtcclxuXHRcdHZhciBjdXJyZW50U2NvcmU9cGFyc2VJbnQoJCh0aGlzKS5odG1sKCkpO1xyXG5cdFx0Ly8kKHRoaXMpLmh0bWwodGFyZ2V0KTtcclxuXHRcdHZhciBtYXg9TWF0aC5tYXgodGFyZ2V0LGN1cnJlbnRTY29yZSk7XHJcblx0XHR2YXIgbWluPU1hdGgubWluKHRhcmdldCxjdXJyZW50U2NvcmUpO1xyXG5cclxuXHRcdHZhciB0aW1lPTIwMDAvKG1heC1taW4pO1xyXG5cdFx0dmFyIGZhdGhlcj0kKHRoaXMpXHJcblx0XHRcclxuXHJcblx0XHR2YXIgdD1zZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG5cdFx0XHR2YXIgcD1wYXJzZUludChmYXRoZXIuaHRtbCgpKTtcclxuXHJcblx0XHRcdFx0aWYocCsxPnRhcmdldClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHQpO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0ZmF0aGVyLmh0bWwocCsxKVxyXG5cdFx0XHRcdH1cclxuXHRcdH0sdGltZSlcclxuXHJcblxyXG5cdH1cclxuXHJcbn0pXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc2NvcmUuanNcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})