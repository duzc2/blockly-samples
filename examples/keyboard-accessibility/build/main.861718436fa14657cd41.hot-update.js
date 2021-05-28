webpackHotUpdate("main",{

/***/ "./src/tutorial.js":
/*!*************************!*\
  !*** ./src/tutorial.js ***!
  \*************************/
/*! exports provided: Tutorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tutorial\", function() { return Tutorial; });\n/* harmony import */ var _tutorial_step__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial_step */ \"./src/tutorial_step.js\");\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blockly/core */ \"./node_modules/blockly/dist/core-browser.js\");\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\n/* harmony import */ var _speaker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speaker */ \"./src/speaker.js\");\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Multi-step tutorial using modals.\n */\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n/**\n * A multi-step tutorial for the accessible music game.\n */\n\nvar Tutorial = /*#__PURE__*/function () {\n  /**\n   * Class for a tutorial.\n   * @param {Blockly.WorkspaceSvg} workspace The workspace the user\n   *     will interact with.\n   * @constructor\n   */\n  function Tutorial(workspace) {\n    var _this = this;\n\n    _classCallCheck(this, Tutorial);\n\n    /**\n     * The id of the modal.\n     * @type {string}\n     */\n    this.modalId = 'tutorialModal';\n    /**\n     * The id of the tutorial text.\n     * @type {string}\n     */\n\n    this.stepTextId = this.modalId + 'Text';\n    /**\n     * The id of the next step button.\n     * @type {string}\n     */\n\n    this.stepButtonId = this.modalId + 'StepBtn';\n    /**\n     * The id of the hide modal button.\n     * @type {string}\n     */\n\n    this.hideButtonId = this.modalId + 'HideBtn';\n    /**\n     * An array of steps in the tutorial.\n     * @type {Array<!TutorialStep>}\n     */\n\n    this.steps = Tutorial.STEP_OBJECTS.map(function (obj) {\n      return new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"](obj.text, _this.stepTextId, _this.nextStep);\n    });\n    /**\n     * The index of the currently active step.\n     * @type {number}\n     */\n\n    this.curStepIndex = 0;\n    /**\n     * The currently active step.\n     * @type {TutorialStep}\n     */\n\n    this.curStep = this.steps[this.curStepIndex];\n    /**\n     * The Blockly workspace the user will interact with.\n     * @type {Blockly.WorkspaceSvg}\n     */\n\n    this.workspace = workspace;\n    this.curNode = null;\n  }\n  /**\n   * Initialize DOM and show.\n   */\n\n\n  _createClass(Tutorial, [{\n    key: \"init\",\n    value: function init() {\n      this.createDom();\n      this.addCallbacks();\n      micromodal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].show(this.modalId);\n      this.curStep.show();\n    }\n    /**\n     * Display the next step, or end the tutorial if there are no more steps.\n     */\n\n  }, {\n    key: \"nextStep\",\n    value: function nextStep() {\n      this.curStepIndex++;\n\n      if (this.curStepIndex < this.steps.length) {\n        this.curStep = this.steps[this.curStepIndex];\n        micromodal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].show(this.modalId);\n        this.curStep.show();\n        this.stashCursor();\n      } else {\n        this.done();\n      }\n    }\n    /**\n     * End the tutorial.\n     */\n\n  }, {\n    key: \"done\",\n    value: function done() {\n      micromodal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].close(this.modalId);\n    }\n  }, {\n    key: \"stashCursor\",\n    value: function stashCursor() {\n      this.curNode = this.workspace.getCursor().getCurNode();\n      blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.navigation.disableKeyboardAccessibility();\n    }\n  }, {\n    key: \"popCursor\",\n    value: function popCursor() {\n      blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.navigation.enableKeyboardAccessibility();\n\n      if (this.curNode) {\n        this.workspace.getCursor().setCurNode(this.curNode);\n        _speaker__WEBPACK_IMPORTED_MODULE_3__[\"speaker\"].cancel();\n      }\n    }\n    /**\n     * Add necessary handlers for any buttons on the modal.\n     */\n\n  }, {\n    key: \"addCallbacks\",\n    value: function addCallbacks() {\n      var _this2 = this;\n\n      document.getElementById(this.stepButtonId).addEventListener('click', function () {\n        _this2.nextStep();\n      });\n      document.getElementById(this.hideButtonId).addEventListener('click', function (e) {\n        micromodal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].close(_this2.modalId);\n\n        _this2.popCursor();\n\n        Tutorial.STEP_OBJECTS[_this2.curStepIndex].onStart(_this2);\n\n        e.stopPropagation();\n        e.preventDefault();\n      });\n    }\n    /**\n     * Create the dom for the modal.\n     */\n\n  }, {\n    key: \"createDom\",\n    value: function createDom() {\n      document.getElementById(this.modalId).innerHTML = \"\\n     <div class=\\\"modal__overlay\\\" tabindex=\\\"-1\\\" data-micromodal-close>\\n      <div class=\\\"modal__container\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\"\\n        aria-labelledby=\\\"modal-1-title\\\">\\n        <header class=\\\"modal__header\\\">\\n          <button class=\\\"modal__close\\\" aria-label=\\\"Close modal\\\"\\n            id=\\\"tutorialCloseBtn\\\" data-micromodal-close></button>\\n        </header>\\n        <main class=\\\"modal__content\\\" id=\\\"modal-1-content\\\">\\n          <h2 class=\\\"modal__title\\\" id=\\\"\".concat(this.stepTextId, \"\\\"></h2>\\n        </main>\\n        <footer class=\\\"modal__footer\\\">\\n          <button class=\\\"modal__btn modal__btn-primary\\\" aria-label=\\\"Hide modal\\\"\\n            id=\\\"\").concat(this.hideButtonId, \"\\\">Hide modal</button>\\n          <button class=\\\"modal__btn modal__btn-primary\\\" aria-label=\\\"Next step\\\"\\n            id=\\\"\").concat(this.stepButtonId, \"\\\">Next step</button>\\n        </footer>\\n      </div>\\n    </div>\");\n    }\n  }]);\n\n  return Tutorial;\n}();\nTutorial.STEPS_TEXT = ['Enable keyboard nav by pressing Cmd+Shift+K', 'Press X to navigate to the first stack of blocks', 'Press Y to navigate to the first block', 'Press enter to mark the first block'];\nTutorial.STEP_OBJECTS = [{\n  text: 'Hit enter to go to the workspace and hear a description of the first block.',\n  onStart: function onStart(tutorial) {\n    window.setTimeout(function () {\n      tutorial.nextStep();\n    }, 2000);\n  }\n}, {\n  text: 'Press the down arrow key to go to the first connection on the block.',\n  onStart: function onStart(tutorial) {\n    // Add a shortcut in place of the down arrow shortcut.\n    tutorial.nextStep();\n  }\n}]; // Blockly.navigation.registerToggleKeyboardNav = function () {\n//   /** @type {!Blockly.ShortcutRegistry.KeyboardShortcut} */\n//   var toggleKeyboardNavShortcut = {\n//     name: Blockly.navigation.actionNames.TOGGLE_KEYBOARD_NAV,\n//     callback: function (workspace) {\n//       if (workspace.keyboardAccessibilityMode) {\n//         Blockly.navigation.disableKeyboardAccessibility();\n//       } else {\n//         Blockly.navigation.enableKeyboardAccessibility();\n//       }\n//       return true;\n//     }\n//   };\n//   let shortcutName = Blockly.navigation.actionNames.TOGGLE_KEYBOARD_NAV;\n//   Blockly.ShortcutRegistry.registry.register(toggleKeyboardNavShortcut);\n//   var ctrlShiftK = Blockly.ShortcutRegistry.registry.createSerializedKey(\n//     Blockly.utils.KeyCodes.K,\n//     [Blockly.utils.KeyCodes.CTRL, Blockly.utils.KeyCodes.SHIFT]);\n//   Blockly.ShortcutRegistry.registry.removeKeyMapping(\n//     ctrlShiftK, shortcutName);\n// };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHV0b3JpYWwuanM/MjQzOCJdLCJuYW1lcyI6WyJUdXRvcmlhbCIsIndvcmtzcGFjZSIsIm1vZGFsSWQiLCJzdGVwVGV4dElkIiwic3RlcEJ1dHRvbklkIiwiaGlkZUJ1dHRvbklkIiwic3RlcHMiLCJTVEVQX09CSkVDVFMiLCJtYXAiLCJvYmoiLCJUdXRvcmlhbFN0ZXAiLCJ0ZXh0IiwibmV4dFN0ZXAiLCJjdXJTdGVwSW5kZXgiLCJjdXJTdGVwIiwiY3VyTm9kZSIsImNyZWF0ZURvbSIsImFkZENhbGxiYWNrcyIsIk1pY3JvTW9kYWwiLCJzaG93IiwibGVuZ3RoIiwic3Rhc2hDdXJzb3IiLCJkb25lIiwiY2xvc2UiLCJnZXRDdXJzb3IiLCJnZXRDdXJOb2RlIiwiQmxvY2tseSIsIm5hdmlnYXRpb24iLCJkaXNhYmxlS2V5Ym9hcmRBY2Nlc3NpYmlsaXR5IiwiZW5hYmxlS2V5Ym9hcmRBY2Nlc3NpYmlsaXR5Iiwic2V0Q3VyTm9kZSIsInNwZWFrZXIiLCJjYW5jZWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwb3BDdXJzb3IiLCJvblN0YXJ0Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJpbm5lckhUTUwiLCJTVEVQU19URVhUIiwidHV0b3JpYWwiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ2E7Ozs7Ozs7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsUUFBYjtBQUNFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFLG9CQUFZQyxTQUFaLEVBQXVCO0FBQUE7O0FBQUE7O0FBQ3JCO0FBQ0o7QUFDQTtBQUNBO0FBQ0ksU0FBS0MsT0FBTCxHQUFl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WUFBM0IsRUFBeUN5QixPQUF6QyxDQUFpRCxNQUFqRDs7QUFDQUYsU0FBQyxDQUFDRyxlQUFGO0FBQ0FILFNBQUMsQ0FBQ0ksY0FBRjtBQUNELE9BUEw7QUFRRDtBQUVEO0FBQ0Y7QUFDQTs7QUE5SEE7QUFBQTtBQUFBLGdDQStIYztBQUNWUCxjQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBS2hDLE9BQTdCLEVBQXNDdUMsU0FBdEMsa2dCQVNxQyxLQUFLdEMsVUFUMUMsd0xBYWMsS0FBS0UsWUFibkIsMElBZWMsS0FBS0QsWUFmbkI7QUFtQkQ7QUFuSkg7O0FBQUE7QUFBQTtBQXNKQUosUUFBUSxDQUFDMEMsVUFBVCxHQUFzQixDQUNwQiw2Q0FEb0IsRUFFcEIsa0RBRm9CLEVBR3BCLHdDQUhvQixFQUlwQixxQ0FKb0IsQ0FBdEI7QUFPQTFDLFFBQVEsQ0FBQ08sWUFBVCxHQUF3QixDQUN0QjtBQUNFSSxNQUFJLEVBQ0YsNkVBRko7QUFHRTJCLFNBQU8sRUFBRSxpQkFBU0ssUUFBVCxFQUFtQjtBQUMxQkMsVUFBTSxDQUFDQyxVQUFQLENBQWtCLFlBQU07QUFDdEJGLGNBQVEsQ0FBQy9CLFFBQVQ7QUFDRCxLQUZELEVBRUcsSUFGSDtBQUdEO0FBUEgsQ0FEc0IsRUFVdEI7QUFDRUQsTUFBSSxFQUNGLHNFQUZKO0FBR0UyQixTQUFPLEVBQUUsaUJBQVVLLFFBQVYsRUFBb0I7QUFDM0I7QUFDQUEsWUFBUSxDQUFDL0IsUUFBVDtBQUNEO0FBTkgsQ0FWc0IsQ0FBeEIsQyxDQXFCTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvdHV0b3JpYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBNdWx0aS1zdGVwIHR1dG9yaWFsIHVzaW5nIG1vZGFscy5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge1R1dG9yaWFsU3RlcH0gZnJvbSAnLi90dXRvcmlhbF9zdGVwJztcbmltcG9ydCBCbG9ja2x5IGZyb20gJ2Jsb2NrbHkvY29yZSc7XG5pbXBvcnQgTWljcm9Nb2RhbCBmcm9tICdtaWNyb21vZGFsJztcbmltcG9ydCB7IHNwZWFrZXIgfSBmcm9tICcuL3NwZWFrZXInO1xuXG4vKipcbiAqIEEgbXVsdGktc3RlcCB0dXRvcmlhbCBmb3IgdGhlIGFjY2Vzc2libGUgbXVzaWMgZ2FtZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFR1dG9yaWFsIHtcbiAgLyoqXG4gICAqIENsYXNzIGZvciBhIHR1dG9yaWFsLlxuICAgKiBAcGFyYW0ge0Jsb2NrbHkuV29ya3NwYWNlU3ZnfSB3b3Jrc3BhY2UgVGhlIHdvcmtzcGFjZSB0aGUgdXNlclxuICAgKiAgICAgd2lsbCBpbnRlcmFjdCB3aXRoLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKHdvcmtzcGFjZSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBpZCBvZiB0aGUgbW9kYWwuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZGFsSWQgPSAndHV0b3JpYWxNb2RhbCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWQgb2YgdGhlIHR1dG9yaWFsIHRleHQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN0ZXBUZXh0SWQgPSB0aGlzLm1vZGFsSWQgKyAnVGV4dCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWQgb2YgdGhlIG5leHQgc3RlcCBidXR0b24uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN0ZXBCdXR0b25JZCA9IHRoaXMubW9kYWxJZCArICdTdGVwQnRuJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpZCBvZiB0aGUgaGlkZSBtb2RhbCBidXR0b24uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmhpZGVCdXR0b25JZCA9IHRoaXMubW9kYWxJZCArICdIaWRlQnRuJztcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIHN0ZXBzIGluIHRoZSB0dXRvcmlhbC5cbiAgICAgKiBAdHlwZSB7QXJyYXk8IVR1dG9yaWFsU3RlcD59XG4gICAgICovXG4gICAgdGhpcy5zdGVwcyA9IFR1dG9yaWFsLlNURVBfT0JKRUNUUy5tYXAoXG4gICAgICAgIChvYmopID0+IG5ldyBUdXRvcmlhbFN0ZXAob2JqLnRleHQsIHRoaXMuc3RlcFRleHRJZCwgdGhpcy5uZXh0U3RlcClcbiAgICApO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluZGV4IG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlIHN0ZXAuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmN1clN0ZXBJbmRleCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBzdGVwLlxuICAgICAqIEB0eXBlIHtUdXRvcmlhbFN0ZXB9XG4gICAgICovXG4gICAgdGhpcy5jdXJTdGVwID0gdGhpcy5zdGVwc1t0aGlzLmN1clN0ZXBJbmRleF07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgQmxvY2tseSB3b3Jrc3BhY2UgdGhlIHVzZXIgd2lsbCBpbnRlcmFjdCB3aXRoLlxuICAgICAqIEB0eXBlIHtCbG9ja2x5LldvcmtzcGFjZVN2Z31cbiAgICAgKi9cbiAgICB0aGlzLndvcmtzcGFjZSA9IHdvcmtzcGFjZTtcblxuICAgIHRoaXMuY3VyTm9kZSA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET00gYW5kIHNob3cuXG4gICAqL1xuICBpbml0KCkge1xuICAgIHRoaXMuY3JlYXRlRG9tKCk7XG4gICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICBNaWNyb01vZGFsLnNob3codGhpcy5tb2RhbElkKTtcbiAgICB0aGlzLmN1clN0ZXAuc2hvdygpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXkgdGhlIG5leHQgc3RlcCwgb3IgZW5kIHRoZSB0dXRvcmlhbCBpZiB0aGVyZSBhcmUgbm8gbW9yZSBzdGVwcy5cbiAgICovXG4gIG5leHRTdGVwKCkge1xuICAgIHRoaXMuY3VyU3RlcEluZGV4Kys7XG4gICAgaWYgKHRoaXMuY3VyU3RlcEluZGV4IDwgdGhpcy5zdGVwcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY3VyU3RlcCA9IHRoaXMuc3RlcHNbdGhpcy5jdXJTdGVwSW5kZXhdO1xuICAgICAgTWljcm9Nb2RhbC5zaG93KHRoaXMubW9kYWxJZCk7XG4gICAgICB0aGlzLmN1clN0ZXAuc2hvdygpO1xuICAgICAgdGhpcy5zdGFzaEN1cnNvcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5kIHRoZSB0dXRvcmlhbC5cbiAgICovXG4gIGRvbmUoKSB7XG4gICAgTWljcm9Nb2RhbC5jbG9zZSh0aGlzLm1vZGFsSWQpO1xuICB9XG5cbiAgc3Rhc2hDdXJzb3IoKSB7XG4gICAgdGhpcy5jdXJOb2RlID0gdGhpcy53b3Jrc3BhY2UuZ2V0Q3Vyc29yKCkuZ2V0Q3VyTm9kZSgpO1xuICAgIEJsb2NrbHkubmF2aWdhdGlvbi5kaXNhYmxlS2V5Ym9hcmRBY2Nlc3NpYmlsaXR5KCk7XG4gIH1cblxuICBwb3BDdXJzb3IoKSB7XG4gICAgQmxvY2tseS5uYXZpZ2F0aW9uLmVuYWJsZUtleWJvYXJkQWNjZXNzaWJpbGl0eSgpO1xuICAgIGlmICh0aGlzLmN1ck5vZGUpIHtcbiAgICAgIHRoaXMud29ya3NwYWNlLmdldEN1cnNvcigpLnNldEN1ck5vZGUodGhpcy5jdXJOb2RlKTtcbiAgICAgIHNwZWFrZXIuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBuZWNlc3NhcnkgaGFuZGxlcnMgZm9yIGFueSBidXR0b25zIG9uIHRoZSBtb2RhbC5cbiAgICovXG4gIGFkZENhbGxiYWNrcygpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnN0ZXBCdXR0b25JZCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5uZXh0U3RlcCgpO1xuICAgICAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmhpZGVCdXR0b25JZCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIE1pY3JvTW9kYWwuY2xvc2UodGhpcy5tb2RhbElkKTtcbiAgICAgICAgICB0aGlzLnBvcEN1cnNvcigpO1xuICAgICAgICAgIFR1dG9yaWFsLlNURVBfT0JKRUNUU1t0aGlzLmN1clN0ZXBJbmRleF0ub25TdGFydCh0aGlzKTtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBkb20gZm9yIHRoZSBtb2RhbC5cbiAgICovXG4gIGNyZWF0ZURvbSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1vZGFsSWQpLmlubmVySFRNTCA9IGBcbiAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19vdmVybGF5XCIgdGFiaW5kZXg9XCItMVwiIGRhdGEtbWljcm9tb2RhbC1jbG9zZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fY29udGFpbmVyXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbW9kYWw9XCJ0cnVlXCJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtMS10aXRsZVwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwibW9kYWxfX2hlYWRlclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2UgbW9kYWxcIlxuICAgICAgICAgICAgaWQ9XCJ0dXRvcmlhbENsb3NlQnRuXCIgZGF0YS1taWNyb21vZGFsLWNsb3NlPjwvYnV0dG9uPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG1haW4gY2xhc3M9XCJtb2RhbF9fY29udGVudFwiIGlkPVwibW9kYWwtMS1jb250ZW50XCI+XG4gICAgICAgICAgPGgyIGNsYXNzPVwibW9kYWxfX3RpdGxlXCIgaWQ9XCIke3RoaXMuc3RlcFRleHRJZH1cIj48L2gyPlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJtb2RhbF9fZm9vdGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19idG4gbW9kYWxfX2J0bi1wcmltYXJ5XCIgYXJpYS1sYWJlbD1cIkhpZGUgbW9kYWxcIlxuICAgICAgICAgICAgaWQ9XCIke3RoaXMuaGlkZUJ1dHRvbklkfVwiPkhpZGUgbW9kYWw8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxfX2J0biBtb2RhbF9fYnRuLXByaW1hcnlcIiBhcmlhLWxhYmVsPVwiTmV4dCBzdGVwXCJcbiAgICAgICAgICAgIGlkPVwiJHt0aGlzLnN0ZXBCdXR0b25JZH1cIj5OZXh0IHN0ZXA8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xuICB9XG59XG5cblR1dG9yaWFsLlNURVBTX1RFWFQgPSBbXG4gICdFbmFibGUga2V5Ym9hcmQgbmF2IGJ5IHByZXNzaW5nIENtZCtTaGlmdCtLJyxcbiAgJ1ByZXNzIFggdG8gbmF2aWdhdGUgdG8gdGhlIGZpcnN0IHN0YWNrIG9mIGJsb2NrcycsXG4gICdQcmVzcyBZIHRvIG5hdmlnYXRlIHRvIHRoZSBmaXJzdCBibG9jaycsXG4gICdQcmVzcyBlbnRlciB0byBtYXJrIHRoZSBmaXJzdCBibG9jaycsXG5dO1xuXG5UdXRvcmlhbC5TVEVQX09CSkVDVFMgPSBbXG4gIHtcbiAgICB0ZXh0OlxuICAgICAgJ0hpdCBlbnRlciB0byBnbyB0byB0aGUgd29ya3NwYWNlIGFuZCBoZWFyIGEgZGVzY3JpcHRpb24gb2YgdGhlIGZpcnN0IGJsb2NrLicsXG4gICAgb25TdGFydDogZnVuY3Rpb24odHV0b3JpYWwpIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdHV0b3JpYWwubmV4dFN0ZXAoKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH1cbiAgfSxcbiAge1xuICAgIHRleHQ6XG4gICAgICAnUHJlc3MgdGhlIGRvd24gYXJyb3cga2V5IHRvIGdvIHRvIHRoZSBmaXJzdCBjb25uZWN0aW9uIG9uIHRoZSBibG9jay4nLFxuICAgIG9uU3RhcnQ6IGZ1bmN0aW9uICh0dXRvcmlhbCkge1xuICAgICAgLy8gQWRkIGEgc2hvcnRjdXQgaW4gcGxhY2Ugb2YgdGhlIGRvd24gYXJyb3cgc2hvcnRjdXQuXG4gICAgICB0dXRvcmlhbC5uZXh0U3RlcCgpO1xuICAgIH1cbiAgfVxuXVxuXG5cbiAgICAgIC8vIEJsb2NrbHkubmF2aWdhdGlvbi5yZWdpc3RlclRvZ2dsZUtleWJvYXJkTmF2ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gICAvKiogQHR5cGUgeyFCbG9ja2x5LlNob3J0Y3V0UmVnaXN0cnkuS2V5Ym9hcmRTaG9ydGN1dH0gKi9cbiAgICAgIC8vICAgdmFyIHRvZ2dsZUtleWJvYXJkTmF2U2hvcnRjdXQgPSB7XG4gICAgICAvLyAgICAgbmFtZTogQmxvY2tseS5uYXZpZ2F0aW9uLmFjdGlvbk5hbWVzLlRPR0dMRV9LRVlCT0FSRF9OQVYsXG4gICAgICAvLyAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICh3b3Jrc3BhY2UpIHtcbiAgICAgIC8vICAgICAgIGlmICh3b3Jrc3BhY2Uua2V5Ym9hcmRBY2Nlc3NpYmlsaXR5TW9kZSkge1xuICAgICAgLy8gICAgICAgICBCbG9ja2x5Lm5hdmlnYXRpb24uZGlzYWJsZUtleWJvYXJkQWNjZXNzaWJpbGl0eSgpO1xuICAgICAgLy8gICAgICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICAgICAgQmxvY2tseS5uYXZpZ2F0aW9uLmVuYWJsZUtleWJvYXJkQWNjZXNzaWJpbGl0eSgpO1xuICAgICAgLy8gICAgICAgfVxuICAgICAgLy8gICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9O1xuICAgICAgLy8gICBsZXQgc2hvcnRjdXROYW1lID0gQmxvY2tseS5uYXZpZ2F0aW9uLmFjdGlvbk5hbWVzLlRPR0dMRV9LRVlCT0FSRF9OQVY7XG5cbiAgICAgIC8vICAgQmxvY2tseS5TaG9ydGN1dFJlZ2lzdHJ5LnJlZ2lzdHJ5LnJlZ2lzdGVyKHRvZ2dsZUtleWJvYXJkTmF2U2hvcnRjdXQpO1xuICAgICAgLy8gICB2YXIgY3RybFNoaWZ0SyA9IEJsb2NrbHkuU2hvcnRjdXRSZWdpc3RyeS5yZWdpc3RyeS5jcmVhdGVTZXJpYWxpemVkS2V5KFxuICAgICAgLy8gICAgIEJsb2NrbHkudXRpbHMuS2V5Q29kZXMuSyxcbiAgICAgIC8vICAgICBbQmxvY2tseS51dGlscy5LZXlDb2Rlcy5DVFJMLCBCbG9ja2x5LnV0aWxzLktleUNvZGVzLlNISUZUXSk7XG4gICAgICAvLyAgIEJsb2NrbHkuU2hvcnRjdXRSZWdpc3RyeS5yZWdpc3RyeS5yZW1vdmVLZXlNYXBwaW5nKFxuICAgICAgLy8gICAgIGN0cmxTaGlmdEssIHNob3J0Y3V0TmFtZSk7XG4gICAgICAvLyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/tutorial.js\n");

/***/ })

})