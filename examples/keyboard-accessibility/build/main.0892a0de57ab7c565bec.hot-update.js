webpackHotUpdate("main",{

/***/ "./src/music_game_controller.js":
/*!**************************************!*\
  !*** ./src/music_game_controller.js ***!
  \**************************************/
/*! exports provided: MusicGameController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MusicGameController\", function() { return MusicGameController; });\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\n/* harmony import */ var _music__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music */ \"./src/music.js\");\n/* harmony import */ var _help_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help_modal */ \"./src/help_modal.js\");\n/* harmony import */ var _key_press_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./key_press_modal */ \"./src/key_press_modal.js\");\n/* harmony import */ var _welcome_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome_modal */ \"./src/welcome_modal.js\");\n/* harmony import */ var _speaker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./speaker */ \"./src/speaker.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Music game controller.\n */\n\n\n\n\n\n\n/**\n * Class for a controller for the music game, which handles\n * creation of the game and coordination of related modals, tutorials,\n * etc.\n */\n\nvar MusicGameController = /*#__PURE__*/function () {\n  /**\n   * The constructor for the music game controller.\n   */\n  function MusicGameController() {\n    _classCallCheck(this, MusicGameController);\n\n    micromodal__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init({\n      onClose: function onClose() {\n        return _speaker__WEBPACK_IMPORTED_MODULE_5__[\"speaker\"].cancel();\n      }\n    });\n    /**\n     * The actual game object.\n     * @type {Music}\n     */\n\n    this.game = new _music__WEBPACK_IMPORTED_MODULE_1__[\"Music\"]();\n    this.game.loadLevel(1);\n    var helpModal = new _help_modal__WEBPACK_IMPORTED_MODULE_2__[\"HelpModal\"]('modal-1', 'modalButton');\n    helpModal.init(); // Start by showing the key press modal.\n\n    new _key_press_modal__WEBPACK_IMPORTED_MODULE_3__[\"KeyPressModal\"](this.showWelcomeModal).init();\n  }\n  /**\n   * Get the current game object.\n   * @return {Music} The current game object.\n   */\n\n\n  _createClass(MusicGameController, [{\n    key: \"getGame\",\n    value: function getGame() {\n      return this.game;\n    }\n    /**\n     * Show the welcome modal.\n     */\n\n  }, {\n    key: \"showWelcomeModal\",\n    value: function showWelcomeModal() {\n      new _welcome_modal__WEBPACK_IMPORTED_MODULE_4__[\"WelcomeModal\"]().init();\n    }\n  }]);\n\n  return MusicGameController;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbXVzaWNfZ2FtZV9jb250cm9sbGVyLmpzPzczYTYiXSwibmFtZXMiOlsiTXVzaWNHYW1lQ29udHJvbGxlciIsIk1pY3JvTW9kYWwiLCJpbml0Iiwib25DbG9zZSIsInNwZWFrZXIiLCJjYW5jZWwiLCJnYW1lIiwiTXVzaWMiLCJsb2FkTGV2ZWwiLCJoZWxwTW9kYWwiLCJIZWxwTW9kYWwiLCJLZXlQcmVzc01vZGFsIiwic2hvd1dlbGNvbWVNb2RhbCIsIldlbGNvbWVNb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsbUJBQWI7QUFDRTtBQUNGO0FBQ0E7QUFDRSxpQ0FBYztBQUFBOztBQUNaQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCO0FBQ2RDLGFBQU8sRUFBRTtBQUFBLGVBQU1DLGdEQUFPLENBQUNDLE1BQVIsRUFBTjtBQUFBO0FBREssS0FBaEI7QUFJQTtBQUNKO0FBQ0E7QUFDQTs7QUFDSSxTQUFLQyxJQUFMLEdBQVksSUFBSUMsNENBQUosRUFBWjtBQUNBLFNBQUtELElBQUwsQ0FBVUUsU0FBVixDQUFvQixDQUFwQjtBQUVBLFFBQU1DLFNBQVMsR0FBRyxJQUFJQyxxREFBSixDQUFjLFNBQWQsRUFBeUIsYUFBekIsQ0FBbEI7QUFDQUQsYUFBUyxDQUFDUCxJQUFWLEdBYlksQ0FlWjs7QUFDQSxRQUFJUyw4REFBSixDQUFrQixLQUFLQyxnQkFBdkIsRUFBeUNWLElBQXpDO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7O0FBMUJBO0FBQUE7QUFBQSw4QkEyQlk7QUFDUixhQUFPLEtBQUtJLElBQVo7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7QUFqQ0E7QUFBQTtBQUFBLHVDQWtDcUI7QUFDakIsVUFBSU8sMkRBQUosR0FBbUJYLElBQW5CO0FBQ0Q7QUFwQ0g7O0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy9tdXNpY19nYW1lX2NvbnRyb2xsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBNdXNpYyBnYW1lIGNvbnRyb2xsZXIuXG4gKi9cblxuXG5pbXBvcnQgTWljcm9Nb2RhbCBmcm9tICdtaWNyb21vZGFsJztcbmltcG9ydCB7TXVzaWN9IGZyb20gJy4vbXVzaWMnO1xuaW1wb3J0IHtIZWxwTW9kYWx9IGZyb20gJy4vaGVscF9tb2RhbCc7XG5pbXBvcnQge0tleVByZXNzTW9kYWx9IGZyb20gJy4va2V5X3ByZXNzX21vZGFsJztcbmltcG9ydCB7V2VsY29tZU1vZGFsfSBmcm9tICcuL3dlbGNvbWVfbW9kYWwnO1xuaW1wb3J0IHtzcGVha2VyfSBmcm9tICcuL3NwZWFrZXInO1xuXG4vKipcbiAqIENsYXNzIGZvciBhIGNvbnRyb2xsZXIgZm9yIHRoZSBtdXNpYyBnYW1lLCB3aGljaCBoYW5kbGVzXG4gKiBjcmVhdGlvbiBvZiB0aGUgZ2FtZSBhbmQgY29vcmRpbmF0aW9uIG9mIHJlbGF0ZWQgbW9kYWxzLCB0dXRvcmlhbHMsXG4gKiBldGMuXG4gKi9cbmV4cG9ydCBjbGFzcyBNdXNpY0dhbWVDb250cm9sbGVyIHtcbiAgLyoqXG4gICAqIFRoZSBjb25zdHJ1Y3RvciBmb3IgdGhlIG11c2ljIGdhbWUgY29udHJvbGxlci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIE1pY3JvTW9kYWwuaW5pdCh7XG4gICAgICBvbkNsb3NlOiAoKSA9PiBzcGVha2VyLmNhbmNlbCgpLFxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFjdHVhbCBnYW1lIG9iamVjdC5cbiAgICAgKiBAdHlwZSB7TXVzaWN9XG4gICAgICovXG4gICAgdGhpcy5nYW1lID0gbmV3IE11c2ljKCk7XG4gICAgdGhpcy5nYW1lLmxvYWRMZXZlbCgxKTtcblxuICAgIGNvbnN0IGhlbHBNb2RhbCA9IG5ldyBIZWxwTW9kYWwoJ21vZGFsLTEnLCAnbW9kYWxCdXR0b24nKTtcbiAgICBoZWxwTW9kYWwuaW5pdCgpO1xuXG4gICAgLy8gU3RhcnQgYnkgc2hvd2luZyB0aGUga2V5IHByZXNzIG1vZGFsLlxuICAgIG5ldyBLZXlQcmVzc01vZGFsKHRoaXMuc2hvd1dlbGNvbWVNb2RhbCkuaW5pdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBnYW1lIG9iamVjdC5cbiAgICogQHJldHVybiB7TXVzaWN9IFRoZSBjdXJyZW50IGdhbWUgb2JqZWN0LlxuICAgKi9cbiAgZ2V0R2FtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIHdlbGNvbWUgbW9kYWwuXG4gICAqL1xuICBzaG93V2VsY29tZU1vZGFsKCkge1xuICAgIG5ldyBXZWxjb21lTW9kYWwoKS5pbml0KCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/music_game_controller.js\n");

/***/ }),

/***/ "./src/tutorial.js":
/*!*************************!*\
  !*** ./src/tutorial.js ***!
  \*************************/
/*! exports provided: Tutorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tutorial\", function() { return Tutorial; });\n/* harmony import */ var _tutorial_step__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial_step */ \"./src/tutorial_step.js\");\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Multi-step tutorial using modals.\n */\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n/**\n * A multi-step tutorial for the accessible music game.\n */\n\nvar Tutorial = /*#__PURE__*/function () {\n  /**\n   * Class for a tutorial.\n   * @constructor\n   */\n  function Tutorial() {\n    var _this = this;\n\n    _classCallCheck(this, Tutorial);\n\n    /**\n     * The id of the modal.\n     * @type {string}\n     */\n    this.modalId = 'tutorialModal';\n    /**\n     * The id of the tutorial text.\n     * @type {string}\n     */\n\n    this.stepTextId = this.modalId + 'Text';\n    /**\n     * The id of the next step button.\n     * @type {string}\n     */\n\n    this.stepButtonId = this.modalId + 'StepBtn';\n    /**\n     * The id of the hide modal button.\n     * @type {string}\n     */\n\n    this.hideButtonId = this.modalId + 'HideBtn';\n    /**\n     * An array of steps in the tutorial.\n     * @type {Array<!TutorialStep>}\n     */\n\n    this.steps = Tutorial.STEPS_TEXT.map(function (text) {\n      return new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"](text, _this.stepTextId, _this.nextStep);\n    });\n    /**\n     * The index of the currently active step.\n     * @type {number}\n     */\n\n    this.curStepIndex = 0;\n    /**\n     * The currently active step.\n     * @type {TutorialStep}\n     */\n\n    this.curStep = this.steps[this.curStepIndex];\n  }\n  /**\n   * Initialize DOM and show.\n   */\n\n\n  _createClass(Tutorial, [{\n    key: \"init\",\n    value: function init() {\n      this.createDom();\n      this.addCallbacks();\n      micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].show(this.modalId);\n      this.curStep.show();\n    }\n    /**\n     * Display the next step, or end the tutorial if there are no more steps.\n     */\n\n  }, {\n    key: \"nextStep\",\n    value: function nextStep() {\n      this.curStepIndex++;\n\n      if (this.curStepIndex < this.steps.length) {\n        this.curStep = this.steps[this.curStepIndex];\n        this.curStep.show();\n      } else {\n        this.done();\n      }\n    }\n    /**\n     * End the tutorial.\n     */\n\n  }, {\n    key: \"done\",\n    value: function done() {\n      micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].close(this.modalId);\n    }\n    /**\n     * Add necessary handlers for any buttons on the modal.\n     */\n\n  }, {\n    key: \"addCallbacks\",\n    value: function addCallbacks() {\n      var _this2 = this;\n\n      document.getElementById(this.stepButtonId).addEventListener('click', function () {\n        _this2.nextStep();\n      });\n      document.getElementById(this.hideButtonId).addEventListener('click', function () {\n        micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].close(_this2.modalId);\n      });\n    }\n    /**\n     * Create the dom for the modal.\n     */\n\n  }, {\n    key: \"createDom\",\n    value: function createDom() {\n      /* eslint-disable max-len */\n      document.getElementById(this.modalId).innerHTML = \"\\n     <div class=\\\"modal__overlay\\\" tabindex=\\\"-1\\\" data-micromodal-close>\\n      <div class=\\\"modal__container\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\" aria-labelledby=\\\"modal-1-title\\\">\\n        <header class=\\\"modal__header\\\">\\n          <button class=\\\"modal__close\\\" aria-label=\\\"Close modal\\\" id=\\\"tutorialCloseBtn\\\" data-micromodal-close></button>\\n        </header>\\n        <main class=\\\"modal__content\\\" id=\\\"modal-1-content\\\">\\n          <h2 class=\\\"modal__title\\\" id=\\\"\".concat(this.stepTextId, \"\\\"></h2>\\n        </main>\\n        <footer class=\\\"modal__footer\\\">\\n          <button class=\\\"modal__btn modal__btn-primary\\\" aria-label=\\\"Hide modal\\\" id=\\\"\").concat(this.hideButtonId, \"\\\">Hide modal</button>\\n          <button class=\\\"modal__btn modal__btn-primary\\\" aria-label=\\\"Next step\\\" id=\\\"\").concat(this.stepButtonId, \"\\\">Next step</button>\\n        </footer>\\n      </div>\\n    </div>\");\n      /* eslint-enable max-len */\n    }\n  }]);\n\n  return Tutorial;\n}();\nTutorial.STEPS_TEXT = ['Hit enter to move focus to the workspace', 'Enable keyboard nav by pressing Cmd+Shift+K', 'Press X to navigate to the first stack of blocks', 'Press Y to navigate to the first block', 'Press enter to mark the first block'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHV0b3JpYWwuanM/MjQzOCJdLCJuYW1lcyI6WyJUdXRvcmlhbCIsIm1vZGFsSWQiLCJzdGVwVGV4dElkIiwic3RlcEJ1dHRvbklkIiwiaGlkZUJ1dHRvbklkIiwic3RlcHMiLCJTVEVQU19URVhUIiwibWFwIiwidGV4dCIsIlR1dG9yaWFsU3RlcCIsIm5leHRTdGVwIiwiY3VyU3RlcEluZGV4IiwiY3VyU3RlcCIsImNyZWF0ZURvbSIsImFkZENhbGxiYWNrcyIsIk1pY3JvTW9kYWwiLCJzaG93IiwibGVuZ3RoIiwiZG9uZSIsImNsb3NlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDYTs7Ozs7Ozs7QUFFYjtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNPLElBQU1BLFFBQWI7QUFDRTtBQUNGO0FBQ0E7QUFDQTtBQUNFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQ1o7QUFDSjtBQUNBO0FBQ0E7QUFDSSxTQUFLQyxPQUFMLEdBQWUsZUFBZjtBQUVBO0FBQ0o7QUFDQTtBQUNBOztBQUNJLFNBQUtDLFVBQUwsR0FBa0IsS0FBS0QsT0FBTCxHQUFlLE1BQWpDO0FBRUE7QUFDSjtBQUNBO0FBQ0E7O0FBQ0ksU0FBS0UsWUFBTCxHQUFvQixLQUFLRixPQUFMLEdBQWUsU0FBbkM7QUFFQTtBQUNKO0FBQ0E7QUFDQTs7QUFDSSxTQUFLRyxZQUFMLEdBQW9CLEtBQUtILE9BQUwsR0FBZSxTQUFuQztBQUVBO0FBQ0o7QUFDQTtBQUNBOztBQUNJLFNBQUtJLEtBQUwsR0FBYUwsUUFBUSxDQUFDTSxVQUFULENBQW9CQyxHQUFwQixDQUNULFVBQUNDLElBQUQ7QUFBQSxhQUFVLElBQUlDLDJEQUFKLENBQWlCRCxJQUFqQixFQUF1QixLQUFJLENBQUNOLFVBQTVCLEVBQXdDLEtBQUksQ0FBQ1EsUUFBN0MsQ0FBVjtBQUFBLEtBRFMsQ0FBYjtBQUlBO0FBQ0o7QUFDQTtBQUNBOztBQUNJLFNBQUtDLFlBQUwsR0FBb0IsQ0FBcEI7QUFFQTtBQUNKO0FBQ0E7QUFDQTs7QUFDSSxTQUFLQyxPQUFMLEdBQWUsS0FBS1AsS0FBTCxDQUFXLEtBQUtNLFlBQWhCLENBQWY7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBckRBO0FBQUE7QUFBQSwyQkFzRFM7QUFDTCxXQUFLRSxTQUFMO0FBQ0EsV0FBS0MsWUFBTDtBQUNBQyx3REFBVSxDQUFDQyxJQUFYLENBQWdCLEtBQUtmLE9BQXJCO0FBQ0EsV0FBS1csT0FBTCxDQUFhSSxJQUFiO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7O0FBL0RBO0FBQUE7QUFBQSwrQkFnRWE7QUFDVCxXQUFLTCxZQUFMOztBQUNBLFVBQUksS0FBS0EsWUFBTCxHQUFvQixLQUFLTixLQUFMLENBQVdZLE1BQW5DLEVBQTJDO0FBQ3pDLGFBQUtMLE9BQUwsR0FBZSxLQUFLUCxLQUFMLENBQVcsS0FBS00sWUFBaEIsQ0FBZjtBQUNBLGFBQUtDLE9BQUwsQ0FBYUksSUFBYjtBQUNELE9BSEQsTUFHTztBQUNMLGFBQUtFLElBQUw7QUFDRDtBQUNGO0FBRUQ7QUFDRjtBQUNBOztBQTVFQTtBQUFBO0FBQUEsMkJBNkVTO0FBQ0xILHdEQUFVLENBQUNJLEtBQVgsQ0FBaUIsS0FBS2xCLE9BQXRCO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7O0FBbkZBO0FBQUE7QUFBQSxtQ0FvRmlCO0FBQUE7O0FBQ2JtQixjQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBS2xCLFlBQTdCLEVBQTJDbUIsZ0JBQTNDLENBQTRELE9BQTVELEVBQ0ksWUFBTTtBQUNKLGNBQUksQ0FBQ1osUUFBTDtBQUNELE9BSEw7QUFJQVUsY0FBUSxDQUFDQyxjQUFULENBQXdCLEtBQUtqQixZQUE3QixFQUEyQ2tCLGdCQUEzQyxDQUE0RCxPQUE1RCxFQUNJLFlBQU07QUFDSlAsMERBQVUsQ0FBQ0ksS0FBWCxDQUFpQixNQUFJLENBQUNsQixPQUF0QjtBQUNELE9BSEw7QUFJRDtBQUVEO0FBQ0Y7QUFDQTs7QUFqR0E7QUFBQTtBQUFBLGdDQWtHYztBQUNWO0FBQ0FtQixjQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBS3BCLE9BQTdCLEVBQXNDc0IsU0FBdEMsNGVBT3FDLEtBQUtyQixVQVAxQywyS0FVa0YsS0FBS0UsWUFWdkYsNkhBV2lGLEtBQUtELFlBWHRGO0FBZUE7QUFDRDtBQXBISDs7QUFBQTtBQUFBO0FBdUhBSCxRQUFRLENBQUNNLFVBQVQsR0FBc0IsQ0FDcEIsMENBRG9CLEVBRXBCLDZDQUZvQixFQUdwQixrREFIb0IsRUFJcEIsd0NBSm9CLEVBS3BCLHFDQUxvQixDQUF0QiIsImZpbGUiOiIuL3NyYy90dXRvcmlhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IE11bHRpLXN0ZXAgdHV0b3JpYWwgdXNpbmcgbW9kYWxzLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7VHV0b3JpYWxTdGVwfSBmcm9tICcuL3R1dG9yaWFsX3N0ZXAnO1xuaW1wb3J0IE1pY3JvTW9kYWwgZnJvbSAnbWljcm9tb2RhbCc7XG5cbi8qKlxuICogQSBtdWx0aS1zdGVwIHR1dG9yaWFsIGZvciB0aGUgYWNjZXNzaWJsZSBtdXNpYyBnYW1lLlxuICovXG5leHBvcnQgY2xhc3MgVHV0b3JpYWwge1xuICAvKipcbiAgICogQ2xhc3MgZm9yIGEgdHV0b3JpYWwuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGlkIG9mIHRoZSBtb2RhbC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kYWxJZCA9ICd0dXRvcmlhbE1vZGFsJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpZCBvZiB0aGUgdHV0b3JpYWwgdGV4dC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc3RlcFRleHRJZCA9IHRoaXMubW9kYWxJZCArICdUZXh0JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpZCBvZiB0aGUgbmV4dCBzdGVwIGJ1dHRvbi5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc3RlcEJ1dHRvbklkID0gdGhpcy5tb2RhbElkICsgJ1N0ZXBCdG4nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlkIG9mIHRoZSBoaWRlIG1vZGFsIGJ1dHRvbi5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuaGlkZUJ1dHRvbklkID0gdGhpcy5tb2RhbElkICsgJ0hpZGVCdG4nO1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2Ygc3RlcHMgaW4gdGhlIHR1dG9yaWFsLlxuICAgICAqIEB0eXBlIHtBcnJheTwhVHV0b3JpYWxTdGVwPn1cbiAgICAgKi9cbiAgICB0aGlzLnN0ZXBzID0gVHV0b3JpYWwuU1RFUFNfVEVYVC5tYXAoXG4gICAgICAgICh0ZXh0KSA9PiBuZXcgVHV0b3JpYWxTdGVwKHRleHQsIHRoaXMuc3RlcFRleHRJZCwgdGhpcy5uZXh0U3RlcClcbiAgICApO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluZGV4IG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlIHN0ZXAuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmN1clN0ZXBJbmRleCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBzdGVwLlxuICAgICAqIEB0eXBlIHtUdXRvcmlhbFN0ZXB9XG4gICAgICovXG4gICAgdGhpcy5jdXJTdGVwID0gdGhpcy5zdGVwc1t0aGlzLmN1clN0ZXBJbmRleF07XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBET00gYW5kIHNob3cuXG4gICAqL1xuICBpbml0KCkge1xuICAgIHRoaXMuY3JlYXRlRG9tKCk7XG4gICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICBNaWNyb01vZGFsLnNob3codGhpcy5tb2RhbElkKTtcbiAgICB0aGlzLmN1clN0ZXAuc2hvdygpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXkgdGhlIG5leHQgc3RlcCwgb3IgZW5kIHRoZSB0dXRvcmlhbCBpZiB0aGVyZSBhcmUgbm8gbW9yZSBzdGVwcy5cbiAgICovXG4gIG5leHRTdGVwKCkge1xuICAgIHRoaXMuY3VyU3RlcEluZGV4Kys7XG4gICAgaWYgKHRoaXMuY3VyU3RlcEluZGV4IDwgdGhpcy5zdGVwcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY3VyU3RlcCA9IHRoaXMuc3RlcHNbdGhpcy5jdXJTdGVwSW5kZXhdO1xuICAgICAgdGhpcy5jdXJTdGVwLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb25lKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVuZCB0aGUgdHV0b3JpYWwuXG4gICAqL1xuICBkb25lKCkge1xuICAgIE1pY3JvTW9kYWwuY2xvc2UodGhpcy5tb2RhbElkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbmVjZXNzYXJ5IGhhbmRsZXJzIGZvciBhbnkgYnV0dG9ucyBvbiB0aGUgbW9kYWwuXG4gICAqL1xuICBhZGRDYWxsYmFja3MoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zdGVwQnV0dG9uSWQpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMubmV4dFN0ZXAoKTtcbiAgICAgICAgfSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5oaWRlQnV0dG9uSWQpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIE1pY3JvTW9kYWwuY2xvc2UodGhpcy5tb2RhbElkKTtcbiAgICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBkb20gZm9yIHRoZSBtb2RhbC5cbiAgICovXG4gIGNyZWF0ZURvbSgpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5tb2RhbElkKS5pbm5lckhUTUwgPSBgXG4gICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fb3ZlcmxheVwiIHRhYmluZGV4PVwiLTFcIiBkYXRhLW1pY3JvbW9kYWwtY2xvc2U+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2NvbnRhaW5lclwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLW1vZGFsPVwidHJ1ZVwiIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLTEtdGl0bGVcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzcz1cIm1vZGFsX19oZWFkZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxfX2Nsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlIG1vZGFsXCIgaWQ9XCJ0dXRvcmlhbENsb3NlQnRuXCIgZGF0YS1taWNyb21vZGFsLWNsb3NlPjwvYnV0dG9uPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG1haW4gY2xhc3M9XCJtb2RhbF9fY29udGVudFwiIGlkPVwibW9kYWwtMS1jb250ZW50XCI+XG4gICAgICAgICAgPGgyIGNsYXNzPVwibW9kYWxfX3RpdGxlXCIgaWQ9XCIke3RoaXMuc3RlcFRleHRJZH1cIj48L2gyPlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJtb2RhbF9fZm9vdGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19idG4gbW9kYWxfX2J0bi1wcmltYXJ5XCIgYXJpYS1sYWJlbD1cIkhpZGUgbW9kYWxcIiBpZD1cIiR7dGhpcy5oaWRlQnV0dG9uSWR9XCI+SGlkZSBtb2RhbDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fYnRuIG1vZGFsX19idG4tcHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJOZXh0IHN0ZXBcIiBpZD1cIiR7dGhpcy5zdGVwQnV0dG9uSWR9XCI+TmV4dCBzdGVwPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cbiAgfVxufVxuXG5UdXRvcmlhbC5TVEVQU19URVhUID0gW1xuICAnSGl0IGVudGVyIHRvIG1vdmUgZm9jdXMgdG8gdGhlIHdvcmtzcGFjZScsXG4gICdFbmFibGUga2V5Ym9hcmQgbmF2IGJ5IHByZXNzaW5nIENtZCtTaGlmdCtLJyxcbiAgJ1ByZXNzIFggdG8gbmF2aWdhdGUgdG8gdGhlIGZpcnN0IHN0YWNrIG9mIGJsb2NrcycsXG4gICdQcmVzcyBZIHRvIG5hdmlnYXRlIHRvIHRoZSBmaXJzdCBibG9jaycsXG4gICdQcmVzcyBlbnRlciB0byBtYXJrIHRoZSBmaXJzdCBibG9jaycsXG5dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/tutorial.js\n");

/***/ }),

/***/ "./src/welcome_modal.js":
/*!******************************!*\
  !*** ./src/welcome_modal.js ***!
  \******************************/
/*! exports provided: WelcomeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WelcomeModal\", function() { return WelcomeModal; });\n/* harmony import */ var _speaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker */ \"./src/speaker.js\");\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\n/* harmony import */ var _tutorial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tutorial */ \"./src/tutorial.js\");\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview\n */\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n/**\n * A class for a modal that welcomes the users and helps them get oriented.\n */\n\nvar WelcomeModal = /*#__PURE__*/function () {\n  /**\n   * Constructor for the welcome modal.\n   * @constructor\n   */\n  function WelcomeModal() {\n    _classCallCheck(this, WelcomeModal);\n\n    /**\n     * The id of the modal.\n     * @type {string}\n     */\n    this.modalId = 'welcomeModal';\n  }\n  /**\n   * Initializes the welcome modal.\n   */\n\n\n  _createClass(WelcomeModal, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.createDom();\n      document.getElementById('replayButton').addEventListener('click', function () {\n        _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].modalToText(document.getElementById(_this.modalId));\n      });\n      document.getElementById('welcomeCloseButton').addEventListener('blur', function () {\n        return _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].cancel();\n      });\n      micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].show(this.modalId);\n      document.getElementById('welcomeButtonReplay').addEventListener('click', function () {\n        _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].cancel();\n        _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].modalToText(document.getElementById(_this.modalId));\n      });\n      _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].modalToText(document.getElementById(this.modalId));\n      this.registerTutorialButton();\n    }\n    /**\n     * Adds a callback to the tutorial button.\n     */\n\n  }, {\n    key: \"registerTutorialButton\",\n    value: function registerTutorialButton() {\n      var _this2 = this;\n\n      document.getElementById('tutorialButton').addEventListener('click', function () {\n        micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].close(_this2.modalId);\n        var tutorial = new _tutorial__WEBPACK_IMPORTED_MODULE_2__[\"Tutorial\"]();\n        tutorial.init();\n      });\n    }\n    /**\n     * Creates the dom for the modal.\n     */\n\n  }, {\n    key: \"createDom\",\n    value: function createDom() {\n      /* eslint-disable max-len */\n      document.getElementById(this.modalId).innerHTML = \"\\n     <div class=\\\"modal__overlay\\\" tabindex=\\\"-1\\\" data-micromodal-close>\\n      <div class=\\\"modal__container\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\" aria-labelledby=\\\"modal-1-title\\\">\\n        <header class=\\\"modal__header\\\">\\n          <h2 class=\\\"modal__title\\\" id=\\\"modal-1-title\\\">\\n            Welcome To Blockly Games Music!\\n          </h2>\\n          <button class=\\\"modal__close\\\" aria-label=\\\"Close modal\\\" id=\\\"welcomeCloseButton\\\" data-micromodal-close></button>\\n        </header>\\n        <main class=\\\"modal__content\\\" id=\\\"modal-1-content\\\">\\n          <p>\\n            Use the tab key to cycle through your options. If you have never\\n            played before we recommend you start with the tutorial.\\n          </p>\\n        </main>\\n        <footer class=\\\"modal__footer\\\">\\n          <button class=\\\"modal__btn modal__btn-primary\\\" id=\\\"tutorialButton\\\">Go to the tutorial</button>\\n          <button class=\\\"modal__btn modal__btn-primary\\\" id=\\\"gameButton\\\">Go to the game</button>\\n          <button class=\\\"modal__btn modal__btn-primary\\\" id=\\\"welcomeButtonReplay\\\">Replay Instructions</button>\\n        </footer>\\n      </div>\\n    </div>\";\n      /* eslint-enable max-len */\n    }\n  }]);\n\n  return WelcomeModal;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2VsY29tZV9tb2RhbC5qcz9kODcyIl0sIm5hbWVzIjpbIldlbGNvbWVNb2RhbCIsIm1vZGFsSWQiLCJjcmVhdGVEb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNwZWFrZXIiLCJtb2RhbFRvVGV4dCIsImNhbmNlbCIsIk1pY3JvTW9kYWwiLCJzaG93IiwicmVnaXN0ZXJUdXRvcmlhbEJ1dHRvbiIsImNsb3NlIiwidHV0b3JpYWwiLCJUdXRvcmlhbCIsImluaXQiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNhOzs7Ozs7OztBQUViO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxZQUFiO0FBQ0U7QUFDRjtBQUNBO0FBQ0E7QUFDRSwwQkFBYztBQUFBOztBQUNaO0FBQ0o7QUFDQTtBQUNBO0FBQ0ksU0FBS0MsT0FBTCxHQUFlLGNBQWY7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBZkE7QUFBQTtBQUFBLDJCQWdCUztBQUFBOztBQUNMLFdBQUtDLFNBQUw7QUFDQUMsY0FBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLEVBQXdDQyxnQkFBeEMsQ0FBeUQsT0FBekQsRUFDSSxZQUFNO0FBQ0pDLHdEQUFPLENBQUNDLFdBQVIsQ0FBb0JKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUFJLENBQUNILE9BQTdCLENBQXBCO0FBQ0QsT0FITDtBQUlBRSxjQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDQyxnQkFBOUMsQ0FDSSxNQURKLEVBQ1k7QUFBQSxlQUFNQyxnREFBTyxDQUFDRSxNQUFSLEVBQU47QUFBQSxPQURaO0FBRUFDLHdEQUFVLENBQUNDLElBQVgsQ0FBZ0IsS0FBS1QsT0FBckI7QUFFQUUsY0FBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixFQUErQ0MsZ0JBQS9DLENBQWdFLE9BQWhFLEVBQ0ksWUFBTTtBQUNKQyx3REFBTyxDQUFDRSxNQUFSO0FBQ0FGLHdEQUFPLENBQUNDLFdBQVIsQ0FBb0JKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUFJLENBQUNILE9BQTdCLENBQXBCO0FBQ0QsT0FKTDtBQUtBSyxzREFBTyxDQUFDQyxXQUFSLENBQW9CSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBS0gsT0FBN0IsQ0FBcEI7QUFDQSxXQUFLVSxzQkFBTDtBQUNEO0FBRUQ7QUFDRjtBQUNBOztBQXJDQTtBQUFBO0FBQUEsNkNBc0MyQjtBQUFBOztBQUN2QlIsY0FBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixFQUEwQ0MsZ0JBQTFDLENBQTJELE9BQTNELEVBQ0ksWUFBTTtBQUNKSSwwREFBVSxDQUFDRyxLQUFYLENBQWlCLE1BQUksQ0FBQ1gsT0FBdEI7QUFDQSxZQUFNWSxRQUFRLEdBQUcsSUFBSUMsa0RBQUosRUFBakI7QUFDQUQsZ0JBQVEsQ0FBQ0UsSUFBVDtBQUNELE9BTEw7QUFNRDtBQUVEO0FBQ0Y7QUFDQTs7QUFqREE7QUFBQTtBQUFBLGdDQWtEYztBQUNWO0FBQ0FaLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUFLSCxPQUE3QixFQUFzQ2UsU0FBdEM7QUFzQkE7QUFDRDtBQTNFSDs7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3JjL3dlbGNvbWVfbW9kYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbi8qKlxuICogQGZpbGVvdmVydmlld1xuICovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7c3BlYWtlcn0gZnJvbSAnLi9zcGVha2VyJztcbmltcG9ydCBNaWNyb01vZGFsIGZyb20gJ21pY3JvbW9kYWwnO1xuaW1wb3J0IHtUdXRvcmlhbH0gZnJvbSAnLi90dXRvcmlhbCc7XG5cbi8qKlxuICogQSBjbGFzcyBmb3IgYSBtb2RhbCB0aGF0IHdlbGNvbWVzIHRoZSB1c2VycyBhbmQgaGVscHMgdGhlbSBnZXQgb3JpZW50ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBXZWxjb21lTW9kYWwge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIHRoZSB3ZWxjb21lIG1vZGFsLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKlxuICAgICAqIFRoZSBpZCBvZiB0aGUgbW9kYWwuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZGFsSWQgPSAnd2VsY29tZU1vZGFsJztcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgd2VsY29tZSBtb2RhbC5cbiAgICovXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVEb20oKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVwbGF5QnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgc3BlYWtlci5tb2RhbFRvVGV4dChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1vZGFsSWQpKTtcbiAgICAgICAgfSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWVDbG9zZUJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdibHVyJywgKCkgPT4gc3BlYWtlci5jYW5jZWwoKSk7XG4gICAgTWljcm9Nb2RhbC5zaG93KHRoaXMubW9kYWxJZCk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZUJ1dHRvblJlcGxheScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHNwZWFrZXIuY2FuY2VsKCk7XG4gICAgICAgICAgc3BlYWtlci5tb2RhbFRvVGV4dChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1vZGFsSWQpKTtcbiAgICAgICAgfSk7XG4gICAgc3BlYWtlci5tb2RhbFRvVGV4dChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1vZGFsSWQpKTtcbiAgICB0aGlzLnJlZ2lzdGVyVHV0b3JpYWxCdXR0b24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2FsbGJhY2sgdG8gdGhlIHR1dG9yaWFsIGJ1dHRvbi5cbiAgICovXG4gIHJlZ2lzdGVyVHV0b3JpYWxCdXR0b24oKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1dG9yaWFsQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgTWljcm9Nb2RhbC5jbG9zZSh0aGlzLm1vZGFsSWQpO1xuICAgICAgICAgIGNvbnN0IHR1dG9yaWFsID0gbmV3IFR1dG9yaWFsKCk7XG4gICAgICAgICAgdHV0b3JpYWwuaW5pdCgpO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBkb20gZm9yIHRoZSBtb2RhbC5cbiAgICovXG4gIGNyZWF0ZURvbSgpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5tb2RhbElkKS5pbm5lckhUTUwgPSBgXG4gICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fb3ZlcmxheVwiIHRhYmluZGV4PVwiLTFcIiBkYXRhLW1pY3JvbW9kYWwtY2xvc2U+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2NvbnRhaW5lclwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLW1vZGFsPVwidHJ1ZVwiIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLTEtdGl0bGVcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzcz1cIm1vZGFsX19oZWFkZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJtb2RhbF9fdGl0bGVcIiBpZD1cIm1vZGFsLTEtdGl0bGVcIj5cbiAgICAgICAgICAgIFdlbGNvbWUgVG8gQmxvY2tseSBHYW1lcyBNdXNpYyFcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2UgbW9kYWxcIiBpZD1cIndlbGNvbWVDbG9zZUJ1dHRvblwiIGRhdGEtbWljcm9tb2RhbC1jbG9zZT48L2J1dHRvbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxtYWluIGNsYXNzPVwibW9kYWxfX2NvbnRlbnRcIiBpZD1cIm1vZGFsLTEtY29udGVudFwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVXNlIHRoZSB0YWIga2V5IHRvIGN5Y2xlIHRocm91Z2ggeW91ciBvcHRpb25zLiBJZiB5b3UgaGF2ZSBuZXZlclxuICAgICAgICAgICAgcGxheWVkIGJlZm9yZSB3ZSByZWNvbW1lbmQgeW91IHN0YXJ0IHdpdGggdGhlIHR1dG9yaWFsLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8Zm9vdGVyIGNsYXNzPVwibW9kYWxfX2Zvb3RlclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fYnRuIG1vZGFsX19idG4tcHJpbWFyeVwiIGlkPVwidHV0b3JpYWxCdXR0b25cIj5HbyB0byB0aGUgdHV0b3JpYWw8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxfX2J0biBtb2RhbF9fYnRuLXByaW1hcnlcIiBpZD1cImdhbWVCdXR0b25cIj5HbyB0byB0aGUgZ2FtZTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fYnRuIG1vZGFsX19idG4tcHJpbWFyeVwiIGlkPVwid2VsY29tZUJ1dHRvblJlcGxheVwiPlJlcGxheSBJbnN0cnVjdGlvbnM8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xuICAgIC8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/welcome_modal.js\n");

/***/ })

})