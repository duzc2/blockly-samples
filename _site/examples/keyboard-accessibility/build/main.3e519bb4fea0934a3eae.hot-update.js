webpackHotUpdate("main",{

/***/ "./src/field_pitch.js":
/*!****************************!*\
  !*** ./src/field_pitch.js ***!
  \****************************/
/*! exports provided: FieldPitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FieldPitch\", function() { return FieldPitch; });\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockly/core */ \"./node_modules/blockly/dist/core-browser.js\");\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * @license\n * Copyright 2016 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Music pitch input field. Borrowed from Blockly Games.\n * @author fraser@google.com (Neil Fraser)\n * @author samelh@google.com (Sam El-Husseini)\n */\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n/**\n * Pitch field from Blockly Games music.\n */\n\nvar FieldPitch = /*#__PURE__*/function (_Blockly$FieldTextInp) {\n  _inherits(FieldPitch, _Blockly$FieldTextInp);\n\n  var _super = _createSuper(FieldPitch);\n\n  /**\n   * Class for an editable pitch field.\n   * @param {string} text The initial content of the field.\n   * @extends {Blockly.FieldTextInput}\n   * @constructor\n   */\n  function FieldPitch(text) {\n    _classCallCheck(this, FieldPitch);\n\n    return _super.call(this, text);\n  }\n  /**\n   * Construct a FieldPitch from a JSON arg object.\n   * @param {!Object} options A JSON object with options (pitch).\n   * @return {!FieldPitch} The new field instance.\n   * @package\n   * @nocollapse\n   */\n\n\n  _createClass(FieldPitch, [{\n    key: \"showEditor_\",\n\n    /**\n     * Show the inline free-text editor on top of the text and the note picker.\n     * @private\n     */\n    value: function showEditor_() {\n      _get(_getPrototypeOf(FieldPitch.prototype), \"showEditor_\", this).call(this);\n\n      var div = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.WidgetDiv.DIV;\n\n      if (!div.firstChild) {\n        // Mobile interface uses Blockly.prompt.\n        return;\n      } // Build the DOM.\n\n\n      var editor = this.dropdownCreate_();\n      blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.DropDownDiv.getContentDiv().appendChild(editor);\n      blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.DropDownDiv.setColour(this.sourceBlock_.getColour(), this.sourceBlock_.style.colourTertiary);\n      blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.DropDownDiv.showPositionedByField(this, this.dropdownDispose_.bind(this)); // The note picker is different from other fields in that it updates on\n      // mousemove even if it's not in the middle of a drag.  In future we may\n      // change this behaviour.  For now, using bindEvent_ instead of\n      // bindEventWithChecks_ allows it to work without a mousedown/touchstart.\n\n      this.clickWrapper_ = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.bindEvent_(this.imageElement_, 'click', this, this.hide_);\n      this.moveWrapper_ = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.bindEvent_(this.imageElement_, 'mousemove', this, this.onMouseMove);\n      this.updateGraph_();\n    }\n    /**\n     * Create the pitch editor.\n     * @return {!Element} The newly created pitch picker.\n     * @private\n     */\n\n  }, {\n    key: \"dropdownCreate_\",\n    value: function dropdownCreate_() {\n      this.imageElement_ = document.createElement('div');\n      this.imageElement_.id = 'notePicker';\n      return this.imageElement_;\n    }\n    /**\n     * Dispose of events belonging to the pitch editor.\n     * @private\n     */\n\n  }, {\n    key: \"dropdownDispose_\",\n    value: function dropdownDispose_() {\n      blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.unbindEvent_(this.clickWrapper_);\n      blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.unbindEvent_(this.moveWrapper_);\n    }\n    /**\n     * Hide the editor.\n     * @private\n     */\n\n  }, {\n    key: \"hide_\",\n    value: function hide_() {\n      blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.WidgetDiv.hide();\n      blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.DropDownDiv.hideWithoutAnimation();\n    }\n    /**\n     * Set the note to match the mouse's position.\n     * @param {!Event} e Mouse move event.\n     */\n\n  }, {\n    key: \"onMouseMove\",\n    value: function onMouseMove(e) {\n      var bBox = this.imageElement_.getBoundingClientRect();\n      var dy = e.clientY - bBox.top;\n      var note = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.utils.math.clamp(Math.round(13.5 - dy / 7.5), 0, 12);\n      this.imageElement_.style.backgroundPosition = -note * 37 + 'px 0';\n      this.setEditorValue_(note);\n    }\n    /**\n     * Convert the machine-readable value (0-12) to human-readable text (C3-A4).\n     * @param {number|string} value The provided value.\n     * @return {string|undefined} The respective note, or undefined if invalid.\n     */\n\n  }, {\n    key: \"valueToNote\",\n    value: function valueToNote(value) {\n      return FieldPitch.NOTES[Number(value)];\n    }\n    /**\n     * Convert the human-readable text (C3-A4) to machine-readable value (0-12).\n     * @param {string} text The provided note.\n     * @return {number|undefined} The respective value, or undefined if invalid.\n     */\n\n  }, {\n    key: \"noteToValue\",\n    value: function noteToValue(text) {\n      var normalizedText = text.trim().toUpperCase();\n      var i = FieldPitch.NOTES.indexOf(normalizedText);\n      return i > -1 ? i : undefined;\n    }\n    /**\n     * Get the text to be displayed on the field node.\n     * @return {?string} The HTML value if we're editing, otherwise null. Null\n     *   means the super class will handle it, likely a string cast of value.\n     * @protected\n     */\n\n  }, {\n    key: \"getText_\",\n    value: function getText_() {\n      if (this.isBeingEdited_) {\n        return _get(_getPrototypeOf(FieldPitch.prototype), \"getText_\", this).call(this);\n      }\n\n      return this.valueToNote(this.getValue()) || null;\n    }\n    /**\n     * Transform the provided value into a text to show in the HTML input.\n     * @param {*} value The value stored in this field.\n     * @return {string} The text to show on the HTML input.\n     */\n\n  }, {\n    key: \"getEditorText_\",\n    value: function getEditorText_(value) {\n      return this.valueToNote(value);\n    }\n    /**\n     * Transform the text received from the HTML input (note) into a value\n     * to store in this field.\n     * @param {string} text Text received from the HTML input.\n     * @return {*} The value to store.\n     */\n\n  }, {\n    key: \"getValueFromEditorText_\",\n    value: function getValueFromEditorText_(text) {\n      return this.noteToValue(text);\n    }\n    /**\n     * Updates the graph when the field rerenders.\n     * @private\n     * @override\n     */\n\n  }, {\n    key: \"render_\",\n    value: function render_() {\n      _get(_getPrototypeOf(FieldPitch.prototype), \"render_\", this).call(this);\n\n      this.updateGraph_();\n    }\n    /**\n     * Redraw the note picker with the current note.\n     * @private\n     */\n\n  }, {\n    key: \"updateGraph_\",\n    value: function updateGraph_() {\n      if (!this.imageElement_) {\n        return;\n      }\n\n      var i = this.getValue();\n      this.imageElement_.style.backgroundPosition = -i * 37 + 'px 0';\n    }\n    /**\n     * Ensure that only a valid value may be entered.\n     * @param {*} opt_newValue The input value.\n     * @return {*} A valid value, or null if invalid.\n     */\n\n  }, {\n    key: \"doClassValidation_\",\n    value: function doClassValidation_(opt_newValue) {\n      if (opt_newValue === null || opt_newValue === undefined) {\n        return null;\n      }\n\n      var note = this.valueToNote(opt_newValue);\n\n      if (note) {\n        return opt_newValue;\n      }\n\n      return null;\n    }\n  }], [{\n    key: \"fromJson\",\n    value: function fromJson(options) {\n      return new FieldPitch(options['pitch']);\n    }\n  }]);\n\n  return FieldPitch;\n}(blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.FieldTextInput);\n/**\n * All notes available for the picker.\n */\n\nFieldPitch.NOTES = 'C3 D3 E3 F3 G3 A3 B3 C4 D4 E4 F4 G4 A4'.split(/ /);\nblockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.fieldRegistry.register('field_pitch', FieldPitch);\nblockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.Css.register([\"#notePicker {\\n    background- image: url(notes.png);\\nborder: 1px solid #ccc;\\nheight: 109px;\\nwidth: 46px;\\n}\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmllbGRfcGl0Y2guanM/OThkZCJdLCJuYW1lcyI6WyJGaWVsZFBpdGNoIiwidGV4dCIsImRpdiIsIkJsb2NrbHkiLCJXaWRnZXREaXYiLCJESVYiLCJmaXJzdENoaWxkIiwiZWRpdG9yIiwiZHJvcGRvd25DcmVhdGVfIiwiRHJvcERvd25EaXYiLCJnZXRDb250ZW50RGl2IiwiYXBwZW5kQ2hpbGQiLCJzZXRDb2xvdXIiLCJzb3VyY2VCbG9ja18iLCJnZXRDb2xvdXIiLCJzdHlsZSIsImNvbG91clRlcnRpYXJ5Iiwic2hvd1Bvc2l0aW9uZWRCeUZpZWxkIiwiZHJvcGRvd25EaXNwb3NlXyIsImJpbmQiLCJjbGlja1dyYXBwZXJfIiwiYmluZEV2ZW50XyIsImltYWdlRWxlbWVudF8iLCJoaWRlXyIsIm1vdmVXcmFwcGVyXyIsIm9uTW91c2VNb3ZlIiwidXBkYXRlR3JhcGhfIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJ1bmJpbmRFdmVudF8iLCJoaWRlIiwiaGlkZVdpdGhvdXRBbmltYXRpb24iLCJlIiwiYkJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImR5IiwiY2xpZW50WSIsInRvcCIsIm5vdGUiLCJ1dGlscyIsIm1hdGgiLCJjbGFtcCIsIk1hdGgiLCJyb3VuZCIsImJhY2tncm91bmRQb3NpdGlvbiIsInNldEVkaXRvclZhbHVlXyIsInZhbHVlIiwiTk9URVMiLCJOdW1iZXIiLCJub3JtYWxpemVkVGV4dCIsInRyaW0iLCJ0b1VwcGVyQ2FzZSIsImkiLCJpbmRleE9mIiwidW5kZWZpbmVkIiwiaXNCZWluZ0VkaXRlZF8iLCJ2YWx1ZVRvTm90ZSIsImdldFZhbHVlIiwibm90ZVRvVmFsdWUiLCJvcHRfbmV3VmFsdWUiLCJvcHRpb25zIiwiRmllbGRUZXh0SW5wdXQiLCJzcGxpdCIsImZpZWxkUmVnaXN0cnkiLCJyZWdpc3RlciIsIkNzcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7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QUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7O0FBcktBO0FBQUE7QUFBQSxtQ0FzS2lCO0FBQ2IsVUFBSSxDQUFDLEtBQUtKLGFBQVYsRUFBeUI7QUFDdkI7QUFDRDs7QUFDRCxVQUFNK0IsQ0FBQyxHQUFHLEtBQUtLLFFBQUwsRUFBVjtBQUNBLFdBQUtwQyxhQUFMLENBQW1CUCxLQUFuQixDQUF5QjhCLGtCQUF6QixHQUErQyxDQUFDUSxDQUFELEdBQUssRUFBTixHQUFZLE1BQTFEO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQWxMQTtBQUFBO0FBQUEsdUNBbUxxQk8sWUFuTHJCLEVBbUxtQztBQUMvQixVQUFJQSxZQUFZLEtBQUssSUFBakIsSUFBeUJBLFlBQVksS0FBS0wsU0FBOUMsRUFBeUQ7QUFDdkQsZUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsVUFBTWhCLElBQUksR0FBRyxLQUFLa0IsV0FBTCxDQUFpQkcsWUFBakIsQ0FBYjs7QUFDQSxVQUFJckIsSUFBSixFQUFVO0FBQ1IsZUFBT3FCLFlBQVA7QUFDRDs7QUFDRCxhQUFPLElBQVA7QUFDRDtBQTVMSDtBQUFBO0FBQUEsNkJBa0JrQkMsT0FsQmxCLEVBa0IyQjtBQUN2QixhQUFPLElBQUk3RCxVQUFKLENBQWU2RCxPQUFPLENBQUMsT0FBRCxDQUF0QixDQUFQO0FBQ0Q7QUFwQkg7O0FBQUE7QUFBQSxFQUFnQzFELG1EQUFPLENBQUMyRCxjQUF4QztBQStMQTtBQUNBO0FBQ0E7O0FBQ0E5RCxVQUFVLENBQUNnRCxLQUFYLEdBQW1CLHlDQUF5Q2UsS0FBekMsQ0FBK0MsR0FBL0MsQ0FBbkI7QUFHQTVELG1EQUFPLENBQUM2RCxhQUFSLENBQXNCQyxRQUF0QixDQUErQixhQUEvQixFQUE4Q2pFLFVBQTlDO0FBRUFHLG1EQUFPLENBQUMrRCxHQUFSLENBQVlELFFBQVosQ0FBcUIsbUhBQXJCIiwiZmlsZSI6Ii4vc3JjL2ZpZWxkX3BpdGNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgTXVzaWMgcGl0Y2ggaW5wdXQgZmllbGQuIEJvcnJvd2VkIGZyb20gQmxvY2tseSBHYW1lcy5cbiAqIEBhdXRob3IgZnJhc2VyQGdvb2dsZS5jb20gKE5laWwgRnJhc2VyKVxuICogQGF1dGhvciBzYW1lbGhAZ29vZ2xlLmNvbSAoU2FtIEVsLUh1c3NlaW5pKVxuICovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBCbG9ja2x5IGZyb20gJ2Jsb2NrbHkvY29yZSc7XG5cbi8qKlxuICogUGl0Y2ggZmllbGQgZnJvbSBCbG9ja2x5IEdhbWVzIG11c2ljLlxuICovXG5leHBvcnQgY2xhc3MgRmllbGRQaXRjaCBleHRlbmRzIEJsb2NrbHkuRmllbGRUZXh0SW5wdXQge1xuICAvKipcbiAgICogQ2xhc3MgZm9yIGFuIGVkaXRhYmxlIHBpdGNoIGZpZWxkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgaW5pdGlhbCBjb250ZW50IG9mIHRoZSBmaWVsZC5cbiAgICogQGV4dGVuZHMge0Jsb2NrbHkuRmllbGRUZXh0SW5wdXR9XG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IodGV4dCkge1xuICAgIHN1cGVyKHRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIEZpZWxkUGl0Y2ggZnJvbSBhIEpTT04gYXJnIG9iamVjdC5cbiAgICogQHBhcmFtIHshT2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIChwaXRjaCkuXG4gICAqIEByZXR1cm4geyFGaWVsZFBpdGNofSBUaGUgbmV3IGZpZWxkIGluc3RhbmNlLlxuICAgKiBAcGFja2FnZVxuICAgKiBAbm9jb2xsYXBzZVxuICAgKi9cbiAgc3RhdGljIGZyb21Kc29uKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IEZpZWxkUGl0Y2gob3B0aW9uc1sncGl0Y2gnXSk7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyB0aGUgaW5saW5lIGZyZWUtdGV4dCBlZGl0b3Igb24gdG9wIG9mIHRoZSB0ZXh0IGFuZCB0aGUgbm90ZSBwaWNrZXIuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzaG93RWRpdG9yXygpIHtcbiAgICBzdXBlci5zaG93RWRpdG9yXygpO1xuXG4gICAgY29uc3QgZGl2ID0gQmxvY2tseS5XaWRnZXREaXYuRElWO1xuICAgIGlmICghZGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgIC8vIE1vYmlsZSBpbnRlcmZhY2UgdXNlcyBCbG9ja2x5LnByb21wdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gQnVpbGQgdGhlIERPTS5cbiAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmRyb3Bkb3duQ3JlYXRlXygpO1xuICAgIEJsb2NrbHkuRHJvcERvd25EaXYuZ2V0Q29udGVudERpdigpLmFwcGVuZENoaWxkKGVkaXRvcik7XG5cbiAgICBCbG9ja2x5LkRyb3BEb3duRGl2LnNldENvbG91cih0aGlzLnNvdXJjZUJsb2NrXy5nZXRDb2xvdXIoKSxcbiAgICAgICAgdGhpcy5zb3VyY2VCbG9ja18uc3R5bGUuY29sb3VyVGVydGlhcnkpO1xuXG4gICAgQmxvY2tseS5Ecm9wRG93bkRpdi5zaG93UG9zaXRpb25lZEJ5RmllbGQoXG4gICAgICAgIHRoaXMsIHRoaXMuZHJvcGRvd25EaXNwb3NlXy5iaW5kKHRoaXMpKTtcblxuICAgIC8vIFRoZSBub3RlIHBpY2tlciBpcyBkaWZmZXJlbnQgZnJvbSBvdGhlciBmaWVsZHMgaW4gdGhhdCBpdCB1cGRhdGVzIG9uXG4gICAgLy8gbW91c2Vtb3ZlIGV2ZW4gaWYgaXQncyBub3QgaW4gdGhlIG1pZGRsZSBvZiBhIGRyYWcuICBJbiBmdXR1cmUgd2UgbWF5XG4gICAgLy8gY2hhbmdlIHRoaXMgYmVoYXZpb3VyLiAgRm9yIG5vdywgdXNpbmcgYmluZEV2ZW50XyBpbnN0ZWFkIG9mXG4gICAgLy8gYmluZEV2ZW50V2l0aENoZWNrc18gYWxsb3dzIGl0IHRvIHdvcmsgd2l0aG91dCBhIG1vdXNlZG93bi90b3VjaHN0YXJ0LlxuICAgIHRoaXMuY2xpY2tXcmFwcGVyXyA9XG4gICAgICBCbG9ja2x5LmJpbmRFdmVudF8odGhpcy5pbWFnZUVsZW1lbnRfLCAnY2xpY2snLCB0aGlzLFxuICAgICAgICAgIHRoaXMuaGlkZV8pO1xuICAgIHRoaXMubW92ZVdyYXBwZXJfID1cbiAgICAgIEJsb2NrbHkuYmluZEV2ZW50Xyh0aGlzLmltYWdlRWxlbWVudF8sICdtb3VzZW1vdmUnLCB0aGlzLFxuICAgICAgICAgIHRoaXMub25Nb3VzZU1vdmUpO1xuXG4gICAgdGhpcy51cGRhdGVHcmFwaF8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIHBpdGNoIGVkaXRvci5cbiAgICogQHJldHVybiB7IUVsZW1lbnR9IFRoZSBuZXdseSBjcmVhdGVkIHBpdGNoIHBpY2tlci5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRyb3Bkb3duQ3JlYXRlXygpIHtcbiAgICB0aGlzLmltYWdlRWxlbWVudF8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmltYWdlRWxlbWVudF8uaWQgPSAnbm90ZVBpY2tlcic7XG5cbiAgICByZXR1cm4gdGhpcy5pbWFnZUVsZW1lbnRfO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3Bvc2Ugb2YgZXZlbnRzIGJlbG9uZ2luZyB0byB0aGUgcGl0Y2ggZWRpdG9yLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZHJvcGRvd25EaXNwb3NlXygpIHtcbiAgICBCbG9ja2x5LnVuYmluZEV2ZW50Xyh0aGlzLmNsaWNrV3JhcHBlcl8pO1xuICAgIEJsb2NrbHkudW5iaW5kRXZlbnRfKHRoaXMubW92ZVdyYXBwZXJfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBlZGl0b3IuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBoaWRlXygpIHtcbiAgICBCbG9ja2x5LldpZGdldERpdi5oaWRlKCk7XG4gICAgQmxvY2tseS5Ecm9wRG93bkRpdi5oaWRlV2l0aG91dEFuaW1hdGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbm90ZSB0byBtYXRjaCB0aGUgbW91c2UncyBwb3NpdGlvbi5cbiAgICogQHBhcmFtIHshRXZlbnR9IGUgTW91c2UgbW92ZSBldmVudC5cbiAgICovXG4gIG9uTW91c2VNb3ZlKGUpIHtcbiAgICBjb25zdCBiQm94ID0gdGhpcy5pbWFnZUVsZW1lbnRfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGR5ID0gZS5jbGllbnRZIC0gYkJveC50b3A7XG4gICAgY29uc3Qgbm90ZSA9IEJsb2NrbHkudXRpbHMubWF0aC5jbGFtcChNYXRoLnJvdW5kKDEzLjUgLSBkeSAvIDcuNSksIDAsIDEyKTtcbiAgICB0aGlzLmltYWdlRWxlbWVudF8uc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gKC1ub3RlICogMzcpICsgJ3B4IDAnO1xuICAgIHRoaXMuc2V0RWRpdG9yVmFsdWVfKG5vdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdGhlIG1hY2hpbmUtcmVhZGFibGUgdmFsdWUgKDAtMTIpIHRvIGh1bWFuLXJlYWRhYmxlIHRleHQgKEMzLUE0KS5cbiAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB2YWx1ZSBUaGUgcHJvdmlkZWQgdmFsdWUuXG4gICAqIEByZXR1cm4ge3N0cmluZ3x1bmRlZmluZWR9IFRoZSByZXNwZWN0aXZlIG5vdGUsIG9yIHVuZGVmaW5lZCBpZiBpbnZhbGlkLlxuICAgKi9cbiAgdmFsdWVUb05vdGUodmFsdWUpIHtcbiAgICByZXR1cm4gRmllbGRQaXRjaC5OT1RFU1tOdW1iZXIodmFsdWUpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRoZSBodW1hbi1yZWFkYWJsZSB0ZXh0IChDMy1BNCkgdG8gbWFjaGluZS1yZWFkYWJsZSB2YWx1ZSAoMC0xMikuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRoZSBwcm92aWRlZCBub3RlLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ8dW5kZWZpbmVkfSBUaGUgcmVzcGVjdGl2ZSB2YWx1ZSwgb3IgdW5kZWZpbmVkIGlmIGludmFsaWQuXG4gICAqL1xuICBub3RlVG9WYWx1ZSh0ZXh0KSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZFRleHQgPSB0ZXh0LnRyaW0oKS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IGkgPSBGaWVsZFBpdGNoLk5PVEVTLmluZGV4T2Yobm9ybWFsaXplZFRleHQpO1xuICAgIHJldHVybiBpID4gLTEgPyBpIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdGV4dCB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIGZpZWxkIG5vZGUuXG4gICAqIEByZXR1cm4gez9zdHJpbmd9IFRoZSBIVE1MIHZhbHVlIGlmIHdlJ3JlIGVkaXRpbmcsIG90aGVyd2lzZSBudWxsLiBOdWxsXG4gICAqICAgbWVhbnMgdGhlIHN1cGVyIGNsYXNzIHdpbGwgaGFuZGxlIGl0LCBsaWtlbHkgYSBzdHJpbmcgY2FzdCBvZiB2YWx1ZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgZ2V0VGV4dF8oKSB7XG4gICAgaWYgKHRoaXMuaXNCZWluZ0VkaXRlZF8pIHtcbiAgICAgIHJldHVybiBzdXBlci5nZXRUZXh0XygpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy52YWx1ZVRvTm90ZSh0aGlzLmdldFZhbHVlKCkpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIHRoZSBwcm92aWRlZCB2YWx1ZSBpbnRvIGEgdGV4dCB0byBzaG93IGluIHRoZSBIVE1MIGlucHV0LlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBzdG9yZWQgaW4gdGhpcyBmaWVsZC5cbiAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgdGV4dCB0byBzaG93IG9uIHRoZSBIVE1MIGlucHV0LlxuICAgKi9cbiAgZ2V0RWRpdG9yVGV4dF8odmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVRvTm90ZSh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIHRoZSB0ZXh0IHJlY2VpdmVkIGZyb20gdGhlIEhUTUwgaW5wdXQgKG5vdGUpIGludG8gYSB2YWx1ZVxuICAgKiB0byBzdG9yZSBpbiB0aGlzIGZpZWxkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUZXh0IHJlY2VpdmVkIGZyb20gdGhlIEhUTUwgaW5wdXQuXG4gICAqIEByZXR1cm4geyp9IFRoZSB2YWx1ZSB0byBzdG9yZS5cbiAgICovXG4gIGdldFZhbHVlRnJvbUVkaXRvclRleHRfKHRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5ub3RlVG9WYWx1ZSh0ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBncmFwaCB3aGVuIHRoZSBmaWVsZCByZXJlbmRlcnMuXG4gICAqIEBwcml2YXRlXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcmVuZGVyXygpIHtcbiAgICBzdXBlci5yZW5kZXJfKCk7XG4gICAgdGhpcy51cGRhdGVHcmFwaF8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWRyYXcgdGhlIG5vdGUgcGlja2VyIHdpdGggdGhlIGN1cnJlbnQgbm90ZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHVwZGF0ZUdyYXBoXygpIHtcbiAgICBpZiAoIXRoaXMuaW1hZ2VFbGVtZW50Xykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgIHRoaXMuaW1hZ2VFbGVtZW50Xy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAoLWkgKiAzNykgKyAncHggMCc7XG4gIH1cblxuICAvKipcbiAgICogRW5zdXJlIHRoYXQgb25seSBhIHZhbGlkIHZhbHVlIG1heSBiZSBlbnRlcmVkLlxuICAgKiBAcGFyYW0geyp9IG9wdF9uZXdWYWx1ZSBUaGUgaW5wdXQgdmFsdWUuXG4gICAqIEByZXR1cm4geyp9IEEgdmFsaWQgdmFsdWUsIG9yIG51bGwgaWYgaW52YWxpZC5cbiAgICovXG4gIGRvQ2xhc3NWYWxpZGF0aW9uXyhvcHRfbmV3VmFsdWUpIHtcbiAgICBpZiAob3B0X25ld1ZhbHVlID09PSBudWxsIHx8IG9wdF9uZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3Qgbm90ZSA9IHRoaXMudmFsdWVUb05vdGUob3B0X25ld1ZhbHVlKTtcbiAgICBpZiAobm90ZSkge1xuICAgICAgcmV0dXJuIG9wdF9uZXdWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBBbGwgbm90ZXMgYXZhaWxhYmxlIGZvciB0aGUgcGlja2VyLlxuICovXG5GaWVsZFBpdGNoLk5PVEVTID0gJ0MzIEQzIEUzIEYzIEczIEEzIEIzIEM0IEQ0IEU0IEY0IEc0IEE0Jy5zcGxpdCgvIC8pO1xuXG5cbkJsb2NrbHkuZmllbGRSZWdpc3RyeS5yZWdpc3RlcignZmllbGRfcGl0Y2gnLCBGaWVsZFBpdGNoKTtcblxuQmxvY2tseS5Dc3MucmVnaXN0ZXIoW1xuXG5gI25vdGVQaWNrZXIge1xuICAgIGJhY2tncm91bmQtIGltYWdlOiB1cmwobm90ZXMucG5nKTtcbmJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5oZWlnaHQ6IDEwOXB4O1xud2lkdGg6IDQ2cHg7XG59YFxuXSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/field_pitch.js\n");

/***/ })

})