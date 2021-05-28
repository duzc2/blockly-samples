webpackHotUpdate("main",{

/***/ "./src/welcome_modal.js":
/*!******************************!*\
  !*** ./src/welcome_modal.js ***!
  \******************************/
/*! exports provided: WelcomeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WelcomeModal\", function() { return WelcomeModal; });\n/* harmony import */ var _speaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker */ \"./src/speaker.js\");\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\n/* harmony import */ var _tutorial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tutorial */ \"./src/tutorial.js\");\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview\n */\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n/**\n * A class for a modal that welcomes the users and helps them get oriented.\n */\n\nvar WelcomeModal = /*#__PURE__*/function () {\n  function WelcomeModal() {\n    _classCallCheck(this, WelcomeModal);\n\n    /**\n     * The id of the modal.\n     * @type {string}\n     */\n    this.modalId = 'welcomeModal';\n  }\n  /**\n   * Initializes the welcome modal.\n   */\n\n\n  _createClass(WelcomeModal, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.createDom();\n      document.getElementById('replayButton').addEventListener('click', function () {\n        _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].modalToText(document.getElementById(_this.modalId));\n      });\n      document.getElementById('welcomeCloseButton').addEventListener('blur', function () {\n        return _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].cancel();\n      });\n      micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].show(this.modalId);\n      document.getElementById('welcomeButtonReplay').addEventListener('click', function () {\n        _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].cancel();\n        _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].modalToText(document.getElementById(_this.modalId));\n      });\n      _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].modalToText(document.getElementById(this.modalId));\n      this.registerTutorialButton();\n    }\n  }, {\n    key: \"registerTutorialButton\",\n    value: function registerTutorialButton() {\n      var _this2 = this;\n\n      document.getElementById('tutorialButton').addEventListener('click', function () {\n        micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].close(_this2.modalId);\n        var tutorial = new _tutorial__WEBPACK_IMPORTED_MODULE_2__[\"Tutorial\"]();\n        tutorial.init();\n      });\n    }\n    /**\n     * Creates the dom for the modal.\n     */\n\n  }, {\n    key: \"createDom\",\n    value: function createDom() {\n      document.getElementById(this.modalId).innerHTML = \"\\n     <div class=\\\"modal__overlay\\\" tabindex=\\\"-1\\\" data-micromodal-close>\\n      <div class=\\\"modal__container\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\" aria-labelledby=\\\"modal-1-title\\\">\\n        <header class=\\\"modal__header\\\">\\n          <h2 class=\\\"modal__title\\\" id=\\\"modal-1-title\\\">\\n            Welcome To Blockly Games Music!\\n          </h2>\\n          <button class=\\\"modal__close\\\" aria-label=\\\"Close modal\\\" id=\\\"welcomeCloseButton\\\" data-micromodal-close></button>\\n        </header>\\n        <main class=\\\"modal__content\\\" id=\\\"modal-1-content\\\">\\n          <p>\\n            Use the tab key to cycle through your options. If you have never\\n            played before we recommend you start with the tutorial.\\n          </p>\\n        </main>\\n        <footer class=\\\"modal__footer\\\">\\n          <button class=\\\"modal__btn modal__btn-primary\\\" id=\\\"tutorialButton\\\">Go to the tutorial</button>\\n          <button class=\\\"modal__btn modal__btn-primary\\\" id=\\\"gameButton\\\">Go to the game</button>\\n          <button class=\\\"modal__btn modal__btn-primary\\\" id=\\\"welcomeButtonReplay\\\">Replay Instructions</button>\\n        </footer>\\n      </div>\\n    </div>\";\n    }\n  }]);\n\n  return WelcomeModal;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2VsY29tZV9tb2RhbC5qcz9kODcyIl0sIm5hbWVzIjpbIldlbGNvbWVNb2RhbCIsIm1vZGFsSWQiLCJjcmVhdGVEb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNwZWFrZXIiLCJtb2RhbFRvVGV4dCIsImNhbmNlbCIsIk1pY3JvTW9kYWwiLCJzaG93IiwicmVnaXN0ZXJUdXRvcmlhbEJ1dHRvbiIsImNsb3NlIiwidHV0b3JpYWwiLCJUdXRvcmlhbCIsImluaXQiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNhOzs7Ozs7OztBQUViO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxZQUFiO0FBQ0UsMEJBQWM7QUFBQTs7QUFDWjtBQUNKO0FBQ0E7QUFDQTtBQUNJLFNBQUtDLE9BQUwsR0FBZSxjQUFmO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7OztBQVhBO0FBQUE7QUFBQSwyQkFZUztBQUFBOztBQUNMLFdBQUtDLFNBQUw7QUFDQUMsY0FBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLEVBQXdDQyxnQkFBeEMsQ0FBeUQsT0FBekQsRUFDSSxZQUFNO0FBQ0pDLHdEQUFPLENBQUNDLFdBQVIsQ0FBb0JKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUFJLENBQUNILE9BQTdCLENBQXBCO0FBQ0QsT0FITDtBQUlBRSxjQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDQyxnQkFBOUMsQ0FDSSxNQURKLEVBQ1k7QUFBQSxlQUFNQyxnREFBTyxDQUFDRSxNQUFSLEVBQU47QUFBQSxPQURaO0FBRUFDLHdEQUFVLENBQUNDLElBQVgsQ0FBZ0IsS0FBS1QsT0FBckI7QUFFQUUsY0FBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixFQUErQ0MsZ0JBQS9DLENBQWdFLE9BQWhFLEVBQ0ksWUFBTTtBQUNKQyx3REFBTyxDQUFDRSxNQUFSO0FBQ0FGLHdEQUFPLENBQUNDLFdBQVIsQ0FBb0JKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUFJLENBQUNILE9BQTdCLENBQXBCO0FBQ0QsT0FKTDtBQUtBSyxzREFBTyxDQUFDQyxXQUFSLENBQW9CSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBS0gsT0FBN0IsQ0FBcEI7QUFDQSxXQUFLVSxzQkFBTDtBQUNEO0FBN0JIO0FBQUE7QUFBQSw2Q0ErQjJCO0FBQUE7O0FBQ3ZCUixjQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLEVBQTBDQyxnQkFBMUMsQ0FBMkQsT0FBM0QsRUFDRSxZQUFNO0FBQ0pJLDBEQUFVLENBQUNHLEtBQVgsQ0FBaUIsTUFBSSxDQUFDWCxPQUF0QjtBQUNBLFlBQU1ZLFFBQVEsR0FBRyxJQUFJQyxrREFBSixFQUFqQjtBQUNBRCxnQkFBUSxDQUFDRSxJQUFUO0FBQ0QsT0FMSDtBQU1EO0FBRUQ7QUFDRjtBQUNBOztBQTFDQTtBQUFBO0FBQUEsZ0NBMkNjO0FBQ1ZaLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUFLSCxPQUE3QixFQUFzQ2UsU0FBdEM7QUFzQkQ7QUFsRUg7O0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy93ZWxjb21lX21vZGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge3NwZWFrZXJ9IGZyb20gJy4vc3BlYWtlcic7XG5pbXBvcnQgTWljcm9Nb2RhbCBmcm9tICdtaWNyb21vZGFsJztcbmltcG9ydCB7VHV0b3JpYWx9IGZyb20gJy4vdHV0b3JpYWwnO1xuXG4vKipcbiAqIEEgY2xhc3MgZm9yIGEgbW9kYWwgdGhhdCB3ZWxjb21lcyB0aGUgdXNlcnMgYW5kIGhlbHBzIHRoZW0gZ2V0IG9yaWVudGVkLlxuICovXG5leHBvcnQgY2xhc3MgV2VsY29tZU1vZGFsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGlkIG9mIHRoZSBtb2RhbC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kYWxJZCA9ICd3ZWxjb21lTW9kYWwnO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSB3ZWxjb21lIG1vZGFsLlxuICAgKi9cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmNyZWF0ZURvbSgpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXBsYXlCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBzcGVha2VyLm1vZGFsVG9UZXh0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubW9kYWxJZCkpO1xuICAgICAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZUNsb3NlQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2JsdXInLCAoKSA9PiBzcGVha2VyLmNhbmNlbCgpKTtcbiAgICBNaWNyb01vZGFsLnNob3codGhpcy5tb2RhbElkKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWxjb21lQnV0dG9uUmVwbGF5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgc3BlYWtlci5jYW5jZWwoKTtcbiAgICAgICAgICBzcGVha2VyLm1vZGFsVG9UZXh0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubW9kYWxJZCkpO1xuICAgICAgICB9KTtcbiAgICBzcGVha2VyLm1vZGFsVG9UZXh0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubW9kYWxJZCkpO1xuICAgIHRoaXMucmVnaXN0ZXJUdXRvcmlhbEJ1dHRvbigpO1xuICB9XG5cbiAgcmVnaXN0ZXJUdXRvcmlhbEJ1dHRvbigpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHV0b3JpYWxCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIE1pY3JvTW9kYWwuY2xvc2UodGhpcy5tb2RhbElkKTtcbiAgICAgICAgY29uc3QgdHV0b3JpYWwgPSBuZXcgVHV0b3JpYWwoKTtcbiAgICAgICAgdHV0b3JpYWwuaW5pdCgpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgZG9tIGZvciB0aGUgbW9kYWwuXG4gICAqL1xuICBjcmVhdGVEb20oKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5tb2RhbElkKS5pbm5lckhUTUwgPSBgXG4gICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fb3ZlcmxheVwiIHRhYmluZGV4PVwiLTFcIiBkYXRhLW1pY3JvbW9kYWwtY2xvc2U+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2NvbnRhaW5lclwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLW1vZGFsPVwidHJ1ZVwiIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLTEtdGl0bGVcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzcz1cIm1vZGFsX19oZWFkZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJtb2RhbF9fdGl0bGVcIiBpZD1cIm1vZGFsLTEtdGl0bGVcIj5cbiAgICAgICAgICAgIFdlbGNvbWUgVG8gQmxvY2tseSBHYW1lcyBNdXNpYyFcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2UgbW9kYWxcIiBpZD1cIndlbGNvbWVDbG9zZUJ1dHRvblwiIGRhdGEtbWljcm9tb2RhbC1jbG9zZT48L2J1dHRvbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxtYWluIGNsYXNzPVwibW9kYWxfX2NvbnRlbnRcIiBpZD1cIm1vZGFsLTEtY29udGVudFwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVXNlIHRoZSB0YWIga2V5IHRvIGN5Y2xlIHRocm91Z2ggeW91ciBvcHRpb25zLiBJZiB5b3UgaGF2ZSBuZXZlclxuICAgICAgICAgICAgcGxheWVkIGJlZm9yZSB3ZSByZWNvbW1lbmQgeW91IHN0YXJ0IHdpdGggdGhlIHR1dG9yaWFsLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8Zm9vdGVyIGNsYXNzPVwibW9kYWxfX2Zvb3RlclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fYnRuIG1vZGFsX19idG4tcHJpbWFyeVwiIGlkPVwidHV0b3JpYWxCdXR0b25cIj5HbyB0byB0aGUgdHV0b3JpYWw8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxfX2J0biBtb2RhbF9fYnRuLXByaW1hcnlcIiBpZD1cImdhbWVCdXR0b25cIj5HbyB0byB0aGUgZ2FtZTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fYnRuIG1vZGFsX19idG4tcHJpbWFyeVwiIGlkPVwid2VsY29tZUJ1dHRvblJlcGxheVwiPlJlcGxheSBJbnN0cnVjdGlvbnM8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/welcome_modal.js\n");

/***/ })

})