webpackHotUpdate("main",{

/***/ "./src/welcome_modal.js":
/*!******************************!*\
  !*** ./src/welcome_modal.js ***!
  \******************************/
/*! exports provided: WelcomeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WelcomeModal\", function() { return WelcomeModal; });\n/* harmony import */ var _speaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker */ \"./src/speaker.js\");\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\n/* harmony import */ var _tutorial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tutorial */ \"./src/tutorial.js\");\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview\n */\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n/**\n * A class for a modal that welcomes the users and helps them get oriented.\n */\n\nvar WelcomeModal = /*#__PURE__*/function () {\n  /**\n   * Constructor for the welcome modal.\n   * @constructor\n   */\n  function WelcomeModal() {\n    _classCallCheck(this, WelcomeModal);\n\n    /**\n     * The id of the modal.\n     * @type {string}\n     */\n    this.modalId = 'welcomeModal';\n  }\n  /**\n   * Initializes the welcome modal.\n   */\n\n\n  _createClass(WelcomeModal, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.createDom();\n      document.getElementById('replayButton').addEventListener('click', function () {\n        _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].modalToText(document.getElementById(_this.modalId));\n      });\n      document.getElementById('welcomeCloseButton').addEventListener('blur', function () {\n        return _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].cancel();\n      });\n      micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].show(this.modalId);\n      document.getElementById('welcomeButtonReplay').addEventListener('click', function () {\n        _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].cancel();\n        _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].modalToText(document.getElementById(_this.modalId));\n      });\n      _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].modalToText(document.getElementById(this.modalId));\n      this.registerTutorialButton();\n    }\n  }, {\n    key: \"registerTutorialButton\",\n    value: function registerTutorialButton() {\n      var _this2 = this;\n\n      document.getElementById('tutorialButton').addEventListener('click', function () {\n        micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].close(_this2.modalId);\n        var tutorial = new _tutorial__WEBPACK_IMPORTED_MODULE_2__[\"Tutorial\"]();\n        tutorial.init();\n      });\n    }\n    /**\n     * Creates the dom for the modal.\n     */\n\n  }, {\n    key: \"createDom\",\n    value: function createDom() {\n      document.getElementById(this.modalId).innerHTML = \"\\n     <div class=\\\"modal__overlay\\\" tabindex=\\\"-1\\\" data-micromodal-close>\\n      <div class=\\\"modal__container\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\" aria-labelledby=\\\"modal-1-title\\\">\\n        <header class=\\\"modal__header\\\">\\n          <h2 class=\\\"modal__title\\\" id=\\\"modal-1-title\\\">\\n            Welcome To Blockly Games Music!\\n          </h2>\\n          <button class=\\\"modal__close\\\" aria-label=\\\"Close modal\\\" id=\\\"welcomeCloseButton\\\" data-micromodal-close></button>\\n        </header>\\n        <main class=\\\"modal__content\\\" id=\\\"modal-1-content\\\">\\n          <p>\\n            Use the tab key to cycle through your options. If you have never\\n            played before we recommend you start with the tutorial.\\n          </p>\\n        </main>\\n        <footer class=\\\"modal__footer\\\">\\n          <button class=\\\"modal__btn modal__btn-primary\\\" id=\\\"tutorialButton\\\">Go to the tutorial</button>\\n          <button class=\\\"modal__btn modal__btn-primary\\\" id=\\\"gameButton\\\">Go to the game</button>\\n          <button class=\\\"modal__btn modal__btn-primary\\\" id=\\\"welcomeButtonReplay\\\">Replay Instructions</button>\\n        </footer>\\n      </div>\\n    </div>\";\n    }\n  }]);\n\n  return WelcomeModal;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2VsY29tZV9tb2RhbC5qcz9kODcyIl0sIm5hbWVzIjpbIldlbGNvbWVNb2RhbCIsIm1vZGFsSWQiLCJjcmVhdGVEb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNwZWFrZXIiLCJtb2RhbFRvVGV4dCIsImNhbmNlbCIsIk1pY3JvTW9kYWwiLCJzaG93IiwicmVnaXN0ZXJUdXRvcmlhbEJ1dHRvbiIsImNsb3NlIiwidHV0b3JpYWwiLCJUdXRvcmlhbCIsImluaXQiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNhOzs7Ozs7OztBQUViO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxZQUFiO0FBQ0U7QUFDRjtBQUNBO0FBQ0E7QUFDRSwwQkFBYztBQUFBOztBQUNaO0FBQ0o7QUFDQTtBQUNBO0FBQ0ksU0FBS0MsT0FBTCxHQUFlLGNBQWY7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBZkE7QUFBQTtBQUFBLDJCQWdCUztBQUFBOztBQUNMLFdBQUtDLFNBQUw7QUFDQUMsY0FBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLEVBQXdDQyxnQkFBeEMsQ0FBeUQsT0FBekQsRUFDSSxZQUFNO0FBQ0pDLHdEQUFPLENBQUNDLFdBQVIsQ0FBb0JKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUFJLENBQUNILE9BQTdCLENBQXBCO0FBQ0QsT0FITDtBQUlBRSxjQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDQyxnQkFBOUMsQ0FDSSxNQURKLEVBQ1k7QUFBQSxlQUFNQyxnREFBTyxDQUFDRSxNQUFSLEVBQU47QUFBQSxPQURaO0FBRUFDLHdEQUFVLENBQUNDLElBQVgsQ0FBZ0IsS0FBS1QsT0FBckI7QUFFQUUsY0FBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixFQUErQ0MsZ0JBQS9DLENBQWdFLE9BQWhFLEVBQ0ksWUFBTTtBQUNKQyx3REFBTyxDQUFDRSxNQUFSO0FBQ0FGLHdEQUFPLENBQUNDLFdBQVIsQ0FBb0JKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUFJLENBQUNILE9BQTdCLENBQXBCO0FBQ0QsT0FKTDtBQUtBSyxzREFBTyxDQUFDQyxXQUFSLENBQW9CSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBS0gsT0FBN0IsQ0FBcEI7QUFDQSxXQUFLVSxzQkFBTDtBQUNEO0FBakNIO0FBQUE7QUFBQSw2Q0FtQzJCO0FBQUE7O0FBQ3ZCUixjQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLEVBQTBDQyxnQkFBMUMsQ0FBMkQsT0FBM0QsRUFDRSxZQUFNO0FBQ0pJLDBEQUFVLENBQUNHLEtBQVgsQ0FBaUIsTUFBSSxDQUFDWCxPQUF0QjtBQUNBLFlBQU1ZLFFBQVEsR0FBRyxJQUFJQyxrREFBSixFQUFqQjtBQUNBRCxnQkFBUSxDQUFDRSxJQUFUO0FBQ0QsT0FMSDtBQU1EO0FBRUQ7QUFDRjtBQUNBOztBQTlDQTtBQUFBO0FBQUEsZ0NBK0NjO0FBQ1ZaLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUFLSCxPQUE3QixFQUFzQ2UsU0FBdEM7QUFzQkQ7QUF0RUg7O0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy93ZWxjb21lX21vZGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge3NwZWFrZXJ9IGZyb20gJy4vc3BlYWtlcic7XG5pbXBvcnQgTWljcm9Nb2RhbCBmcm9tICdtaWNyb21vZGFsJztcbmltcG9ydCB7VHV0b3JpYWx9IGZyb20gJy4vdHV0b3JpYWwnO1xuXG4vKipcbiAqIEEgY2xhc3MgZm9yIGEgbW9kYWwgdGhhdCB3ZWxjb21lcyB0aGUgdXNlcnMgYW5kIGhlbHBzIHRoZW0gZ2V0IG9yaWVudGVkLlxuICovXG5leHBvcnQgY2xhc3MgV2VsY29tZU1vZGFsIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIGZvciB0aGUgd2VsY29tZSBtb2RhbC5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgaWQgb2YgdGhlIG1vZGFsLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5tb2RhbElkID0gJ3dlbGNvbWVNb2RhbCc7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHdlbGNvbWUgbW9kYWwuXG4gICAqL1xuICBpbml0KCkge1xuICAgIHRoaXMuY3JlYXRlRG9tKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlcGxheUJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHNwZWFrZXIubW9kYWxUb1RleHQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5tb2RhbElkKSk7XG4gICAgICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWxjb21lQ2xvc2VCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnYmx1cicsICgpID0+IHNwZWFrZXIuY2FuY2VsKCkpO1xuICAgIE1pY3JvTW9kYWwuc2hvdyh0aGlzLm1vZGFsSWQpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWVCdXR0b25SZXBsYXknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBzcGVha2VyLmNhbmNlbCgpO1xuICAgICAgICAgIHNwZWFrZXIubW9kYWxUb1RleHQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5tb2RhbElkKSk7XG4gICAgICAgIH0pO1xuICAgIHNwZWFrZXIubW9kYWxUb1RleHQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5tb2RhbElkKSk7XG4gICAgdGhpcy5yZWdpc3RlclR1dG9yaWFsQnV0dG9uKCk7XG4gIH1cblxuICByZWdpc3RlclR1dG9yaWFsQnV0dG9uKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dXRvcmlhbEJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgTWljcm9Nb2RhbC5jbG9zZSh0aGlzLm1vZGFsSWQpO1xuICAgICAgICBjb25zdCB0dXRvcmlhbCA9IG5ldyBUdXRvcmlhbCgpO1xuICAgICAgICB0dXRvcmlhbC5pbml0KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBkb20gZm9yIHRoZSBtb2RhbC5cbiAgICovXG4gIGNyZWF0ZURvbSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1vZGFsSWQpLmlubmVySFRNTCA9IGBcbiAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19vdmVybGF5XCIgdGFiaW5kZXg9XCItMVwiIGRhdGEtbWljcm9tb2RhbC1jbG9zZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fY29udGFpbmVyXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbW9kYWw9XCJ0cnVlXCIgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtMS10aXRsZVwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwibW9kYWxfX2hlYWRlclwiPlxuICAgICAgICAgIDxoMiBjbGFzcz1cIm1vZGFsX190aXRsZVwiIGlkPVwibW9kYWwtMS10aXRsZVwiPlxuICAgICAgICAgICAgV2VsY29tZSBUbyBCbG9ja2x5IEdhbWVzIE11c2ljIVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19jbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZSBtb2RhbFwiIGlkPVwid2VsY29tZUNsb3NlQnV0dG9uXCIgZGF0YS1taWNyb21vZGFsLWNsb3NlPjwvYnV0dG9uPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG1haW4gY2xhc3M9XCJtb2RhbF9fY29udGVudFwiIGlkPVwibW9kYWwtMS1jb250ZW50XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBVc2UgdGhlIHRhYiBrZXkgdG8gY3ljbGUgdGhyb3VnaCB5b3VyIG9wdGlvbnMuIElmIHlvdSBoYXZlIG5ldmVyXG4gICAgICAgICAgICBwbGF5ZWQgYmVmb3JlIHdlIHJlY29tbWVuZCB5b3Ugc3RhcnQgd2l0aCB0aGUgdHV0b3JpYWwuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJtb2RhbF9fZm9vdGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19idG4gbW9kYWxfX2J0bi1wcmltYXJ5XCIgaWQ9XCJ0dXRvcmlhbEJ1dHRvblwiPkdvIHRvIHRoZSB0dXRvcmlhbDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fYnRuIG1vZGFsX19idG4tcHJpbWFyeVwiIGlkPVwiZ2FtZUJ1dHRvblwiPkdvIHRvIHRoZSBnYW1lPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19idG4gbW9kYWxfX2J0bi1wcmltYXJ5XCIgaWQ9XCJ3ZWxjb21lQnV0dG9uUmVwbGF5XCI+UmVwbGF5IEluc3RydWN0aW9uczwvYnV0dG9uPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/welcome_modal.js\n");

/***/ })

})