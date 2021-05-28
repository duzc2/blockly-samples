webpackHotUpdate("main",{

/***/ "./src/tutorial.js":
/*!*************************!*\
  !*** ./src/tutorial.js ***!
  \*************************/
/*! exports provided: Tutorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tutorial\", function() { return Tutorial; });\n/* harmony import */ var _tutorial_step__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial_step */ \"./src/tutorial_step.js\");\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Tutorial = /*#__PURE__*/function () {\n  function Tutorial() {\n    _classCallCheck(this, Tutorial);\n\n    this.modalId = 'tutorialModal';\n    this.steps = Tutorial.STEPS_TEXT.map(function (text) {\n      return new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"](text);\n    });\n  }\n\n  _createClass(Tutorial, [{\n    key: \"init\",\n    value: function init() {\n      this.createDom(); //this.addCallbacks();\n\n      micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].show(this.modalId);\n      this.curStepIndex = 0;\n      this.curStep = this.steps[this.curStepIndex];\n      this.curStep.show();\n    }\n  }, {\n    key: \"nextStep\",\n    value: function nextStep() {\n      this.curStepIndex++;\n\n      if (this.curStepIndex < this.steps.length) {\n        this.curStep = this.steps[this.curStepIndex];\n        this.curStep.show();\n      }\n    }\n  }, {\n    key: \"addStep\",\n    value: function addStep() {\n      this.steps.push(new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"]('Instructions'));\n    }\n  }, {\n    key: \"addCallbacks\",\n    value: function addCallbacks() {\n      nextStepFn = this.nextStep;\n      document.getElementById('tutorialModalBtn').addEventListener('click', function () {\n        nextStepFn();\n      });\n    }\n    /**\n     * Creates the dom for the modal.\n     */\n\n  }, {\n    key: \"createDom\",\n    value: function createDom() {\n      document.getElementById(this.modalId).innerHTML = \"\\n     <div class=\\\"modal__overlay\\\" tabindex=\\\"-1\\\" data-micromodal-close>\\n      <div class=\\\"modal__container\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\" aria-labelledby=\\\"modal-1-title\\\">\\n        <header class=\\\"modal__header\\\">\\n          <h2 class=\\\"modal__title\\\" id=\\\"tutorialModalText\\\"></h2>\\n          <button class=\\\"modal__btn\\\" aria-label=\\\"Close modal\\\" id=\\\"TutorialModalBtn\\\" data-micromodal-close></button>\\n        </header>\\n      </div>\\n    </div>\";\n    }\n  }]);\n\n  return Tutorial;\n}();\nTutorial.STEPS_TEXT = ['Hit enter to move focus to the workspace', 'Enable keyboard nav by pressing Cmd+Shift+K', 'Press X to navigate to the first stack of blocks', 'Press Y to navigate to the first block', 'Press enter to mark the first block'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHV0b3JpYWwuanM/MjQzOCJdLCJuYW1lcyI6WyJUdXRvcmlhbCIsIm1vZGFsSWQiLCJzdGVwcyIsIlNURVBTX1RFWFQiLCJtYXAiLCJ0ZXh0IiwiVHV0b3JpYWxTdGVwIiwiY3JlYXRlRG9tIiwiTWljcm9Nb2RhbCIsInNob3ciLCJjdXJTdGVwSW5kZXgiLCJjdXJTdGVwIiwibGVuZ3RoIiwicHVzaCIsIm5leHRTdGVwRm4iLCJuZXh0U3RlcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVPLElBQU1BLFFBQWI7QUFDRSxzQkFBYztBQUFBOztBQUNaLFNBQUtDLE9BQUwsR0FBZSxlQUFmO0FBQ0EsU0FBS0MsS0FBTCxHQUFhRixRQUFRLENBQUNHLFVBQVQsQ0FBb0JDLEdBQXBCLENBQXdCLFVBQUFDLElBQUk7QUFBQSxhQUFLLElBQUlDLDJEQUFKLENBQWlCRCxJQUFqQixDQUFMO0FBQUEsS0FBNUIsQ0FBYjtBQUVEOztBQUxIO0FBQUE7QUFBQSwyQkFPUztBQUNMLFdBQUtFLFNBQUwsR0FESyxDQUVMOztBQUNBQyx3REFBVSxDQUFDQyxJQUFYLENBQWdCLEtBQUtSLE9BQXJCO0FBQ0EsV0FBS1MsWUFBTCxHQUFvQixDQUFwQjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxLQUFLVCxLQUFMLENBQVcsS0FBS1EsWUFBaEIsQ0FBZjtBQUNBLFdBQUtDLE9BQUwsQ0FBYUYsSUFBYjtBQUNEO0FBZEg7QUFBQTtBQUFBLCtCQWdCYTtBQUNULFdBQUtDLFlBQUw7O0FBQ0EsVUFBSSxLQUFLQSxZQUFMLEdBQW9CLEtBQUtSLEtBQUwsQ0FBV1UsTUFBbkMsRUFBMkM7QUFDekMsYUFBS0QsT0FBTCxHQUFlLEtBQUtULEtBQUwsQ0FBVyxLQUFLUSxZQUFoQixDQUFmO0FBQ0EsYUFBS0MsT0FBTCxDQUFhRixJQUFiO0FBQ0Q7QUFFRjtBQXZCSDtBQUFBO0FBQUEsOEJBd0JZO0FBQ1IsV0FBS1AsS0FBTCxDQUFXVyxJQUFYLENBQWdCLElBQUlQLDJEQUFKLENBQWlCLGNBQWpCLENBQWhCO0FBQ0Q7QUExQkg7QUFBQTtBQUFBLG1DQTRCaUI7QUFDYlEsZ0JBQVUsR0FBRyxLQUFLQyxRQUFsQjtBQUNBQyxjQUFRLENBQUNDLGNBQVQsQ0FBd0Isa0JBQXhCLEVBQTRDQyxnQkFBNUMsQ0FBNkQsT0FBN0QsRUFDRSxZQUFNO0FBQ0pKLGtCQUFVO0FBQ1gsT0FISDtBQUlEO0FBQ0Q7QUFDRjtBQUNBOztBQXJDQTtBQUFBO0FBQUEsZ0NBc0NjO0FBQ1ZFLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUFLaEIsT0FBN0IsRUFBc0NrQixTQUF0QztBQVNEO0FBaERIOztBQUFBO0FBQUE7QUFtREFuQixRQUFRLENBQUNHLFVBQVQsR0FBc0IsQ0FDcEIsMENBRG9CLEVBRXBCLDZDQUZvQixFQUdwQixrREFIb0IsRUFJcEIsd0NBSm9CLEVBS3BCLHFDQUxvQixDQUF0QiIsImZpbGUiOiIuL3NyYy90dXRvcmlhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtUdXRvcmlhbFN0ZXB9IGZyb20gJy4vdHV0b3JpYWxfc3RlcCc7XG5pbXBvcnQgTWljcm9Nb2RhbCBmcm9tICdtaWNyb21vZGFsJztcblxuZXhwb3J0IGNsYXNzIFR1dG9yaWFsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tb2RhbElkID0gJ3R1dG9yaWFsTW9kYWwnO1xuICAgIHRoaXMuc3RlcHMgPSBUdXRvcmlhbC5TVEVQU19URVhULm1hcCh0ZXh0ID0+ICBuZXcgVHV0b3JpYWxTdGVwKHRleHQpKTtcblxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmNyZWF0ZURvbSgpO1xuICAgIC8vdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICBNaWNyb01vZGFsLnNob3codGhpcy5tb2RhbElkKTtcbiAgICB0aGlzLmN1clN0ZXBJbmRleCA9IDA7XG4gICAgdGhpcy5jdXJTdGVwID0gdGhpcy5zdGVwc1t0aGlzLmN1clN0ZXBJbmRleF07XG4gICAgdGhpcy5jdXJTdGVwLnNob3coKTtcbiAgfVxuXG4gIG5leHRTdGVwKCkge1xuICAgIHRoaXMuY3VyU3RlcEluZGV4Kys7XG4gICAgaWYgKHRoaXMuY3VyU3RlcEluZGV4IDwgdGhpcy5zdGVwcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY3VyU3RlcCA9IHRoaXMuc3RlcHNbdGhpcy5jdXJTdGVwSW5kZXhdO1xuICAgICAgdGhpcy5jdXJTdGVwLnNob3coKTtcbiAgICB9XG5cbiAgfVxuICBhZGRTdGVwKCkge1xuICAgIHRoaXMuc3RlcHMucHVzaChuZXcgVHV0b3JpYWxTdGVwKCdJbnN0cnVjdGlvbnMnKSk7XG4gIH1cblxuICBhZGRDYWxsYmFja3MoKSB7XG4gICAgbmV4dFN0ZXBGbiA9IHRoaXMubmV4dFN0ZXA7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1dG9yaWFsTW9kYWxCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIG5leHRTdGVwRm4oKTtcbiAgICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBkb20gZm9yIHRoZSBtb2RhbC5cbiAgICovXG4gIGNyZWF0ZURvbSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1vZGFsSWQpLmlubmVySFRNTCA9IGBcbiAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19vdmVybGF5XCIgdGFiaW5kZXg9XCItMVwiIGRhdGEtbWljcm9tb2RhbC1jbG9zZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fY29udGFpbmVyXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbW9kYWw9XCJ0cnVlXCIgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtMS10aXRsZVwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwibW9kYWxfX2hlYWRlclwiPlxuICAgICAgICAgIDxoMiBjbGFzcz1cIm1vZGFsX190aXRsZVwiIGlkPVwidHV0b3JpYWxNb2RhbFRleHRcIj48L2gyPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fYnRuXCIgYXJpYS1sYWJlbD1cIkNsb3NlIG1vZGFsXCIgaWQ9XCJUdXRvcmlhbE1vZGFsQnRuXCIgZGF0YS1taWNyb21vZGFsLWNsb3NlPjwvYnV0dG9uPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gIH1cbn1cblxuVHV0b3JpYWwuU1RFUFNfVEVYVCA9IFtcbiAgJ0hpdCBlbnRlciB0byBtb3ZlIGZvY3VzIHRvIHRoZSB3b3Jrc3BhY2UnLFxuICAnRW5hYmxlIGtleWJvYXJkIG5hdiBieSBwcmVzc2luZyBDbWQrU2hpZnQrSycsXG4gICdQcmVzcyBYIHRvIG5hdmlnYXRlIHRvIHRoZSBmaXJzdCBzdGFjayBvZiBibG9ja3MnLFxuICAnUHJlc3MgWSB0byBuYXZpZ2F0ZSB0byB0aGUgZmlyc3QgYmxvY2snLFxuICAnUHJlc3MgZW50ZXIgdG8gbWFyayB0aGUgZmlyc3QgYmxvY2snLFxuXVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/tutorial.js\n");

/***/ })

})