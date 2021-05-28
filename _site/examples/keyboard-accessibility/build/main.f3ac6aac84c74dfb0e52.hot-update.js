webpackHotUpdate("main",{

/***/ "./src/welcome_modal.js":
/*!******************************!*\
  !*** ./src/welcome_modal.js ***!
  \******************************/
/*! exports provided: WelcomeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WelcomeModal\", function() { return WelcomeModal; });\n/* harmony import */ var _speaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker */ \"./src/speaker.js\");\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview\n */\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar WelcomeModal = /*#__PURE__*/function () {\n  function WelcomeModal() {\n    _classCallCheck(this, WelcomeModal);\n\n    /**\n     * The id of the modal.\n     * @type {string}\n     */\n    this.modalId = 'welcomeModal';\n  }\n  /**\n   * Initializes the welcome modal.\n   */\n\n\n  _createClass(WelcomeModal, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.createDom();\n      document.getElementById('replayButton').addEventListener('click', function () {\n        _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].modalToText(document.getElementById(_this.modalId));\n      });\n      document.getElementById('welcomeCloseButton').addEventListener('blur', function () {\n        return _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].cancel();\n      });\n      micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].show(this.modalId);\n      document.getElementById('welcomeButtonReplay').addEventListener('click', function () {\n        _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].cancel();\n        _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].modalToText(document.getElementById(_this.modalId));\n      });\n      _speaker__WEBPACK_IMPORTED_MODULE_0__[\"speaker\"].modalToText(document.getElementById(this.modalId));\n    }\n  }, {\n    key: \"registerTutorialButton\",\n    value: function registerTutorialButton() {\n      document.getElementById('welcomeButtonReplay').addEventListener('click', function () {\n        var tutorial = new Tutorial();\n        tutorial.init();\n      });\n    }\n    /**\n     * Creates the dom for the modal.\n     */\n\n  }, {\n    key: \"createDom\",\n    value: function createDom() {\n      document.getElementById(this.modalId).innerHTML = \"\\n     <div class=\\\"modal__overlay\\\" tabindex=\\\"-1\\\" data-micromodal-close>\\n      <div class=\\\"modal__container\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\" aria-labelledby=\\\"modal-1-title\\\">\\n        <header class=\\\"modal__header\\\">\\n          <h2 class=\\\"modal__title\\\" id=\\\"modal-1-title\\\">\\n            Welcome To Blockly Games Music!\\n          </h2>\\n          <button class=\\\"modal__close\\\" aria-label=\\\"Close modal\\\" id=\\\"welcomeCloseButton\\\" data-micromodal-close></button>\\n        </header>\\n        <main class=\\\"modal__content\\\" id=\\\"modal-1-content\\\">\\n          <p>\\n            Use the tab key to cycle through your options. If you have never\\n            played before we recommend you start with the tutorial.\\n          </p>\\n        </main>\\n        <footer class=\\\"modal__footer\\\">\\n          <button class=\\\"modal__btn modal__btn-primary\\\" id=\\\"tutorialButton\\\">Go to the tutorial</button>\\n          <button class=\\\"modal__btn modal__btn-primary\\\" id=\\\"gameButton\\\">Go to the game</button>\\n          <button class=\\\"modal__btn modal__btn-primary\\\" id=\\\"welcomeButtonReplay\\\">Replay Instructions</button>\\n        </footer>\\n      </div>\\n    </div>\";\n    }\n  }]);\n\n  return WelcomeModal;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2VsY29tZV9tb2RhbC5qcz9kODcyIl0sIm5hbWVzIjpbIldlbGNvbWVNb2RhbCIsIm1vZGFsSWQiLCJjcmVhdGVEb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNwZWFrZXIiLCJtb2RhbFRvVGV4dCIsImNhbmNlbCIsIk1pY3JvTW9kYWwiLCJzaG93IiwidHV0b3JpYWwiLCJUdXRvcmlhbCIsImluaXQiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDYTs7Ozs7Ozs7QUFFYjtBQUNBO0FBRU8sSUFBTUEsWUFBYjtBQUNFLDBCQUFjO0FBQUE7O0FBQ1o7QUFDSjtBQUNBO0FBQ0E7QUFDSSxTQUFLQyxPQUFMLEdBQWUsY0FBZjtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFYQTtBQUFBO0FBQUEsMkJBWVM7QUFBQTs7QUFDTCxXQUFLQyxTQUFMO0FBQ0FDLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixFQUF3Q0MsZ0JBQXhDLENBQXlELE9BQXpELEVBQ0ksWUFBTTtBQUNKQyx3REFBTyxDQUFDQyxXQUFSLENBQW9CSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBSSxDQUFDSCxPQUE3QixDQUFwQjtBQUNELE9BSEw7QUFJQUUsY0FBUSxDQUFDQyxjQUFULENBQXdCLG9CQUF4QixFQUE4Q0MsZ0JBQTlDLENBQ0ksTUFESixFQUNZO0FBQUEsZUFBTUMsZ0RBQU8sQ0FBQ0UsTUFBUixFQUFOO0FBQUEsT0FEWjtBQUVBQyx3REFBVSxDQUFDQyxJQUFYLENBQWdCLEtBQUtULE9BQXJCO0FBRUFFLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsRUFBK0NDLGdCQUEvQyxDQUFnRSxPQUFoRSxFQUNJLFlBQU07QUFDSkMsd0RBQU8sQ0FBQ0UsTUFBUjtBQUNBRix3REFBTyxDQUFDQyxXQUFSLENBQW9CSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBSSxDQUFDSCxPQUE3QixDQUFwQjtBQUNELE9BSkw7QUFLQUssc0RBQU8sQ0FBQ0MsV0FBUixDQUFvQkosUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQUtILE9BQTdCLENBQXBCO0FBQ0Q7QUE1Qkg7QUFBQTtBQUFBLDZDQThCMkI7QUFDdkJFLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsRUFBK0NDLGdCQUEvQyxDQUFnRSxPQUFoRSxFQUNFLFlBQU07QUFDSixZQUFNTSxRQUFRLEdBQUcsSUFBSUMsUUFBSixFQUFqQjtBQUNBRCxnQkFBUSxDQUFDRSxJQUFUO0FBQ0QsT0FKSDtBQUtEO0FBRUQ7QUFDRjtBQUNBOztBQXhDQTtBQUFBO0FBQUEsZ0NBeUNjO0FBQ1ZWLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUFLSCxPQUE3QixFQUFzQ2EsU0FBdEM7QUFzQkQ7QUFoRUg7O0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy93ZWxjb21lX21vZGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge3NwZWFrZXJ9IGZyb20gJy4vc3BlYWtlcic7XG5pbXBvcnQgTWljcm9Nb2RhbCBmcm9tICdtaWNyb21vZGFsJztcblxuZXhwb3J0IGNsYXNzIFdlbGNvbWVNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKlxuICAgICAqIFRoZSBpZCBvZiB0aGUgbW9kYWwuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZGFsSWQgPSAnd2VsY29tZU1vZGFsJztcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgd2VsY29tZSBtb2RhbC5cbiAgICovXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVEb20oKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVwbGF5QnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgc3BlYWtlci5tb2RhbFRvVGV4dChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1vZGFsSWQpKTtcbiAgICAgICAgfSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWVDbG9zZUJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdibHVyJywgKCkgPT4gc3BlYWtlci5jYW5jZWwoKSk7XG4gICAgTWljcm9Nb2RhbC5zaG93KHRoaXMubW9kYWxJZCk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZUJ1dHRvblJlcGxheScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHNwZWFrZXIuY2FuY2VsKCk7XG4gICAgICAgICAgc3BlYWtlci5tb2RhbFRvVGV4dChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1vZGFsSWQpKTtcbiAgICAgICAgfSk7XG4gICAgc3BlYWtlci5tb2RhbFRvVGV4dChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1vZGFsSWQpKTtcbiAgfVxuXG4gIHJlZ2lzdGVyVHV0b3JpYWxCdXR0b24oKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWVCdXR0b25SZXBsYXknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHR1dG9yaWFsID0gbmV3IFR1dG9yaWFsKCk7XG4gICAgICAgIHR1dG9yaWFsLmluaXQoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGRvbSBmb3IgdGhlIG1vZGFsLlxuICAgKi9cbiAgY3JlYXRlRG9tKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubW9kYWxJZCkuaW5uZXJIVE1MID0gYFxuICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX292ZXJsYXlcIiB0YWJpbmRleD1cIi0xXCIgZGF0YS1taWNyb21vZGFsLWNsb3NlPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19jb250YWluZXJcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1tb2RhbD1cInRydWVcIiBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC0xLXRpdGxlXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJtb2RhbF9faGVhZGVyXCI+XG4gICAgICAgICAgPGgyIGNsYXNzPVwibW9kYWxfX3RpdGxlXCIgaWQ9XCJtb2RhbC0xLXRpdGxlXCI+XG4gICAgICAgICAgICBXZWxjb21lIFRvIEJsb2NrbHkgR2FtZXMgTXVzaWMhXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxfX2Nsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlIG1vZGFsXCIgaWQ9XCJ3ZWxjb21lQ2xvc2VCdXR0b25cIiBkYXRhLW1pY3JvbW9kYWwtY2xvc2U+PC9idXR0b24+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8bWFpbiBjbGFzcz1cIm1vZGFsX19jb250ZW50XCIgaWQ9XCJtb2RhbC0xLWNvbnRlbnRcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFVzZSB0aGUgdGFiIGtleSB0byBjeWNsZSB0aHJvdWdoIHlvdXIgb3B0aW9ucy4gSWYgeW91IGhhdmUgbmV2ZXJcbiAgICAgICAgICAgIHBsYXllZCBiZWZvcmUgd2UgcmVjb21tZW5kIHlvdSBzdGFydCB3aXRoIHRoZSB0dXRvcmlhbC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPGZvb3RlciBjbGFzcz1cIm1vZGFsX19mb290ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxfX2J0biBtb2RhbF9fYnRuLXByaW1hcnlcIiBpZD1cInR1dG9yaWFsQnV0dG9uXCI+R28gdG8gdGhlIHR1dG9yaWFsPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19idG4gbW9kYWxfX2J0bi1wcmltYXJ5XCIgaWQ9XCJnYW1lQnV0dG9uXCI+R28gdG8gdGhlIGdhbWU8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxfX2J0biBtb2RhbF9fYnRuLXByaW1hcnlcIiBpZD1cIndlbGNvbWVCdXR0b25SZXBsYXlcIj5SZXBsYXkgSW5zdHJ1Y3Rpb25zPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/welcome_modal.js\n");

/***/ })

})