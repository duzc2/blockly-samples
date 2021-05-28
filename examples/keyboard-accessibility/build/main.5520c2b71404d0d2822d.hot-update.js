webpackHotUpdate("main",{

/***/ "./src/tutorial.js":
/*!*************************!*\
  !*** ./src/tutorial.js ***!
  \*************************/
/*! exports provided: Tutorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tutorial\", function() { return Tutorial; });\n/* harmony import */ var _tutorial_step__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial_step */ \"./src/tutorial_step.js\");\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Tutorial = /*#__PURE__*/function () {\n  function Tutorial() {\n    _classCallCheck(this, Tutorial);\n\n    this.modalId = 'tutorialModal';\n    this.steps = Tutorial.STEPS_TEXT.map(function (text) {\n      return new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"](text);\n    });\n  }\n\n  _createClass(Tutorial, [{\n    key: \"init\",\n    value: function init() {\n      this.createDom();\n      micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].show(this.modalId);\n      this.addCallbacks();\n      this.curStepIndex = 0;\n      this.curStep = this.steps[this.curStepIndex];\n      this.curStep.show();\n    }\n  }, {\n    key: \"nextStep\",\n    value: function nextStep() {\n      this.curStepIndex++;\n\n      if (this.curStepIndex < this.steps.length) {\n        this.curStep = this.steps[this.curStepIndex];\n        this.curStep.show();\n      }\n    }\n  }, {\n    key: \"addStep\",\n    value: function addStep() {\n      this.steps.push(new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"]('Instructions'));\n    }\n  }, {\n    key: \"addCallbacks\",\n    value: function addCallbacks() {\n      var _this = this;\n\n      console.log('adding callbacks'); //nextStepFn = this.nextStep;\n\n      document.getElementById('TutorialModalBtn').addEventListener('click', function () {\n        console.log('next step fn'); // //nextStepFn();\n\n        _this.nextStep();\n      });\n    }\n    /**\n     * Creates the dom for the modal.\n     */\n\n  }, {\n    key: \"createDom\",\n    value: function createDom() {\n      document.getElementById(this.modalId).innerHTML = \"\\n     <div class=\\\"modal__overlay\\\" tabindex=\\\"-1\\\" data-micromodal-close>\\n      <div class=\\\"modal__container\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\" aria-labelledby=\\\"modal-1-title\\\">\\n        <header class=\\\"modal__header\\\">\\n          <button class=\\\"modal__close\\\" aria-label=\\\"Close modal\\\" id=\\\"tutorialCloseBtn\\\" data-micromodal-close></button>\\n        </header>\\n        <main class=\\\"modal__content\\\" id=\\\"modal-1-content\\\">\\n          <h2 class=\\\"modal__title\\\" id=\\\"tutorialModalText\\\"></h2>\\n        </main>\\n        <footer class=\\\"modal__footer\\\">\\n          <button class=\\\"odal__btn modal__btn-primary\\\" aria-label=\\\"Next step\\\" id=\\\"TutorialModalBtn\\\">Next step</button>\\n        </footer>\\n      </div>\\n    </div>\";\n    }\n  }]);\n\n  return Tutorial;\n}();\nTutorial.STEPS_TEXT = ['Hit enter to move focus to the workspace', 'Enable keyboard nav by pressing Cmd+Shift+K', 'Press X to navigate to the first stack of blocks', 'Press Y to navigate to the first block', 'Press enter to mark the first block'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHV0b3JpYWwuanM/MjQzOCJdLCJuYW1lcyI6WyJUdXRvcmlhbCIsIm1vZGFsSWQiLCJzdGVwcyIsIlNURVBTX1RFWFQiLCJtYXAiLCJ0ZXh0IiwiVHV0b3JpYWxTdGVwIiwiY3JlYXRlRG9tIiwiTWljcm9Nb2RhbCIsInNob3ciLCJhZGRDYWxsYmFja3MiLCJjdXJTdGVwSW5kZXgiLCJjdXJTdGVwIiwibGVuZ3RoIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5leHRTdGVwIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVPLElBQU1BLFFBQWI7QUFDRSxzQkFBYztBQUFBOztBQUNaLFNBQUtDLE9BQUwsR0FBZSxlQUFmO0FBQ0EsU0FBS0MsS0FBTCxHQUFhRixRQUFRLENBQUNHLFVBQVQsQ0FBb0JDLEdBQXBCLENBQXdCLFVBQUFDLElBQUk7QUFBQSxhQUFJLElBQUlDLDJEQUFKLENBQWlCRCxJQUFqQixDQUFKO0FBQUEsS0FBNUIsQ0FBYjtBQUVEOztBQUxIO0FBQUE7QUFBQSwyQkFPUztBQUNMLFdBQUtFLFNBQUw7QUFFQUMsd0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQixLQUFLUixPQUFyQjtBQUNBLFdBQUtTLFlBQUw7QUFDQSxXQUFLQyxZQUFMLEdBQW9CLENBQXBCO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLEtBQUtWLEtBQUwsQ0FBVyxLQUFLUyxZQUFoQixDQUFmO0FBQ0EsV0FBS0MsT0FBTCxDQUFhSCxJQUFiO0FBQ0Q7QUFmSDtBQUFBO0FBQUEsK0JBaUJhO0FBQ1QsV0FBS0UsWUFBTDs7QUFDQSxVQUFJLEtBQUtBLFlBQUwsR0FBb0IsS0FBS1QsS0FBTCxDQUFXVyxNQUFuQyxFQUEyQztBQUN6QyxhQUFLRCxPQUFMLEdBQWUsS0FBS1YsS0FBTCxDQUFXLEtBQUtTLFlBQWhCLENBQWY7QUFDQSxhQUFLQyxPQUFMLENBQWFILElBQWI7QUFDRDtBQUVGO0FBeEJIO0FBQUE7QUFBQSw4QkF5Qlk7QUFDUixXQUFLUCxLQUFMLENBQVdZLElBQVgsQ0FBZ0IsSUFBSVIsMkRBQUosQ0FBaUIsY0FBakIsQ0FBaEI7QUFDRDtBQTNCSDtBQUFBO0FBQUEsbUNBNkJpQjtBQUFBOztBQUNiUyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQURhLENBRWI7O0FBQ0FDLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsRUFBNENDLGdCQUE1QyxDQUE2RCxPQUE3RCxFQUNFLFlBQU07QUFDSkosZUFBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQURJLENBRUo7O0FBQ0EsYUFBSSxDQUFDSSxRQUFMO0FBQ0QsT0FMSDtBQU1EO0FBQ0Q7QUFDRjtBQUNBOztBQXpDQTtBQUFBO0FBQUEsZ0NBMENjO0FBQ1ZILGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUFLakIsT0FBN0IsRUFBc0NvQixTQUF0QztBQWNEO0FBekRIOztBQUFBO0FBQUE7QUE0REFyQixRQUFRLENBQUNHLFVBQVQsR0FBc0IsQ0FDcEIsMENBRG9CLEVBRXBCLDZDQUZvQixFQUdwQixrREFIb0IsRUFJcEIsd0NBSm9CLEVBS3BCLHFDQUxvQixDQUF0QiIsImZpbGUiOiIuL3NyYy90dXRvcmlhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgVHV0b3JpYWxTdGVwIH0gZnJvbSAnLi90dXRvcmlhbF9zdGVwJztcbmltcG9ydCBNaWNyb01vZGFsIGZyb20gJ21pY3JvbW9kYWwnO1xuXG5leHBvcnQgY2xhc3MgVHV0b3JpYWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1vZGFsSWQgPSAndHV0b3JpYWxNb2RhbCc7XG4gICAgdGhpcy5zdGVwcyA9IFR1dG9yaWFsLlNURVBTX1RFWFQubWFwKHRleHQgPT4gbmV3IFR1dG9yaWFsU3RlcCh0ZXh0KSk7XG5cbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVEb20oKTtcblxuICAgIE1pY3JvTW9kYWwuc2hvdyh0aGlzLm1vZGFsSWQpO1xuICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgdGhpcy5jdXJTdGVwSW5kZXggPSAwO1xuICAgIHRoaXMuY3VyU3RlcCA9IHRoaXMuc3RlcHNbdGhpcy5jdXJTdGVwSW5kZXhdO1xuICAgIHRoaXMuY3VyU3RlcC5zaG93KCk7XG4gIH1cblxuICBuZXh0U3RlcCgpIHtcbiAgICB0aGlzLmN1clN0ZXBJbmRleCsrO1xuICAgIGlmICh0aGlzLmN1clN0ZXBJbmRleCA8IHRoaXMuc3RlcHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmN1clN0ZXAgPSB0aGlzLnN0ZXBzW3RoaXMuY3VyU3RlcEluZGV4XTtcbiAgICAgIHRoaXMuY3VyU3RlcC5zaG93KCk7XG4gICAgfVxuXG4gIH1cbiAgYWRkU3RlcCgpIHtcbiAgICB0aGlzLnN0ZXBzLnB1c2gobmV3IFR1dG9yaWFsU3RlcCgnSW5zdHJ1Y3Rpb25zJykpO1xuICB9XG5cbiAgYWRkQ2FsbGJhY2tzKCkge1xuICAgIGNvbnNvbGUubG9nKCdhZGRpbmcgY2FsbGJhY2tzJyk7XG4gICAgLy9uZXh0U3RlcEZuID0gdGhpcy5uZXh0U3RlcDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnVHV0b3JpYWxNb2RhbEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ25leHQgc3RlcCBmbicpO1xuICAgICAgICAvLyAvL25leHRTdGVwRm4oKTtcbiAgICAgICAgdGhpcy5uZXh0U3RlcCgpO1xuICAgICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGRvbSBmb3IgdGhlIG1vZGFsLlxuICAgKi9cbiAgY3JlYXRlRG9tKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubW9kYWxJZCkuaW5uZXJIVE1MID0gYFxuICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX292ZXJsYXlcIiB0YWJpbmRleD1cIi0xXCIgZGF0YS1taWNyb21vZGFsLWNsb3NlPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19jb250YWluZXJcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1tb2RhbD1cInRydWVcIiBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC0xLXRpdGxlXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJtb2RhbF9faGVhZGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19jbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZSBtb2RhbFwiIGlkPVwidHV0b3JpYWxDbG9zZUJ0blwiIGRhdGEtbWljcm9tb2RhbC1jbG9zZT48L2J1dHRvbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxtYWluIGNsYXNzPVwibW9kYWxfX2NvbnRlbnRcIiBpZD1cIm1vZGFsLTEtY29udGVudFwiPlxuICAgICAgICAgIDxoMiBjbGFzcz1cIm1vZGFsX190aXRsZVwiIGlkPVwidHV0b3JpYWxNb2RhbFRleHRcIj48L2gyPlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJtb2RhbF9fZm9vdGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9kYWxfX2J0biBtb2RhbF9fYnRuLXByaW1hcnlcIiBhcmlhLWxhYmVsPVwiTmV4dCBzdGVwXCIgaWQ9XCJUdXRvcmlhbE1vZGFsQnRuXCI+TmV4dCBzdGVwPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcbiAgfVxufVxuXG5UdXRvcmlhbC5TVEVQU19URVhUID0gW1xuICAnSGl0IGVudGVyIHRvIG1vdmUgZm9jdXMgdG8gdGhlIHdvcmtzcGFjZScsXG4gICdFbmFibGUga2V5Ym9hcmQgbmF2IGJ5IHByZXNzaW5nIENtZCtTaGlmdCtLJyxcbiAgJ1ByZXNzIFggdG8gbmF2aWdhdGUgdG8gdGhlIGZpcnN0IHN0YWNrIG9mIGJsb2NrcycsXG4gICdQcmVzcyBZIHRvIG5hdmlnYXRlIHRvIHRoZSBmaXJzdCBibG9jaycsXG4gICdQcmVzcyBlbnRlciB0byBtYXJrIHRoZSBmaXJzdCBibG9jaycsXG5dXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/tutorial.js\n");

/***/ })

})