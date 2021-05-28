webpackHotUpdate("main",{

/***/ "./src/tutorial.js":
/*!*************************!*\
  !*** ./src/tutorial.js ***!
  \*************************/
/*! exports provided: Tutorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tutorial\", function() { return Tutorial; });\n/* harmony import */ var _tutorial_step__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial_step */ \"./src/tutorial_step.js\");\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blockly/core */ \"./node_modules/blockly/dist/core-browser.js\");\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Multi-step tutorial using modals.\n */\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n/**\n * A multi-step tutorial for the accessible music game.\n */\n\nvar Tutorial = /*#__PURE__*/function () {\n  /**\n   * Class for a tutorial.\n   * @param {Blockly.WorkspaceSvg} workspace The workspace the user\n   *     will interact with.\n   * @constructor\n   */\n  function Tutorial(workspace) {\n    var _this = this;\n\n    _classCallCheck(this, Tutorial);\n\n    /**\n     * The id of the modal.\n     * @type {string}\n     */\n    this.modalId = 'tutorialModal';\n    /**\n     * The id of the tutorial text.\n     * @type {string}\n     */\n\n    this.stepTextId = this.modalId + 'Text';\n    /**\n     * The id of the next step button.\n     * @type {string}\n     */\n\n    this.stepButtonId = this.modalId + 'StepBtn';\n    /**\n     * The id of the hide modal button.\n     * @type {string}\n     */\n\n    this.hideButtonId = this.modalId + 'HideBtn';\n    /**\n     * An array of steps in the tutorial.\n     * @type {Array<!TutorialStep>}\n     */\n\n    this.steps = Tutorial.STEPS_TEXT.map(function (text) {\n      return new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"](text, _this.stepTextId, _this.nextStep);\n    });\n    /**\n     * The index of the currently active step.\n     * @type {number}\n     */\n\n    this.curStepIndex = 0;\n    /**\n     * The currently active step.\n     * @type {TutorialStep}\n     */\n\n    this.curStep = this.steps[this.curStepIndex];\n    /**\n     * The Blockly workspace the user will interact with.\n     * @type {Blockly.WorkspaceSvg}\n     */\n\n    this.workspace = workspace;\n    this.curNode = null;\n  }\n  /**\n   * Initialize DOM and show.\n   */\n\n\n  _createClass(Tutorial, [{\n    key: \"init\",\n    value: function init() {\n      this.createDom();\n      this.addCallbacks();\n      micromodal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].show(this.modalId);\n      this.curStep.show();\n      blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.navigation.enableKeyboardAccessibility();\n    }\n    /**\n     * Display the next step, or end the tutorial if there are no more steps.\n     */\n\n  }, {\n    key: \"nextStep\",\n    value: function nextStep() {\n      this.curStepIndex++;\n\n      if (this.curStepIndex < this.steps.length) {\n        this.curStep = this.steps[this.curStepIndex];\n        this.curStep.show();\n        this.stashCursor();\n      } else {\n        this.done();\n      }\n    }\n    /**\n     * End the tutorial.\n     */\n\n  }, {\n    key: \"done\",\n    value: function done() {\n      micromodal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].close(this.modalId);\n    }\n  }, {\n    key: \"enableNavFn\",\n    value: function enableNavFn() {// // Create a serialized key from the primary key and any modifiers.\n      // const enableKey = Blockly.user.keyMap.createSerializedKey(\n      //     Blockly.utils.KeyCodes.K,\n      //     [\n      //       Blockly.user.keyMap.modifierKeys.CONTROL,\n      //       Blockly.user.keyMap.modifierKeys.SHIFT,\n      //     ]);\n      // var actionEnable = new Blockly.Action('topOfStack', 'Move cursor to top of stack');\n      // Blockly.user.keyMap.setActionForKey(enableKey, actionEnable);\n    }\n  }, {\n    key: \"stashCursor\",\n    value: function stashCursor() {\n      this.curNode = this.workspace.getCursor().getCurNode();\n      blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.navigation.disableKeyboardAccessibility();\n    }\n  }, {\n    key: \"popCursor\",\n    value: function popCursor() {\n      blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.navigation.enableKeyboardAccessibility();\n\n      if (this.curNode) {\n        this.workspace.getCursor().setCurNode(this.curNode);\n      }\n    }\n    /**\n     * Add necessary handlers for any buttons on the modal.\n     */\n\n  }, {\n    key: \"addCallbacks\",\n    value: function addCallbacks() {\n      var _this2 = this;\n\n      document.getElementById(this.stepButtonId).addEventListener('click', function () {\n        _this2.nextStep();\n      });\n      document.getElementById(this.hideButtonId).addEventListener('click', function (e) {\n        micromodal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].close(_this2.modalId);\n\n        _this2.enableNavFn();\n\n        console.log(e);\n        e.preventDefault();\n\n        _this2.popCursor();\n      });\n    }\n    /**\n     * Create the dom for the modal.\n     */\n\n  }, {\n    key: \"createDom\",\n    value: function createDom() {\n      document.getElementById(this.modalId).innerHTML = \"\\n     <div class=\\\"modal__overlay\\\" tabindex=\\\"-1\\\" data-micromodal-close>\\n      <div class=\\\"modal__container\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\"\\n        aria-labelledby=\\\"modal-1-title\\\">\\n        <header class=\\\"modal__header\\\">\\n          <button class=\\\"modal__close\\\" aria-label=\\\"Close modal\\\"\\n            id=\\\"tutorialCloseBtn\\\" data-micromodal-close></button>\\n        </header>\\n        <main class=\\\"modal__content\\\" id=\\\"modal-1-content\\\">\\n          <h2 class=\\\"modal__title\\\" id=\\\"\".concat(this.stepTextId, \"\\\"></h2>\\n        </main>\\n        <footer class=\\\"modal__footer\\\">\\n          <button class=\\\"modal__btn modal__btn-primary\\\" aria-label=\\\"Hide modal\\\"\\n            id=\\\"\").concat(this.hideButtonId, \"\\\">Hide modal</button>\\n          <button class=\\\"modal__btn modal__btn-primary\\\" aria-label=\\\"Next step\\\"\\n            id=\\\"\").concat(this.stepButtonId, \"\\\">Next step</button>\\n        </footer>\\n      </div>\\n    </div>\");\n    }\n  }]);\n\n  return Tutorial;\n}();\nTutorial.STEPS_TEXT = ['Press Command Shift K to enable keyboard navigation', 'Hit enter to move focus to the workspace', 'Enable keyboard nav by pressing Cmd+Shift+K', 'Press X to navigate to the first stack of blocks', 'Press Y to navigate to the first block', 'Press enter to mark the first block'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHV0b3JpYWwuanM/MjQzOCJdLCJuYW1lcyI6WyJUdXRvcmlhbCIsIndvcmtzcGFjZSIsIm1vZGFsSWQiLCJzdGVwVGV4dElkIiwic3RlcEJ1dHRvbklkIiwiaGlkZUJ1dHRvbklkIiwic3RlcHMiLCJTVEVQU19URVhUIiwibWFwIiwidGV4dCIsIlR1dG9yaWFsU3RlcCIsIm5leHRTdGVwIiwiY3VyU3RlcEluZGV4IiwiY3VyU3RlcCIsImN1ck5vZGUiLCJjcmVhdGVEb20iLCJhZGRDYWxsYmFja3MiLCJNaWNyb01vZGFsIiwic2hvdyIsIkJsb2NrbHkiLCJuYXZpZ2F0aW9uIiwiZW5hYmxlS2V5Ym9hcmRBY2Nlc3NpYmlsaXR5IiwibGVuZ3RoIiwic3Rhc2hDdXJzb3IiLCJkb25lIiwiY2xvc2UiLCJnZXRDdXJzb3IiLCJnZXRDdXJOb2RlIiwiZGlzYWJsZUtleWJvYXJkQWNjZXNzaWJpbGl0eSIsInNldEN1ck5vZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJlbmFibGVOYXZGbiIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsInBvcEN1cnNvciIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDYTs7Ozs7Ozs7QUFFYjtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsUUFBYjtBQUNFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFLG9CQUFZQyxTQUFaLEVBQXVCO0FBQUE7O0FBQUE7O0FBQ3JCO0FBQ0o7QUFDQTtBQUNBO0FBQ0ksU0FBS0MsT0FBTCxHQUFlLGVBQWY7QUFFQTtBQUNKO0FBQ0E7QUFDQTs7QUFDSSxTQUFLQyxVQUFMLEdBQWtCLEtBQUtELE9BQUwsR0FBZSxNQUFqQztBQUVBO0FBQ0o7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O0FBUUQ7QUFFRDtBQUNGO0FBQ0E7O0FBMUlBO0FBQUE7QUFBQSxnQ0EySWM7QUFDVlIsY0FBUSxDQUFDQyxjQUFULENBQXdCLEtBQUs3QixPQUE3QixFQUFzQ3FDLFNBQXRDLGtnQkFTcUMsS0FBS3BDLFVBVDFDLHdMQWFjLEtBQUtFLFlBYm5CLDBJQWVjLEtBQUtELFlBZm5CO0FBbUJEO0FBL0pIOztBQUFBO0FBQUE7QUFrS0FKLFFBQVEsQ0FBQ08sVUFBVCxHQUFzQixDQUNwQixxREFEb0IsRUFFcEIsMENBRm9CLEVBR3BCLDZDQUhvQixFQUlwQixrREFKb0IsRUFLcEIsd0NBTG9CLEVBTXBCLHFDQU5vQixDQUF0QiIsImZpbGUiOiIuL3NyYy90dXRvcmlhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IE11bHRpLXN0ZXAgdHV0b3JpYWwgdXNpbmcgbW9kYWxzLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7VHV0b3JpYWxTdGVwfSBmcm9tICcuL3R1dG9yaWFsX3N0ZXAnO1xuaW1wb3J0IEJsb2NrbHkgZnJvbSAnYmxvY2tseS9jb3JlJztcbmltcG9ydCBNaWNyb01vZGFsIGZyb20gJ21pY3JvbW9kYWwnO1xuXG4vKipcbiAqIEEgbXVsdGktc3RlcCB0dXRvcmlhbCBmb3IgdGhlIGFjY2Vzc2libGUgbXVzaWMgZ2FtZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFR1dG9yaWFsIHtcbiAgLyoqXG4gICAqIENsYXNzIGZvciBhIHR1dG9yaWFsLlxuICAgKiBAcGFyYW0ge0Jsb2NrbHkuV29ya3NwYWNlU3ZnfSB3b3Jrc3BhY2UgVGhlIHdvcmtzcGFjZSB0aGUgdXNlclxuICAgKiAgICAgd2lsbCBpbnRlcmFjdCB3aXRoLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKHdvcmtzcGFjZSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBpZCBvZiB0aGUgbW9kYWwuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZGFsSWQgPSAndHV0b3JpYWxNb2RhbCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWQgb2YgdGhlIHR1dG9yaWFsIHRleHQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN0ZXBUZXh0SWQgPSB0aGlzLm1vZGFsSWQgKyAnVGV4dCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWQgb2YgdGhlIG5leHQgc3RlcCBidXR0b24uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN0ZXBCdXR0b25JZCA9IHRoaXMubW9kYWxJZCArICdTdGVwQnRuJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpZCBvZiB0aGUgaGlkZSBtb2RhbCBidXR0b24uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmhpZGVCdXR0b25JZCA9IHRoaXMubW9kYWxJZCArICdIaWRlQnRuJztcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIHN0ZXBzIGluIHRoZSB0dXRvcmlhbC5cbiAgICAgKiBAdHlwZSB7QXJyYXk8IVR1dG9yaWFsU3RlcD59XG4gICAgICovXG4gICAgdGhpcy5zdGVwcyA9IFR1dG9yaWFsLlNURVBTX1RFWFQubWFwKFxuICAgICAgICAodGV4dCkgPT4gbmV3IFR1dG9yaWFsU3RlcCh0ZXh0LCB0aGlzLnN0ZXBUZXh0SWQsIHRoaXMubmV4dFN0ZXApXG4gICAgKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbmRleCBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSBzdGVwLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5jdXJTdGVwSW5kZXggPSAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnRseSBhY3RpdmUgc3RlcC5cbiAgICAgKiBAdHlwZSB7VHV0b3JpYWxTdGVwfVxuICAgICAqL1xuICAgIHRoaXMuY3VyU3RlcCA9IHRoaXMuc3RlcHNbdGhpcy5jdXJTdGVwSW5kZXhdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIEJsb2NrbHkgd29ya3NwYWNlIHRoZSB1c2VyIHdpbGwgaW50ZXJhY3Qgd2l0aC5cbiAgICAgKiBAdHlwZSB7QmxvY2tseS5Xb3Jrc3BhY2VTdmd9XG4gICAgICovXG4gICAgdGhpcy53b3Jrc3BhY2UgPSB3b3Jrc3BhY2U7XG5cbiAgICB0aGlzLmN1ck5vZGUgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgRE9NIGFuZCBzaG93LlxuICAgKi9cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmNyZWF0ZURvbSgpO1xuICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgTWljcm9Nb2RhbC5zaG93KHRoaXMubW9kYWxJZCk7XG4gICAgdGhpcy5jdXJTdGVwLnNob3coKTtcblxuICAgIEJsb2NrbHkubmF2aWdhdGlvbi5lbmFibGVLZXlib2FyZEFjY2Vzc2liaWxpdHkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5IHRoZSBuZXh0IHN0ZXAsIG9yIGVuZCB0aGUgdHV0b3JpYWwgaWYgdGhlcmUgYXJlIG5vIG1vcmUgc3RlcHMuXG4gICAqL1xuICBuZXh0U3RlcCgpIHtcbiAgICB0aGlzLmN1clN0ZXBJbmRleCsrO1xuICAgIGlmICh0aGlzLmN1clN0ZXBJbmRleCA8IHRoaXMuc3RlcHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmN1clN0ZXAgPSB0aGlzLnN0ZXBzW3RoaXMuY3VyU3RlcEluZGV4XTtcbiAgICAgIHRoaXMuY3VyU3RlcC5zaG93KCk7XG4gICAgICB0aGlzLnN0YXNoQ3Vyc29yKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbmQgdGhlIHR1dG9yaWFsLlxuICAgKi9cbiAgZG9uZSgpIHtcbiAgICBNaWNyb01vZGFsLmNsb3NlKHRoaXMubW9kYWxJZCk7XG4gIH1cblxuICBlbmFibGVOYXZGbigpIHtcbiAgICAvLyAvLyBDcmVhdGUgYSBzZXJpYWxpemVkIGtleSBmcm9tIHRoZSBwcmltYXJ5IGtleSBhbmQgYW55IG1vZGlmaWVycy5cbiAgICAvLyBjb25zdCBlbmFibGVLZXkgPSBCbG9ja2x5LnVzZXIua2V5TWFwLmNyZWF0ZVNlcmlhbGl6ZWRLZXkoXG4gICAgLy8gICAgIEJsb2NrbHkudXRpbHMuS2V5Q29kZXMuSyxcbiAgICAvLyAgICAgW1xuICAgIC8vICAgICAgIEJsb2NrbHkudXNlci5rZXlNYXAubW9kaWZpZXJLZXlzLkNPTlRST0wsXG4gICAgLy8gICAgICAgQmxvY2tseS51c2VyLmtleU1hcC5tb2RpZmllcktleXMuU0hJRlQsXG4gICAgLy8gICAgIF0pO1xuICAgIC8vIHZhciBhY3Rpb25FbmFibGUgPSBuZXcgQmxvY2tseS5BY3Rpb24oJ3RvcE9mU3RhY2snLCAnTW92ZSBjdXJzb3IgdG8gdG9wIG9mIHN0YWNrJyk7XG4gICAgLy8gQmxvY2tseS51c2VyLmtleU1hcC5zZXRBY3Rpb25Gb3JLZXkoZW5hYmxlS2V5LCBhY3Rpb25FbmFibGUpO1xuICB9XG5cbiAgc3Rhc2hDdXJzb3IoKSB7XG4gICAgdGhpcy5jdXJOb2RlID0gdGhpcy53b3Jrc3BhY2UuZ2V0Q3Vyc29yKCkuZ2V0Q3VyTm9kZSgpO1xuICAgIEJsb2NrbHkubmF2aWdhdGlvbi5kaXNhYmxlS2V5Ym9hcmRBY2Nlc3NpYmlsaXR5KCk7XG4gIH1cblxuICBwb3BDdXJzb3IoKSB7XG4gICAgQmxvY2tseS5uYXZpZ2F0aW9uLmVuYWJsZUtleWJvYXJkQWNjZXNzaWJpbGl0eSgpO1xuICAgIGlmICh0aGlzLmN1ck5vZGUpIHtcbiAgICAgIHRoaXMud29ya3NwYWNlLmdldEN1cnNvcigpLnNldEN1ck5vZGUodGhpcy5jdXJOb2RlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIG5lY2Vzc2FyeSBoYW5kbGVycyBmb3IgYW55IGJ1dHRvbnMgb24gdGhlIG1vZGFsLlxuICAgKi9cbiAgYWRkQ2FsbGJhY2tzKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc3RlcEJ1dHRvbklkKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLm5leHRTdGVwKCk7XG4gICAgICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaGlkZUJ1dHRvbklkKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgTWljcm9Nb2RhbC5jbG9zZSh0aGlzLm1vZGFsSWQpO1xuICAgICAgICAgIHRoaXMuZW5hYmxlTmF2Rm4oKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5wb3BDdXJzb3IoKTtcbiAgICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBkb20gZm9yIHRoZSBtb2RhbC5cbiAgICovXG4gIGNyZWF0ZURvbSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1vZGFsSWQpLmlubmVySFRNTCA9IGBcbiAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19vdmVybGF5XCIgdGFiaW5kZXg9XCItMVwiIGRhdGEtbWljcm9tb2RhbC1jbG9zZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fY29udGFpbmVyXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbW9kYWw9XCJ0cnVlXCJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtMS10aXRsZVwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwibW9kYWxfX2hlYWRlclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2UgbW9kYWxcIlxuICAgICAgICAgICAgaWQ9XCJ0dXRvcmlhbENsb3NlQnRuXCIgZGF0YS1taWNyb21vZGFsLWNsb3NlPjwvYnV0dG9uPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG1haW4gY2xhc3M9XCJtb2RhbF9fY29udGVudFwiIGlkPVwibW9kYWwtMS1jb250ZW50XCI+XG4gICAgICAgICAgPGgyIGNsYXNzPVwibW9kYWxfX3RpdGxlXCIgaWQ9XCIke3RoaXMuc3RlcFRleHRJZH1cIj48L2gyPlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJtb2RhbF9fZm9vdGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19idG4gbW9kYWxfX2J0bi1wcmltYXJ5XCIgYXJpYS1sYWJlbD1cIkhpZGUgbW9kYWxcIlxuICAgICAgICAgICAgaWQ9XCIke3RoaXMuaGlkZUJ1dHRvbklkfVwiPkhpZGUgbW9kYWw8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxfX2J0biBtb2RhbF9fYnRuLXByaW1hcnlcIiBhcmlhLWxhYmVsPVwiTmV4dCBzdGVwXCJcbiAgICAgICAgICAgIGlkPVwiJHt0aGlzLnN0ZXBCdXR0b25JZH1cIj5OZXh0IHN0ZXA8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xuICB9XG59XG5cblR1dG9yaWFsLlNURVBTX1RFWFQgPSBbXG4gICdQcmVzcyBDb21tYW5kIFNoaWZ0IEsgdG8gZW5hYmxlIGtleWJvYXJkIG5hdmlnYXRpb24nLFxuICAnSGl0IGVudGVyIHRvIG1vdmUgZm9jdXMgdG8gdGhlIHdvcmtzcGFjZScsXG4gICdFbmFibGUga2V5Ym9hcmQgbmF2IGJ5IHByZXNzaW5nIENtZCtTaGlmdCtLJyxcbiAgJ1ByZXNzIFggdG8gbmF2aWdhdGUgdG8gdGhlIGZpcnN0IHN0YWNrIG9mIGJsb2NrcycsXG4gICdQcmVzcyBZIHRvIG5hdmlnYXRlIHRvIHRoZSBmaXJzdCBibG9jaycsXG4gICdQcmVzcyBlbnRlciB0byBtYXJrIHRoZSBmaXJzdCBibG9jaycsXG5dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/tutorial.js\n");

/***/ })

})