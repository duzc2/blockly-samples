webpackHotUpdate("main",{

/***/ "./src/tutorial.js":
/*!*************************!*\
  !*** ./src/tutorial.js ***!
  \*************************/
/*! exports provided: Tutorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tutorial\", function() { return Tutorial; });\n/* harmony import */ var _tutorial_step__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial_step */ \"./src/tutorial_step.js\");\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Tutorial = /*#__PURE__*/function () {\n  function Tutorial() {\n    _classCallCheck(this, Tutorial);\n\n    this.modalId = 'tutorialModal';\n    this.steps = Tutorial.STEPS_TEXT.map(function (text) {\n      return new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"](text);\n    });\n    this.curStepIndex = 0;\n    this.curStep = this.steps[this.curStepIndex];\n    this.curStep.init();\n  }\n\n  _createClass(Tutorial, [{\n    key: \"nextStep\",\n    value: function nextStep() {\n      this.curStepIndex++;\n\n      if (this.curStepIndex < this.steps.length) {\n        this.curStep = this.steps[this.curStepIndex];\n        this.curStep.init();\n      }\n    }\n  }, {\n    key: \"addStep\",\n    value: function addStep() {\n      this.steps.push(new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"]('Instructions'));\n    }\n  }]);\n\n  return Tutorial;\n}();\nTutorial.STEPS_TEXT = ['Hit enter to move focus to the workspace', 'Enable keyboard nav by pressing Cmd+Shift+K', 'Press X to navigate to the first stack of blocks', 'Press Y to navigate to the first block', 'Press enter to mark the first block'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHV0b3JpYWwuanM/MjQzOCJdLCJuYW1lcyI6WyJUdXRvcmlhbCIsIm1vZGFsSWQiLCJzdGVwcyIsIlNURVBTX1RFWFQiLCJtYXAiLCJ0ZXh0IiwiVHV0b3JpYWxTdGVwIiwiY3VyU3RlcEluZGV4IiwiY3VyU3RlcCIsImluaXQiLCJsZW5ndGgiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVPLElBQU1BLFFBQWI7QUFDRSxzQkFBYztBQUFBOztBQUNaLFNBQUtDLE9BQUwsR0FBZSxlQUFmO0FBQ0EsU0FBS0MsS0FBTCxHQUFhRixRQUFRLENBQUNHLFVBQVQsQ0FBb0JDLEdBQXBCLENBQXdCLFVBQUFDLElBQUk7QUFBQSxhQUFLLElBQUlDLDJEQUFKLENBQWlCRCxJQUFqQixDQUFMO0FBQUEsS0FBNUIsQ0FBYjtBQUVBLFNBQUtFLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBS04sS0FBTCxDQUFXLEtBQUtLLFlBQWhCLENBQWY7QUFDQSxTQUFLQyxPQUFMLENBQWFDLElBQWI7QUFDRDs7QUFSSDtBQUFBO0FBQUEsK0JBVWE7QUFDVCxXQUFLRixZQUFMOztBQUNBLFVBQUksS0FBS0EsWUFBTCxHQUFvQixLQUFLTCxLQUFMLENBQVdRLE1BQW5DLEVBQTJDO0FBQ3pDLGFBQUtGLE9BQUwsR0FBZSxLQUFLTixLQUFMLENBQVcsS0FBS0ssWUFBaEIsQ0FBZjtBQUNBLGFBQUtDLE9BQUwsQ0FBYUMsSUFBYjtBQUNEO0FBRUY7QUFqQkg7QUFBQTtBQUFBLDhCQWtCWTtBQUNSLFdBQUtQLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQixJQUFJTCwyREFBSixDQUFpQixjQUFqQixDQUFoQjtBQUNEO0FBcEJIOztBQUFBO0FBQUE7QUF1QkFOLFFBQVEsQ0FBQ0csVUFBVCxHQUFzQixDQUNwQiwwQ0FEb0IsRUFFcEIsNkNBRm9CLEVBR3BCLGtEQUhvQixFQUlwQix3Q0FKb0IsRUFLcEIscUNBTG9CLENBQXRCIiwiZmlsZSI6Ii4vc3JjL3R1dG9yaWFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge1R1dG9yaWFsU3RlcH0gZnJvbSAnLi90dXRvcmlhbF9zdGVwJztcbmltcG9ydCBNaWNyb01vZGFsIGZyb20gJ21pY3JvbW9kYWwnO1xuXG5leHBvcnQgY2xhc3MgVHV0b3JpYWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1vZGFsSWQgPSAndHV0b3JpYWxNb2RhbCc7XG4gICAgdGhpcy5zdGVwcyA9IFR1dG9yaWFsLlNURVBTX1RFWFQubWFwKHRleHQgPT4gIG5ldyBUdXRvcmlhbFN0ZXAodGV4dCkpO1xuXG4gICAgdGhpcy5jdXJTdGVwSW5kZXggPSAwO1xuICAgIHRoaXMuY3VyU3RlcCA9IHRoaXMuc3RlcHNbdGhpcy5jdXJTdGVwSW5kZXhdO1xuICAgIHRoaXMuY3VyU3RlcC5pbml0KCk7XG4gIH1cblxuICBuZXh0U3RlcCgpIHtcbiAgICB0aGlzLmN1clN0ZXBJbmRleCsrO1xuICAgIGlmICh0aGlzLmN1clN0ZXBJbmRleCA8IHRoaXMuc3RlcHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmN1clN0ZXAgPSB0aGlzLnN0ZXBzW3RoaXMuY3VyU3RlcEluZGV4XTtcbiAgICAgIHRoaXMuY3VyU3RlcC5pbml0KCk7XG4gICAgfVxuXG4gIH1cbiAgYWRkU3RlcCgpIHtcbiAgICB0aGlzLnN0ZXBzLnB1c2gobmV3IFR1dG9yaWFsU3RlcCgnSW5zdHJ1Y3Rpb25zJykpO1xuICB9XG59XG5cblR1dG9yaWFsLlNURVBTX1RFWFQgPSBbXG4gICdIaXQgZW50ZXIgdG8gbW92ZSBmb2N1cyB0byB0aGUgd29ya3NwYWNlJyxcbiAgJ0VuYWJsZSBrZXlib2FyZCBuYXYgYnkgcHJlc3NpbmcgQ21kK1NoaWZ0K0snLFxuICAnUHJlc3MgWCB0byBuYXZpZ2F0ZSB0byB0aGUgZmlyc3Qgc3RhY2sgb2YgYmxvY2tzJyxcbiAgJ1ByZXNzIFkgdG8gbmF2aWdhdGUgdG8gdGhlIGZpcnN0IGJsb2NrJyxcbiAgJ1ByZXNzIGVudGVyIHRvIG1hcmsgdGhlIGZpcnN0IGJsb2NrJyxcbl1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/tutorial.js\n");

/***/ })

})