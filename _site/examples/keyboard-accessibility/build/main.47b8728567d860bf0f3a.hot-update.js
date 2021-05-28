webpackHotUpdate("main",{

/***/ "./src/tutorial.js":
/*!*************************!*\
  !*** ./src/tutorial.js ***!
  \*************************/
/*! exports provided: Tutorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tutorial\", function() { return Tutorial; });\n/* harmony import */ var _tutorial_step__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial_step */ \"./src/tutorial_step.js\");\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Tutorial = /*#__PURE__*/function () {\n  function Tutorial() {\n    _classCallCheck(this, Tutorial);\n\n    this.modalId = 'tutorialModal';\n    this.steps = Tutorial.STEPS_TEXT.map(function (text) {\n      return new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"](text);\n    });\n  }\n\n  _createClass(Tutorial, [{\n    key: \"init\",\n    value: function init() {\n      this.createDom(); //this.addCallbacks();\n\n      micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].show(this.modalId);\n      this.curStepIndex = 0;\n      this.curStep = this.steps[this.curStepIndex];\n      this.curStep.show();\n    }\n  }, {\n    key: \"nextStep\",\n    value: function nextStep() {\n      this.curStepIndex++;\n\n      if (this.curStepIndex < this.steps.length) {\n        this.curStep = this.steps[this.curStepIndex];\n        this.curStep.show();\n      }\n    }\n  }, {\n    key: \"addStep\",\n    value: function addStep() {\n      this.steps.push(new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"]('Instructions'));\n    }\n  }, {\n    key: \"addCallbacks\",\n    value: function addCallbacks() {\n      var _this = this;\n\n      nextStepFn = this.nextStep;\n      document.getElementById('tutorialModalBtn').addEventListener('click', function () {\n        //nextStepFn();\n        _this.nextStep();\n      });\n    }\n    /**\n     * Creates the dom for the modal.\n     */\n\n  }, {\n    key: \"createDom\",\n    value: function createDom() {\n      document.getElementById(this.modalId).innerHTML = \"\\n     <div class=\\\"modal__overlay\\\" tabindex=\\\"-1\\\" data-micromodal-close>\\n      <div class=\\\"modal__container\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\" aria-labelledby=\\\"modal-1-title\\\">\\n        <header class=\\\"modal__header\\\">\\n          <h2 class=\\\"modal__title\\\" id=\\\"tutorialModalText\\\"></h2>\\n          <button class=\\\"modal__close\\\" aria-label=\\\"Close modal\\\" id=\\\"tutorialCloseBtn\\\" data-micromodal-close></button>\\n<footer class=\\\"modal__footer\\\"> <main class=\\\"modal__content\\\" id=\\\"modal-1-content\\\">\\n          <h2 class=\\\"modal__title\\\" id=\\\"tutorialModalText\\\"></h2>\\n        </main>\\n          <button class=\\\"odal__btn modal__btn-primary\\\" aria-label=\\\"Next step\\\" id=\\\"TutorialModalBtn\\\">Next step</button>\\n        </header>        </footer>\\n      </div>\\n    </div>\";\n    }\n  }]);\n\n  return Tutorial;\n}();\nTutorial.STEPS_TEXT = ['Hit enter to move focus to the workspace', 'Enable keyboard nav by pressing Cmd+Shift+K', 'Press X to navigate to the first stack of blocks', 'Press Y to navigate to the first block', 'Press enter to mark the first block'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHV0b3JpYWwuanM/MjQzOCJdLCJuYW1lcyI6WyJUdXRvcmlhbCIsIm1vZGFsSWQiLCJzdGVwcyIsIlNURVBTX1RFWFQiLCJtYXAiLCJ0ZXh0IiwiVHV0b3JpYWxTdGVwIiwiY3JlYXRlRG9tIiwiTWljcm9Nb2RhbCIsInNob3ciLCJjdXJTdGVwSW5kZXgiLCJjdXJTdGVwIiwibGVuZ3RoIiwicHVzaCIsIm5leHRTdGVwRm4iLCJuZXh0U3RlcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVPLElBQU1BLFFBQWI7QUFDRSxzQkFBYztBQUFBOztBQUNaLFNBQUtDLE9BQUwsR0FBZSxlQUFmO0FBQ0EsU0FBS0MsS0FBTCxHQUFhRixRQUFRLENBQUNHLFVBQVQsQ0FBb0JDLEdBQXBCLENBQXdCLFVBQUFDLElBQUk7QUFBQSxhQUFLLElBQUlDLDJEQUFKLENBQWlCRCxJQUFqQixDQUFMO0FBQUEsS0FBNUIsQ0FBYjtBQUVEOztBQUxIO0FBQUE7QUFBQSwyQkFPUztBQUNMLFdBQUtFLFNBQUwsR0FESyxDQUVMOztBQUNBQyx3REFBVSxDQUFDQyxJQUFYLENBQWdCLEtBQUtSLE9BQXJCO0FBQ0EsV0FBS1MsWUFBTCxHQUFvQixDQUFwQjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxLQUFLVCxLQUFMLENBQVcsS0FBS1EsWUFBaEIsQ0FBZjtBQUNBLFdBQUtDLE9BQUwsQ0FBYUYsSUFBYjtBQUNEO0FBZEg7QUFBQTtBQUFBLCtCQWdCYTtBQUNULFdBQUtDLFlBQUw7O0FBQ0EsVUFBSSxLQUFLQSxZQUFMLEdBQW9CLEtBQUtSLEtBQUwsQ0FBV1UsTUFBbkMsRUFBMkM7QUFDekMsYUFBS0QsT0FBTCxHQUFlLEtBQUtULEtBQUwsQ0FBVyxLQUFLUSxZQUFoQixDQUFmO0FBQ0EsYUFBS0MsT0FBTCxDQUFhRixJQUFiO0FBQ0Q7QUFFRjtBQXZCSDtBQUFBO0FBQUEsOEJBd0JZO0FBQ1IsV0FBS1AsS0FBTCxDQUFXVyxJQUFYLENBQWdCLElBQUlQLDJEQUFKLENBQWlCLGNBQWpCLENBQWhCO0FBQ0Q7QUExQkg7QUFBQTtBQUFBLG1DQTRCaUI7QUFBQTs7QUFDYlEsZ0JBQVUsR0FBRyxLQUFLQyxRQUFsQjtBQUNBQyxjQUFRLENBQUNDLGNBQVQsQ0FBd0Isa0JBQXhCLEVBQTRDQyxnQkFBNUMsQ0FBNkQsT0FBN0QsRUFDRSxZQUFNO0FBQ0o7QUFDQSxhQUFJLENBQUNILFFBQUw7QUFDRCxPQUpIO0FBS0Q7QUFDRDtBQUNGO0FBQ0E7O0FBdENBO0FBQUE7QUFBQSxnQ0F1Q2M7QUFDVkMsY0FBUSxDQUFDQyxjQUFULENBQXdCLEtBQUtoQixPQUE3QixFQUFzQ2tCLFNBQXRDO0FBYUQ7QUFyREg7O0FBQUE7QUFBQTtBQXdEQW5CLFFBQVEsQ0FBQ0csVUFBVCxHQUFzQixDQUNwQiwwQ0FEb0IsRUFFcEIsNkNBRm9CLEVBR3BCLGtEQUhvQixFQUlwQix3Q0FKb0IsRUFLcEIscUNBTG9CLENBQXRCIiwiZmlsZSI6Ii4vc3JjL3R1dG9yaWFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge1R1dG9yaWFsU3RlcH0gZnJvbSAnLi90dXRvcmlhbF9zdGVwJztcbmltcG9ydCBNaWNyb01vZGFsIGZyb20gJ21pY3JvbW9kYWwnO1xuXG5leHBvcnQgY2xhc3MgVHV0b3JpYWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1vZGFsSWQgPSAndHV0b3JpYWxNb2RhbCc7XG4gICAgdGhpcy5zdGVwcyA9IFR1dG9yaWFsLlNURVBTX1RFWFQubWFwKHRleHQgPT4gIG5ldyBUdXRvcmlhbFN0ZXAodGV4dCkpO1xuXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuY3JlYXRlRG9tKCk7XG4gICAgLy90aGlzLmFkZENhbGxiYWNrcygpO1xuICAgIE1pY3JvTW9kYWwuc2hvdyh0aGlzLm1vZGFsSWQpO1xuICAgIHRoaXMuY3VyU3RlcEluZGV4ID0gMDtcbiAgICB0aGlzLmN1clN0ZXAgPSB0aGlzLnN0ZXBzW3RoaXMuY3VyU3RlcEluZGV4XTtcbiAgICB0aGlzLmN1clN0ZXAuc2hvdygpO1xuICB9XG5cbiAgbmV4dFN0ZXAoKSB7XG4gICAgdGhpcy5jdXJTdGVwSW5kZXgrKztcbiAgICBpZiAodGhpcy5jdXJTdGVwSW5kZXggPCB0aGlzLnN0ZXBzLmxlbmd0aCkge1xuICAgICAgdGhpcy5jdXJTdGVwID0gdGhpcy5zdGVwc1t0aGlzLmN1clN0ZXBJbmRleF07XG4gICAgICB0aGlzLmN1clN0ZXAuc2hvdygpO1xuICAgIH1cblxuICB9XG4gIGFkZFN0ZXAoKSB7XG4gICAgdGhpcy5zdGVwcy5wdXNoKG5ldyBUdXRvcmlhbFN0ZXAoJ0luc3RydWN0aW9ucycpKTtcbiAgfVxuXG4gIGFkZENhbGxiYWNrcygpIHtcbiAgICBuZXh0U3RlcEZuID0gdGhpcy5uZXh0U3RlcDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHV0b3JpYWxNb2RhbEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgLy9uZXh0U3RlcEZuKCk7XG4gICAgICAgIHRoaXMubmV4dFN0ZXAoKTtcbiAgICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBkb20gZm9yIHRoZSBtb2RhbC5cbiAgICovXG4gIGNyZWF0ZURvbSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1vZGFsSWQpLmlubmVySFRNTCA9IGBcbiAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19vdmVybGF5XCIgdGFiaW5kZXg9XCItMVwiIGRhdGEtbWljcm9tb2RhbC1jbG9zZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fY29udGFpbmVyXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbW9kYWw9XCJ0cnVlXCIgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtMS10aXRsZVwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwibW9kYWxfX2hlYWRlclwiPlxuICAgICAgICAgIDxoMiBjbGFzcz1cIm1vZGFsX190aXRsZVwiIGlkPVwidHV0b3JpYWxNb2RhbFRleHRcIj48L2gyPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2UgbW9kYWxcIiBpZD1cInR1dG9yaWFsQ2xvc2VCdG5cIiBkYXRhLW1pY3JvbW9kYWwtY2xvc2U+PC9idXR0b24+XG48Zm9vdGVyIGNsYXNzPVwibW9kYWxfX2Zvb3RlclwiPiA8bWFpbiBjbGFzcz1cIm1vZGFsX19jb250ZW50XCIgaWQ9XCJtb2RhbC0xLWNvbnRlbnRcIj5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJtb2RhbF9fdGl0bGVcIiBpZD1cInR1dG9yaWFsTW9kYWxUZXh0XCI+PC9oMj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJvZGFsX19idG4gbW9kYWxfX2J0bi1wcmltYXJ5XCIgYXJpYS1sYWJlbD1cIk5leHQgc3RlcFwiIGlkPVwiVHV0b3JpYWxNb2RhbEJ0blwiPk5leHQgc3RlcDwvYnV0dG9uPlxuICAgICAgICA8L2hlYWRlcj4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcbiAgfVxufVxuXG5UdXRvcmlhbC5TVEVQU19URVhUID0gW1xuICAnSGl0IGVudGVyIHRvIG1vdmUgZm9jdXMgdG8gdGhlIHdvcmtzcGFjZScsXG4gICdFbmFibGUga2V5Ym9hcmQgbmF2IGJ5IHByZXNzaW5nIENtZCtTaGlmdCtLJyxcbiAgJ1ByZXNzIFggdG8gbmF2aWdhdGUgdG8gdGhlIGZpcnN0IHN0YWNrIG9mIGJsb2NrcycsXG4gICdQcmVzcyBZIHRvIG5hdmlnYXRlIHRvIHRoZSBmaXJzdCBibG9jaycsXG4gICdQcmVzcyBlbnRlciB0byBtYXJrIHRoZSBmaXJzdCBibG9jaycsXG5dXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/tutorial.js\n");

/***/ })

})