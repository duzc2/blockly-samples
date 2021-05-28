webpackHotUpdate("main",{

/***/ "./src/music_game_controller.js":
/*!**************************************!*\
  !*** ./src/music_game_controller.js ***!
  \**************************************/
/*! exports provided: MusicGameController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MusicGameController\", function() { return MusicGameController; });\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\n/* harmony import */ var _music__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music */ \"./src/music.js\");\n/* harmony import */ var _help_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help_modal */ \"./src/help_modal.js\");\n/* harmony import */ var _key_press_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./key_press_modal */ \"./src/key_press_modal.js\");\n/* harmony import */ var _welcome_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome_modal */ \"./src/welcome_modal.js\");\n/* harmony import */ var _speaker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./speaker */ \"./src/speaker.js\");\n/* harmony import */ var _tutorial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tutorial */ \"./src/tutorial.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Music game controller.\n */\n\n\n\n\n\n\n\n/**\n * Class for a controller for the music game, which handles\n * creation of the game and coordination of related modals, tutorials,\n * etc.\n */\n\nvar MusicGameController = /*#__PURE__*/function () {\n  /**\n   * The constructor for the music game controller.\n   */\n  function MusicGameController() {\n    _classCallCheck(this, MusicGameController);\n\n    micromodal__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init({\n      onClose: function onClose() {\n        return _speaker__WEBPACK_IMPORTED_MODULE_5__[\"speaker\"].cancel();\n      }\n    });\n    /**\n     * The actual game object.\n     * @type {Music}\n     */\n\n    this.game = new _music__WEBPACK_IMPORTED_MODULE_1__[\"Music\"]();\n    this.game.loadLevel(1);\n    var helpModal = new _help_modal__WEBPACK_IMPORTED_MODULE_2__[\"HelpModal\"]('modal-1', 'modalButton');\n    helpModal.init(); // Start by showing the key press modal.\n\n    new _key_press_modal__WEBPACK_IMPORTED_MODULE_3__[\"KeyPressModal\"](this.showWelcomeModal).init();\n  }\n  /**\n   * Get the current game object.\n   * @return {Music} The current game object.\n   */\n\n\n  _createClass(MusicGameController, [{\n    key: \"getGame\",\n    value: function getGame() {\n      return this.game;\n    }\n    /**\n     * Start the tutorial.\n     */\n\n  }, {\n    key: \"runTutorial\",\n    value: function runTutorial() {\n      new _tutorial__WEBPACK_IMPORTED_MODULE_6__[\"Tutorial\"](this.game.getWorkspace()).init();\n    }\n    /**\n     * Show the welcome modal.\n     */\n\n  }, {\n    key: \"showWelcomeModal\",\n    value: function showWelcomeModal() {\n      console.log('tutorial is ' + this.runTutorial);\n      new _welcome_modal__WEBPACK_IMPORTED_MODULE_4__[\"WelcomeModal\"](this.runTutorial).init();\n    }\n  }]);\n\n  return MusicGameController;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbXVzaWNfZ2FtZV9jb250cm9sbGVyLmpzPzczYTYiXSwibmFtZXMiOlsiTXVzaWNHYW1lQ29udHJvbGxlciIsIk1pY3JvTW9kYWwiLCJpbml0Iiwib25DbG9zZSIsInNwZWFrZXIiLCJjYW5jZWwiLCJnYW1lIiwiTXVzaWMiLCJsb2FkTGV2ZWwiLCJoZWxwTW9kYWwiLCJIZWxwTW9kYWwiLCJLZXlQcmVzc01vZGFsIiwic2hvd1dlbGNvbWVNb2RhbCIsIlR1dG9yaWFsIiwiZ2V0V29ya3NwYWNlIiwiY29uc29sZSIsImxvZyIsInJ1blR1dG9yaWFsIiwiV2VsY29tZU1vZGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxtQkFBYjtBQUNFO0FBQ0Y7QUFDQTtBQUNFLGlDQUFjO0FBQUE7O0FBQ1pDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0I7QUFDZEMsYUFBTyxFQUFFO0FBQUEsZUFBTUMsZ0RBQU8sQ0FBQ0MsTUFBUixFQUFOO0FBQUE7QUFESyxLQUFoQjtBQUlBO0FBQ0o7QUFDQTtBQUNBOztBQUNJLFNBQUtDLElBQUwsR0FBWSxJQUFJQyw0Q0FBSixFQUFaO0FBQ0EsU0FBS0QsSUFBTCxDQUFVRSxTQUFWLENBQW9CLENBQXBCO0FBRUEsUUFBTUMsU0FBUyxHQUFHLElBQUlDLHFEQUFKLENBQWMsU0FBZCxFQUF5QixhQUF6QixDQUFsQjtBQUNBRCxhQUFTLENBQUNQLElBQVYsR0FiWSxDQWVaOztBQUNBLFFBQUlTLDhEQUFKLENBQWtCLEtBQUtDLGdCQUF2QixFQUF5Q1YsSUFBekM7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUExQkE7QUFBQTtBQUFBLDhCQTJCWTtBQUNSLGFBQU8sS0FBS0ksSUFBWjtBQUNEO0FBRUQ7QUFDRjtBQUNBOztBQWpDQTtBQUFBO0FBQUEsa0NBa0NnQjtBQUNaLFVBQUlPLGtEQUFKLENBQWEsS0FBS1AsSUFBTCxDQUFVUSxZQUFWLEVBQWIsRUFBdUNaLElBQXZDO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7O0FBeENBO0FBQUE7QUFBQSx1Q0F5Q3FCO0FBQ2pCYSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBaUIsS0FBS0MsV0FBbEM7QUFDQSxVQUFJQywyREFBSixDQUFpQixLQUFLRCxXQUF0QixFQUFtQ2YsSUFBbkM7QUFDRDtBQTVDSDs7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3JjL211c2ljX2dhbWVfY29udHJvbGxlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IE11c2ljIGdhbWUgY29udHJvbGxlci5cbiAqL1xuXG5cbmltcG9ydCBNaWNyb01vZGFsIGZyb20gJ21pY3JvbW9kYWwnO1xuaW1wb3J0IHtNdXNpY30gZnJvbSAnLi9tdXNpYyc7XG5pbXBvcnQge0hlbHBNb2RhbH0gZnJvbSAnLi9oZWxwX21vZGFsJztcbmltcG9ydCB7S2V5UHJlc3NNb2RhbH0gZnJvbSAnLi9rZXlfcHJlc3NfbW9kYWwnO1xuaW1wb3J0IHtXZWxjb21lTW9kYWx9IGZyb20gJy4vd2VsY29tZV9tb2RhbCc7XG5pbXBvcnQge3NwZWFrZXJ9IGZyb20gJy4vc3BlYWtlcic7XG5pbXBvcnQge1R1dG9yaWFsfSBmcm9tICcuL3R1dG9yaWFsJztcblxuLyoqXG4gKiBDbGFzcyBmb3IgYSBjb250cm9sbGVyIGZvciB0aGUgbXVzaWMgZ2FtZSwgd2hpY2ggaGFuZGxlc1xuICogY3JlYXRpb24gb2YgdGhlIGdhbWUgYW5kIGNvb3JkaW5hdGlvbiBvZiByZWxhdGVkIG1vZGFscywgdHV0b3JpYWxzLFxuICogZXRjLlxuICovXG5leHBvcnQgY2xhc3MgTXVzaWNHYW1lQ29udHJvbGxlciB7XG4gIC8qKlxuICAgKiBUaGUgY29uc3RydWN0b3IgZm9yIHRoZSBtdXNpYyBnYW1lIGNvbnRyb2xsZXIuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBNaWNyb01vZGFsLmluaXQoe1xuICAgICAgb25DbG9zZTogKCkgPT4gc3BlYWtlci5jYW5jZWwoKSxcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhY3R1YWwgZ2FtZSBvYmplY3QuXG4gICAgICogQHR5cGUge011c2ljfVxuICAgICAqL1xuICAgIHRoaXMuZ2FtZSA9IG5ldyBNdXNpYygpO1xuICAgIHRoaXMuZ2FtZS5sb2FkTGV2ZWwoMSk7XG5cbiAgICBjb25zdCBoZWxwTW9kYWwgPSBuZXcgSGVscE1vZGFsKCdtb2RhbC0xJywgJ21vZGFsQnV0dG9uJyk7XG4gICAgaGVscE1vZGFsLmluaXQoKTtcblxuICAgIC8vIFN0YXJ0IGJ5IHNob3dpbmcgdGhlIGtleSBwcmVzcyBtb2RhbC5cbiAgICBuZXcgS2V5UHJlc3NNb2RhbCh0aGlzLnNob3dXZWxjb21lTW9kYWwpLmluaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgZ2FtZSBvYmplY3QuXG4gICAqIEByZXR1cm4ge011c2ljfSBUaGUgY3VycmVudCBnYW1lIG9iamVjdC5cbiAgICovXG4gIGdldEdhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgdHV0b3JpYWwuXG4gICAqL1xuICBydW5UdXRvcmlhbCgpIHtcbiAgICBuZXcgVHV0b3JpYWwodGhpcy5nYW1lLmdldFdvcmtzcGFjZSgpKS5pbml0KCk7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyB0aGUgd2VsY29tZSBtb2RhbC5cbiAgICovXG4gIHNob3dXZWxjb21lTW9kYWwoKSB7XG4gICAgY29uc29sZS5sb2coJ3R1dG9yaWFsIGlzICcgKyB0aGlzLnJ1blR1dG9yaWFsKTtcbiAgICBuZXcgV2VsY29tZU1vZGFsKHRoaXMucnVuVHV0b3JpYWwpLmluaXQoKTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/music_game_controller.js\n");

/***/ })

})