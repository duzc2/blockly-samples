webpackHotUpdate("main",{

/***/ "./test/index.js":
/*!***********************!*\
  !*** ./test/index.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockly/core */ \"./node_modules/blockly/dist/core-browser.js\");\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/speaker */ \"./src/speaker.js\");\n/* harmony import */ var _src_note_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/note_player */ \"./src/note_player.js\");\n/* harmony import */ var _src_music_game_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/music_game_controller */ \"./src/music_game_controller.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Plugin test.\n */\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var controller = new _src_music_game_controller__WEBPACK_IMPORTED_MODULE_3__[\"MusicGameController\"]();\n  document.getElementById('setLevel').addEventListener('input', function (event) {\n    controller.getGame().loadLevel(this.value);\n  });\n  document.getElementById('logGeneratedCode').addEventListener('click', function (event) {\n    controller.getGame().logGeneratedCode();\n  }); // Initial state has arrow keys turned on.\n\n  registerArrowKeys(true);\n  addTestButtons();\n});\n/**\n * Add buttons for testing basic functionality (speaker, etc).\n */\n\nfunction addTestButtons() {\n  document.getElementById('playNote').addEventListener('click', function () {\n    _src_note_player__WEBPACK_IMPORTED_MODULE_2__[\"notePlayer\"].playNote('C4', '8n');\n  });\n  document.getElementById('playText').addEventListener('click', function () {\n    var textContent = document.getElementById('textInput').value;\n    _src_speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].speak(textContent);\n  });\n  document.getElementById('playNoteAndText').addEventListener('click', function () {\n    _src_speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].speak('C4', false, function () {\n      _src_note_player__WEBPACK_IMPORTED_MODULE_2__[\"notePlayer\"].playNote('C4', '8n');\n    });\n  });\n  document.addEventListener('visibilitychange', function (event) {\n    if (document.visibilityState === 'visible') {\n      console.log('tab is activate');\n    } else {\n      _src_speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].cancel();\n    }\n  });\n  document.getElementById('enableArrowKeys').addEventListener('click', function (event) {\n    registerArrowKeys(event.currentTarget.checked);\n  });\n  document.getElementById('modalButton').addEventListener('click', function () {\n    _src_speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].modalToText(document.getElementById('modal-1'));\n  });\n  document.getElementById('modalButton').addEventListener('focus', function (e) {\n    _src_speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].speak('Hit enter to open the help menu');\n  });\n  document.getElementById('replayButton').addEventListener('click', function () {\n    _src_speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].modalToText(document.getElementById('modal-1'));\n  });\n}\n/**\n * Register the arrow keys to do keyboard navigation actions.\n * @param {boolean} register True if the arrow keys should be used for nav.\n */\n\n\nfunction registerArrowKeys(register) {\n  var keyCodeMappings = [[blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.utils.KeyCodes.UP, blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.navigation.actionNames.PREVIOUS], [blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.utils.KeyCodes.DOWN, blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.navigation.actionNames.NEXT], [blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.utils.KeyCodes.RIGHT, blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.navigation.actionNames.IN], [blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.utils.KeyCodes.LEFT, blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.navigation.actionNames.OUT]];\n  keyCodeMappings.forEach(function (mapping) {\n    if (register) {\n      var _Blockly$ShortcutRegi;\n\n      (_Blockly$ShortcutRegi = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ShortcutRegistry.registry).addKeyMapping.apply(_Blockly$ShortcutRegi, _toConsumableArray(mapping));\n    } else {\n      var _Blockly$ShortcutRegi2;\n\n      (_Blockly$ShortcutRegi2 = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ShortcutRegistry.registry).removeKeyMapping.apply(_Blockly$ShortcutRegi2, _toConsumableArray(mapping));\n    }\n  });\n}\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L2luZGV4LmpzPzA0NDEiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29udHJvbGxlciIsIk11c2ljR2FtZUNvbnRyb2xsZXIiLCJnZXRFbGVtZW50QnlJZCIsImV2ZW50IiwiZ2V0R2FtZSIsImxvYWRMZXZlbCIsInZhbHVlIiwibG9nR2VuZXJhdGVkQ29kZSIsInJlZ2lzdGVyQXJyb3dLZXlzIiwiYWRkVGVzdEJ1dHRvbnMiLCJub3RlUGxheWVyIiwicGxheU5vdGUiLCJ0ZXh0Q29udGVudCIsInNwZWFrZXIiLCJzcGVhayIsInZpc2liaWxpdHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjYW5jZWwiLCJjdXJyZW50VGFyZ2V0IiwiY2hlY2tlZCIsIm1vZGFsVG9UZXh0IiwiZSIsInJlZ2lzdGVyIiwia2V5Q29kZU1hcHBpbmdzIiwiQmxvY2tseSIsInV0aWxzIiwiS2V5Q29kZXMiLCJVUCIsIm5hdmlnYXRpb24iLCJhY3Rpb25OYW1lcyIsIlBSRVZJT1VTIiwiRE9XTiIsIk5FWFQiLCJSSUdIVCIsIklOIiwiTEVGVCIsIk9VVCIsImZvckVhY2giLCJtYXBwaW5nIiwiU2hvcnRjdXRSZWdpc3RyeSIsInJlZ2lzdHJ5IiwiYWRkS2V5TWFwcGluZyIsInJlbW92ZUtleU1hcHBpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBVztBQUN2RCxNQUFNQyxVQUFVLEdBQUcsSUFBSUMsOEVBQUosRUFBbkI7QUFFQUgsVUFBUSxDQUFDSSxjQUFULENBQXdCLFVBQXhCLEVBQW9DSCxnQkFBcEMsQ0FDSSxPQURKLEVBQ2EsVUFBU0ksS0FBVCxFQUFnQjtBQUN2QkgsY0FBVSxDQUFDSSxPQUFYLEdBQXFC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V0FBbkIsQ0FBK0JHLElBQTdELENBRnNCLEVBR3RCLENBQUNSLG1EQUFPLENBQUNDLEtBQVIsQ0FBY0MsUUFBZCxDQUF1Qk8sS0FBeEIsRUFBK0JULG1EQUFPLENBQUNJLFVBQVIsQ0FBbUJDLFdBQW5CLENBQStCSyxFQUE5RCxDQUhzQixFQUl0QixDQUFDVixtREFBTyxDQUFDQyxLQUFSLENBQWNDLFFBQWQsQ0FBdUJTLElBQXhCLEVBQThCWCxtREFBTyxDQUFDSSxVQUFSLENBQW1CQyxXQUFuQixDQUErQk8sR0FBN0QsQ0FKc0IsQ0FBeEI7QUFLQWIsaUJBQWUsQ0FBQ2MsT0FBaEIsQ0FBd0IsVUFBQ0MsT0FBRCxFQUFhO0FBQ25DLFFBQUloQixRQUFKLEVBQWM7QUFBQTs7QUFDWiwrQkFBQUUsbURBQU8sQ0FBQ2UsZ0JBQVIsQ0FBeUJDLFFBQXpCLEVBQWtDQyxhQUFsQyxpREFBbURILE9BQW5EO0FBQ0QsS0FGRCxNQUVPO0FBQUE7O0FBQ0wsZ0NBQUFkLG1EQUFPLENBQUNlLGdCQUFSLENBQXlCQyxRQUF6QixFQUFrQ0UsZ0JBQWxDLGtEQUFzREosT0FBdEQ7QUFDRDtBQUNGLEdBTkQ7QUFPRDs7QUFBQSIsImZpbGUiOiIuL3Rlc3QvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBQbHVnaW4gdGVzdC5cbiAqL1xuXG5pbXBvcnQgQmxvY2tseSBmcm9tICdibG9ja2x5L2NvcmUnO1xuaW1wb3J0IHtzcGVha2VyfSBmcm9tICcuLi9zcmMvc3BlYWtlcic7XG5pbXBvcnQge25vdGVQbGF5ZXJ9IGZyb20gJy4uL3NyYy9ub3RlX3BsYXllcic7XG5pbXBvcnQge011c2ljR2FtZUNvbnRyb2xsZXJ9IGZyb20gJy4uL3NyYy9tdXNpY19nYW1lX2NvbnRyb2xsZXInO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgTXVzaWNHYW1lQ29udHJvbGxlcigpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXRMZXZlbCcpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnaW5wdXQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBjb250cm9sbGVyLmdldEdhbWUoKS5sb2FkTGV2ZWwodGhpcy52YWx1ZSk7XG4gICAgICB9KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ0dlbmVyYXRlZENvZGUnKS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgY29udHJvbGxlci5nZXRHYW1lKCkubG9nR2VuZXJhdGVkQ29kZSgpO1xuICAgICAgfSk7XG5cbiAgLy8gSW5pdGlhbCBzdGF0ZSBoYXMgYXJyb3cga2V5cyB0dXJuZWQgb24uXG4gIHJlZ2lzdGVyQXJyb3dLZXlzKHRydWUpO1xuICBhZGRUZXN0QnV0dG9ucygpO1xufSk7XG5cbi8qKlxuICogQWRkIGJ1dHRvbnMgZm9yIHRlc3RpbmcgYmFzaWMgZnVuY3Rpb25hbGl0eSAoc3BlYWtlciwgZXRjKS5cbiAqL1xuZnVuY3Rpb24gYWRkVGVzdEJ1dHRvbnMoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5Tm90ZScpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbm90ZVBsYXllci5wbGF5Tm90ZSgnQzQnLCAnOG4nKTtcbiAgICAgIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheVRleHQnKS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHRleHRDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRJbnB1dCcpLnZhbHVlO1xuICAgICAgICBzcGVha2VyLnNwZWFrKHRleHRDb250ZW50KTtcbiAgICAgIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheU5vdGVBbmRUZXh0JykuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzcGVha2VyLnNwZWFrKCdDNCcsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbm90ZVBsYXllci5wbGF5Tm90ZSgnQzQnLCAnOG4nKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gJ3Zpc2libGUnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0YWIgaXMgYWN0aXZhdGUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNwZWFrZXIuY2FuY2VsKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuYWJsZUFycm93S2V5cycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcbiAgICAgIChldmVudCkgPT4ge1xuICAgICAgICByZWdpc3RlckFycm93S2V5cyhldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpO1xuICAgICAgfSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbEJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBzcGVha2VyLm1vZGFsVG9UZXh0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC0xJykpO1xuICAgICAgfSk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLFxuICAgICAgZnVuY3Rpb24oZSkge1xuICAgICAgICBzcGVha2VyLnNwZWFrKCdIaXQgZW50ZXIgdG8gb3BlbiB0aGUgaGVscCBtZW51Jyk7XG4gICAgICB9KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlcGxheUJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBzcGVha2VyLm1vZGFsVG9UZXh0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC0xJykpO1xuICAgICAgfSk7XG59XG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBhcnJvdyBrZXlzIHRvIGRvIGtleWJvYXJkIG5hdmlnYXRpb24gYWN0aW9ucy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVnaXN0ZXIgVHJ1ZSBpZiB0aGUgYXJyb3cga2V5cyBzaG91bGQgYmUgdXNlZCBmb3IgbmF2LlxuICovXG5mdW5jdGlvbiByZWdpc3RlckFycm93S2V5cyAocmVnaXN0ZXIpIHtcbiAgY29uc3Qga2V5Q29kZU1hcHBpbmdzID0gW1xuICAgIFtCbG9ja2x5LnV0aWxzLktleUNvZGVzLlVQLCBCbG9ja2x5Lm5hdmlnYXRpb24uYWN0aW9uTmFtZXMuUFJFVklPVVNdLFxuICAgIFtCbG9ja2x5LnV0aWxzLktleUNvZGVzLkRPV04sIEJsb2NrbHkubmF2aWdhdGlvbi5hY3Rpb25OYW1lcy5ORVhUXSxcbiAgICBbQmxvY2tseS51dGlscy5LZXlDb2Rlcy5SSUdIVCwgQmxvY2tseS5uYXZpZ2F0aW9uLmFjdGlvbk5hbWVzLklOXSxcbiAgICBbQmxvY2tseS51dGlscy5LZXlDb2Rlcy5MRUZULCBCbG9ja2x5Lm5hdmlnYXRpb24uYWN0aW9uTmFtZXMuT1VUXV07XG4gIGtleUNvZGVNYXBwaW5ncy5mb3JFYWNoKChtYXBwaW5nKSA9PiB7XG4gICAgaWYgKHJlZ2lzdGVyKSB7XG4gICAgICBCbG9ja2x5LlNob3J0Y3V0UmVnaXN0cnkucmVnaXN0cnkuYWRkS2V5TWFwcGluZyguLi5tYXBwaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgQmxvY2tseS5TaG9ydGN1dFJlZ2lzdHJ5LnJlZ2lzdHJ5LnJlbW92ZUtleU1hcHBpbmcoLi4ubWFwcGluZyk7XG4gICAgfVxuICB9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./test/index.js\n");

/***/ })

})