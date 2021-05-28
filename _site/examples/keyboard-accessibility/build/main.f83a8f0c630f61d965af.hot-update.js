webpackHotUpdate("main",{

/***/ "./src/welcome_modal.js":
/*!******************************!*\
  !*** ./src/welcome_modal.js ***!
  \******************************/
/*! exports provided: WelcomeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WelcomeModal\", function() { return WelcomeModal; });\n/* harmony import */ var _speaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker */ \"./src/speaker.js\");\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ \"./node_modules/tone/build/esm/index.js\");\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview\n */\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n/**\n * A class for a modal that welcomes the users and helps them get oriented.\n */\n\nvar WelcomeModal = /*#__PURE__*/function () {\n  /**\n   * Constructor for the welcome modal.\n   * @param {Function} tutorialButtonCb A function to call when the tutorial\n   *     button is pressed, in addition to any cleanup this class chooses to do.\n   * @constructor\n   */\n  function WelcomeModal(tutorialButtonCb) {\n    _classCallCheck(this, WelcomeModal);\n\n    /**\n     * The id of the modal.\n     * @type {string}\n     */\n    this.modalId = 'welcomeModal';\n    /**\n     * A function to call when the tutorial button is pressed.\n     * @type {Function}\n     */\n\n    this.tutorialButtonCb = tutorialButtonCb;\n  }\n  /**\n   * Initializes the welcome modal.\n   */\n\n\n  _createClass(WelcomeModal, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.createDom();\n      document.getElementById('replayButton').addEventListener('click', function () {\n        _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].modalToText(document.getElementById(_this.modalId));\n      });\n      document.getElementById('welcomeCloseButton').addEventListener('blur', function () {\n        return _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].cancel();\n      });\n      micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].show(this.modalId);\n      document.getElementById('welcomeButtonReplay').addEventListener('click', function () {\n        _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].cancel();\n        _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].modalToText(document.getElementById(_this.modalId));\n      });\n      _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].modalToText(document.getElementById(this.modalId));\n      this.registerTutorialButton();\n    }\n    /**\n     * Adds a callback to the tutorial button.\n     */\n\n  }, {\n    key: \"registerTutorialButton\",\n    value: function registerTutorialButton() {\n      var _this2 = this;\n\n      document.getElementById('tutorialButton').addEventListener('click', function () {\n        micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].close(_this2.modalId);\n        console.log(_this2.tutorialButtonCb);\n\n        _this2.tutorialButtonCb();\n      });\n    }\n    /**\n     * Creates the dom for the modal.\n     */\n\n  }, {\n    key: \"createDom\",\n    value: function createDom() {\n      /* eslint-disable max-len */\n      document.getElementById(this.modalId).innerHTML = \"\\n     <div class=\\\"modal__overlay\\\" tabindex=\\\"-1\\\" data-micromodal-close>\\n      <div class=\\\"modal__container\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\" aria-labelledby=\\\"modal-1-title\\\">\\n        <header class=\\\"modal__header\\\">\\n          <h2 class=\\\"modal__title\\\" id=\\\"modal-1-title\\\">\\n            Welcome To Blockly Games Music!\\n          </h2>\\n          <button class=\\\"modal__close\\\" aria-label=\\\"Close modal\\\" id=\\\"welcomeCloseButton\\\" data-micromodal-close></button>\\n        </header>\\n        <main class=\\\"modal__content\\\" id=\\\"modal-1-content\\\">\\n          <p>\\n            Use the tab key to cycle through your options. If you have never\\n            played before we recommend you start with the tutorial.\\n          </p>\\n        </main>\\n        <footer class=\\\"modal__footer\\\">\\n          <button class=\\\"modal__btn modal__btn-primary\\\" id=\\\"tutorialButton\\\">Go to the tutorial</button>\\n          <button class=\\\"modal__btn modal__btn-primary\\\" id=\\\"gameButton\\\">Go to the game</button>\\n          <button class=\\\"modal__btn modal__btn-primary\\\" id=\\\"welcomeButtonReplay\\\">Replay Instructions</button>\\n        </footer>\\n      </div>\\n    </div>\";\n      /* eslint-enable max-len */\n    }\n  }]);\n\n  return WelcomeModal;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2VsY29tZV9tb2RhbC5qcz9kODcyIl0sIm5hbWVzIjpbIldlbGNvbWVNb2RhbCIsInR1dG9yaWFsQnV0dG9uQ2IiLCJtb2RhbElkIiwiY3JlYXRlRG9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzcGVha2VyIiwibW9kYWxUb1RleHQiLCJjYW5jZWwiLCJNaWNyb01vZGFsIiwic2hvdyIsInJlZ2lzdGVyVHV0b3JpYWxCdXR0b24iLCJjbG9zZSIsImNvbnNvbGUiLCJsb2ciLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNhOzs7Ozs7OztBQUViO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxZQUFiO0FBQ0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Usd0JBQVlDLGdCQUFaLEVBQThCO0FBQUE7O0FBQzVCO0FBQ0o7QUFDQTtBQUNBO0FBQ0ksU0FBS0MsT0FBTCxHQUFlLGNBQWY7QUFFQTtBQUNKO0FBQ0E7QUFDQTs7QUFDSSxTQUFLRCxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7OztBQXZCQTtBQUFBO0FBQUEsMkJBd0JTO0FBQUE7O0FBQ0wsV0FBS0UsU0FBTDtBQUNBQyxjQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0NDLGdCQUF4QyxDQUF5RCxPQUF6RCxFQUNJLFlBQU07QUFDSkMsd0RBQU8sQ0FBQ0MsV0FBUixDQUFvQkosUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQUksQ0FBQ0gsT0FBN0IsQ0FBcEI7QUFDRCxPQUhMO0FBSUFFLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixvQkFBeEIsRUFBOENDLGdCQUE5QyxDQUNJLE1BREosRUFDWTtBQUFBLGVBQU1DLGdEQUFPLENBQUNFLE1BQVIsRUFBTjtBQUFBLE9BRFo7QUFFQUMsd0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQixLQUFLVCxPQUFyQjtBQUVBRSxjQUFRLENBQUNDLGNBQVQsQ0FBd0IscUJBQXhCLEVBQStDQyxnQkFBL0MsQ0FBZ0UsT0FBaEUsRUFDSSxZQUFNO0FBQ0pDLHdEQUFPLENBQUNFLE1BQVI7QUFDQUYsd0RBQU8sQ0FBQ0MsV0FBUixDQUFvQkosUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQUksQ0FBQ0gsT0FBN0IsQ0FBcEI7QUFDRCxPQUpMO0FBS0FLLHNEQUFPLENBQUNDLFdBQVIsQ0FBb0JKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUFLSCxPQUE3QixDQUFwQjtBQUNBLFdBQUtVLHNCQUFMO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7O0FBN0NBO0FBQUE7QUFBQSw2Q0E4QzJCO0FBQUE7O0FBQ3ZCUixjQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLEVBQTBDQyxnQkFBMUMsQ0FBMkQsT0FBM0QsRUFDSSxZQUFNO0FBQ0pJLDBEQUFVLENBQUNHLEtBQVgsQ0FBaUIsTUFBSSxDQUFDWCxPQUF0QjtBQUNBWSxlQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFJLENBQUNkLGdCQUFqQjs7QUFDQSxjQUFJLENBQUNBLGdCQUFMO0FBQ0QsT0FMTDtBQU1EO0FBRUQ7QUFDRjtBQUNBOztBQXpEQTtBQUFBO0FBQUEsZ0NBMERjO0FBQ1Y7QUFDQUcsY0FBUSxDQUFDQyxjQUFULENBQXdCLEtBQUtILE9BQTdCLEVBQXNDYyxTQUF0QztBQXNCQTtBQUNEO0FBbkZIOztBQUFBO0FBQUEiLCJmaWxlIjoiLi9zcmMvd2VsY29tZV9tb2RhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKi9cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtzcGVha2VyfSBmcm9tICcuL3NwZWFrZXInO1xuaW1wb3J0IE1pY3JvTW9kYWwgZnJvbSAnbWljcm9tb2RhbCc7XG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gJ3RvbmUnO1xuXG4vKipcbiAqIEEgY2xhc3MgZm9yIGEgbW9kYWwgdGhhdCB3ZWxjb21lcyB0aGUgdXNlcnMgYW5kIGhlbHBzIHRoZW0gZ2V0IG9yaWVudGVkLlxuICovXG5leHBvcnQgY2xhc3MgV2VsY29tZU1vZGFsIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIGZvciB0aGUgd2VsY29tZSBtb2RhbC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gdHV0b3JpYWxCdXR0b25DYiBBIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgdHV0b3JpYWxcbiAgICogICAgIGJ1dHRvbiBpcyBwcmVzc2VkLCBpbiBhZGRpdGlvbiB0byBhbnkgY2xlYW51cCB0aGlzIGNsYXNzIGNob29zZXMgdG8gZG8uXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IodHV0b3JpYWxCdXR0b25DYikge1xuICAgIC8qKlxuICAgICAqIFRoZSBpZCBvZiB0aGUgbW9kYWwuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZGFsSWQgPSAnd2VsY29tZU1vZGFsJztcblxuICAgIC8qKlxuICAgICAqIEEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSB0dXRvcmlhbCBidXR0b24gaXMgcHJlc3NlZC5cbiAgICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy50dXRvcmlhbEJ1dHRvbkNiID0gdHV0b3JpYWxCdXR0b25DYjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgd2VsY29tZSBtb2RhbC5cbiAgICovXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVEb20oKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVwbGF5QnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgc3BlYWtlci5tb2RhbFRvVGV4dChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1vZGFsSWQpKTtcbiAgICAgICAgfSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWVDbG9zZUJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdibHVyJywgKCkgPT4gc3BlYWtlci5jYW5jZWwoKSk7XG4gICAgTWljcm9Nb2RhbC5zaG93KHRoaXMubW9kYWxJZCk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZUJ1dHRvblJlcGxheScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHNwZWFrZXIuY2FuY2VsKCk7XG4gICAgICAgICAgc3BlYWtlci5tb2RhbFRvVGV4dChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1vZGFsSWQpKTtcbiAgICAgICAgfSk7XG4gICAgc3BlYWtlci5tb2RhbFRvVGV4dChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1vZGFsSWQpKTtcbiAgICB0aGlzLnJlZ2lzdGVyVHV0b3JpYWxCdXR0b24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2FsbGJhY2sgdG8gdGhlIHR1dG9yaWFsIGJ1dHRvbi5cbiAgICovXG4gIHJlZ2lzdGVyVHV0b3JpYWxCdXR0b24oKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1dG9yaWFsQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgTWljcm9Nb2RhbC5jbG9zZSh0aGlzLm1vZGFsSWQpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudHV0b3JpYWxCdXR0b25DYik7XG4gICAgICAgICAgdGhpcy50dXRvcmlhbEJ1dHRvbkNiKCk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGRvbSBmb3IgdGhlIG1vZGFsLlxuICAgKi9cbiAgY3JlYXRlRG9tKCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1vZGFsSWQpLmlubmVySFRNTCA9IGBcbiAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19vdmVybGF5XCIgdGFiaW5kZXg9XCItMVwiIGRhdGEtbWljcm9tb2RhbC1jbG9zZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fY29udGFpbmVyXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbW9kYWw9XCJ0cnVlXCIgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtMS10aXRsZVwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwibW9kYWxfX2hlYWRlclwiPlxuICAgICAgICAgIDxoMiBjbGFzcz1cIm1vZGFsX190aXRsZVwiIGlkPVwibW9kYWwtMS10aXRsZVwiPlxuICAgICAgICAgICAgV2VsY29tZSBUbyBCbG9ja2x5IEdhbWVzIE11c2ljIVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19jbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZSBtb2RhbFwiIGlkPVwid2VsY29tZUNsb3NlQnV0dG9uXCIgZGF0YS1taWNyb21vZGFsLWNsb3NlPjwvYnV0dG9uPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG1haW4gY2xhc3M9XCJtb2RhbF9fY29udGVudFwiIGlkPVwibW9kYWwtMS1jb250ZW50XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBVc2UgdGhlIHRhYiBrZXkgdG8gY3ljbGUgdGhyb3VnaCB5b3VyIG9wdGlvbnMuIElmIHlvdSBoYXZlIG5ldmVyXG4gICAgICAgICAgICBwbGF5ZWQgYmVmb3JlIHdlIHJlY29tbWVuZCB5b3Ugc3RhcnQgd2l0aCB0aGUgdHV0b3JpYWwuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJtb2RhbF9fZm9vdGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19idG4gbW9kYWxfX2J0bi1wcmltYXJ5XCIgaWQ9XCJ0dXRvcmlhbEJ1dHRvblwiPkdvIHRvIHRoZSB0dXRvcmlhbDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fYnRuIG1vZGFsX19idG4tcHJpbWFyeVwiIGlkPVwiZ2FtZUJ1dHRvblwiPkdvIHRvIHRoZSBnYW1lPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19idG4gbW9kYWxfX2J0bi1wcmltYXJ5XCIgaWQ9XCJ3ZWxjb21lQnV0dG9uUmVwbGF5XCI+UmVwbGF5IEluc3RydWN0aW9uczwvYnV0dG9uPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gICAgLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/welcome_modal.js\n");

/***/ })

})