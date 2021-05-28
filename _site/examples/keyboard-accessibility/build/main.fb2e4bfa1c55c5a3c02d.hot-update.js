webpackHotUpdate("main",{

/***/ "./src/tutorial.js":
/*!*************************!*\
  !*** ./src/tutorial.js ***!
  \*************************/
/*! exports provided: Tutorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tutorial\", function() { return Tutorial; });\n/* harmony import */ var _tutorial_step__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial_step */ \"./src/tutorial_step.js\");\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Multi-step tutorial using modals.\n */\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n/**\n * A multi-step tutorial for the accessible music game.\n */\n\nvar Tutorial = /*#__PURE__*/function () {\n  /**\n   * Class for a tutorial.\n   * @constructor\n   */\n  function Tutorial() {\n    var _this = this;\n\n    _classCallCheck(this, Tutorial);\n\n    /**\n     * The id of the modal.\n     * @type {string}\n     */\n    this.modalId = 'tutorialModal';\n    /**\n     * The id of the tutorial text.\n     * @type {string}\n     */\n\n    this.stepTextId = this.modalId + 'Text';\n    /**\n     * The id of the next step button.\n     * @type {string}\n     */\n\n    this.stepButtonId = this.modalId + 'Btn';\n    /**\n     * The id of the hide modal button.\n     * @type {string}\n     */\n\n    this.hideButtonId = this.modalId + 'Btn';\n    /**\n     * An array of steps in the tutorial.\n     * @type {Array<!TutorialStep>}\n     */\n\n    this.steps = Tutorial.STEPS_TEXT.map(function (text) {\n      return new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"](text, _this.stepTextId, _this.nextStep);\n    });\n    /**\n     * The index of the currently active step.\n     * @type {number}\n     */\n\n    this.curStepIndex = 0;\n    /**\n     * The currently active step.\n     * @type {TutorialStep}\n     */\n\n    this.curStep = this.steps[this.curStepIndex];\n  }\n  /**\n   * Initialize DOM and show.\n   */\n\n\n  _createClass(Tutorial, [{\n    key: \"init\",\n    value: function init() {\n      this.createDom();\n      this.addCallbacks();\n      micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].show(this.modalId);\n      this.curStep.show();\n    }\n    /**\n     * Display the next step, or end the tutorial if there are no more steps.\n     */\n\n  }, {\n    key: \"nextStep\",\n    value: function nextStep() {\n      this.curStepIndex++;\n\n      if (this.curStepIndex < this.steps.length) {\n        this.curStep = this.steps[this.curStepIndex];\n        micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].show(this.modalId);\n        this.curStep.show();\n      } else {\n        this.done();\n      }\n    }\n    /**\n     * End the tutorial.\n     */\n\n  }, {\n    key: \"done\",\n    value: function done() {\n      micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].close(this.modalId);\n    }\n    /**\n     * Add necessary handlers for any buttons on the modal.\n     */\n\n  }, {\n    key: \"addCallbacks\",\n    value: function addCallbacks() {\n      var _this2 = this;\n\n      document.getElementById(this.stepButtonId).addEventListener('click', function () {\n        _this2.nextStep();\n      });\n      document.getElementById(this.hideButtonId);\n    }\n    /**\n     * Create the dom for the modal.\n     */\n\n  }, {\n    key: \"createDom\",\n    value: function createDom() {\n      /* eslint-disable max-len */\n      document.getElementById(this.modalId).innerHTML = \"\\n     <div class=\\\"modal__overlay\\\" tabindex=\\\"-1\\\" data-micromodal-close>\\n      <div class=\\\"modal__container\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\" aria-labelledby=\\\"modal-1-title\\\">\\n        <header class=\\\"modal__header\\\">\\n          <button class=\\\"modal__close\\\" aria-label=\\\"Close modal\\\" id=\\\"tutorialCloseBtn\\\" data-micromodal-close></button>\\n        </header>\\n        <main class=\\\"modal__content\\\" id=\\\"modal-1-content\\\">\\n          <h2 class=\\\"modal__title\\\" id=\\\"\".concat(this.stepTextId, \"\\\"></h2>\\n        </main>\\n        <footer class=\\\"modal__footer\\\">\\n          <button class=\\\"modal__btn modal__btn-primary\\\" aria-label=\\\"Hide modal\\\" id=\\\"\").concat(this.hideButtonId, \"\\\">Next step</button>\\n          <button class=\\\"modal__btn modal__btn-primary\\\" aria-label=\\\"Next step\\\" id=\\\"\").concat(this.stepButtonId, \"\\\">Next step</button>\\n        </footer>\\n      </div>\\n    </div>\");\n      /* eslint-enable max-len */\n    }\n  }]);\n\n  return Tutorial;\n}();\nTutorial.STEPS_TEXT = ['Hit enter to move focus to the workspace', 'Enable keyboard nav by pressing Cmd+Shift+K', 'Press X to navigate to the first stack of blocks', 'Press Y to navigate to the first block', 'Press enter to mark the first block'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHV0b3JpYWwuanM/MjQzOCJdLCJuYW1lcyI6WyJUdXRvcmlhbCIsIm1vZGFsSWQiLCJzdGVwVGV4dElkIiwic3RlcEJ1dHRvbklkIiwiaGlkZUJ1dHRvbklkIiwic3RlcHMiLCJTVEVQU19URVhUIiwibWFwIiwidGV4dCIsIlR1dG9yaWFsU3RlcCIsIm5leHRTdGVwIiwiY3VyU3RlcEluZGV4IiwiY3VyU3RlcCIsImNyZWF0ZURvbSIsImFkZENhbGxiYWNrcyIsIk1pY3JvTW9kYWwiLCJzaG93IiwibGVuZ3RoIiwiZG9uZSIsImNsb3NlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDYTs7Ozs7Ozs7QUFFYjtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNPLElBQU1BLFFBQWI7QUFDRTtBQUNGO0FBQ0E7QUFDQTtBQUNFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQ1o7QUFDSjtBQUNBO0FBQ0E7QUFDSSxTQUFLQyxPQUFMLEdBQWUsZUFBZjtBQUVBO0FBQ0o7QUFDQTtBQUNBOztBQUNJLFNBQUtDLFVBQUwsR0FBa0IsS0FBS0QsT0FBTCxHQUFlLE1BQWpDO0FBRUE7QUFDSjtBQUNBO0FBQ0E7O0FBQ0ksU0FBS0UsWUFBTCxHQUFvQixLQUFLRixPQUFMLEdBQWUsS0FBbkM7QUFFQTtBQUNKO0FBQ0E7QUFDQTs7QUFDSSxTQUFLRyxZQUFMLEdBQW9CLEtBQUtILE9BQUwsR0FBZSxLQUFuQztBQUVBO0FBQ0o7QUFDQTtBQUNBOztBQUNJLFNBQUtJLEtBQUwsR0FBYUwsUUFBUSxDQUFDTSxVQUFULENBQW9CQyxHQUFwQixDQUNULFVBQUNDLElBQUQ7QUFBQSxhQUFVLElBQUlDLDJEQUFKLENBQWlCRCxJQUFqQixFQUF1QixLQUFJLENBQUNOLFVBQTVCLEVBQXdDLEtBQUksQ0FBQ1EsUUFBN0MsQ0FBVjtBQUFBLEtBRFMsQ0FBYjtBQUlBO0FBQ0o7QUFDQTtBQUNBOztBQUNJLFNBQUtDLFlBQUwsR0FBb0IsQ0FBcEI7QUFFQTtBQUNKO0FBQ0E7QUFDQTs7QUFDSSxTQUFLQyxPQUFMLEdBQWUsS0FBS1AsS0FBTCxDQUFXLEtBQUtNLFlBQWhCLENBQWY7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBckRBO0FBQUE7QUFBQSwyQkFzRFM7QUFDTCxXQUFLRSxTQUFMO0FBQ0EsV0FBS0MsWUFBTDtBQUNBQyx3REFBVSxDQUFDQyxJQUFYLENBQWdCLEtBQUtmLE9BQXJCO0FBQ0EsV0FBS1csT0FBTCxDQUFhSSxJQUFiO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7O0FBL0RBO0FBQUE7QUFBQSwrQkFnRWE7QUFDVCxXQUFLTCxZQUFMOztBQUNBLFVBQUksS0FBS0EsWUFBTCxHQUFvQixLQUFLTixLQUFMLENBQVdZLE1BQW5DLEVBQTJDO0FBQ3pDLGFBQUtMLE9BQUwsR0FBZSxLQUFLUCxLQUFMLENBQVcsS0FBS00sWUFBaEIsQ0FBZjtBQUNBSSwwREFBVSxDQUFDQyxJQUFYLENBQWdCLEtBQUtmLE9BQXJCO0FBQ0EsYUFBS1csT0FBTCxDQUFhSSxJQUFiO0FBQ0QsT0FKRCxNQUlPO0FBQ0wsYUFBS0UsSUFBTDtBQUNEO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7O0FBN0VBO0FBQUE7QUFBQSwyQkE4RVM7QUFDTEgsd0RBQVUsQ0FBQ0ksS0FBWCxDQUFpQixLQUFLbEIsT0FBdEI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7QUFwRkE7QUFBQTtBQUFBLG1DQXFGaUI7QUFBQTs7QUFDYm1CLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUFLbEIsWUFBN0IsRUFBMkNtQixnQkFBM0MsQ0FBNEQsT0FBNUQsRUFDSSxZQUFNO0FBQ0osY0FBSSxDQUFDWixRQUFMO0FBQ0QsT0FITDtBQUlBVSxjQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBS2pCLFlBQTdCO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7O0FBL0ZBO0FBQUE7QUFBQSxnQ0FnR2M7QUFDVjtBQUNBZ0IsY0FBUSxDQUFDQyxjQUFULENBQXdCLEtBQUtwQixPQUE3QixFQUFzQ3NCLFNBQXRDLDRlQU9xQyxLQUFLckIsVUFQMUMsMktBVWtGLEtBQUtFLFlBVnZGLDRIQVdpRixLQUFLRCxZQVh0RjtBQWVBO0FBQ0Q7QUFsSEg7O0FBQUE7QUFBQTtBQXFIQUgsUUFBUSxDQUFDTSxVQUFULEdBQXNCLENBQ3BCLDBDQURvQixFQUVwQiw2Q0FGb0IsRUFHcEIsa0RBSG9CLEVBSXBCLHdDQUpvQixFQUtwQixxQ0FMb0IsQ0FBdEIiLCJmaWxlIjoiLi9zcmMvdHV0b3JpYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBNdWx0aS1zdGVwIHR1dG9yaWFsIHVzaW5nIG1vZGFscy5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge1R1dG9yaWFsU3RlcH0gZnJvbSAnLi90dXRvcmlhbF9zdGVwJztcbmltcG9ydCBNaWNyb01vZGFsIGZyb20gJ21pY3JvbW9kYWwnO1xuXG4vKipcbiAqIEEgbXVsdGktc3RlcCB0dXRvcmlhbCBmb3IgdGhlIGFjY2Vzc2libGUgbXVzaWMgZ2FtZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFR1dG9yaWFsIHtcbiAgLyoqXG4gICAqIENsYXNzIGZvciBhIHR1dG9yaWFsLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKlxuICAgICAqIFRoZSBpZCBvZiB0aGUgbW9kYWwuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZGFsSWQgPSAndHV0b3JpYWxNb2RhbCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWQgb2YgdGhlIHR1dG9yaWFsIHRleHQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN0ZXBUZXh0SWQgPSB0aGlzLm1vZGFsSWQgKyAnVGV4dCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWQgb2YgdGhlIG5leHQgc3RlcCBidXR0b24uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN0ZXBCdXR0b25JZCA9IHRoaXMubW9kYWxJZCArICdCdG4nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlkIG9mIHRoZSBoaWRlIG1vZGFsIGJ1dHRvbi5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuaGlkZUJ1dHRvbklkID0gdGhpcy5tb2RhbElkICsgJ0J0bic7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBzdGVwcyBpbiB0aGUgdHV0b3JpYWwuXG4gICAgICogQHR5cGUge0FycmF5PCFUdXRvcmlhbFN0ZXA+fVxuICAgICAqL1xuICAgIHRoaXMuc3RlcHMgPSBUdXRvcmlhbC5TVEVQU19URVhULm1hcChcbiAgICAgICAgKHRleHQpID0+IG5ldyBUdXRvcmlhbFN0ZXAodGV4dCwgdGhpcy5zdGVwVGV4dElkLCB0aGlzLm5leHRTdGVwKVxuICAgICk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5kZXggb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgc3RlcC5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuY3VyU3RlcEluZGV4ID0gMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIHN0ZXAuXG4gICAgICogQHR5cGUge1R1dG9yaWFsU3RlcH1cbiAgICAgKi9cbiAgICB0aGlzLmN1clN0ZXAgPSB0aGlzLnN0ZXBzW3RoaXMuY3VyU3RlcEluZGV4XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTSBhbmQgc2hvdy5cbiAgICovXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVEb20oKTtcbiAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgIE1pY3JvTW9kYWwuc2hvdyh0aGlzLm1vZGFsSWQpO1xuICAgIHRoaXMuY3VyU3RlcC5zaG93KCk7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGxheSB0aGUgbmV4dCBzdGVwLCBvciBlbmQgdGhlIHR1dG9yaWFsIGlmIHRoZXJlIGFyZSBubyBtb3JlIHN0ZXBzLlxuICAgKi9cbiAgbmV4dFN0ZXAoKSB7XG4gICAgdGhpcy5jdXJTdGVwSW5kZXgrKztcbiAgICBpZiAodGhpcy5jdXJTdGVwSW5kZXggPCB0aGlzLnN0ZXBzLmxlbmd0aCkge1xuICAgICAgdGhpcy5jdXJTdGVwID0gdGhpcy5zdGVwc1t0aGlzLmN1clN0ZXBJbmRleF07XG4gICAgICBNaWNyb01vZGFsLnNob3codGhpcy5tb2RhbElkKTtcbiAgICAgIHRoaXMuY3VyU3RlcC5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbmQgdGhlIHR1dG9yaWFsLlxuICAgKi9cbiAgZG9uZSgpIHtcbiAgICBNaWNyb01vZGFsLmNsb3NlKHRoaXMubW9kYWxJZCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG5lY2Vzc2FyeSBoYW5kbGVycyBmb3IgYW55IGJ1dHRvbnMgb24gdGhlIG1vZGFsLlxuICAgKi9cbiAgYWRkQ2FsbGJhY2tzKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc3RlcEJ1dHRvbklkKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLm5leHRTdGVwKCk7XG4gICAgICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaGlkZUJ1dHRvbklkKVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgZG9tIGZvciB0aGUgbW9kYWwuXG4gICAqL1xuICBjcmVhdGVEb20oKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubW9kYWxJZCkuaW5uZXJIVE1MID0gYFxuICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX292ZXJsYXlcIiB0YWJpbmRleD1cIi0xXCIgZGF0YS1taWNyb21vZGFsLWNsb3NlPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19jb250YWluZXJcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1tb2RhbD1cInRydWVcIiBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC0xLXRpdGxlXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJtb2RhbF9faGVhZGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19jbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZSBtb2RhbFwiIGlkPVwidHV0b3JpYWxDbG9zZUJ0blwiIGRhdGEtbWljcm9tb2RhbC1jbG9zZT48L2J1dHRvbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxtYWluIGNsYXNzPVwibW9kYWxfX2NvbnRlbnRcIiBpZD1cIm1vZGFsLTEtY29udGVudFwiPlxuICAgICAgICAgIDxoMiBjbGFzcz1cIm1vZGFsX190aXRsZVwiIGlkPVwiJHt0aGlzLnN0ZXBUZXh0SWR9XCI+PC9oMj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8Zm9vdGVyIGNsYXNzPVwibW9kYWxfX2Zvb3RlclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fYnRuIG1vZGFsX19idG4tcHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJIaWRlIG1vZGFsXCIgaWQ9XCIke3RoaXMuaGlkZUJ1dHRvbklkfVwiPk5leHQgc3RlcDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fYnRuIG1vZGFsX19idG4tcHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJOZXh0IHN0ZXBcIiBpZD1cIiR7dGhpcy5zdGVwQnV0dG9uSWR9XCI+TmV4dCBzdGVwPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cbiAgfVxufVxuXG5UdXRvcmlhbC5TVEVQU19URVhUID0gW1xuICAnSGl0IGVudGVyIHRvIG1vdmUgZm9jdXMgdG8gdGhlIHdvcmtzcGFjZScsXG4gICdFbmFibGUga2V5Ym9hcmQgbmF2IGJ5IHByZXNzaW5nIENtZCtTaGlmdCtLJyxcbiAgJ1ByZXNzIFggdG8gbmF2aWdhdGUgdG8gdGhlIGZpcnN0IHN0YWNrIG9mIGJsb2NrcycsXG4gICdQcmVzcyBZIHRvIG5hdmlnYXRlIHRvIHRoZSBmaXJzdCBibG9jaycsXG4gICdQcmVzcyBlbnRlciB0byBtYXJrIHRoZSBmaXJzdCBibG9jaycsXG5dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/tutorial.js\n");

/***/ })

})