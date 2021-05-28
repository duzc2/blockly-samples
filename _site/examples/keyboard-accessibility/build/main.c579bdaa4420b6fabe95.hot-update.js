webpackHotUpdate("main",{

/***/ "./src/welcome_modal.js":
/*!******************************!*\
  !*** ./src/welcome_modal.js ***!
  \******************************/
/*! exports provided: WelcomeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WelcomeModal\", function() { return WelcomeModal; });\n/* harmony import */ var _speaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker */ \"./src/speaker.js\");\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\n/* harmony import */ var _tutorial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tutorial */ \"./src/tutorial.js\");\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview\n */\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n/**\n * A class for a modal that welcomes the users and helps them get oriented.\n */\n\nvar WelcomeModal = /*#__PURE__*/function () {\n  /**\n   * Constructor for the welcome modal.\n   * @constructor\n   */\n  function WelcomeModal(tutorialButtonCb) {\n    _classCallCheck(this, WelcomeModal);\n\n    /**\n     * The id of the modal.\n     * @type {string}\n     */\n    this.modalId = 'welcomeModal';\n    this.tutorialButtonCb = tutorialButtonCb;\n  }\n  /**\n   * Initializes the welcome modal.\n   */\n\n\n  _createClass(WelcomeModal, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.createDom();\n      document.getElementById('replayButton').addEventListener('click', function () {\n        _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].modalToText(document.getElementById(_this.modalId));\n      });\n      document.getElementById('welcomeCloseButton').addEventListener('blur', function () {\n        return _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].cancel();\n      });\n      micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].show(this.modalId);\n      document.getElementById('welcomeButtonReplay').addEventListener('click', function () {\n        _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].cancel();\n        _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].modalToText(document.getElementById(_this.modalId));\n      });\n      _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].modalToText(document.getElementById(this.modalId));\n      this.registerTutorialButton();\n    }\n    /**\n     * Adds a callback to the tutorial button.\n     */\n\n  }, {\n    key: \"registerTutorialButton\",\n    value: function registerTutorialButton() {\n      var _this2 = this;\n\n      document.getElementById('tutorialButton').addEventListener('click', function () {\n        micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].close(_this2.modalId);\n\n        _this2.tutorialButtonCb();\n      });\n    }\n    /**\n     * Creates the dom for the modal.\n     */\n\n  }, {\n    key: \"createDom\",\n    value: function createDom() {\n      /* eslint-disable max-len */\n      document.getElementById(this.modalId).innerHTML = \"\\n     <div class=\\\"modal__overlay\\\" tabindex=\\\"-1\\\" data-micromodal-close>\\n      <div class=\\\"modal__container\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\" aria-labelledby=\\\"modal-1-title\\\">\\n        <header class=\\\"modal__header\\\">\\n          <h2 class=\\\"modal__title\\\" id=\\\"modal-1-title\\\">\\n            Welcome To Blockly Games Music!\\n          </h2>\\n          <button class=\\\"modal__close\\\" aria-label=\\\"Close modal\\\" id=\\\"welcomeCloseButton\\\" data-micromodal-close></button>\\n        </header>\\n        <main class=\\\"modal__content\\\" id=\\\"modal-1-content\\\">\\n          <p>\\n            Use the tab key to cycle through your options. If you have never\\n            played before we recommend you start with the tutorial.\\n          </p>\\n        </main>\\n        <footer class=\\\"modal__footer\\\">\\n          <button class=\\\"modal__btn modal__btn-primary\\\" id=\\\"tutorialButton\\\">Go to the tutorial</button>\\n          <button class=\\\"modal__btn modal__btn-primary\\\" id=\\\"gameButton\\\">Go to the game</button>\\n          <button class=\\\"modal__btn modal__btn-primary\\\" id=\\\"welcomeButtonReplay\\\">Replay Instructions</button>\\n        </footer>\\n      </div>\\n    </div>\";\n      /* eslint-enable max-len */\n    }\n  }]);\n\n  return WelcomeModal;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2VsY29tZV9tb2RhbC5qcz9kODcyIl0sIm5hbWVzIjpbIldlbGNvbWVNb2RhbCIsInR1dG9yaWFsQnV0dG9uQ2IiLCJtb2RhbElkIiwiY3JlYXRlRG9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzcGVha2VyIiwibW9kYWxUb1RleHQiLCJjYW5jZWwiLCJNaWNyb01vZGFsIiwic2hvdyIsInJlZ2lzdGVyVHV0b3JpYWxCdXR0b24iLCJjbG9zZSIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ2E7Ozs7Ozs7O0FBRWI7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNPLElBQU1BLFlBQWI7QUFDRTtBQUNGO0FBQ0E7QUFDQTtBQUNFLHdCQUFZQyxnQkFBWixFQUE4QjtBQUFBOztBQUM1QjtBQUNKO0FBQ0E7QUFDQTtBQUNJLFNBQUtDLE9BQUwsR0FBZSxjQUFmO0FBRUEsU0FBS0QsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFqQkE7QUFBQTtBQUFBLDJCQWtCUztBQUFBOztBQUNMLFdBQUtFLFNBQUw7QUFDQUMsY0FBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLEVBQXdDQyxnQkFBeEMsQ0FBeUQsT0FBekQsRUFDSSxZQUFNO0FBQ0pDLHdEQUFPLENBQUNDLFdBQVIsQ0FBb0JKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUFJLENBQUNILE9BQTdCLENBQXBCO0FBQ0QsT0FITDtBQUlBRSxjQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDQyxnQkFBOUMsQ0FDSSxNQURKLEVBQ1k7QUFBQSxlQUFNQyxnREFBTyxDQUFDRSxNQUFSLEVBQU47QUFBQSxPQURaO0FBRUFDLHdEQUFVLENBQUNDLElBQVgsQ0FBZ0IsS0FBS1QsT0FBckI7QUFFQUUsY0FBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixFQUErQ0MsZ0JBQS9DLENBQWdFLE9BQWhFLEVBQ0ksWUFBTTtBQUNKQyx3REFBTyxDQUFDRSxNQUFSO0FBQ0FGLHdEQUFPLENBQUNDLFdBQVIsQ0FBb0JKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUFJLENBQUNILE9BQTdCLENBQXBCO0FBQ0QsT0FKTDtBQUtBSyxzREFBTyxDQUFDQyxXQUFSLENBQW9CSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBS0gsT0FBN0IsQ0FBcEI7QUFDQSxXQUFLVSxzQkFBTDtBQUNEO0FBRUQ7QUFDRjtBQUNBOztBQXZDQTtBQUFBO0FBQUEsNkNBd0MyQjtBQUFBOztBQUN2QlIsY0FBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixFQUEwQ0MsZ0JBQTFDLENBQTJELE9BQTNELEVBQ0ksWUFBTTtBQUNKSSwwREFBVSxDQUFDRyxLQUFYLENBQWlCLE1BQUksQ0FBQ1gsT0FBdEI7O0FBQ0EsY0FBSSxDQUFDRCxnQkFBTDtBQUNELE9BSkw7QUFLRDtBQUVEO0FBQ0Y7QUFDQTs7QUFsREE7QUFBQTtBQUFBLGdDQW1EYztBQUNWO0FBQ0FHLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUFLSCxPQUE3QixFQUFzQ1ksU0FBdEM7QUFzQkE7QUFDRDtBQTVFSDs7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3JjL3dlbGNvbWVfbW9kYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbi8qKlxuICogQGZpbGVvdmVydmlld1xuICovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7c3BlYWtlcn0gZnJvbSAnLi9zcGVha2VyJztcbmltcG9ydCBNaWNyb01vZGFsIGZyb20gJ21pY3JvbW9kYWwnO1xuaW1wb3J0IHtUdXRvcmlhbH0gZnJvbSAnLi90dXRvcmlhbCc7XG5cbi8qKlxuICogQSBjbGFzcyBmb3IgYSBtb2RhbCB0aGF0IHdlbGNvbWVzIHRoZSB1c2VycyBhbmQgaGVscHMgdGhlbSBnZXQgb3JpZW50ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBXZWxjb21lTW9kYWwge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIHRoZSB3ZWxjb21lIG1vZGFsLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKHR1dG9yaWFsQnV0dG9uQ2IpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgaWQgb2YgdGhlIG1vZGFsLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5tb2RhbElkID0gJ3dlbGNvbWVNb2RhbCc7XG5cbiAgICB0aGlzLnR1dG9yaWFsQnV0dG9uQ2IgPSB0dXRvcmlhbEJ1dHRvbkNiO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSB3ZWxjb21lIG1vZGFsLlxuICAgKi9cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmNyZWF0ZURvbSgpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXBsYXlCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBzcGVha2VyLm1vZGFsVG9UZXh0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubW9kYWxJZCkpO1xuICAgICAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZUNsb3NlQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2JsdXInLCAoKSA9PiBzcGVha2VyLmNhbmNlbCgpKTtcbiAgICBNaWNyb01vZGFsLnNob3codGhpcy5tb2RhbElkKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWxjb21lQnV0dG9uUmVwbGF5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgc3BlYWtlci5jYW5jZWwoKTtcbiAgICAgICAgICBzcGVha2VyLm1vZGFsVG9UZXh0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubW9kYWxJZCkpO1xuICAgICAgICB9KTtcbiAgICBzcGVha2VyLm1vZGFsVG9UZXh0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubW9kYWxJZCkpO1xuICAgIHRoaXMucmVnaXN0ZXJUdXRvcmlhbEJ1dHRvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjYWxsYmFjayB0byB0aGUgdHV0b3JpYWwgYnV0dG9uLlxuICAgKi9cbiAgcmVnaXN0ZXJUdXRvcmlhbEJ1dHRvbigpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHV0b3JpYWxCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBNaWNyb01vZGFsLmNsb3NlKHRoaXMubW9kYWxJZCk7XG4gICAgICAgICAgdGhpcy50dXRvcmlhbEJ1dHRvbkNiKCk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGRvbSBmb3IgdGhlIG1vZGFsLlxuICAgKi9cbiAgY3JlYXRlRG9tKCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1vZGFsSWQpLmlubmVySFRNTCA9IGBcbiAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19vdmVybGF5XCIgdGFiaW5kZXg9XCItMVwiIGRhdGEtbWljcm9tb2RhbC1jbG9zZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fY29udGFpbmVyXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbW9kYWw9XCJ0cnVlXCIgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtMS10aXRsZVwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwibW9kYWxfX2hlYWRlclwiPlxuICAgICAgICAgIDxoMiBjbGFzcz1cIm1vZGFsX190aXRsZVwiIGlkPVwibW9kYWwtMS10aXRsZVwiPlxuICAgICAgICAgICAgV2VsY29tZSBUbyBCbG9ja2x5IEdhbWVzIE11c2ljIVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19jbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZSBtb2RhbFwiIGlkPVwid2VsY29tZUNsb3NlQnV0dG9uXCIgZGF0YS1taWNyb21vZGFsLWNsb3NlPjwvYnV0dG9uPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG1haW4gY2xhc3M9XCJtb2RhbF9fY29udGVudFwiIGlkPVwibW9kYWwtMS1jb250ZW50XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBVc2UgdGhlIHRhYiBrZXkgdG8gY3ljbGUgdGhyb3VnaCB5b3VyIG9wdGlvbnMuIElmIHlvdSBoYXZlIG5ldmVyXG4gICAgICAgICAgICBwbGF5ZWQgYmVmb3JlIHdlIHJlY29tbWVuZCB5b3Ugc3RhcnQgd2l0aCB0aGUgdHV0b3JpYWwuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJtb2RhbF9fZm9vdGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19idG4gbW9kYWxfX2J0bi1wcmltYXJ5XCIgaWQ9XCJ0dXRvcmlhbEJ1dHRvblwiPkdvIHRvIHRoZSB0dXRvcmlhbDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fYnRuIG1vZGFsX19idG4tcHJpbWFyeVwiIGlkPVwiZ2FtZUJ1dHRvblwiPkdvIHRvIHRoZSBnYW1lPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19idG4gbW9kYWxfX2J0bi1wcmltYXJ5XCIgaWQ9XCJ3ZWxjb21lQnV0dG9uUmVwbGF5XCI+UmVwbGF5IEluc3RydWN0aW9uczwvYnV0dG9uPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gICAgLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/welcome_modal.js\n");

/***/ })

})