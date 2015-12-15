webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports) {

	eval("module.exports = $.fn.extend({\n\n\tsetScore: function (target) {\n\n\t\tvar currentScore = parseInt($(this).html());\n\n\t\tif (currentScore == target) {\n\t\t\treturn;\n\t\t}\n\t\tvar newTarget = target - 100;\n\n\t\t$(this).html(newTarget);\n\n\t\tvar father = $(this);\n\t\tvar t = setInterval(function () {\n\n\t\t\tnewTarget = newTarget + 1;\n\t\t\tif (newTarget > target) {\n\t\t\t\tclearInterval(t);\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tfather.html(newTarget);\n\t\t}, 1);\n\t}\n\n});//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zY29yZS5qcz83MjkyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzPSQuZm4uZXh0ZW5kKHtcclxuXHJcblx0c2V0U2NvcmU6ZnVuY3Rpb24odGFyZ2V0KXtcclxuXHJcblx0XHR2YXIgY3VycmVudFNjb3JlPXBhcnNlSW50KCQodGhpcykuaHRtbCgpKTtcclxuXHJcblx0XHRpZihjdXJyZW50U2NvcmU9PXRhcmdldCl7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cdFx0dmFyIG5ld1RhcmdldD10YXJnZXQtMTAwO1xyXG5cclxuXHRcdCQodGhpcykuaHRtbChuZXdUYXJnZXQpO1xyXG5cclxuXHRcdHZhciBmYXRoZXI9JCh0aGlzKVxyXG5cdFx0dmFyIHQ9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdG5ld1RhcmdldD1uZXdUYXJnZXQrMTtcclxuXHRcdFx0aWYobmV3VGFyZ2V0PnRhcmdldCl7XHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0KVxyXG5cdFx0XHRcdHJldHVyblxyXG5cdFx0XHR9XHJcblx0XHRcdGZhdGhlci5odG1sKG5ld1RhcmdldClcclxuXHRcdH0sMSlcclxuXHJcblx0fVxyXG5cclxufSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzY29yZS5qc1xuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})