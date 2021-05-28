webpackHotUpdate("main",{

/***/ "./src/tutorial_step.js":
/*!******************************!*\
  !*** ./src/tutorial_step.js ***!
  \******************************/
/*! exports provided: TutorialStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TutorialStep\", function() { return TutorialStep; });\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar TutorialStep = /*#__PURE__*/function () {\n  function TutorialStep(text, doneCb) {\n    _classCallCheck(this, TutorialStep);\n\n    this.text = text;\n    this.goal = null;\n    this.textId = 'tutorialModalText';\n    this.doneCb = doneCb;\n  }\n\n  _createClass(TutorialStep, [{\n    key: \"init\",\n    value: function init() {\n      document.getElementById(this.textId).innerHTML = \"\\n     <div class=\\\"modal__overlay\\\" tabindex=\\\"-1\\\" data-micromodal-close>\\n      <div class=\\\"modal__container\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\" aria-labelledby=\\\"modal-1-title\\\">\\n        <header class=\\\"modal__header\\\">\\n          <h2 class=\\\"modal__title\\\" id=\\\"tutorialModalText\\\"></h2>\\n          <button class=\\\"modal__close\\\" aria-label=\\\"Close modal\\\" id=\\\"TutorialModalBtn\\\" data-micromodal-close></button>\\n        </header>\\n      </div>\\n    </div>\";\n    }\n  }, {\n    key: \"onClick\",\n    value: function onClick() {\n      this.doneCb();\n      this.dispose();\n    }\n  }]);\n\n  return TutorialStep;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHV0b3JpYWxfc3RlcC5qcz8wODg1Il0sIm5hbWVzIjpbIlR1dG9yaWFsU3RlcCIsInRleHQiLCJkb25lQ2IiLCJnb2FsIiwidGV4dElkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImRpc3Bvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsWUFBYjtBQUNFLHdCQUFZQyxJQUFaLEVBQWtCQyxNQUFsQixFQUEwQjtBQUFBOztBQUN4QixTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLRSxJQUFMLEdBQVksSUFBWjtBQUVBLFNBQUtDLE1BQUwsR0FBYyxtQkFBZDtBQUNBLFNBQUtGLE1BQUwsR0FBY0EsTUFBZDtBQUNEOztBQVBIO0FBQUE7QUFBQSwyQkFTUztBQUNMRyxjQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBS0YsTUFBN0IsRUFBcUNHLFNBQXJDO0FBU0Q7QUFuQkg7QUFBQTtBQUFBLDhCQXFCWTtBQUNSLFdBQUtMLE1BQUw7QUFDQSxXQUFLTSxPQUFMO0FBQ0Q7QUF4Qkg7O0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy90dXRvcmlhbF9zdGVwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1pY3JvTW9kYWwgZnJvbSAnbWljcm9tb2RhbCc7XG5cbmV4cG9ydCBjbGFzcyBUdXRvcmlhbFN0ZXAge1xuICBjb25zdHJ1Y3Rvcih0ZXh0LCBkb25lQ2IpIHtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMuZ29hbCA9IG51bGw7XG5cbiAgICB0aGlzLnRleHRJZCA9ICd0dXRvcmlhbE1vZGFsVGV4dCc7XG4gICAgdGhpcy5kb25lQ2IgPSBkb25lQ2I7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMudGV4dElkKS5pbm5lckhUTUwgPSBgXG4gICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fb3ZlcmxheVwiIHRhYmluZGV4PVwiLTFcIiBkYXRhLW1pY3JvbW9kYWwtY2xvc2U+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2NvbnRhaW5lclwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLW1vZGFsPVwidHJ1ZVwiIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLTEtdGl0bGVcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzcz1cIm1vZGFsX19oZWFkZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJtb2RhbF9fdGl0bGVcIiBpZD1cInR1dG9yaWFsTW9kYWxUZXh0XCI+PC9oMj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxfX2Nsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlIG1vZGFsXCIgaWQ9XCJUdXRvcmlhbE1vZGFsQnRuXCIgZGF0YS1taWNyb21vZGFsLWNsb3NlPjwvYnV0dG9uPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gIH1cblxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMuZG9uZUNiKCk7XG4gICAgdGhpcy5kaXNwb3NlKCk7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/tutorial_step.js\n");

/***/ })

})