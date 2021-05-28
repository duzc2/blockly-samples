webpackHotUpdate("main",{

/***/ "./src/music.js":
/*!**********************!*\
  !*** ./src/music.js ***!
  \**********************/
/*! exports provided: Music */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Music\", function() { return Music; });\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockly/core */ \"./node_modules/blockly/dist/core-browser.js\");\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speaker */ \"./src/speaker.js\");\n/* harmony import */ var _music_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music_blocks */ \"./src/music_blocks.js\");\n/* harmony import */ var _line_cursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line_cursor */ \"./src/line_cursor.js\");\n/* harmony import */ var _music_block_generators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./music_block_generators */ \"./src/music_block_generators.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Game logic for music game.\n */\n\n\n\n\n\n/**\n * Game logic for music game.\n */\n\nvar Music = /*#__PURE__*/function () {\n  /**\n   * Class for a music game.\n   * @constructor\n   */\n  function Music() {\n    _classCallCheck(this, Music);\n\n    /**\n     * The Blockly workspace associated with this game.\n     * @type {!Blockly.WorkspaceSvg}\n     */\n    this.workspace = this.createWorkspace_();\n    /**\n     * The HTML element containing the goal text for the game.\n     * @type {HTMLElement}\n     */\n\n    this.goalTextElement_ = document.getElementById('goalText');\n    /**\n     * The currently loaded level. 0 if no level loaded.\n     */\n\n    this.level = 0;\n  }\n  /**\n   * Initializes the Blockly workspace.\n   * @return {!Blockly.WorkspaceSvg} The Blockly workspace.\n   * @private\n   */\n\n\n  _createClass(Music, [{\n    key: \"createWorkspace_\",\n    value: function createWorkspace_() {\n      // Initialize Blockly workspace.\n      var blocklyDiv = document.getElementById('blocklyDiv');\n      var workspace = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.inject(blocklyDiv, {\n        toolbox: _music_blocks__WEBPACK_IMPORTED_MODULE_2__[\"toolboxPitch\"]\n      });\n      blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.NAVIGATE_ALL_FIELDS = true;\n      workspace.getMarkerManager().setCursor(new _line_cursor__WEBPACK_IMPORTED_MODULE_3__[\"LineCursor\"]());\n      workspace.addChangeListener(function (event) {\n        return _speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].nodeToSpeech(event);\n      });\n      workspace.getFlyout().getWorkspace().addChangeListener(function (event) {\n        return _speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].nodeToSpeech(event);\n      });\n      return workspace;\n    }\n    /**\n     * Sets the goal text.\n     * @param {string} text The text to set the goal to.\n     */\n\n  }, {\n    key: \"setGoalText\",\n    value: function setGoalText(text) {\n      this.goalTextElement_.innerHTML = text;\n    }\n    /**\n     * Update the goal based on the current level.\n     * @private\n     */\n\n  }, {\n    key: \"updateGoalText_\",\n    value: function updateGoalText_() {\n      var goalText = '';\n\n      switch (this.level) {\n        case 1:\n          goalText = 'Play c4 d4 e4 c4';\n          break;\n      }\n\n      this.setGoalText(goalText);\n    }\n    /**\n     * Update the toolbox based on the current level.\n     * @private\n     */\n\n  }, {\n    key: \"updateToolbox_\",\n    value: function updateToolbox_() {\n      var toolboxJson = _music_blocks__WEBPACK_IMPORTED_MODULE_2__[\"toolboxPitch\"]; // Use toolboxPitch as default.\n\n      if (this.level < 6) {\n        toolboxJson = {\n          'kind': 'flyoutToolbox',\n          'contents': [{\n            'kind': 'block',\n            'type': 'pitch_test'\n          }, {\n            'kind': 'block',\n            'type': 'music_pitch'\n          }, {\n            'kind': 'block',\n            'type': 'music_note'\n          }, {\n            'kind': 'block',\n            'type': 'music_rest_whole'\n          }, {\n            'kind': 'block',\n            'type': 'music_rest'\n          }, {\n            'kind': 'block',\n            'type': 'music_instrument'\n          }]\n        };\n      }\n\n      this.workspace.updateToolbox(toolboxJson);\n    }\n    /**\n     * Update the workspace blocks based on the current level.\n     * @private\n     */\n\n  }, {\n    key: \"loadLevelBlocks_\",\n    value: function loadLevelBlocks_() {\n      this.workspace.clear();\n      var levelXml = '';\n\n      if (this.level < 6) {\n        levelXml = \"<xml>\\n            <block type=\\\"music_start\\\" deletable=\\\"\".concat(this.level > 6, \"\\\" x=\\\"180\\\"\\n            y=\\\"50\\\"></block>\\n          </xml>\");\n      }\n\n      if (levelXml) {\n        blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.Xml.domToWorkspace(blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.Xml.textToDom(levelXml), this.workspace);\n      }\n    }\n    /**\n     * Load the specified level.\n     * @param {number|string} level The level to load.\n     */\n\n  }, {\n    key: \"loadLevel\",\n    value: function loadLevel(level) {\n      this.level = Number(level);\n      this.updateGoalText_();\n      this.updateToolbox_();\n      this.loadLevelBlocks_();\n    }\n    /**\n     * Evaluates whether the answer for the currently loaded level is correct.\n     * @return {boolean} Whether the answer is correct.\n     */\n\n  }, {\n    key: \"checkAnswer\",\n    value: function checkAnswer() {\n      // TODO\n      return true;\n    }\n    /**\n     * Generates code and logs it to the console.\n     */\n\n  }, {\n    key: \"logGeneratedCode\",\n    value: function logGeneratedCode() {}\n  }]);\n\n  return Music;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbXVzaWMuanM/MmE0ZiJdLCJuYW1lcyI6WyJNdXNpYyIsIndvcmtzcGFjZSIsImNyZWF0ZVdvcmtzcGFjZV8iLCJnb2FsVGV4dEVsZW1lbnRfIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxldmVsIiwiYmxvY2tseURpdiIsIkJsb2NrbHkiLCJpbmplY3QiLCJ0b29sYm94IiwidG9vbGJveFBpdGNoIiwiQVNUTm9kZSIsIk5BVklHQVRFX0FMTF9GSUVMRFMiLCJnZXRNYXJrZXJNYW5hZ2VyIiwic2V0Q3Vyc29yIiwiTGluZUN1cnNvciIsImFkZENoYW5nZUxpc3RlbmVyIiwiZXZlbnQiLCJzcGVha2VyIiwibm9kZVRvU3BlZWNoIiwiZ2V0Rmx5b3V0IiwiZ2V0V29ya3NwYWNlIiwidGV4dCIsImlubmVySFRNTCIsImdvYWxUZXh0Iiwic2V0R29hbFRleHQiLCJ0b29sYm94SnNvbiIsInVwZGF0ZVRvb2xib3giLCJjbGVhciIsImxldmVsWG1sIiwiWG1sIiwiZG9tVG9Xb3Jrc3BhY2UiLCJ0ZXh0VG9Eb20iLCJOdW1iZXIiLCJ1cGRhdGVHb2FsVGV4dF8iLCJ1cGRhdGVUb29sYm94XyIsImxvYWRMZXZlbEJsb2Nrc18iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUNPLElBQU1BLEtBQWI7QUFDRTtBQUNGO0FBQ0E7QUFDQTtBQUNFLG1CQUFjO0FBQUE7O0FBQ1o7QUFDSjtBQUNBO0FBQ0E7QUFDSSxTQUFLQyxTQUFMLEdBQWlCLEtBQUtDLGdCQUFMLEVBQWpCO0FBRUE7QUFDSjtBQUNBO0FBQ0E7O0FBQ0ksU0FBS0MsZ0JBQUwsR0FBd0JDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUF4QjtBQUVBO0FBQ0o7QUFDQTs7QUFDSSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBNUJBO0FBQUE7QUFBQSx1Q0E2QnFCO0FBQ2pCO0FBQ0EsVUFBTUMsVUFBVSxHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBbkI7QUFDQSxVQUFNSixTQUFTLEdBQUdPLG1EQUFPLENBQUNDLE1BQVIsQ0FBZUYsVUFBZixFQUEyQjtBQUMzQ0csZUFBTyxFQUFFQywwREFBWUE7QUFEc0IsT0FBM0IsQ0FBbEI7QUFHQUgseURBQU8sQ0FBQ0ksT0FBUixDQUFnQkMsbUJBQWhCLEdBQXNDLElBQXRDO0FBQ0FaLGVBQVMsQ0FBQ2EsZ0JBQVYsR0FBNkJDLFNBQTdCLENBQXVDLElBQUlDLHVEQUFKLEVBQXZDO0FBQ0FmLGVBQVMsQ0FBQ2dCLGlCQUFWLENBQTRCLFVBQUNDLEtBQUQ7QUFBQSxlQUFXQyxnREFBTyxDQUFDQyxZQUFSLENBQXFCRixLQUFyQixDQUFYO0FBQUEsT0FBNUI7QUFDQWpCLGVBQVMsQ0FBQ29CLFNBQVYsR0FBc0JDLFlBQXRCLEdBQXFDTCxpQkFBckMsQ0FBdUQsVUFBQ0MsS0FBRDtBQUFBLGVBQVdDLGdEQUFPLENBQUNDLFlBQVIsQ0FBcUJGLEtBQXJCLENBQVg7QUFBQSxPQUF2RDtBQUNBLGFBQU9qQixTQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7QUE3Q0E7QUFBQTtBQUFBLGdDQThDY3NCLElBOUNkLEVBOENvQjtBQUNoQixXQUFLcEIsZ0JBQUwsQ0FBc0JxQixTQUF0QixHQUFrQ0QsSUFBbEM7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOztBQXJEQTtBQUFBO0FBQUEsc0NBc0RvQjtBQUNoQixVQUFJRSxRQUFRLEdBQUcsRUFBZjs7QUFDQSxjQUFRLEtBQUtuQixLQUFiO0FBQ0UsYUFBSyxDQUFMO0FBQ0VtQixrQkFBUSxHQUFHLGtCQUFYO0FBQ0E7QUFISjs7QUFLQSxXQUFLQyxXQUFMLENBQWlCRCxRQUFqQjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7O0FBbkVBO0FBQUE7QUFBQSxxQ0FvRW1CO0FBQ2YsVUFBSUUsV0FBVyxHQUFHaEIsMERBQWxCLENBRGUsQ0FDaUI7O0FBQ2hDLFVBQUksS0FBS0wsS0FBTCxHQUFhLENBQWpCLEVBQW9CO0FBQ2xCcUIsbUJBQVcsR0FBRztBQUNaLGtCQUFRLGVBREk7QUFFWixzQkFBWSxDQUNWO0FBQ0Usb0JBQVEsT0FEVjtBQUVFLG9CQUFRO0FBRlYsV0FEVSxFQU1WO0FBQ0Usb0JBQVEsT0FEVjtBQUVFLG9CQUFRO0FBRlYsV0FOVSxFQVVWO0FBQ0Usb0JBQVEsT0FEVjtBQUVFLG9CQUFRO0FBRlYsV0FWVSxFQWNWO0FBQ0Usb0JBQVEsT0FEVjtBQUVFLG9CQUFRO0FBRlYsV0FkVSxFQWtCVjtBQUNFLG9CQUFRLE9BRFY7QUFFRSxvQkFBUTtBQUZWLFdBbEJVLEVBc0JWO0FBQ0Usb0JBQVEsT0FEVjtBQUVFLG9CQUFRO0FBRlYsV0F0QlU7QUFGQSxTQUFkO0FBOEJEOztBQUNELFdBQUsxQixTQUFMLENBQWUyQixhQUFmLENBQTZCRCxXQUE3QjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7O0FBNUdBO0FBQUE7QUFBQSx1Q0E2R3FCO0FBQ2pCLFdBQUsxQixTQUFMLENBQWU0QixLQUFmO0FBQ0EsVUFBSUMsUUFBUSxHQUFHLEVBQWY7O0FBQ0EsVUFBSSxLQUFLeEIsS0FBTCxHQUFhLENBQWpCLEVBQW9CO0FBQ2xCd0IsZ0JBQVEsd0VBRXFDLEtBQUt4QixLQUFMLEdBQWEsQ0FGbEQsa0VBQVI7QUFLRDs7QUFDRCxVQUFJd0IsUUFBSixFQUFjO0FBQ1p0QiwyREFBTyxDQUFDdUIsR0FBUixDQUFZQyxjQUFaLENBQ0l4QixtREFBTyxDQUFDdUIsR0FBUixDQUFZRSxTQUFaLENBQXNCSCxRQUF0QixDQURKLEVBQ3FDLEtBQUs3QixTQUQxQztBQUVEO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7QUFoSUE7QUFBQTtBQUFBLDhCQWlJWUssS0FqSVosRUFpSW1CO0FBQ2YsV0FBS0EsS0FBTCxHQUFhNEIsTUFBTSxDQUFDNUIsS0FBRCxDQUFuQjtBQUNBLFdBQUs2QixlQUFMO0FBQ0EsV0FBS0MsY0FBTDtBQUNBLFdBQUtDLGdCQUFMO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7QUEzSUE7QUFBQTtBQUFBLGtDQTRJZ0I7QUFDWjtBQUNBLGFBQU8sSUFBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBOztBQW5KQTtBQUFBO0FBQUEsdUNBb0pxQixDQUVsQjtBQXRKSDs7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3JjL211c2ljLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgR2FtZSBsb2dpYyBmb3IgbXVzaWMgZ2FtZS5cbiAqL1xuXG5pbXBvcnQgQmxvY2tseSBmcm9tICdibG9ja2x5L2NvcmUnO1xuaW1wb3J0IHtzcGVha2VyfSBmcm9tICcuL3NwZWFrZXInO1xuaW1wb3J0IHt0b29sYm94UGl0Y2h9IGZyb20gJy4vbXVzaWNfYmxvY2tzJztcbmltcG9ydCB7TGluZUN1cnNvcn0gZnJvbSAnLi9saW5lX2N1cnNvcic7XG5pbXBvcnQgJy4vbXVzaWNfYmxvY2tfZ2VuZXJhdG9ycyc7XG5cblxuLyoqXG4gKiBHYW1lIGxvZ2ljIGZvciBtdXNpYyBnYW1lLlxuICovXG5leHBvcnQgY2xhc3MgTXVzaWMge1xuICAvKipcbiAgICogQ2xhc3MgZm9yIGEgbXVzaWMgZ2FtZS5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgQmxvY2tseSB3b3Jrc3BhY2UgYXNzb2NpYXRlZCB3aXRoIHRoaXMgZ2FtZS5cbiAgICAgKiBAdHlwZSB7IUJsb2NrbHkuV29ya3NwYWNlU3ZnfVxuICAgICAqL1xuICAgIHRoaXMud29ya3NwYWNlID0gdGhpcy5jcmVhdGVXb3Jrc3BhY2VfKCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgSFRNTCBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGdvYWwgdGV4dCBmb3IgdGhlIGdhbWUuXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHRoaXMuZ29hbFRleHRFbGVtZW50XyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb2FsVGV4dCcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnRseSBsb2FkZWQgbGV2ZWwuIDAgaWYgbm8gbGV2ZWwgbG9hZGVkLlxuICAgICAqL1xuICAgIHRoaXMubGV2ZWwgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBCbG9ja2x5IHdvcmtzcGFjZS5cbiAgICogQHJldHVybiB7IUJsb2NrbHkuV29ya3NwYWNlU3ZnfSBUaGUgQmxvY2tseSB3b3Jrc3BhY2UuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjcmVhdGVXb3Jrc3BhY2VfKCkge1xuICAgIC8vIEluaXRpYWxpemUgQmxvY2tseSB3b3Jrc3BhY2UuXG4gICAgY29uc3QgYmxvY2tseURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibG9ja2x5RGl2Jyk7XG4gICAgY29uc3Qgd29ya3NwYWNlID0gQmxvY2tseS5pbmplY3QoYmxvY2tseURpdiwge1xuICAgICAgdG9vbGJveDogdG9vbGJveFBpdGNoLFxuICAgIH0pO1xuICAgIEJsb2NrbHkuQVNUTm9kZS5OQVZJR0FURV9BTExfRklFTERTID0gdHJ1ZTtcbiAgICB3b3Jrc3BhY2UuZ2V0TWFya2VyTWFuYWdlcigpLnNldEN1cnNvcihuZXcgTGluZUN1cnNvcigpKTtcbiAgICB3b3Jrc3BhY2UuYWRkQ2hhbmdlTGlzdGVuZXIoKGV2ZW50KSA9PiBzcGVha2VyLm5vZGVUb1NwZWVjaChldmVudCkpO1xuICAgIHdvcmtzcGFjZS5nZXRGbHlvdXQoKS5nZXRXb3Jrc3BhY2UoKS5hZGRDaGFuZ2VMaXN0ZW5lcigoZXZlbnQpID0+IHNwZWFrZXIubm9kZVRvU3BlZWNoKGV2ZW50KSk7XG4gICAgcmV0dXJuIHdvcmtzcGFjZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBnb2FsIHRleHQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRoZSB0ZXh0IHRvIHNldCB0aGUgZ29hbCB0by5cbiAgICovXG4gIHNldEdvYWxUZXh0KHRleHQpIHtcbiAgICB0aGlzLmdvYWxUZXh0RWxlbWVudF8uaW5uZXJIVE1MID0gdGV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGdvYWwgYmFzZWQgb24gdGhlIGN1cnJlbnQgbGV2ZWwuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB1cGRhdGVHb2FsVGV4dF8oKSB7XG4gICAgbGV0IGdvYWxUZXh0ID0gJyc7XG4gICAgc3dpdGNoICh0aGlzLmxldmVsKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGdvYWxUZXh0ID0gJ1BsYXkgYzQgZDQgZTQgYzQnO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5zZXRHb2FsVGV4dChnb2FsVGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSB0b29sYm94IGJhc2VkIG9uIHRoZSBjdXJyZW50IGxldmVsLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdXBkYXRlVG9vbGJveF8oKSB7XG4gICAgbGV0IHRvb2xib3hKc29uID0gdG9vbGJveFBpdGNoOyAvLyBVc2UgdG9vbGJveFBpdGNoIGFzIGRlZmF1bHQuXG4gICAgaWYgKHRoaXMubGV2ZWwgPCA2KSB7XG4gICAgICB0b29sYm94SnNvbiA9IHtcbiAgICAgICAgJ2tpbmQnOiAnZmx5b3V0VG9vbGJveCcsXG4gICAgICAgICdjb250ZW50cyc6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAna2luZCc6ICdibG9jaycsXG4gICAgICAgICAgICAndHlwZSc6ICdwaXRjaF90ZXN0JyxcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ2tpbmQnOiAnYmxvY2snLFxuICAgICAgICAgICAgJ3R5cGUnOiAnbXVzaWNfcGl0Y2gnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ2tpbmQnOiAnYmxvY2snLFxuICAgICAgICAgICAgJ3R5cGUnOiAnbXVzaWNfbm90ZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAna2luZCc6ICdibG9jaycsXG4gICAgICAgICAgICAndHlwZSc6ICdtdXNpY19yZXN0X3dob2xlJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICdraW5kJzogJ2Jsb2NrJyxcbiAgICAgICAgICAgICd0eXBlJzogJ211c2ljX3Jlc3QnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ2tpbmQnOiAnYmxvY2snLFxuICAgICAgICAgICAgJ3R5cGUnOiAnbXVzaWNfaW5zdHJ1bWVudCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMud29ya3NwYWNlLnVwZGF0ZVRvb2xib3godG9vbGJveEpzb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgd29ya3NwYWNlIGJsb2NrcyBiYXNlZCBvbiB0aGUgY3VycmVudCBsZXZlbC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGxvYWRMZXZlbEJsb2Nrc18oKSB7XG4gICAgdGhpcy53b3Jrc3BhY2UuY2xlYXIoKTtcbiAgICBsZXQgbGV2ZWxYbWwgPSAnJztcbiAgICBpZiAodGhpcy5sZXZlbCA8IDYpIHtcbiAgICAgIGxldmVsWG1sID1cbiAgICAgICAgICBgPHhtbD5cbiAgICAgICAgICAgIDxibG9jayB0eXBlPVwibXVzaWNfc3RhcnRcIiBkZWxldGFibGU9XCIke3RoaXMubGV2ZWwgPiA2fVwiIHg9XCIxODBcIlxuICAgICAgICAgICAgeT1cIjUwXCI+PC9ibG9jaz5cbiAgICAgICAgICA8L3htbD5gO1xuICAgIH1cbiAgICBpZiAobGV2ZWxYbWwpIHtcbiAgICAgIEJsb2NrbHkuWG1sLmRvbVRvV29ya3NwYWNlKFxuICAgICAgICAgIEJsb2NrbHkuWG1sLnRleHRUb0RvbShsZXZlbFhtbCksIHRoaXMud29ya3NwYWNlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9hZCB0aGUgc3BlY2lmaWVkIGxldmVsLlxuICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IGxldmVsIFRoZSBsZXZlbCB0byBsb2FkLlxuICAgKi9cbiAgbG9hZExldmVsKGxldmVsKSB7XG4gICAgdGhpcy5sZXZlbCA9IE51bWJlcihsZXZlbCk7XG4gICAgdGhpcy51cGRhdGVHb2FsVGV4dF8oKTtcbiAgICB0aGlzLnVwZGF0ZVRvb2xib3hfKCk7XG4gICAgdGhpcy5sb2FkTGV2ZWxCbG9ja3NfKCk7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGVzIHdoZXRoZXIgdGhlIGFuc3dlciBmb3IgdGhlIGN1cnJlbnRseSBsb2FkZWQgbGV2ZWwgaXMgY29ycmVjdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciB0aGUgYW5zd2VyIGlzIGNvcnJlY3QuXG4gICAqL1xuICBjaGVja0Fuc3dlcigpIHtcbiAgICAvLyBUT0RPXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIGNvZGUgYW5kIGxvZ3MgaXQgdG8gdGhlIGNvbnNvbGUuXG4gICAqL1xuICBsb2dHZW5lcmF0ZWRDb2RlKCkge1xuXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/music.js\n");

/***/ }),

/***/ "./src/music_block_generators.js":
/*!***************************************!*\
  !*** ./src/music_block_generators.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockly/core */ \"./node_modules/blockly/dist/core-browser.js\");\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview JavaScript generators for music blocks.\n */\n\n\nblockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.JavaScript['music_pitch'] = function (block) {\n  return [Number(block.getFieldValue('PITCH')), blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.JavaScript.ORDER_ATOMIC];\n};\n\nblockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.JavaScript['music_note'] = function (block) {\n  var pitch = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.JavaScript.valueToCode(block, 'PITCH', blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.JavaScript.ORDER_COMMA) || '7';\n  return 'play(' + Number(block.getFieldValue('DURATION')) + ', ' + pitch + ', \\'block_id_' + block.id + '\\');\\n';\n};\n\nblockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.JavaScript['music_rest_whole'] = function (block) {\n  return 'rest(1, \\'block_id_' + block.id + '\\');\\n';\n};\n\nblockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.JavaScript['music_rest'] = function (block) {\n  return 'rest(' + Number(block.getFieldValue('DURATION')) + ', \\'block_id_' + block.id + '\\');\\n';\n};\n\nblockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.JavaScript['music_instrument'] = function (block) {\n  var instrument = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.JavaScript.quote_(block.getFieldValue('INSTRUMENT'));\n  return 'setInstrument(' + instrument + ', \\'block_id_' + block.id + '\\');\\n';\n};\n\nblockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.JavaScript['music_start'] = function (block) {\n  var statementsStack = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.JavaScript.statementToCode(block, 'STACK');\n  var code = 'function start() {\\n' + statementsStack + '}\\n'; // Add % so as not to collide with helper functions in definitions list.\n\n  blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.JavaScript.definitions_['%start'] = code;\n  return null;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbXVzaWNfYmxvY2tfZ2VuZXJhdG9ycy5qcz8zZWM4Il0sIm5hbWVzIjpbIkJsb2NrbHkiLCJKYXZhU2NyaXB0IiwiYmxvY2siLCJOdW1iZXIiLCJnZXRGaWVsZFZhbHVlIiwiT1JERVJfQVRPTUlDIiwicGl0Y2giLCJ2YWx1ZVRvQ29kZSIsIk9SREVSX0NPTU1BIiwiaWQiLCJpbnN0cnVtZW50IiwicXVvdGVfIiwic3RhdGVtZW50c1N0YWNrIiwic3RhdGVtZW50VG9Db2RlIiwiY29kZSIsImRlZmluaXRpb25zXyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQUEsbURBQU8sQ0FBQ0MsVUFBUixDQUFtQixhQUFuQixJQUFvQyxVQUFTQyxLQUFULEVBQWdCO0FBQ2xELFNBQU8sQ0FBQ0MsTUFBTSxDQUFDRCxLQUFLLENBQUNFLGFBQU4sQ0FBb0IsT0FBcEIsQ0FBRCxDQUFQLEVBQ0xKLG1EQUFPLENBQUNDLFVBQVIsQ0FBbUJJLFlBRGQsQ0FBUDtBQUVELENBSEQ7O0FBS0FMLG1EQUFPLENBQUNDLFVBQVIsQ0FBbUIsWUFBbkIsSUFBbUMsVUFBU0MsS0FBVCxFQUFnQjtBQUNqRCxNQUFNSSxLQUFLLEdBQUdOLG1EQUFPLENBQUNDLFVBQVIsQ0FBbUJNLFdBQW5CLENBQStCTCxLQUEvQixFQUFzQyxPQUF0QyxFQUNWRixtREFBTyxDQUFDQyxVQUFSLENBQW1CTyxXQURULEtBQ3lCLEdBRHZDO0FBRUEsU0FBTyxVQUFVTCxNQUFNLENBQUNELEtBQUssQ0FBQ0UsYUFBTixDQUFvQixVQUFwQixDQUFELENBQWhCLEdBQW9ELElBQXBELEdBQTJERSxLQUEzRCxHQUNILGVBREcsR0FDZUosS0FBSyxDQUFDTyxFQURyQixHQUMwQixRQURqQztBQUVELENBTEQ7O0FBT0FULG1EQUFPLENBQUNDLFVBQVIsQ0FBbUIsa0JBQW5CLElBQXlDLFVBQVNDLEtBQVQsRUFBZ0I7QUFDdkQsU0FBTyx3QkFBd0JBLEtBQUssQ0FBQ08sRUFBOUIsR0FBbUMsUUFBMUM7QUFDRCxDQUZEOztBQUlBVCxtREFBTyxDQUFDQyxVQUFSLENBQW1CLFlBQW5CLElBQW1DLFVBQVNDLEtBQVQsRUFBZ0I7QUFDakQsU0FBTyxVQUFVQyxNQUFNLENBQUNELEtBQUssQ0FBQ0UsYUFBTixDQUFvQixVQUFwQixDQUFELENBQWhCLEdBQ0gsZUFERyxHQUNlRixLQUFLLENBQUNPLEVBRHJCLEdBQzBCLFFBRGpDO0FBRUQsQ0FIRDs7QUFLQVQsbURBQU8sQ0FBQ0MsVUFBUixDQUFtQixrQkFBbkIsSUFBeUMsVUFBU0MsS0FBVCxFQUFnQjtBQUN2RCxNQUFNUSxVQUFVLEdBQ1pWLG1EQUFPLENBQUNDLFVBQVIsQ0FBbUJVLE1BQW5CLENBQTBCVCxLQUFLLENBQUNFLGFBQU4sQ0FBb0IsWUFBcEIsQ0FBMUIsQ0FESjtBQUVBLFNBQU8sbUJBQW1CTSxVQUFuQixHQUFnQyxlQUFoQyxHQUFrRFIsS0FBSyxDQUFDTyxFQUF4RCxHQUE2RCxRQUFwRTtBQUNELENBSkQ7O0FBTUFULG1EQUFPLENBQUNDLFVBQVIsQ0FBbUIsYUFBbkIsSUFBb0MsVUFBU0MsS0FBVCxFQUFnQjtBQUNsRCxNQUFNVSxlQUFlLEdBQUdaLG1EQUFPLENBQUNDLFVBQVIsQ0FBbUJZLGVBQW5CLENBQW1DWCxLQUFuQyxFQUEwQyxPQUExQyxDQUF4QjtBQUNBLE1BQU1ZLElBQUksR0FBRyx5QkFDWEYsZUFEVyxHQUNPLEtBRHBCLENBRmtELENBSWxEOztBQUNBWixxREFBTyxDQUFDQyxVQUFSLENBQW1CYyxZQUFuQixDQUFnQyxRQUFoQyxJQUE0Q0QsSUFBNUM7QUFDQSxTQUFPLElBQVA7QUFDRCxDQVBEIiwiZmlsZSI6Ii4vc3JjL211c2ljX2Jsb2NrX2dlbmVyYXRvcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBKYXZhU2NyaXB0IGdlbmVyYXRvcnMgZm9yIG11c2ljIGJsb2Nrcy5cbiAqL1xuXG5pbXBvcnQgQmxvY2tseSBmcm9tICdibG9ja2x5L2NvcmUnO1xuXG5CbG9ja2x5LkphdmFTY3JpcHRbJ211c2ljX3BpdGNoJ10gPSBmdW5jdGlvbihibG9jaykge1xuICByZXR1cm4gW051bWJlcihibG9jay5nZXRGaWVsZFZhbHVlKCdQSVRDSCcpKSxcbiAgICBCbG9ja2x5LkphdmFTY3JpcHQuT1JERVJfQVRPTUlDXTtcbn07XG5cbkJsb2NrbHkuSmF2YVNjcmlwdFsnbXVzaWNfbm90ZSddID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgY29uc3QgcGl0Y2ggPSBCbG9ja2x5LkphdmFTY3JpcHQudmFsdWVUb0NvZGUoYmxvY2ssICdQSVRDSCcsXG4gICAgICBCbG9ja2x5LkphdmFTY3JpcHQuT1JERVJfQ09NTUEpIHx8ICc3JztcbiAgcmV0dXJuICdwbGF5KCcgKyBOdW1iZXIoYmxvY2suZ2V0RmllbGRWYWx1ZSgnRFVSQVRJT04nKSkgKyAnLCAnICsgcGl0Y2ggK1xuICAgICAgJywgXFwnYmxvY2tfaWRfJyArIGJsb2NrLmlkICsgJ1xcJyk7XFxuJztcbn07XG5cbkJsb2NrbHkuSmF2YVNjcmlwdFsnbXVzaWNfcmVzdF93aG9sZSddID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgcmV0dXJuICdyZXN0KDEsIFxcJ2Jsb2NrX2lkXycgKyBibG9jay5pZCArICdcXCcpO1xcbic7XG59O1xuXG5CbG9ja2x5LkphdmFTY3JpcHRbJ211c2ljX3Jlc3QnXSA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gIHJldHVybiAncmVzdCgnICsgTnVtYmVyKGJsb2NrLmdldEZpZWxkVmFsdWUoJ0RVUkFUSU9OJykpICtcbiAgICAgICcsIFxcJ2Jsb2NrX2lkXycgKyBibG9jay5pZCArICdcXCcpO1xcbic7XG59O1xuXG5CbG9ja2x5LkphdmFTY3JpcHRbJ211c2ljX2luc3RydW1lbnQnXSA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gIGNvbnN0IGluc3RydW1lbnQgPVxuICAgICAgQmxvY2tseS5KYXZhU2NyaXB0LnF1b3RlXyhibG9jay5nZXRGaWVsZFZhbHVlKCdJTlNUUlVNRU5UJykpO1xuICByZXR1cm4gJ3NldEluc3RydW1lbnQoJyArIGluc3RydW1lbnQgKyAnLCBcXCdibG9ja19pZF8nICsgYmxvY2suaWQgKyAnXFwnKTtcXG4nO1xufTtcblxuQmxvY2tseS5KYXZhU2NyaXB0WydtdXNpY19zdGFydCddID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgY29uc3Qgc3RhdGVtZW50c1N0YWNrID0gQmxvY2tseS5KYXZhU2NyaXB0LnN0YXRlbWVudFRvQ29kZShibG9jaywgJ1NUQUNLJyk7XG4gIGNvbnN0IGNvZGUgPSAnZnVuY3Rpb24gc3RhcnQoKSB7XFxuJyArXG4gICAgc3RhdGVtZW50c1N0YWNrICsgJ31cXG4nO1xuICAvLyBBZGQgJSBzbyBhcyBub3QgdG8gY29sbGlkZSB3aXRoIGhlbHBlciBmdW5jdGlvbnMgaW4gZGVmaW5pdGlvbnMgbGlzdC5cbiAgQmxvY2tseS5KYXZhU2NyaXB0LmRlZmluaXRpb25zX1snJXN0YXJ0J10gPSBjb2RlO1xuICByZXR1cm4gbnVsbDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/music_block_generators.js\n");

/***/ })

})