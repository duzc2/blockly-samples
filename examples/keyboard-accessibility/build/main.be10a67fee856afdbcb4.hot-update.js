webpackHotUpdate("main",{

/***/ "./src/field_pitch.js":
/*!****************************!*\
  !*** ./src/field_pitch.js ***!
  \****************************/
/*! exports provided: FieldPitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FieldPitch\", function() { return FieldPitch; });\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockly/core */ \"./node_modules/blockly/dist/core-browser.js\");\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * @license\n * Copyright 2016 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Music pitch input field. Borrowed from Blockly Games.\n * @author fraser@google.com (Neil Fraser)\n * @author samelh@google.com (Sam El-Husseini)\n */\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n/**\n * Pitch field from Blockly Games music.\n */\n\nvar FieldPitch = /*#__PURE__*/function (_Blockly$FieldTextInp) {\n  _inherits(FieldPitch, _Blockly$FieldTextInp);\n\n  var _super = _createSuper(FieldPitch);\n\n  /**\n   * Class for an editable pitch field.\n   * @param {string} text The initial content of the field.\n   * @extends {Blockly.FieldTextInput}\n   * @constructor\n   */\n  function FieldPitch(text) {\n    _classCallCheck(this, FieldPitch);\n\n    return _super.call(this, text);\n  }\n  /**\n   * Construct a FieldPitch from a JSON arg object.\n   * @param {!Object} options A JSON object with options (pitch).\n   * @return {!FieldPitch} The new field instance.\n   * @package\n   * @nocollapse\n   */\n\n\n  _createClass(FieldPitch, [{\n    key: \"showEditor_\",\n\n    /**\n     * Show the inline free-text editor on top of the text and the note picker.\n     * @private\n     */\n    value: function showEditor_() {\n      _get(_getPrototypeOf(FieldPitch.prototype), \"showEditor_\", this).call(this);\n\n      var div = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.WidgetDiv.DIV;\n\n      if (!div.firstChild) {\n        // Mobile interface uses Blockly.prompt.\n        return;\n      } // Build the DOM.\n\n\n      var editor = this.dropdownCreate_();\n      blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.DropDownDiv.getContentDiv().appendChild(editor);\n      blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.DropDownDiv.setColour(this.sourceBlock_.getColour(), this.sourceBlock_.style.colourTertiary);\n      blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.DropDownDiv.showPositionedByField(this, this.dropdownDispose_.bind(this)); // The note picker is different from other fields in that it updates on\n      // mousemove even if it's not in the middle of a drag.  In future we may\n      // change this behaviour.  For now, using bindEvent_ instead of\n      // bindEventWithChecks_ allows it to work without a mousedown/touchstart.\n\n      this.clickWrapper_ = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.bindEvent_(this.imageElement_, 'click', this, this.hide_);\n      this.moveWrapper_ = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.bindEvent_(this.imageElement_, 'mousemove', this, this.onMouseMove);\n      this.updateGraph_();\n    }\n    /**\n     * Create the pitch editor.\n     * @return {!Element} The newly created pitch picker.\n     * @private\n     */\n\n  }, {\n    key: \"dropdownCreate_\",\n    value: function dropdownCreate_() {\n      this.imageElement_ = document.createElement('div');\n      this.imageElement_.id = 'notePicker';\n      return this.imageElement_;\n    }\n    /**\n     * Dispose of events belonging to the pitch editor.\n     * @private\n     */\n\n  }, {\n    key: \"dropdownDispose_\",\n    value: function dropdownDispose_() {\n      blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.unbindEvent_(this.clickWrapper_);\n      blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.unbindEvent_(this.moveWrapper_);\n    }\n    /**\n     * Hide the editor.\n     * @private\n     */\n\n  }, {\n    key: \"hide_\",\n    value: function hide_() {\n      blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.WidgetDiv.hide();\n      blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.DropDownDiv.hideWithoutAnimation();\n    }\n    /**\n     * Set the note to match the mouse's position.\n     * @param {!Event} e Mouse move event.\n     */\n\n  }, {\n    key: \"onMouseMove\",\n    value: function onMouseMove(e) {\n      var bBox = this.imageElement_.getBoundingClientRect();\n      var dy = e.clientY - bBox.top;\n      var note = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.utils.math.clamp(Math.round(13.5 - dy / 7.5), 0, 12);\n      this.imageElement_.style.backgroundPosition = -note * 37 + 'px 0';\n      this.setEditorValue_(note);\n    }\n    /**\n     * Convert the machine-readable value (0-12) to human-readable text (C3-A4).\n     * @param {number|string} value The provided value.\n     * @return {string|undefined} The respective note, or undefined if invalid.\n     */\n\n  }, {\n    key: \"valueToNote\",\n    value: function valueToNote(value) {\n      return FieldPitch.NOTES[Number(value)];\n    }\n    /**\n     * Convert the human-readable text (C3-A4) to machine-readable value (0-12).\n     * @param {string} text The provided note.\n     * @return {number|undefined} The respective value, or undefined if invalid.\n     */\n\n  }, {\n    key: \"noteToValue\",\n    value: function noteToValue(text) {\n      var normalizedText = text.trim().toUpperCase();\n      var i = FieldPitch.NOTES.indexOf(normalizedText);\n      return i > -1 ? i : undefined;\n    }\n    /**\n     * Get the text to be displayed on the field node.\n     * @return {?string} The HTML value if we're editing, otherwise null. Null\n     *   means the super class will handle it, likely a string cast of value.\n     * @protected\n     */\n\n  }, {\n    key: \"getText_\",\n    value: function getText_() {\n      if (this.isBeingEdited_) {\n        return _get(_getPrototypeOf(FieldPitch.prototype), \"getText_\", this).call(this);\n      }\n\n      return this.valueToNote(this.getValue()) || null;\n    }\n    /**\n     * Transform the provided value into a text to show in the HTML input.\n     * @param {*} value The value stored in this field.\n     * @return {string} The text to show on the HTML input.\n     */\n\n  }, {\n    key: \"getEditorText_\",\n    value: function getEditorText_(value) {\n      return this.valueToNote(value);\n    }\n    /**\n     * Transform the text received from the HTML input (note) into a value\n     * to store in this field.\n     * @param {string} text Text received from the HTML input.\n     * @return {*} The value to store.\n     */\n\n  }, {\n    key: \"getValueFromEditorText_\",\n    value: function getValueFromEditorText_(text) {\n      return this.noteToValue(text);\n    }\n    /**\n     * Updates the graph when the field rerenders.\n     * @private\n     * @override\n     */\n\n  }, {\n    key: \"render_\",\n    value: function render_() {\n      _get(_getPrototypeOf(FieldPitch.prototype), \"render_\", this).call(this);\n\n      this.updateGraph_();\n    }\n    /**\n     * Redraw the note picker with the current note.\n     * @private\n     */\n\n  }, {\n    key: \"updateGraph_\",\n    value: function updateGraph_() {\n      if (!this.imageElement_) {\n        return;\n      }\n\n      var i = this.getValue();\n      this.imageElement_.style.backgroundPosition = -i * 37 + 'px 0';\n    }\n    /**\n     * Ensure that only a valid value may be entered.\n     * @param {*} opt_newValue The input value.\n     * @return {*} A valid value, or null if invalid.\n     */\n\n  }, {\n    key: \"doClassValidation_\",\n    value: function doClassValidation_(opt_newValue) {\n      if (opt_newValue === null || opt_newValue === undefined) {\n        return null;\n      }\n\n      var note = this.valueToNote(opt_newValue);\n\n      if (note) {\n        return opt_newValue;\n      }\n\n      return null;\n    }\n  }], [{\n    key: \"fromJson\",\n    value: function fromJson(options) {\n      return new FieldPitch(options['pitch']);\n    }\n  }]);\n\n  return FieldPitch;\n}(blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.FieldTextInput);\n/**\n * All notes available for the picker.\n */\n\nFieldPitch.NOTES = 'C3 D3 E3 F3 G3 A3 B3 C4 D4 E4 F4 G4 A4'.split(/ /);\nblockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.fieldRegistry.register('field_pitch', FieldPitch);\nblockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.Css.register([\n/* eslint-disable indent */\n\" #notePicker {\\n    background- image: url(notes.png);\\n    border: 1px solid #ccc;\\n    height: 109px;\\n    width: 46px;\\n  }\"\n/* eslint-enable indent */\n]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRfcGl0Y2guanM/OThkZCJdLCJuYW1lcyI6WyJGaWVsZFBpdGNoIiwidGV4dCIsImRpdiIsIkJsb2NrbHkiLCJXaWRnZXREaXYiLCJESVYiLCJmaXJzdENoaWxkIiwiZWRpdG9yIiwiZHJvcGRvd25DcmVhdGVfIiwiRHJvcERvd25EaXYiLCJnZXRDb250ZW50RGl2IiwiYXBwZW5kQ2hpbGQiLCJzZXRDb2xvdXIiLCJzb3VyY2VCbG9ja18iLCJnZXRDb2xvdXIiLCJzdHlsZSIsImNvbG91clRlcnRpYXJ5Iiwic2hvd1Bvc2l0aW9uZWRCeUZpZWxkIiwiZHJvcGRvd25EaXNwb3NlXyIsImJpbmQiLCJjbGlja1dyYXBwZXJfIiwiYmluZEV2ZW50XyIsImltYWdlRWxlbWVudF8iLCJoaWRlXyIsIm1vdmVXcmFwcGVyXyIsIm9uTW91c2VNb3ZlIiwidXBkYXRlR3JhcGhfIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJ1bmJpbmRFdmVudF8iLCJoaWRlIiwiaGlkZVdpdGhvdXRBbmltYXRpb24iLCJlIiwiYkJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImR5IiwiY2xpZW50WSIsInRvcCIsIm5vdGUiLCJ1dGlscyIsIm1hdGgiLCJjbGFtcCIsIk1hdGgiLCJyb3VuZCIsImJhY2tncm91bmRQb3NpdGlvbiIsInNldEVkaXRvclZhbHVlXyIsInZhbHVlIiwiTk9URVMiLCJOdW1iZXIiLCJub3JtYWxpemVkVGV4dCIsInRyaW0iLCJ0b1VwcGVyQ2FzZSIsImkiLCJpbmRleE9mIiwidW5kZWZpbmVkIiwiaXNCZWluZ0VkaXRlZF8iLCJ2YWx1ZVRvTm90ZSIsImdldFZhbHVlIiwibm90ZVRvVmFsdWUiLCJvcHRfbmV3VmFsdWUiLCJvcHRpb25zIiwiRmllbGRUZXh0SW5wdXQiLCJzcGxpdCIsImZpZWxkUmVnaXN0cnkiLCJyZWdpc3RlciIsIkNzcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7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IEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBNdXNpYyBwaXRjaCBpbnB1dCBmaWVsZC4gQm9ycm93ZWQgZnJvbSBCbG9ja2x5IEdhbWVzLlxuICogQGF1dGhvciBmcmFzZXJAZ29vZ2xlLmNvbSAoTmVpbCBGcmFzZXIpXG4gKiBAYXV0aG9yIHNhbWVsaEBnb29nbGUuY29tIChTYW0gRWwtSHVzc2VpbmkpXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEJsb2NrbHkgZnJvbSAnYmxvY2tseS9jb3JlJztcblxuLyoqXG4gKiBQaXRjaCBmaWVsZCBmcm9tIEJsb2NrbHkgR2FtZXMgbXVzaWMuXG4gKi9cbmV4cG9ydCBjbGFzcyBGaWVsZFBpdGNoIGV4dGVuZHMgQmxvY2tseS5GaWVsZFRleHRJbnB1dCB7XG4gIC8qKlxuICAgKiBDbGFzcyBmb3IgYW4gZWRpdGFibGUgcGl0Y2ggZmllbGQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRoZSBpbml0aWFsIGNvbnRlbnQgb2YgdGhlIGZpZWxkLlxuICAgKiBAZXh0ZW5kcyB7QmxvY2tseS5GaWVsZFRleHRJbnB1dH1cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgc3VwZXIodGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0IGEgRmllbGRQaXRjaCBmcm9tIGEgSlNPTiBhcmcgb2JqZWN0LlxuICAgKiBAcGFyYW0geyFPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgKHBpdGNoKS5cbiAgICogQHJldHVybiB7IUZpZWxkUGl0Y2h9IFRoZSBuZXcgZmllbGQgaW5zdGFuY2UuXG4gICAqIEBwYWNrYWdlXG4gICAqIEBub2NvbGxhcHNlXG4gICAqL1xuICBzdGF0aWMgZnJvbUpzb24ob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgRmllbGRQaXRjaChvcHRpb25zWydwaXRjaCddKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBpbmxpbmUgZnJlZS10ZXh0IGVkaXRvciBvbiB0b3Agb2YgdGhlIHRleHQgYW5kIHRoZSBub3RlIHBpY2tlci5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNob3dFZGl0b3JfKCkge1xuICAgIHN1cGVyLnNob3dFZGl0b3JfKCk7XG5cbiAgICBjb25zdCBkaXYgPSBCbG9ja2x5LldpZGdldERpdi5ESVY7XG4gICAgaWYgKCFkaXYuZmlyc3RDaGlsZCkge1xuICAgICAgLy8gTW9iaWxlIGludGVyZmFjZSB1c2VzIEJsb2NrbHkucHJvbXB0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBCdWlsZCB0aGUgRE9NLlxuICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuZHJvcGRvd25DcmVhdGVfKCk7XG4gICAgQmxvY2tseS5Ecm9wRG93bkRpdi5nZXRDb250ZW50RGl2KCkuYXBwZW5kQ2hpbGQoZWRpdG9yKTtcblxuICAgIEJsb2NrbHkuRHJvcERvd25EaXYuc2V0Q29sb3VyKHRoaXMuc291cmNlQmxvY2tfLmdldENvbG91cigpLFxuICAgICAgICB0aGlzLnNvdXJjZUJsb2NrXy5zdHlsZS5jb2xvdXJUZXJ0aWFyeSk7XG5cbiAgICBCbG9ja2x5LkRyb3BEb3duRGl2LnNob3dQb3NpdGlvbmVkQnlGaWVsZChcbiAgICAgICAgdGhpcywgdGhpcy5kcm9wZG93bkRpc3Bvc2VfLmJpbmQodGhpcykpO1xuXG4gICAgLy8gVGhlIG5vdGUgcGlja2VyIGlzIGRpZmZlcmVudCBmcm9tIG90aGVyIGZpZWxkcyBpbiB0aGF0IGl0IHVwZGF0ZXMgb25cbiAgICAvLyBtb3VzZW1vdmUgZXZlbiBpZiBpdCdzIG5vdCBpbiB0aGUgbWlkZGxlIG9mIGEgZHJhZy4gIEluIGZ1dHVyZSB3ZSBtYXlcbiAgICAvLyBjaGFuZ2UgdGhpcyBiZWhhdmlvdXIuICBGb3Igbm93LCB1c2luZyBiaW5kRXZlbnRfIGluc3RlYWQgb2ZcbiAgICAvLyBiaW5kRXZlbnRXaXRoQ2hlY2tzXyBhbGxvd3MgaXQgdG8gd29yayB3aXRob3V0IGEgbW91c2Vkb3duL3RvdWNoc3RhcnQuXG4gICAgdGhpcy5jbGlja1dyYXBwZXJfID1cbiAgICAgIEJsb2NrbHkuYmluZEV2ZW50Xyh0aGlzLmltYWdlRWxlbWVudF8sICdjbGljaycsIHRoaXMsXG4gICAgICAgICAgdGhpcy5oaWRlXyk7XG4gICAgdGhpcy5tb3ZlV3JhcHBlcl8gPVxuICAgICAgQmxvY2tseS5iaW5kRXZlbnRfKHRoaXMuaW1hZ2VFbGVtZW50XywgJ21vdXNlbW92ZScsIHRoaXMsXG4gICAgICAgICAgdGhpcy5vbk1vdXNlTW92ZSk7XG5cbiAgICB0aGlzLnVwZGF0ZUdyYXBoXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgcGl0Y2ggZWRpdG9yLlxuICAgKiBAcmV0dXJuIHshRWxlbWVudH0gVGhlIG5ld2x5IGNyZWF0ZWQgcGl0Y2ggcGlja2VyLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZHJvcGRvd25DcmVhdGVfKCkge1xuICAgIHRoaXMuaW1hZ2VFbGVtZW50XyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuaW1hZ2VFbGVtZW50Xy5pZCA9ICdub3RlUGlja2VyJztcblxuICAgIHJldHVybiB0aGlzLmltYWdlRWxlbWVudF87XG4gIH1cblxuICAvKipcbiAgICogRGlzcG9zZSBvZiBldmVudHMgYmVsb25naW5nIHRvIHRoZSBwaXRjaCBlZGl0b3IuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkcm9wZG93bkRpc3Bvc2VfKCkge1xuICAgIEJsb2NrbHkudW5iaW5kRXZlbnRfKHRoaXMuY2xpY2tXcmFwcGVyXyk7XG4gICAgQmxvY2tseS51bmJpbmRFdmVudF8odGhpcy5tb3ZlV3JhcHBlcl8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIGVkaXRvci5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhpZGVfKCkge1xuICAgIEJsb2NrbHkuV2lkZ2V0RGl2LmhpZGUoKTtcbiAgICBCbG9ja2x5LkRyb3BEb3duRGl2LmhpZGVXaXRob3V0QW5pbWF0aW9uKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBub3RlIHRvIG1hdGNoIHRoZSBtb3VzZSdzIHBvc2l0aW9uLlxuICAgKiBAcGFyYW0geyFFdmVudH0gZSBNb3VzZSBtb3ZlIGV2ZW50LlxuICAgKi9cbiAgb25Nb3VzZU1vdmUoZSkge1xuICAgIGNvbnN0IGJCb3ggPSB0aGlzLmltYWdlRWxlbWVudF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZHkgPSBlLmNsaWVudFkgLSBiQm94LnRvcDtcbiAgICBjb25zdCBub3RlID0gQmxvY2tseS51dGlscy5tYXRoLmNsYW1wKE1hdGgucm91bmQoMTMuNSAtIGR5IC8gNy41KSwgMCwgMTIpO1xuICAgIHRoaXMuaW1hZ2VFbGVtZW50Xy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAoLW5vdGUgKiAzNykgKyAncHggMCc7XG4gICAgdGhpcy5zZXRFZGl0b3JWYWx1ZV8obm90ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCB0aGUgbWFjaGluZS1yZWFkYWJsZSB2YWx1ZSAoMC0xMikgdG8gaHVtYW4tcmVhZGFibGUgdGV4dCAoQzMtQTQpLlxuICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHZhbHVlIFRoZSBwcm92aWRlZCB2YWx1ZS5cbiAgICogQHJldHVybiB7c3RyaW5nfHVuZGVmaW5lZH0gVGhlIHJlc3BlY3RpdmUgbm90ZSwgb3IgdW5kZWZpbmVkIGlmIGludmFsaWQuXG4gICAqL1xuICB2YWx1ZVRvTm90ZSh2YWx1ZSkge1xuICAgIHJldHVybiBGaWVsZFBpdGNoLk5PVEVTW051bWJlcih2YWx1ZSldO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdGhlIGh1bWFuLXJlYWRhYmxlIHRleHQgKEMzLUE0KSB0byBtYWNoaW5lLXJlYWRhYmxlIHZhbHVlICgwLTEyKS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGhlIHByb3ZpZGVkIG5vdGUuXG4gICAqIEByZXR1cm4ge251bWJlcnx1bmRlZmluZWR9IFRoZSByZXNwZWN0aXZlIHZhbHVlLCBvciB1bmRlZmluZWQgaWYgaW52YWxpZC5cbiAgICovXG4gIG5vdGVUb1ZhbHVlKHRleHQpIHtcbiAgICBjb25zdCBub3JtYWxpemVkVGV4dCA9IHRleHQudHJpbSgpLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgaSA9IEZpZWxkUGl0Y2guTk9URVMuaW5kZXhPZihub3JtYWxpemVkVGV4dCk7XG4gICAgcmV0dXJuIGkgPiAtMSA/IGkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB0ZXh0IHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgZmllbGQgbm9kZS5cbiAgICogQHJldHVybiB7P3N0cmluZ30gVGhlIEhUTUwgdmFsdWUgaWYgd2UncmUgZWRpdGluZywgb3RoZXJ3aXNlIG51bGwuIE51bGxcbiAgICogICBtZWFucyB0aGUgc3VwZXIgY2xhc3Mgd2lsbCBoYW5kbGUgaXQsIGxpa2VseSBhIHN0cmluZyBjYXN0IG9mIHZhbHVlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBnZXRUZXh0XygpIHtcbiAgICBpZiAodGhpcy5pc0JlaW5nRWRpdGVkXykge1xuICAgICAgcmV0dXJuIHN1cGVyLmdldFRleHRfKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZhbHVlVG9Ob3RlKHRoaXMuZ2V0VmFsdWUoKSkgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gdGhlIHByb3ZpZGVkIHZhbHVlIGludG8gYSB0ZXh0IHRvIHNob3cgaW4gdGhlIEhUTUwgaW5wdXQuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHN0b3JlZCBpbiB0aGlzIGZpZWxkLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSB0ZXh0IHRvIHNob3cgb24gdGhlIEhUTUwgaW5wdXQuXG4gICAqL1xuICBnZXRFZGl0b3JUZXh0Xyh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlVG9Ob3RlKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gdGhlIHRleHQgcmVjZWl2ZWQgZnJvbSB0aGUgSFRNTCBpbnB1dCAobm90ZSkgaW50byBhIHZhbHVlXG4gICAqIHRvIHN0b3JlIGluIHRoaXMgZmllbGQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRleHQgcmVjZWl2ZWQgZnJvbSB0aGUgSFRNTCBpbnB1dC5cbiAgICogQHJldHVybiB7Kn0gVGhlIHZhbHVlIHRvIHN0b3JlLlxuICAgKi9cbiAgZ2V0VmFsdWVGcm9tRWRpdG9yVGV4dF8odGV4dCkge1xuICAgIHJldHVybiB0aGlzLm5vdGVUb1ZhbHVlKHRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGdyYXBoIHdoZW4gdGhlIGZpZWxkIHJlcmVuZGVycy5cbiAgICogQHByaXZhdGVcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICByZW5kZXJfKCkge1xuICAgIHN1cGVyLnJlbmRlcl8oKTtcbiAgICB0aGlzLnVwZGF0ZUdyYXBoXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZHJhdyB0aGUgbm90ZSBwaWNrZXIgd2l0aCB0aGUgY3VycmVudCBub3RlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdXBkYXRlR3JhcGhfKCkge1xuICAgIGlmICghdGhpcy5pbWFnZUVsZW1lbnRfKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGkgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgdGhpcy5pbWFnZUVsZW1lbnRfLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICgtaSAqIDM3KSArICdweCAwJztcbiAgfVxuXG4gIC8qKlxuICAgKiBFbnN1cmUgdGhhdCBvbmx5IGEgdmFsaWQgdmFsdWUgbWF5IGJlIGVudGVyZWQuXG4gICAqIEBwYXJhbSB7Kn0gb3B0X25ld1ZhbHVlIFRoZSBpbnB1dCB2YWx1ZS5cbiAgICogQHJldHVybiB7Kn0gQSB2YWxpZCB2YWx1ZSwgb3IgbnVsbCBpZiBpbnZhbGlkLlxuICAgKi9cbiAgZG9DbGFzc1ZhbGlkYXRpb25fKG9wdF9uZXdWYWx1ZSkge1xuICAgIGlmIChvcHRfbmV3VmFsdWUgPT09IG51bGwgfHwgb3B0X25ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBub3RlID0gdGhpcy52YWx1ZVRvTm90ZShvcHRfbmV3VmFsdWUpO1xuICAgIGlmIChub3RlKSB7XG4gICAgICByZXR1cm4gb3B0X25ld1ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIEFsbCBub3RlcyBhdmFpbGFibGUgZm9yIHRoZSBwaWNrZXIuXG4gKi9cbkZpZWxkUGl0Y2guTk9URVMgPSAnQzMgRDMgRTMgRjMgRzMgQTMgQjMgQzQgRDQgRTQgRjQgRzQgQTQnLnNwbGl0KC8gLyk7XG5cblxuQmxvY2tseS5maWVsZFJlZ2lzdHJ5LnJlZ2lzdGVyKCdmaWVsZF9waXRjaCcsIEZpZWxkUGl0Y2gpO1xuXG5CbG9ja2x5LkNzcy5yZWdpc3RlcihbXG5cbi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuYCAjbm90ZVBpY2tlciB7XG4gICAgYmFja2dyb3VuZC0gaW1hZ2U6IHVybChub3Rlcy5wbmcpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgaGVpZ2h0OiAxMDlweDtcbiAgICB3aWR0aDogNDZweDtcbiAgfWBcbiAgLyogZXNsaW50LWVuYWJsZSBpbmRlbnQgKi9cbl0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/field_pitch.js\n");

/***/ })

})