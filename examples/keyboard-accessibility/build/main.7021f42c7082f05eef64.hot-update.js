webpackHotUpdate("main",{

/***/ "./src/field_pitch.js":
/*!****************************!*\
  !*** ./src/field_pitch.js ***!
  \****************************/
/*! exports provided: FieldPitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FieldPitch\", function() { return FieldPitch; });\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockly/core */ \"./node_modules/blockly/dist/core-browser.js\");\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * @license\n * Copyright 2016 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Music pitch input field. Borrowed from Blockly Games.\n * @author fraser@google.com (Neil Fraser)\n * @author samelh@google.com (Sam El-Husseini)\n */\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n/**\n * Pitch field from Blockly Games music.\n */\n\nvar FieldPitch = /*#__PURE__*/function (_Blockly$FieldTextInp) {\n  _inherits(FieldPitch, _Blockly$FieldTextInp);\n\n  var _super = _createSuper(FieldPitch);\n\n  /**\n   * Class for an editable pitch field.\n   * @param {string} text The initial content of the field.\n   * @extends {Blockly.FieldTextInput}\n   * @constructor\n   */\n  function FieldPitch(text) {\n    _classCallCheck(this, FieldPitch);\n\n    return _super.call(this, text);\n  }\n  /**\n   * Construct a FieldPitch from a JSON arg object.\n   * @param {!Object} options A JSON object with options (pitch).\n   * @return {!FieldPitch} The new field instance.\n   * @package\n   * @nocollapse\n   */\n\n\n  _createClass(FieldPitch, [{\n    key: \"showEditor_\",\n\n    /**\n     * Show the inline free-text editor on top of the text and the note picker.\n     * @private\n     */\n    value: function showEditor_() {\n      _get(_getPrototypeOf(FieldPitch.prototype), \"showEditor_\", this).call(this);\n\n      var div = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.WidgetDiv.DIV;\n\n      if (!div.firstChild) {\n        // Mobile interface uses Blockly.prompt.\n        return;\n      } // Build the DOM.\n\n\n      var editor = this.dropdownCreate_();\n      blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.DropDownDiv.getContentDiv().appendChild(editor);\n      blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.DropDownDiv.setColour(this.sourceBlock_.getColour(), this.sourceBlock_.style.colourTertiary);\n      blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.DropDownDiv.showPositionedByField(this, this.dropdownDispose_.bind(this)); // The note picker is different from other fields in that it updates on\n      // mousemove even if it's not in the middle of a drag.  In future we may\n      // change this behaviour.  For now, using bindEvent_ instead of\n      // bindEventWithChecks_ allows it to work without a mousedown/touchstart.\n\n      this.clickWrapper_ = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.bindEvent_(this.imageElement_, 'click', this, this.hide_);\n      this.moveWrapper_ = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.bindEvent_(this.imageElement_, 'mousemove', this, this.onMouseMove);\n      this.updateGraph_();\n    }\n    /**\n     * Create the pitch editor.\n     * @return {!Element} The newly created pitch picker.\n     * @private\n     */\n\n  }, {\n    key: \"dropdownCreate_\",\n    value: function dropdownCreate_() {\n      this.imageElement_ = document.createElement('div');\n      this.imageElement_.id = 'notePicker';\n      return this.imageElement_;\n    }\n    /**\n     * Dispose of events belonging to the pitch editor.\n     * @private\n     */\n\n  }, {\n    key: \"dropdownDispose_\",\n    value: function dropdownDispose_() {\n      blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.unbindEvent_(this.clickWrapper_);\n      blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.unbindEvent_(this.moveWrapper_);\n    }\n    /**\n     * Hide the editor.\n     * @private\n     */\n\n  }, {\n    key: \"hide_\",\n    value: function hide_() {\n      blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.WidgetDiv.hide();\n      blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.DropDownDiv.hideWithoutAnimation();\n    }\n    /**\n     * Set the note to match the mouse's position.\n     * @param {!Event} e Mouse move event.\n     */\n\n  }, {\n    key: \"onMouseMove\",\n    value: function onMouseMove(e) {\n      var bBox = this.imageElement_.getBoundingClientRect();\n      var dy = e.clientY - bBox.top;\n      var note = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.utils.math.clamp(Math.round(13.5 - dy / 7.5), 0, 12);\n      this.imageElement_.style.backgroundPosition = -note * 37 + 'px 0';\n      this.setEditorValue_(note);\n    }\n    /**\n     * Convert the machine-readable value (0-12) to human-readable text (C3-A4).\n     * @param {number|string} value The provided value.\n     * @return {string|undefined} The respective note, or undefined if invalid.\n     */\n\n  }, {\n    key: \"valueToNote\",\n    value: function valueToNote(value) {\n      return FieldPitch.NOTES[Number(value)];\n    }\n    /**\n     * Convert the human-readable text (C3-A4) to machine-readable value (0-12).\n     * @param {string} text The provided note.\n     * @return {number|undefined} The respective value, or undefined if invalid.\n     */\n\n  }, {\n    key: \"noteToValue\",\n    value: function noteToValue(text) {\n      var normalizedText = text.trim().toUpperCase();\n      var i = FieldPitch.NOTES.indexOf(normalizedText);\n      return i > -1 ? i : undefined;\n    }\n    /**\n     * Get the text to be displayed on the field node.\n     * @return {?string} The HTML value if we're editing, otherwise null. Null\n     *   means the super class will handle it, likely a string cast of value.\n     * @protected\n     */\n\n  }, {\n    key: \"getText_\",\n    value: function getText_() {\n      if (this.isBeingEdited_) {\n        return _get(_getPrototypeOf(FieldPitch.prototype), \"getText_\", this).call(this);\n      }\n\n      return this.valueToNote(this.getValue()) || null;\n    }\n    /**\n     * Transform the provided value into a text to show in the HTML input.\n     * @param {*} value The value stored in this field.\n     * @return {string} The text to show on the HTML input.\n     */\n\n  }, {\n    key: \"getEditorText_\",\n    value: function getEditorText_(value) {\n      return this.valueToNote(value);\n    }\n    /**\n     * Transform the text received from the HTML input (note) into a value\n     * to store in this field.\n     * @param {string} text Text received from the HTML input.\n     * @return {*} The value to store.\n     */\n\n  }, {\n    key: \"getValueFromEditorText_\",\n    value: function getValueFromEditorText_(text) {\n      return this.noteToValue(text);\n    }\n    /**\n     * Updates the graph when the field rerenders.\n     * @private\n     * @override\n     */\n\n  }, {\n    key: \"render_\",\n    value: function render_() {\n      _get(_getPrototypeOf(FieldPitch.prototype), \"render_\", this).call(this);\n\n      this.updateGraph_();\n    }\n    /**\n     * Redraw the note picker with the current note.\n     * @private\n     */\n\n  }, {\n    key: \"updateGraph_\",\n    value: function updateGraph_() {\n      if (!this.imageElement_) {\n        return;\n      }\n\n      var i = this.getValue();\n      this.imageElement_.style.backgroundPosition = -i * 37 + 'px 0';\n    }\n    /**\n     * Ensure that only a valid value may be entered.\n     * @param {*} opt_newValue The input value.\n     * @return {*} A valid value, or null if invalid.\n     */\n\n  }, {\n    key: \"doClassValidation_\",\n    value: function doClassValidation_(opt_newValue) {\n      if (opt_newValue === null || opt_newValue === undefined) {\n        return null;\n      }\n\n      var note = this.valueToNote(opt_newValue);\n\n      if (note) {\n        return opt_newValue;\n      }\n\n      return null;\n    }\n  }], [{\n    key: \"fromJson\",\n    value: function fromJson(options) {\n      return new FieldPitch(options['pitch']);\n    }\n  }]);\n\n  return FieldPitch;\n}(blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.FieldTextInput);\n/**\n * All notes available for the picker.\n */\n\nFieldPitch.NOTES = 'C3 D3 E3 F3 G3 A3 B3 C4 D4 E4 F4 G4 A4'.split(/ /);\nblockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.fieldRegistry.register('field_pitch', FieldPitch);\n/**\n * CSS for the pitch field.\n * This field is using CSS to set a background image of a series of notes, then\n * translating left or right to show only the correct note.\n */\n\nblockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.Css.register([\n/* eslint-disable indent */\n\"#notePicker {\\n    background-image: url(notes.png);\\n    border: 1px solid #ccc;\\n    height: 109px;\\n    width: 46px;\\n  }\"\n/* eslint-enable indent */\n]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRfcGl0Y2guanM/OThkZCJdLCJuYW1lcyI6WyJGaWVsZFBpdGNoIiwidGV4dCIsImRpdiIsIkJsb2NrbHkiLCJXaWRnZXREaXYiLCJESVYiLCJmaXJzdENoaWxkIiwiZWRpdG9yIiwiZHJvcGRvd25DcmVhdGVfIiwiRHJvcERvd25EaXYiLCJnZXRDb250ZW50RGl2IiwiYXBwZW5kQ2hpbGQiLCJzZXRDb2xvdXIiLCJzb3VyY2VCbG9ja18iLCJnZXRDb2xvdXIiLCJzdHlsZSIsImNvbG91clRlcnRpYXJ5Iiwic2hvd1Bvc2l0aW9uZWRCeUZpZWxkIiwiZHJvcGRvd25EaXNwb3NlXyIsImJpbmQiLCJjbGlja1dyYXBwZXJfIiwiYmluZEV2ZW50XyIsImltYWdlRWxlbWVudF8iLCJoaWRlXyIsIm1vdmVXcmFwcGVyXyIsIm9uTW91c2VNb3ZlIiwidXBkYXRlR3JhcGhfIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJ1bmJpbmRFdmVudF8iLCJoaWRlIiwiaGlkZVdpdGhvdXRBbmltYXRpb24iLCJlIiwiYkJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImR5IiwiY2xpZW50WSIsInRvcCIsIm5vdGUiLCJ1dGlscyIsIm1hdGgiLCJjbGFtcCIsIk1hdGgiLCJyb3VuZCIsImJhY2tncm91bmRQb3NpdGlvbiIsInNldEVkaXRvclZhbHVlXyIsInZhbHVlIiwiTk9URVMiLCJOdW1iZXIiLCJub3JtYWxpemVkVGV4dCIsInRyaW0iLCJ0b1VwcGVyQ2FzZSIsImkiLCJpbmRleE9mIiwidW5kZWZpbmVkIiwiaXNCZWluZ0VkaXRlZF8iLCJ2YWx1ZVRvTm90ZSIsImdldFZhbHVlIiwibm90ZVRvVmFsdWUiLCJvcHRfbmV3VmFsdWUiLCJvcHRpb25zIiwiRmllbGRUZXh0SW5wdXQiLCJzcGxpdCIsImZpZWxkUmVnaXN0cnkiLCJyZWdpc3RlciIsIkNzcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7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InNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IE11c2ljIHBpdGNoIGlucHV0IGZpZWxkLiBCb3Jyb3dlZCBmcm9tIEJsb2NrbHkgR2FtZXMuXG4gKiBAYXV0aG9yIGZyYXNlckBnb29nbGUuY29tIChOZWlsIEZyYXNlcilcbiAqIEBhdXRob3Igc2FtZWxoQGdvb2dsZS5jb20gKFNhbSBFbC1IdXNzZWluaSlcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQmxvY2tseSBmcm9tICdibG9ja2x5L2NvcmUnO1xuXG4vKipcbiAqIFBpdGNoIGZpZWxkIGZyb20gQmxvY2tseSBHYW1lcyBtdXNpYy5cbiAqL1xuZXhwb3J0IGNsYXNzIEZpZWxkUGl0Y2ggZXh0ZW5kcyBCbG9ja2x5LkZpZWxkVGV4dElucHV0IHtcbiAgLyoqXG4gICAqIENsYXNzIGZvciBhbiBlZGl0YWJsZSBwaXRjaCBmaWVsZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGhlIGluaXRpYWwgY29udGVudCBvZiB0aGUgZmllbGQuXG4gICAqIEBleHRlbmRzIHtCbG9ja2x5LkZpZWxkVGV4dElucHV0fVxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICBzdXBlcih0ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBGaWVsZFBpdGNoIGZyb20gYSBKU09OIGFyZyBvYmplY3QuXG4gICAqIEBwYXJhbSB7IU9iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyAocGl0Y2gpLlxuICAgKiBAcmV0dXJuIHshRmllbGRQaXRjaH0gVGhlIG5ldyBmaWVsZCBpbnN0YW5jZS5cbiAgICogQHBhY2thZ2VcbiAgICogQG5vY29sbGFwc2VcbiAgICovXG4gIHN0YXRpYyBmcm9tSnNvbihvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBGaWVsZFBpdGNoKG9wdGlvbnNbJ3BpdGNoJ10pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIGlubGluZSBmcmVlLXRleHQgZWRpdG9yIG9uIHRvcCBvZiB0aGUgdGV4dCBhbmQgdGhlIG5vdGUgcGlja2VyLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2hvd0VkaXRvcl8oKSB7XG4gICAgc3VwZXIuc2hvd0VkaXRvcl8oKTtcblxuICAgIGNvbnN0IGRpdiA9IEJsb2NrbHkuV2lkZ2V0RGl2LkRJVjtcbiAgICBpZiAoIWRpdi5maXJzdENoaWxkKSB7XG4gICAgICAvLyBNb2JpbGUgaW50ZXJmYWNlIHVzZXMgQmxvY2tseS5wcm9tcHQuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEJ1aWxkIHRoZSBET00uXG4gICAgY29uc3QgZWRpdG9yID0gdGhpcy5kcm9wZG93bkNyZWF0ZV8oKTtcbiAgICBCbG9ja2x5LkRyb3BEb3duRGl2LmdldENvbnRlbnREaXYoKS5hcHBlbmRDaGlsZChlZGl0b3IpO1xuXG4gICAgQmxvY2tseS5Ecm9wRG93bkRpdi5zZXRDb2xvdXIodGhpcy5zb3VyY2VCbG9ja18uZ2V0Q29sb3VyKCksXG4gICAgICAgIHRoaXMuc291cmNlQmxvY2tfLnN0eWxlLmNvbG91clRlcnRpYXJ5KTtcblxuICAgIEJsb2NrbHkuRHJvcERvd25EaXYuc2hvd1Bvc2l0aW9uZWRCeUZpZWxkKFxuICAgICAgICB0aGlzLCB0aGlzLmRyb3Bkb3duRGlzcG9zZV8uYmluZCh0aGlzKSk7XG5cbiAgICAvLyBUaGUgbm90ZSBwaWNrZXIgaXMgZGlmZmVyZW50IGZyb20gb3RoZXIgZmllbGRzIGluIHRoYXQgaXQgdXBkYXRlcyBvblxuICAgIC8vIG1vdXNlbW92ZSBldmVuIGlmIGl0J3Mgbm90IGluIHRoZSBtaWRkbGUgb2YgYSBkcmFnLiAgSW4gZnV0dXJlIHdlIG1heVxuICAgIC8vIGNoYW5nZSB0aGlzIGJlaGF2aW91ci4gIEZvciBub3csIHVzaW5nIGJpbmRFdmVudF8gaW5zdGVhZCBvZlxuICAgIC8vIGJpbmRFdmVudFdpdGhDaGVja3NfIGFsbG93cyBpdCB0byB3b3JrIHdpdGhvdXQgYSBtb3VzZWRvd24vdG91Y2hzdGFydC5cbiAgICB0aGlzLmNsaWNrV3JhcHBlcl8gPVxuICAgICAgQmxvY2tseS5iaW5kRXZlbnRfKHRoaXMuaW1hZ2VFbGVtZW50XywgJ2NsaWNrJywgdGhpcyxcbiAgICAgICAgICB0aGlzLmhpZGVfKTtcbiAgICB0aGlzLm1vdmVXcmFwcGVyXyA9XG4gICAgICBCbG9ja2x5LmJpbmRFdmVudF8odGhpcy5pbWFnZUVsZW1lbnRfLCAnbW91c2Vtb3ZlJywgdGhpcyxcbiAgICAgICAgICB0aGlzLm9uTW91c2VNb3ZlKTtcblxuICAgIHRoaXMudXBkYXRlR3JhcGhfKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBwaXRjaCBlZGl0b3IuXG4gICAqIEByZXR1cm4geyFFbGVtZW50fSBUaGUgbmV3bHkgY3JlYXRlZCBwaXRjaCBwaWNrZXIuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkcm9wZG93bkNyZWF0ZV8oKSB7XG4gICAgdGhpcy5pbWFnZUVsZW1lbnRfID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5pbWFnZUVsZW1lbnRfLmlkID0gJ25vdGVQaWNrZXInO1xuXG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VFbGVtZW50XztcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwb3NlIG9mIGV2ZW50cyBiZWxvbmdpbmcgdG8gdGhlIHBpdGNoIGVkaXRvci5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRyb3Bkb3duRGlzcG9zZV8oKSB7XG4gICAgQmxvY2tseS51bmJpbmRFdmVudF8odGhpcy5jbGlja1dyYXBwZXJfKTtcbiAgICBCbG9ja2x5LnVuYmluZEV2ZW50Xyh0aGlzLm1vdmVXcmFwcGVyXyk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZSB0aGUgZWRpdG9yLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGlkZV8oKSB7XG4gICAgQmxvY2tseS5XaWRnZXREaXYuaGlkZSgpO1xuICAgIEJsb2NrbHkuRHJvcERvd25EaXYuaGlkZVdpdGhvdXRBbmltYXRpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG5vdGUgdG8gbWF0Y2ggdGhlIG1vdXNlJ3MgcG9zaXRpb24uXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBlIE1vdXNlIG1vdmUgZXZlbnQuXG4gICAqL1xuICBvbk1vdXNlTW92ZShlKSB7XG4gICAgY29uc3QgYkJveCA9IHRoaXMuaW1hZ2VFbGVtZW50Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBkeSA9IGUuY2xpZW50WSAtIGJCb3gudG9wO1xuICAgIGNvbnN0IG5vdGUgPSBCbG9ja2x5LnV0aWxzLm1hdGguY2xhbXAoTWF0aC5yb3VuZCgxMy41IC0gZHkgLyA3LjUpLCAwLCAxMik7XG4gICAgdGhpcy5pbWFnZUVsZW1lbnRfLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICgtbm90ZSAqIDM3KSArICdweCAwJztcbiAgICB0aGlzLnNldEVkaXRvclZhbHVlXyhub3RlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRoZSBtYWNoaW5lLXJlYWRhYmxlIHZhbHVlICgwLTEyKSB0byBodW1hbi1yZWFkYWJsZSB0ZXh0IChDMy1BNCkuXG4gICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gdmFsdWUgVGhlIHByb3ZpZGVkIHZhbHVlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd8dW5kZWZpbmVkfSBUaGUgcmVzcGVjdGl2ZSBub3RlLCBvciB1bmRlZmluZWQgaWYgaW52YWxpZC5cbiAgICovXG4gIHZhbHVlVG9Ob3RlKHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpZWxkUGl0Y2guTk9URVNbTnVtYmVyKHZhbHVlKV07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCB0aGUgaHVtYW4tcmVhZGFibGUgdGV4dCAoQzMtQTQpIHRvIG1hY2hpbmUtcmVhZGFibGUgdmFsdWUgKDAtMTIpLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgcHJvdmlkZWQgbm90ZS5cbiAgICogQHJldHVybiB7bnVtYmVyfHVuZGVmaW5lZH0gVGhlIHJlc3BlY3RpdmUgdmFsdWUsIG9yIHVuZGVmaW5lZCBpZiBpbnZhbGlkLlxuICAgKi9cbiAgbm90ZVRvVmFsdWUodGV4dCkge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRUZXh0ID0gdGV4dC50cmltKCkudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBpID0gRmllbGRQaXRjaC5OT1RFUy5pbmRleE9mKG5vcm1hbGl6ZWRUZXh0KTtcbiAgICByZXR1cm4gaSA+IC0xID8gaSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHRleHQgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBmaWVsZCBub2RlLlxuICAgKiBAcmV0dXJuIHs/c3RyaW5nfSBUaGUgSFRNTCB2YWx1ZSBpZiB3ZSdyZSBlZGl0aW5nLCBvdGhlcndpc2UgbnVsbC4gTnVsbFxuICAgKiAgIG1lYW5zIHRoZSBzdXBlciBjbGFzcyB3aWxsIGhhbmRsZSBpdCwgbGlrZWx5IGEgc3RyaW5nIGNhc3Qgb2YgdmFsdWUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGdldFRleHRfKCkge1xuICAgIGlmICh0aGlzLmlzQmVpbmdFZGl0ZWRfKSB7XG4gICAgICByZXR1cm4gc3VwZXIuZ2V0VGV4dF8oKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmFsdWVUb05vdGUodGhpcy5nZXRWYWx1ZSgpKSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSB0aGUgcHJvdmlkZWQgdmFsdWUgaW50byBhIHRleHQgdG8gc2hvdyBpbiB0aGUgSFRNTCBpbnB1dC5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgc3RvcmVkIGluIHRoaXMgZmllbGQuXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHRleHQgdG8gc2hvdyBvbiB0aGUgSFRNTCBpbnB1dC5cbiAgICovXG4gIGdldEVkaXRvclRleHRfKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVUb05vdGUodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSB0aGUgdGV4dCByZWNlaXZlZCBmcm9tIHRoZSBIVE1MIGlucHV0IChub3RlKSBpbnRvIGEgdmFsdWVcbiAgICogdG8gc3RvcmUgaW4gdGhpcyBmaWVsZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGV4dCByZWNlaXZlZCBmcm9tIHRoZSBIVE1MIGlucHV0LlxuICAgKiBAcmV0dXJuIHsqfSBUaGUgdmFsdWUgdG8gc3RvcmUuXG4gICAqL1xuICBnZXRWYWx1ZUZyb21FZGl0b3JUZXh0Xyh0ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMubm90ZVRvVmFsdWUodGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgZ3JhcGggd2hlbiB0aGUgZmllbGQgcmVyZW5kZXJzLlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHJlbmRlcl8oKSB7XG4gICAgc3VwZXIucmVuZGVyXygpO1xuICAgIHRoaXMudXBkYXRlR3JhcGhfKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVkcmF3IHRoZSBub3RlIHBpY2tlciB3aXRoIHRoZSBjdXJyZW50IG5vdGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB1cGRhdGVHcmFwaF8oKSB7XG4gICAgaWYgKCF0aGlzLmltYWdlRWxlbWVudF8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICB0aGlzLmltYWdlRWxlbWVudF8uc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gKC1pICogMzcpICsgJ3B4IDAnO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuc3VyZSB0aGF0IG9ubHkgYSB2YWxpZCB2YWx1ZSBtYXkgYmUgZW50ZXJlZC5cbiAgICogQHBhcmFtIHsqfSBvcHRfbmV3VmFsdWUgVGhlIGlucHV0IHZhbHVlLlxuICAgKiBAcmV0dXJuIHsqfSBBIHZhbGlkIHZhbHVlLCBvciBudWxsIGlmIGludmFsaWQuXG4gICAqL1xuICBkb0NsYXNzVmFsaWRhdGlvbl8ob3B0X25ld1ZhbHVlKSB7XG4gICAgaWYgKG9wdF9uZXdWYWx1ZSA9PT0gbnVsbCB8fCBvcHRfbmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG5vdGUgPSB0aGlzLnZhbHVlVG9Ob3RlKG9wdF9uZXdWYWx1ZSk7XG4gICAgaWYgKG5vdGUpIHtcbiAgICAgIHJldHVybiBvcHRfbmV3VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQWxsIG5vdGVzIGF2YWlsYWJsZSBmb3IgdGhlIHBpY2tlci5cbiAqL1xuRmllbGRQaXRjaC5OT1RFUyA9ICdDMyBEMyBFMyBGMyBHMyBBMyBCMyBDNCBENCBFNCBGNCBHNCBBNCcuc3BsaXQoLyAvKTtcblxuXG5CbG9ja2x5LmZpZWxkUmVnaXN0cnkucmVnaXN0ZXIoJ2ZpZWxkX3BpdGNoJywgRmllbGRQaXRjaCk7XG5cbi8qKlxuICogQ1NTIGZvciB0aGUgcGl0Y2ggZmllbGQuXG4gKiBUaGlzIGZpZWxkIGlzIHVzaW5nIENTUyB0byBzZXQgYSBiYWNrZ3JvdW5kIGltYWdlIG9mIGEgc2VyaWVzIG9mIG5vdGVzLCB0aGVuXG4gKiB0cmFuc2xhdGluZyBsZWZ0IG9yIHJpZ2h0IHRvIHNob3cgb25seSB0aGUgY29ycmVjdCBub3RlLlxuICovXG5CbG9ja2x5LkNzcy5yZWdpc3RlcihbXG4vKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cbiAgYCNub3RlUGlja2VyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwobm90ZXMucG5nKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGhlaWdodDogMTA5cHg7XG4gICAgd2lkdGg6IDQ2cHg7XG4gIH1gLFxuICAvKiBlc2xpbnQtZW5hYmxlIGluZGVudCAqL1xuXSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/field_pitch.js\n");

/***/ })

})