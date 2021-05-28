webpackHotUpdate("main",{

/***/ "./src/tutorial.js":
/*!*************************!*\
  !*** ./src/tutorial.js ***!
  \*************************/
/*! exports provided: Tutorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tutorial\", function() { return Tutorial; });\n/* harmony import */ var _tutorial_step__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial_step */ \"./src/tutorial_step.js\");\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Tutorial = /*#__PURE__*/function () {\n  function Tutorial() {\n    _classCallCheck(this, Tutorial);\n\n    this.modalId = 'tutorialModal';\n    this.steps = Tutorial.STEPS_TEXT.map(function (text) {\n      return new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"](text);\n    });\n  }\n\n  _createClass(Tutorial, [{\n    key: \"init\",\n    value: function init() {\n      this.createDom(); //this.addCallbacks();\n\n      micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].show(this.modalId);\n      this.curStepIndex = 0;\n      this.curStep = this.steps[this.curStepIndex];\n      this.curStep.show();\n    }\n  }, {\n    key: \"nextStep\",\n    value: function nextStep() {\n      this.curStepIndex++;\n\n      if (this.curStepIndex < this.steps.length) {\n        this.curStep = this.steps[this.curStepIndex];\n        this.curStep.show();\n      }\n    }\n  }, {\n    key: \"addStep\",\n    value: function addStep() {\n      this.steps.push(new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"]('Instructions'));\n    }\n  }, {\n    key: \"addCallbacks\",\n    value: function addCallbacks() {\n      var _this = this;\n\n      nextStepFn = this.nextStep;\n      document.getElementById('tutorialModalBtn').addEventListener('click', function () {\n        //nextStepFn();\n        _this.nextStep();\n      });\n    }\n    /**\n     * Creates the dom for the modal.\n     */\n\n  }, {\n    key: \"createDom\",\n    value: function createDom() {\n      document.getElementById(this.modalId).innerHTML = \"\\n     <div class=\\\"modal__overlay\\\" tabindex=\\\"-1\\\" data-micromodal-close>\\n      <div class=\\\"modal__container\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\" aria-labelledby=\\\"modal-1-title\\\">\\n        <header class=\\\"modal__header\\\">\\n          <button class=\\\"modal__close\\\" aria-label=\\\"Close modal\\\" id=\\\"tutorialCloseBtn\\\" data-micromodal-close></button>\\n                  </header>\\n           <main class=\\\"modal__content\\\" id=\\\"modal-1-content\\\">\\n          <h2 class=\\\"modal__title\\\" id=\\\"tutorialModalText\\\"></h2>\\n        </main>\\n          <footer class=\\\"modal__footer\\\">\\n          <button class=\\\"odal__btn modal__btn-primary\\\" aria-label=\\\"Next step\\\" id=\\\"TutorialModalBtn\\\">Next step</button>\\n        </footer>\\n      </div>\\n    </div>\";\n    }\n  }]);\n\n  return Tutorial;\n}();\nTutorial.STEPS_TEXT = ['Hit enter to move focus to the workspace', 'Enable keyboard nav by pressing Cmd+Shift+K', 'Press X to navigate to the first stack of blocks', 'Press Y to navigate to the first block', 'Press enter to mark the first block'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHV0b3JpYWwuanM/MjQzOCJdLCJuYW1lcyI6WyJUdXRvcmlhbCIsIm1vZGFsSWQiLCJzdGVwcyIsIlNURVBTX1RFWFQiLCJtYXAiLCJ0ZXh0IiwiVHV0b3JpYWxTdGVwIiwiY3JlYXRlRG9tIiwiTWljcm9Nb2RhbCIsInNob3ciLCJjdXJTdGVwSW5kZXgiLCJjdXJTdGVwIiwibGVuZ3RoIiwicHVzaCIsIm5leHRTdGVwRm4iLCJuZXh0U3RlcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVPLElBQU1BLFFBQWI7QUFDRSxzQkFBYztBQUFBOztBQUNaLFNBQUtDLE9BQUwsR0FBZSxlQUFmO0FBQ0EsU0FBS0MsS0FBTCxHQUFhRixRQUFRLENBQUNHLFVBQVQsQ0FBb0JDLEdBQXBCLENBQXdCLFVBQUFDLElBQUk7QUFBQSxhQUFJLElBQUlDLDJEQUFKLENBQWlCRCxJQUFqQixDQUFKO0FBQUEsS0FBNUIsQ0FBYjtBQUVEOztBQUxIO0FBQUE7QUFBQSwyQkFPUztBQUNMLFdBQUtFLFNBQUwsR0FESyxDQUVMOztBQUNBQyx3REFBVSxDQUFDQyxJQUFYLENBQWdCLEtBQUtSLE9BQXJCO0FBQ0EsV0FBS1MsWUFBTCxHQUFvQixDQUFwQjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxLQUFLVCxLQUFMLENBQVcsS0FBS1EsWUFBaEIsQ0FBZjtBQUNBLFdBQUtDLE9BQUwsQ0FBYUYsSUFBYjtBQUNEO0FBZEg7QUFBQTtBQUFBLCtCQWdCYTtBQUNULFdBQUtDLFlBQUw7O0FBQ0EsVUFBSSxLQUFLQSxZQUFMLEdBQW9CLEtBQUtSLEtBQUwsQ0FBV1UsTUFBbkMsRUFBMkM7QUFDekMsYUFBS0QsT0FBTCxHQUFlLEtBQUtULEtBQUwsQ0FBVyxLQUFLUSxZQUFoQixDQUFmO0FBQ0EsYUFBS0MsT0FBTCxDQUFhRixJQUFiO0FBQ0Q7QUFFRjtBQXZCSDtBQUFBO0FBQUEsOEJBd0JZO0FBQ1IsV0FBS1AsS0FBTCxDQUFXVyxJQUFYLENBQWdCLElBQUlQLDJEQUFKLENBQWlCLGNBQWpCLENBQWhCO0FBQ0Q7QUExQkg7QUFBQTtBQUFBLG1DQTRCaUI7QUFBQTs7QUFDYlEsZ0JBQVUsR0FBRyxLQUFLQyxRQUFsQjtBQUNBQyxjQUFRLENBQUNDLGNBQVQsQ0FBd0Isa0JBQXhCLEVBQTRDQyxnQkFBNUMsQ0FBNkQsT0FBN0QsRUFDRSxZQUFNO0FBQ0o7QUFDQSxhQUFJLENBQUNILFFBQUw7QUFDRCxPQUpIO0FBS0Q7QUFDRDtBQUNGO0FBQ0E7O0FBdENBO0FBQUE7QUFBQSxnQ0F1Q2M7QUFDVkMsY0FBUSxDQUFDQyxjQUFULENBQXdCLEtBQUtoQixPQUE3QixFQUFzQ2tCLFNBQXRDO0FBY0Q7QUF0REg7O0FBQUE7QUFBQTtBQXlEQW5CLFFBQVEsQ0FBQ0csVUFBVCxHQUFzQixDQUNwQiwwQ0FEb0IsRUFFcEIsNkNBRm9CLEVBR3BCLGtEQUhvQixFQUlwQix3Q0FKb0IsRUFLcEIscUNBTG9CLENBQXRCIiwiZmlsZSI6Ii4vc3JjL3R1dG9yaWFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBUdXRvcmlhbFN0ZXAgfSBmcm9tICcuL3R1dG9yaWFsX3N0ZXAnO1xuaW1wb3J0IE1pY3JvTW9kYWwgZnJvbSAnbWljcm9tb2RhbCc7XG5cbmV4cG9ydCBjbGFzcyBUdXRvcmlhbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubW9kYWxJZCA9ICd0dXRvcmlhbE1vZGFsJztcbiAgICB0aGlzLnN0ZXBzID0gVHV0b3JpYWwuU1RFUFNfVEVYVC5tYXAodGV4dCA9PiBuZXcgVHV0b3JpYWxTdGVwKHRleHQpKTtcblxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmNyZWF0ZURvbSgpO1xuICAgIC8vdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICBNaWNyb01vZGFsLnNob3codGhpcy5tb2RhbElkKTtcbiAgICB0aGlzLmN1clN0ZXBJbmRleCA9IDA7XG4gICAgdGhpcy5jdXJTdGVwID0gdGhpcy5zdGVwc1t0aGlzLmN1clN0ZXBJbmRleF07XG4gICAgdGhpcy5jdXJTdGVwLnNob3coKTtcbiAgfVxuXG4gIG5leHRTdGVwKCkge1xuICAgIHRoaXMuY3VyU3RlcEluZGV4Kys7XG4gICAgaWYgKHRoaXMuY3VyU3RlcEluZGV4IDwgdGhpcy5zdGVwcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY3VyU3RlcCA9IHRoaXMuc3RlcHNbdGhpcy5jdXJTdGVwSW5kZXhdO1xuICAgICAgdGhpcy5jdXJTdGVwLnNob3coKTtcbiAgICB9XG5cbiAgfVxuICBhZGRTdGVwKCkge1xuICAgIHRoaXMuc3RlcHMucHVzaChuZXcgVHV0b3JpYWxTdGVwKCdJbnN0cnVjdGlvbnMnKSk7XG4gIH1cblxuICBhZGRDYWxsYmFja3MoKSB7XG4gICAgbmV4dFN0ZXBGbiA9IHRoaXMubmV4dFN0ZXA7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1dG9yaWFsTW9kYWxCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIC8vbmV4dFN0ZXBGbigpO1xuICAgICAgICB0aGlzLm5leHRTdGVwKCk7XG4gICAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgZG9tIGZvciB0aGUgbW9kYWwuXG4gICAqL1xuICBjcmVhdGVEb20oKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5tb2RhbElkKS5pbm5lckhUTUwgPSBgXG4gICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fb3ZlcmxheVwiIHRhYmluZGV4PVwiLTFcIiBkYXRhLW1pY3JvbW9kYWwtY2xvc2U+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2NvbnRhaW5lclwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLW1vZGFsPVwidHJ1ZVwiIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLTEtdGl0bGVcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzcz1cIm1vZGFsX19oZWFkZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxfX2Nsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlIG1vZGFsXCIgaWQ9XCJ0dXRvcmlhbENsb3NlQnRuXCIgZGF0YS1taWNyb21vZGFsLWNsb3NlPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgIDxtYWluIGNsYXNzPVwibW9kYWxfX2NvbnRlbnRcIiBpZD1cIm1vZGFsLTEtY29udGVudFwiPlxuICAgICAgICAgIDxoMiBjbGFzcz1cIm1vZGFsX190aXRsZVwiIGlkPVwidHV0b3JpYWxNb2RhbFRleHRcIj48L2gyPlxuICAgICAgICA8L21haW4+XG4gICAgICAgICAgPGZvb3RlciBjbGFzcz1cIm1vZGFsX19mb290ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib2RhbF9fYnRuIG1vZGFsX19idG4tcHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJOZXh0IHN0ZXBcIiBpZD1cIlR1dG9yaWFsTW9kYWxCdG5cIj5OZXh0IHN0ZXA8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xuICB9XG59XG5cblR1dG9yaWFsLlNURVBTX1RFWFQgPSBbXG4gICdIaXQgZW50ZXIgdG8gbW92ZSBmb2N1cyB0byB0aGUgd29ya3NwYWNlJyxcbiAgJ0VuYWJsZSBrZXlib2FyZCBuYXYgYnkgcHJlc3NpbmcgQ21kK1NoaWZ0K0snLFxuICAnUHJlc3MgWCB0byBuYXZpZ2F0ZSB0byB0aGUgZmlyc3Qgc3RhY2sgb2YgYmxvY2tzJyxcbiAgJ1ByZXNzIFkgdG8gbmF2aWdhdGUgdG8gdGhlIGZpcnN0IGJsb2NrJyxcbiAgJ1ByZXNzIGVudGVyIHRvIG1hcmsgdGhlIGZpcnN0IGJsb2NrJyxcbl1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/tutorial.js\n");

/***/ })

})