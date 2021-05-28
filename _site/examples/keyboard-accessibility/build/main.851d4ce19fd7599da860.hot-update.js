webpackHotUpdate("main",{

/***/ "./src/tutorial.js":
/*!*************************!*\
  !*** ./src/tutorial.js ***!
  \*************************/
/*! exports provided: Tutorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tutorial\", function() { return Tutorial; });\n/* harmony import */ var _tutorial_step__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial_step */ \"./src/tutorial_step.js\");\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Tutorial = /*#__PURE__*/function () {\n  function Tutorial() {\n    _classCallCheck(this, Tutorial);\n\n    this.modalId = 'tutorialModal';\n    this.steps = Tutorial.STEPS_TEXT.map(function (text) {\n      return new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"](text);\n    });\n  }\n\n  _createClass(Tutorial, [{\n    key: \"init\",\n    value: function init() {\n      this.createDom(); //this.addCallbacks();\n\n      micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].show(this.modalId);\n      this.curStepIndex = 0;\n      this.curStep = this.steps[this.curStepIndex];\n      this.curStep.show();\n    }\n  }, {\n    key: \"nextStep\",\n    value: function nextStep() {\n      this.curStepIndex++;\n\n      if (this.curStepIndex < this.steps.length) {\n        this.curStep = this.steps[this.curStepIndex];\n        this.curStep.show();\n      }\n    }\n  }, {\n    key: \"addStep\",\n    value: function addStep() {\n      this.steps.push(new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"]('Instructions'));\n    }\n  }, {\n    key: \"addCallbacks\",\n    value: function addCallbacks() {\n      nextStepFn = this.nextStep; // document.getElementById('TutorialModalBtn').addEventListener('click',\n      //   () => {\n      //     // console.log('next step fn');\n      //     // //nextStepFn();\n      //     // this.nextStep();\n      //   });\n    }\n    /**\n     * Creates the dom for the modal.\n     */\n\n  }, {\n    key: \"createDom\",\n    value: function createDom() {\n      document.getElementById(this.modalId).innerHTML = \"\\n     <div class=\\\"modal__overlay\\\" tabindex=\\\"-1\\\" data-micromodal-close>\\n      <div class=\\\"modal__container\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\" aria-labelledby=\\\"modal-1-title\\\">\\n        <header class=\\\"modal__header\\\">\\n          <button class=\\\"modal__close\\\" aria-label=\\\"Close modal\\\" id=\\\"tutorialCloseBtn\\\" data-micromodal-close></button>\\n        </header>\\n        <main class=\\\"modal__content\\\" id=\\\"modal-1-content\\\">\\n          <h2 class=\\\"modal__title\\\" id=\\\"tutorialModalText\\\"></h2>\\n        </main>\\n        <footer class=\\\"modal__footer\\\">\\n          <button class=\\\"odal__btn modal__btn-primary\\\" aria-label=\\\"Next step\\\" id=\\\"TutorialModalBtn\\\">Next step</button>\\n        </footer>\\n      </div>\\n    </div>\";\n    }\n  }]);\n\n  return Tutorial;\n}();\nTutorial.STEPS_TEXT = ['Hit enter to move focus to the workspace', 'Enable keyboard nav by pressing Cmd+Shift+K', 'Press X to navigate to the first stack of blocks', 'Press Y to navigate to the first block', 'Press enter to mark the first block'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHV0b3JpYWwuanM/MjQzOCJdLCJuYW1lcyI6WyJUdXRvcmlhbCIsIm1vZGFsSWQiLCJzdGVwcyIsIlNURVBTX1RFWFQiLCJtYXAiLCJ0ZXh0IiwiVHV0b3JpYWxTdGVwIiwiY3JlYXRlRG9tIiwiTWljcm9Nb2RhbCIsInNob3ciLCJjdXJTdGVwSW5kZXgiLCJjdXJTdGVwIiwibGVuZ3RoIiwicHVzaCIsIm5leHRTdGVwRm4iLCJuZXh0U3RlcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRU8sSUFBTUEsUUFBYjtBQUNFLHNCQUFjO0FBQUE7O0FBQ1osU0FBS0MsT0FBTCxHQUFlLGVBQWY7QUFDQSxTQUFLQyxLQUFMLEdBQWFGLFFBQVEsQ0FBQ0csVUFBVCxDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQUMsSUFBSTtBQUFBLGFBQUksSUFBSUMsMkRBQUosQ0FBaUJELElBQWpCLENBQUo7QUFBQSxLQUE1QixDQUFiO0FBRUQ7O0FBTEg7QUFBQTtBQUFBLDJCQU9TO0FBQ0wsV0FBS0UsU0FBTCxHQURLLENBRUw7O0FBQ0FDLHdEQUFVLENBQUNDLElBQVgsQ0FBZ0IsS0FBS1IsT0FBckI7QUFDQSxXQUFLUyxZQUFMLEdBQW9CLENBQXBCO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLEtBQUtULEtBQUwsQ0FBVyxLQUFLUSxZQUFoQixDQUFmO0FBQ0EsV0FBS0MsT0FBTCxDQUFhRixJQUFiO0FBQ0Q7QUFkSDtBQUFBO0FBQUEsK0JBZ0JhO0FBQ1QsV0FBS0MsWUFBTDs7QUFDQSxVQUFJLEtBQUtBLFlBQUwsR0FBb0IsS0FBS1IsS0FBTCxDQUFXVSxNQUFuQyxFQUEyQztBQUN6QyxhQUFLRCxPQUFMLEdBQWUsS0FBS1QsS0FBTCxDQUFXLEtBQUtRLFlBQWhCLENBQWY7QUFDQSxhQUFLQyxPQUFMLENBQWFGLElBQWI7QUFDRDtBQUVGO0FBdkJIO0FBQUE7QUFBQSw4QkF3Qlk7QUFDUixXQUFLUCxLQUFMLENBQVdXLElBQVgsQ0FBZ0IsSUFBSVAsMkRBQUosQ0FBaUIsY0FBakIsQ0FBaEI7QUFDRDtBQTFCSDtBQUFBO0FBQUEsbUNBNEJpQjtBQUNiUSxnQkFBVSxHQUFHLEtBQUtDLFFBQWxCLENBRGEsQ0FFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUNEO0FBQ0Y7QUFDQTs7QUF2Q0E7QUFBQTtBQUFBLGdDQXdDYztBQUNWQyxjQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBS2hCLE9BQTdCLEVBQXNDaUIsU0FBdEM7QUFjRDtBQXZESDs7QUFBQTtBQUFBO0FBMERBbEIsUUFBUSxDQUFDRyxVQUFULEdBQXNCLENBQ3BCLDBDQURvQixFQUVwQiw2Q0FGb0IsRUFHcEIsa0RBSG9CLEVBSXBCLHdDQUpvQixFQUtwQixxQ0FMb0IsQ0FBdEIiLCJmaWxlIjoiLi9zcmMvdHV0b3JpYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFR1dG9yaWFsU3RlcCB9IGZyb20gJy4vdHV0b3JpYWxfc3RlcCc7XG5pbXBvcnQgTWljcm9Nb2RhbCBmcm9tICdtaWNyb21vZGFsJztcblxuZXhwb3J0IGNsYXNzIFR1dG9yaWFsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tb2RhbElkID0gJ3R1dG9yaWFsTW9kYWwnO1xuICAgIHRoaXMuc3RlcHMgPSBUdXRvcmlhbC5TVEVQU19URVhULm1hcCh0ZXh0ID0+IG5ldyBUdXRvcmlhbFN0ZXAodGV4dCkpO1xuXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuY3JlYXRlRG9tKCk7XG4gICAgLy90aGlzLmFkZENhbGxiYWNrcygpO1xuICAgIE1pY3JvTW9kYWwuc2hvdyh0aGlzLm1vZGFsSWQpO1xuICAgIHRoaXMuY3VyU3RlcEluZGV4ID0gMDtcbiAgICB0aGlzLmN1clN0ZXAgPSB0aGlzLnN0ZXBzW3RoaXMuY3VyU3RlcEluZGV4XTtcbiAgICB0aGlzLmN1clN0ZXAuc2hvdygpO1xuICB9XG5cbiAgbmV4dFN0ZXAoKSB7XG4gICAgdGhpcy5jdXJTdGVwSW5kZXgrKztcbiAgICBpZiAodGhpcy5jdXJTdGVwSW5kZXggPCB0aGlzLnN0ZXBzLmxlbmd0aCkge1xuICAgICAgdGhpcy5jdXJTdGVwID0gdGhpcy5zdGVwc1t0aGlzLmN1clN0ZXBJbmRleF07XG4gICAgICB0aGlzLmN1clN0ZXAuc2hvdygpO1xuICAgIH1cblxuICB9XG4gIGFkZFN0ZXAoKSB7XG4gICAgdGhpcy5zdGVwcy5wdXNoKG5ldyBUdXRvcmlhbFN0ZXAoJ0luc3RydWN0aW9ucycpKTtcbiAgfVxuXG4gIGFkZENhbGxiYWNrcygpIHtcbiAgICBuZXh0U3RlcEZuID0gdGhpcy5uZXh0U3RlcDtcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnVHV0b3JpYWxNb2RhbEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcbiAgICAvLyAgICgpID0+IHtcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coJ25leHQgc3RlcCBmbicpO1xuICAgIC8vICAgICAvLyAvL25leHRTdGVwRm4oKTtcbiAgICAvLyAgICAgLy8gdGhpcy5uZXh0U3RlcCgpO1xuICAgIC8vICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGRvbSBmb3IgdGhlIG1vZGFsLlxuICAgKi9cbiAgY3JlYXRlRG9tKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubW9kYWxJZCkuaW5uZXJIVE1MID0gYFxuICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX292ZXJsYXlcIiB0YWJpbmRleD1cIi0xXCIgZGF0YS1taWNyb21vZGFsLWNsb3NlPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19jb250YWluZXJcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1tb2RhbD1cInRydWVcIiBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC0xLXRpdGxlXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJtb2RhbF9faGVhZGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19jbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZSBtb2RhbFwiIGlkPVwidHV0b3JpYWxDbG9zZUJ0blwiIGRhdGEtbWljcm9tb2RhbC1jbG9zZT48L2J1dHRvbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxtYWluIGNsYXNzPVwibW9kYWxfX2NvbnRlbnRcIiBpZD1cIm1vZGFsLTEtY29udGVudFwiPlxuICAgICAgICAgIDxoMiBjbGFzcz1cIm1vZGFsX190aXRsZVwiIGlkPVwidHV0b3JpYWxNb2RhbFRleHRcIj48L2gyPlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJtb2RhbF9fZm9vdGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9kYWxfX2J0biBtb2RhbF9fYnRuLXByaW1hcnlcIiBhcmlhLWxhYmVsPVwiTmV4dCBzdGVwXCIgaWQ9XCJUdXRvcmlhbE1vZGFsQnRuXCI+TmV4dCBzdGVwPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcbiAgfVxufVxuXG5UdXRvcmlhbC5TVEVQU19URVhUID0gW1xuICAnSGl0IGVudGVyIHRvIG1vdmUgZm9jdXMgdG8gdGhlIHdvcmtzcGFjZScsXG4gICdFbmFibGUga2V5Ym9hcmQgbmF2IGJ5IHByZXNzaW5nIENtZCtTaGlmdCtLJyxcbiAgJ1ByZXNzIFggdG8gbmF2aWdhdGUgdG8gdGhlIGZpcnN0IHN0YWNrIG9mIGJsb2NrcycsXG4gICdQcmVzcyBZIHRvIG5hdmlnYXRlIHRvIHRoZSBmaXJzdCBibG9jaycsXG4gICdQcmVzcyBlbnRlciB0byBtYXJrIHRoZSBmaXJzdCBibG9jaycsXG5dXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/tutorial.js\n");

/***/ })

})