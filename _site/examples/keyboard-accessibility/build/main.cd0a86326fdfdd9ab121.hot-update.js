webpackHotUpdate("main",{

/***/ "./src/overrides.js":
/*!**************************!*\
  !*** ./src/overrides.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockly/core */ \"./node_modules/blockly/dist/core-browser.js\");\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speaker */ \"./src/speaker.js\");\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview The class representing a line cursor.\n * A line cursor traverses the blocks as if they were\n * lines of code in a text editor.\n * Previous and next go up and down lines. In and out go\n * through the elements in a line.\n * @author aschmiedt@google.com (Abby Schmiedt)\n */\n\n\nfunction _readOnlyError(name) { throw new TypeError(\"\\\"\" + name + \"\\\" is read-only\"); }\n\n\n\n\nblockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.navigation.handleEnterForWS_ = function (workspace) {\n  var cursor = workspace.getCursor();\n  var curNode = cursor.getCurNode();\n  var nodeType = curNode.getType();\n\n  if (nodeType == blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.types.FIELD && curNode.getLocation().isClickable()) {\n    // TODO: Had to override so I could add this speaker in.\n    _speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].speak('Use next and previous to read off your options.');\n\n    /** @type {!Blockly.Field} */\n    curNode.getLocation().showEditor();\n  } else if (curNode.isConnection() || nodeType == blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.types.WORKSPACE) {\n    blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.navigation.markAtCursor_();\n  } else if (nodeType == blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.types.BLOCK) {\n    blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.navigation.warn_('Cannot mark a block.');\n  } else if (nodeType == blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.types.STACK) {\n    blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.navigation.warn_('Cannot mark a stack.');\n  }\n};\n\nblockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.FieldDropdown.prototype.onBlocklyAction = function (action) {\n  var fieldNextOptions = 'To select this option hit enter';\n\n  if (this.menu_) {\n    switch (action.name) {\n      case blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.navigation.actionNames.PREVIOUS:\n        this.menu_.highlightPrevious();\n        _speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].speak(this.menu_.highlightedItem_.content_.alt, true);\n        _speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].speak(fieldNextOptions);\n        return true;\n\n      case blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.navigation.actionNames.NEXT:\n        this.menu_.highlightNext(); // TODO: Needed to override so that I could speak out the location when\n        // it changes.\n\n        _speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].speak(this.menu_.highlightedItem_.content_.alt, true);\n        _speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].speak(fieldNextOptions);\n        return true;\n\n      default:\n        return false;\n    }\n  }\n\n  return blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.FieldDropdown.superClass_.onBlocklyAction.call(this, action);\n};\n\nblockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.Block.prototype.toString = function (opt_maxLength, opt_emptyToken) {\n  var text = [];\n  var emptyFieldPlaceholder = opt_emptyToken || '?'; // Temporarily set flag to navigate to all fields.\n\n  var prevNavigateFields = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.NAVIGATE_ALL_FIELDS;\n  blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.NAVIGATE_ALL_FIELDS = true;\n  var node = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.createBlockNode(this);\n  var rootNode = node;\n  /**\n   * Whether or not to add parentheses around an input.\n   * @param {!Blockly.Connection} connection The connection.\n   * @return {boolean} True if we should add parentheses around the input.\n   */\n\n  function shouldAddParentheses(connection) {\n    var checks = connection.getCheck();\n\n    if (!checks && connection.targetConnection) {\n      checks = connection.targetConnection.getCheck();\n    }\n\n    return !!checks && (checks.indexOf('Boolean') != -1 || checks.indexOf('Number') != -1);\n  }\n  /**\n   * Check that we haven't circled back to the original root node.\n   */\n\n\n  function checkRoot() {\n    if (node && node.getType() == rootNode.getType() && node.getLocation() == rootNode.getLocation()) {\n      node = null;\n    }\n  } // Traverse the AST building up our text string.\n\n\n  while (node) {\n    switch (node.getType()) {\n      case blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.types.INPUT:\n        var connection =\n        /** @type {!Blockly.Connection} */\n        node.getLocation();\n\n        if (!node.in()) {\n          text.push(emptyFieldPlaceholder);\n        } else if (shouldAddParentheses(connection)) {\n          text.push('(');\n        }\n\n        break;\n\n      case blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.types.FIELD:\n        var field =\n        /** @type {Blockly.Field} */\n        node.getLocation();\n\n        if (field.name != blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.Block.COLLAPSED_FIELD_NAME) {\n          text.push(field.getText());\n        }\n\n        break;\n    }\n\n    var current = node;\n    node = current.in() || current.next(); // TODO: This only works in our specific use case of having a block with a\n    // single statement connection.\n\n    if (node && node.getType() == blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.types.INPUT && node.getLocation().type === blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.NEXT_STATEMENT) {\n      node = null;\n    }\n\n    if (!node) {\n      // Can't go in or next, keep going out until we can go next.\n      node = current.out();\n      checkRoot();\n\n      while (node && !node.next()) {\n        node = node.out();\n        checkRoot(); // If we hit an input on the way up, possibly close out parentheses.\n\n        if (node && node.getType() == blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.types.INPUT && shouldAddParentheses(\n        /** @type {!Blockly.Connection} */\n        node.getLocation())) {\n          text.push(')');\n        }\n      }\n\n      if (node) {\n        node = node.next();\n      }\n    }\n  } // Restore state of NAVIGATE_ALL_FIELDS.\n\n\n  blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.NAVIGATE_ALL_FIELDS = prevNavigateFields; // Run through our text array and simplify expression to remove parentheses\n  // around single field blocks.\n\n  for (var i = 2, l = text.length; i < l; i++) {\n    if (text[i - 2] == '(' && text[i] == ')') {\n      text[i - 2] = text[i - 1];\n      text.splice(i - 1, 2);\n      l -= 2;\n    }\n  } // Join the text array, removing spaces around added paranthesis.\n\n\n  text = (_readOnlyError(\"text\"), text.join(' ').replace(/(\\() | (\\))/gmi, '$1$2').trim() || '???');\n\n  if (opt_maxLength) {\n    // TODO: Improve truncation so that text from this block is given priority.\n    // E.g. \"1+2+3+4+5+6+7+8+9=0\" should be \"...6+7+8+9=0\", not \"1+2+3+4+5...\".\n    // E.g. \"1+2+3+4+5=6+7+8+9+0\" should be \"...4+5=6+7...\".\n    if (text.length > opt_maxLength) {\n      text = (_readOnlyError(\"text\"), text.substring(0, opt_maxLength - 3) + '...');\n    }\n  }\n\n  return text;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb3ZlcnJpZGVzLmpzPzFjYjQiXSwibmFtZXMiOlsiQmxvY2tseSIsIm5hdmlnYXRpb24iLCJoYW5kbGVFbnRlckZvcldTXyIsIndvcmtzcGFjZSIsImN1cnNvciIsImdldEN1cnNvciIsImN1ck5vZGUiLCJnZXRDdXJOb2RlIiwibm9kZVR5cGUiLCJnZXRUeXBlIiwiQVNUTm9kZSIsInR5cGVzIiwiRklFTEQiLCJnZXRMb2NhdGlvbiIsImlzQ2xpY2thYmxlIiwic3BlYWtlciIsInNwZWFrIiwic2hvd0VkaXRvciIsImlzQ29ubmVjdGlvbiIsIldPUktTUEFDRSIsIm1hcmtBdEN1cnNvcl8iLCJCTE9DSyIsIndhcm5fIiwiU1RBQ0siLCJGaWVsZERyb3Bkb3duIiwicHJvdG90eXBlIiwib25CbG9ja2x5QWN0aW9uIiwiYWN0aW9uIiwiZmllbGROZXh0T3B0aW9ucyIsIm1lbnVfIiwibmFtZSIsImFjdGlvbk5hbWVzIiwiUFJFVklPVVMiLCJoaWdobGlnaHRQcmV2aW91cyIsImhpZ2hsaWdodGVkSXRlbV8iLCJjb250ZW50XyIsImFsdCIsIk5FWFQiLCJoaWdobGlnaHROZXh0Iiwic3VwZXJDbGFzc18iLCJjYWxsIiwiQmxvY2siLCJ0b1N0cmluZyIsIm9wdF9tYXhMZW5ndGgiLCJvcHRfZW1wdHlUb2tlbiIsInRleHQiLCJlbXB0eUZpZWxkUGxhY2Vob2xkZXIiLCJwcmV2TmF2aWdhdGVGaWVsZHMiLCJOQVZJR0FURV9BTExfRklFTERTIiwibm9kZSIsImNyZWF0ZUJsb2NrTm9kZSIsInJvb3ROb2RlIiwic2hvdWxkQWRkUGFyZW50aGVzZXMiLCJjb25uZWN0aW9uIiwiY2hlY2tzIiwiZ2V0Q2hlY2siLCJ0YXJnZXRDb25uZWN0aW9uIiwiaW5kZXhPZiIsImNoZWNrUm9vdCIsIklOUFVUIiwiaW4iLCJwdXNoIiwiZmllbGQiLCJDT0xMQVBTRURfRklFTERfTkFNRSIsImdldFRleHQiLCJjdXJyZW50IiwibmV4dCIsInR5cGUiLCJORVhUX1NUQVRFTUVOVCIsIm91dCIsImkiLCJsIiwibGVuZ3RoIiwic3BsaWNlIiwiam9pbiIsInJlcGxhY2UiLCJ0cmltIiwic3Vic3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNhOzs7O0FBRWI7QUFDQTs7QUFHQUEsbURBQU8sQ0FBQ0MsVUFBUixDQUFtQkMsaUJBQW5CLEdBQXVDLFVBQVNDLFNBQVQsRUFBb0I7QUFDekQsTUFBTUMsTUFBTSxHQUFHRCxTQUFTLENBQUNFLFNBQVYsRUFBZjtBQUNBLE1BQU1DLE9BQU8sR0FBR0YsTUFBTSxDQUFDRyxVQUFQLEVBQWhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRixPQUFPLENBQUNHLE9BQVIsRUFBakI7O0FBQ0EsTUFBSUQsUUFBUSxJQUFJUixtREFBTyxDQUFDVSxPQUFSLENBQWdCQyxLQUFoQixDQUFzQkMsS0FBbEMsSUFDQU4sT0FBTyxDQUFDTyxXQUFSLEdBQXNCQyxXQUF0QixFQURKLEVBQ3lDO0FBQ3ZDO0FBQ0FDLG9EQUFPLENBQUNDLEtBQVIsQ0FBYyxpREFBZDs7QUFDQztBQUE4QlYsV0FBTyxDQUFDTyxXQUFSLEVBQS9CLENBQXVESSxVQUF2RDtBQUNELEdBTEQsTUFLTyxJQUFJWCxPQUFPLENBQUNZLFlBQVIsTUFDUFYsUUFBUSxJQUFJUixtREFBTyxDQUFDVSxPQUFSLENBQWdCQyxLQUFoQixDQUFzQlEsU0FEL0IsRUFDMEM7QUFDL0NuQix1REFBTyxDQUFDQyxVQUFSLENBQW1CbUIsYUFBbkI7QUFDRCxHQUhNLE1BR0EsSUFBSVosUUFBUSxJQUFJUixtREFBTyxDQUFDVSxPQUFSLENBQWdCQyxLQUFoQixDQUFzQlUsS0FBdEMsRUFBNkM7QUFDbERyQix1REFBTyxDQUFDQyxVQUFSLENBQW1CcUIsS0FBbkIsQ0FBeUIsc0JBQXpCO0FBQ0QsR0FGTSxNQUVBLElBQUlkLFFBQVEsSUFB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QUksQ0FBQzRCLE1BQUwsQ0FBWUgsQ0FBQyxHQUFHLENBQWhCLEVBQW1CLENBQW5CO0FBQ0FDLE9BQUMsSUFBSSxDQUFMO0FBQ0Q7QUFDRixHQTVGd0UsQ0E4RnpFOzs7QUFDQTFCLE1BQUksNEJBQUdBLElBQUksQ0FBQzZCLElBQUwsQ0FBVSxHQUFWLEVBQWVDLE9BQWYsQ0FBdUIsZ0JBQXZCLEVBQXlDLE1BQXpDLEVBQWlEQyxJQUFqRCxNQUEyRCxLQUE5RCxDQUFKOztBQUNBLE1BQUlqQyxhQUFKLEVBQW1CO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFFBQUlFLElBQUksQ0FBQzJCLE1BQUwsR0FBYzdCLGFBQWxCLEVBQWlDO0FBQy9CRSxVQUFJLDRCQUFHQSxJQUFJLENBQUNnQyxTQUFMLENBQWUsQ0FBZixFQUFrQmxDLGFBQWEsR0FBRyxDQUFsQyxJQUF1QyxLQUExQyxDQUFKO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPRSxJQUFQO0FBQ0QsQ0F6R0QiLCJmaWxlIjoiLi9zcmMvb3ZlcnJpZGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhlIGNsYXNzIHJlcHJlc2VudGluZyBhIGxpbmUgY3Vyc29yLlxuICogQSBsaW5lIGN1cnNvciB0cmF2ZXJzZXMgdGhlIGJsb2NrcyBhcyBpZiB0aGV5IHdlcmVcbiAqIGxpbmVzIG9mIGNvZGUgaW4gYSB0ZXh0IGVkaXRvci5cbiAqIFByZXZpb3VzIGFuZCBuZXh0IGdvIHVwIGFuZCBkb3duIGxpbmVzLiBJbiBhbmQgb3V0IGdvXG4gKiB0aHJvdWdoIHRoZSBlbGVtZW50cyBpbiBhIGxpbmUuXG4gKiBAYXV0aG9yIGFzY2htaWVkdEBnb29nbGUuY29tIChBYmJ5IFNjaG1pZWR0KVxuICovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBCbG9ja2x5IGZyb20gJ2Jsb2NrbHkvY29yZSc7XG5pbXBvcnQge3NwZWFrZXJ9IGZyb20gJy4vc3BlYWtlcic7XG5cblxuQmxvY2tseS5uYXZpZ2F0aW9uLmhhbmRsZUVudGVyRm9yV1NfID0gZnVuY3Rpb24od29ya3NwYWNlKSB7XG4gIGNvbnN0IGN1cnNvciA9IHdvcmtzcGFjZS5nZXRDdXJzb3IoKTtcbiAgY29uc3QgY3VyTm9kZSA9IGN1cnNvci5nZXRDdXJOb2RlKCk7XG4gIGNvbnN0IG5vZGVUeXBlID0gY3VyTm9kZS5nZXRUeXBlKCk7XG4gIGlmIChub2RlVHlwZSA9PSBCbG9ja2x5LkFTVE5vZGUudHlwZXMuRklFTEQgJiZcbiAgICAgIGN1ck5vZGUuZ2V0TG9jYXRpb24oKS5pc0NsaWNrYWJsZSgpKSB7XG4gICAgLy8gVE9ETzogSGFkIHRvIG92ZXJyaWRlIHNvIEkgY291bGQgYWRkIHRoaXMgc3BlYWtlciBpbi5cbiAgICBzcGVha2VyLnNwZWFrKCdVc2UgbmV4dCBhbmQgcHJldmlvdXMgdG8gcmVhZCBvZmYgeW91ciBvcHRpb25zLicpO1xuICAgICgvKiogQHR5cGUgeyFCbG9ja2x5LkZpZWxkfSAqLyhjdXJOb2RlLmdldExvY2F0aW9uKCkpKS5zaG93RWRpdG9yKCk7XG4gIH0gZWxzZSBpZiAoY3VyTm9kZS5pc0Nvbm5lY3Rpb24oKSB8fFxuICAgICAgbm9kZVR5cGUgPT0gQmxvY2tseS5BU1ROb2RlLnR5cGVzLldPUktTUEFDRSkge1xuICAgIEJsb2NrbHkubmF2aWdhdGlvbi5tYXJrQXRDdXJzb3JfKCk7XG4gIH0gZWxzZSBpZiAobm9kZVR5cGUgPT0gQmxvY2tseS5BU1ROb2RlLnR5cGVzLkJMT0NLKSB7XG4gICAgQmxvY2tseS5uYXZpZ2F0aW9uLndhcm5fKCdDYW5ub3QgbWFyayBhIGJsb2NrLicpO1xuICB9IGVsc2UgaWYgKG5vZGVUeXBlID09IEJsb2NrbHkuQVNUTm9kZS50eXBlcy5TVEFDSykge1xuICAgIEJsb2NrbHkubmF2aWdhdGlvbi53YXJuXygnQ2Fubm90IG1hcmsgYSBzdGFjay4nKTtcbiAgfVxufTtcblxuXG5CbG9ja2x5LkZpZWxkRHJvcGRvd24ucHJvdG90eXBlLm9uQmxvY2tseUFjdGlvbiA9IGZ1bmN0aW9uKGFjdGlvbikge1xuICBjb25zdCBmaWVsZE5leHRPcHRpb25zID0gJ1RvIHNlbGVjdCB0aGlzIG9wdGlvbiBoaXQgZW50ZXInO1xuICBpZiAodGhpcy5tZW51Xykge1xuICAgIHN3aXRjaCAoYWN0aW9uLm5hbWUpIHtcbiAgICAgIGNhc2UgQmxvY2tseS5uYXZpZ2F0aW9uLmFjdGlvbk5hbWVzLlBSRVZJT1VTOlxuICAgICAgICB0aGlzLm1lbnVfLmhpZ2hsaWdodFByZXZpb3VzKCk7XG4gICAgICAgIHNwZWFrZXIuc3BlYWsodGhpcy5tZW51Xy5oaWdobGlnaHRlZEl0ZW1fLmNvbnRlbnRfLmFsdCwgdHJ1ZSk7XG4gICAgICAgIHNwZWFrZXIuc3BlYWsoZmllbGROZXh0T3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSBCbG9ja2x5Lm5hdmlnYXRpb24uYWN0aW9uTmFtZXMuTkVYVDpcbiAgICAgICAgdGhpcy5tZW51Xy5oaWdobGlnaHROZXh0KCk7XG4gICAgICAgIC8vIFRPRE86IE5lZWRlZCB0byBvdmVycmlkZSBzbyB0aGF0IEkgY291bGQgc3BlYWsgb3V0IHRoZSBsb2NhdGlvbiB3aGVuXG4gICAgICAgIC8vIGl0IGNoYW5nZXMuXG4gICAgICAgIHNwZWFrZXIuc3BlYWsodGhpcy5tZW51Xy5oaWdobGlnaHRlZEl0ZW1fLmNvbnRlbnRfLmFsdCwgdHJ1ZSk7XG4gICAgICAgIHNwZWFrZXIuc3BlYWsoZmllbGROZXh0T3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gQmxvY2tseS5GaWVsZERyb3Bkb3duLnN1cGVyQ2xhc3NfLm9uQmxvY2tseUFjdGlvbi5jYWxsKHRoaXMsIGFjdGlvbik7XG59O1xuXG5cbkJsb2NrbHkuQmxvY2sucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24ob3B0X21heExlbmd0aCwgb3B0X2VtcHR5VG9rZW4pIHtcbiAgY29uc3QgdGV4dCA9IFtdO1xuICBjb25zdCBlbXB0eUZpZWxkUGxhY2Vob2xkZXIgPSBvcHRfZW1wdHlUb2tlbiB8fCAnPyc7XG5cbiAgLy8gVGVtcG9yYXJpbHkgc2V0IGZsYWcgdG8gbmF2aWdhdGUgdG8gYWxsIGZpZWxkcy5cbiAgY29uc3QgcHJldk5hdmlnYXRlRmllbGRzID0gQmxvY2tseS5BU1ROb2RlLk5BVklHQVRFX0FMTF9GSUVMRFM7XG4gIEJsb2NrbHkuQVNUTm9kZS5OQVZJR0FURV9BTExfRklFTERTID0gdHJ1ZTtcblxuICBsZXQgbm9kZSA9IEJsb2NrbHkuQVNUTm9kZS5jcmVhdGVCbG9ja05vZGUodGhpcyk7XG4gIGNvbnN0IHJvb3ROb2RlID0gbm9kZTtcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdG8gYWRkIHBhcmVudGhlc2VzIGFyb3VuZCBhbiBpbnB1dC5cbiAgICogQHBhcmFtIHshQmxvY2tseS5Db25uZWN0aW9ufSBjb25uZWN0aW9uIFRoZSBjb25uZWN0aW9uLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHdlIHNob3VsZCBhZGQgcGFyZW50aGVzZXMgYXJvdW5kIHRoZSBpbnB1dC5cbiAgICovXG4gIGZ1bmN0aW9uIHNob3VsZEFkZFBhcmVudGhlc2VzKGNvbm5lY3Rpb24pIHtcbiAgICBsZXQgY2hlY2tzID0gY29ubmVjdGlvbi5nZXRDaGVjaygpO1xuICAgIGlmICghY2hlY2tzICYmIGNvbm5lY3Rpb24udGFyZ2V0Q29ubmVjdGlvbikge1xuICAgICAgY2hlY2tzID0gY29ubmVjdGlvbi50YXJnZXRDb25uZWN0aW9uLmdldENoZWNrKCk7XG4gICAgfVxuICAgIHJldHVybiAhIWNoZWNrcyAmJiAoY2hlY2tzLmluZGV4T2YoJ0Jvb2xlYW4nKSAhPSAtMSB8fFxuICAgICAgICBjaGVja3MuaW5kZXhPZignTnVtYmVyJykgIT0gLTEpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoYXQgd2UgaGF2ZW4ndCBjaXJjbGVkIGJhY2sgdG8gdGhlIG9yaWdpbmFsIHJvb3Qgbm9kZS5cbiAgICovXG4gIGZ1bmN0aW9uIGNoZWNrUm9vdCgpIHtcbiAgICBpZiAobm9kZSAmJiBub2RlLmdldFR5cGUoKSA9PSByb290Tm9kZS5nZXRUeXBlKCkgJiZcbiAgICAgICAgbm9kZS5nZXRMb2NhdGlvbigpID09IHJvb3ROb2RlLmdldExvY2F0aW9uKCkpIHtcbiAgICAgIG5vZGUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRyYXZlcnNlIHRoZSBBU1QgYnVpbGRpbmcgdXAgb3VyIHRleHQgc3RyaW5nLlxuICB3aGlsZSAobm9kZSkge1xuICAgIHN3aXRjaCAobm9kZS5nZXRUeXBlKCkpIHtcbiAgICAgIGNhc2UgQmxvY2tseS5BU1ROb2RlLnR5cGVzLklOUFVUOlxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gLyoqIEB0eXBlIHshQmxvY2tseS5Db25uZWN0aW9ufSAqLyAobm9kZS5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgaWYgKCFub2RlLmluKCkpIHtcbiAgICAgICAgICB0ZXh0LnB1c2goZW1wdHlGaWVsZFBsYWNlaG9sZGVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChzaG91bGRBZGRQYXJlbnRoZXNlcyhjb25uZWN0aW9uKSkge1xuICAgICAgICAgIHRleHQucHVzaCgnKCcpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBCbG9ja2x5LkFTVE5vZGUudHlwZXMuRklFTEQ6XG4gICAgICAgIGNvbnN0IGZpZWxkID0gLyoqIEB0eXBlIHtCbG9ja2x5LkZpZWxkfSAqLyAobm9kZS5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgaWYgKGZpZWxkLm5hbWUgIT0gQmxvY2tseS5CbG9jay5DT0xMQVBTRURfRklFTERfTkFNRSkge1xuICAgICAgICAgIHRleHQucHVzaChmaWVsZC5nZXRUZXh0KCkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW50ID0gbm9kZTtcbiAgICBub2RlID0gY3VycmVudC5pbigpIHx8IGN1cnJlbnQubmV4dCgpO1xuICAgIC8vIFRPRE86IFRoaXMgb25seSB3b3JrcyBpbiBvdXIgc3BlY2lmaWMgdXNlIGNhc2Ugb2YgaGF2aW5nIGEgYmxvY2sgd2l0aCBhXG4gICAgLy8gc2luZ2xlIHN0YXRlbWVudCBjb25uZWN0aW9uLlxuICAgIGlmIChub2RlICYmIG5vZGUuZ2V0VHlwZSgpID09IEJsb2NrbHkuQVNUTm9kZS50eXBlcy5JTlBVVCAmJiBub2RlLmdldExvY2F0aW9uKCkudHlwZSA9PT0gQmxvY2tseS5ORVhUX1NUQVRFTUVOVCkge1xuICAgICAgbm9kZSA9IG51bGw7XG4gICAgfVxuICAgIGlmICghbm9kZSkge1xuICAgICAgLy8gQ2FuJ3QgZ28gaW4gb3IgbmV4dCwga2VlcCBnb2luZyBvdXQgdW50aWwgd2UgY2FuIGdvIG5leHQuXG4gICAgICBub2RlID0gY3VycmVudC5vdXQoKTtcbiAgICAgIGNoZWNrUm9vdCgpO1xuICAgICAgd2hpbGUgKG5vZGUgJiYgIW5vZGUubmV4dCgpKSB7XG4gICAgICAgIG5vZGUgPSBub2RlLm91dCgpO1xuICAgICAgICBjaGVja1Jvb3QoKTtcbiAgICAgICAgLy8gSWYgd2UgaGl0IGFuIGlucHV0IG9uIHRoZSB3YXkgdXAsIHBvc3NpYmx5IGNsb3NlIG91dCBwYXJlbnRoZXNlcy5cbiAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5nZXRUeXBlKCkgPT0gQmxvY2tseS5BU1ROb2RlLnR5cGVzLklOUFVUICYmXG4gICAgICAgICAgICBzaG91bGRBZGRQYXJlbnRoZXNlcyhcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUgeyFCbG9ja2x5LkNvbm5lY3Rpb259ICovIChub2RlLmdldExvY2F0aW9uKCkpKSkge1xuICAgICAgICAgIHRleHQucHVzaCgnKScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobm9kZSkge1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUmVzdG9yZSBzdGF0ZSBvZiBOQVZJR0FURV9BTExfRklFTERTLlxuICBCbG9ja2x5LkFTVE5vZGUuTkFWSUdBVEVfQUxMX0ZJRUxEUyA9IHByZXZOYXZpZ2F0ZUZpZWxkcztcblxuICAvLyBSdW4gdGhyb3VnaCBvdXIgdGV4dCBhcnJheSBhbmQgc2ltcGxpZnkgZXhwcmVzc2lvbiB0byByZW1vdmUgcGFyZW50aGVzZXNcbiAgLy8gYXJvdW5kIHNpbmdsZSBmaWVsZCBibG9ja3MuXG4gIGZvciAodmFyIGkgPSAyLCBsID0gdGV4dC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodGV4dFtpIC0gMl0gPT0gJygnICYmIHRleHRbaV0gPT0gJyknKSB7XG4gICAgICB0ZXh0W2kgLSAyXSA9IHRleHRbaSAtIDFdO1xuICAgICAgdGV4dC5zcGxpY2UoaSAtIDEsIDIpO1xuICAgICAgbCAtPSAyO1xuICAgIH1cbiAgfVxuXG4gIC8vIEpvaW4gdGhlIHRleHQgYXJyYXksIHJlbW92aW5nIHNwYWNlcyBhcm91bmQgYWRkZWQgcGFyYW50aGVzaXMuXG4gIHRleHQgPSB0ZXh0LmpvaW4oJyAnKS5yZXBsYWNlKC8oXFwoKSB8IChcXCkpL2dtaSwgJyQxJDInKS50cmltKCkgfHwgJz8/Pyc7XG4gIGlmIChvcHRfbWF4TGVuZ3RoKSB7XG4gICAgLy8gVE9ETzogSW1wcm92ZSB0cnVuY2F0aW9uIHNvIHRoYXQgdGV4dCBmcm9tIHRoaXMgYmxvY2sgaXMgZ2l2ZW4gcHJpb3JpdHkuXG4gICAgLy8gRS5nLiBcIjErMiszKzQrNSs2KzcrOCs5PTBcIiBzaG91bGQgYmUgXCIuLi42KzcrOCs5PTBcIiwgbm90IFwiMSsyKzMrNCs1Li4uXCIuXG4gICAgLy8gRS5nLiBcIjErMiszKzQrNT02KzcrOCs5KzBcIiBzaG91bGQgYmUgXCIuLi40KzU9Nis3Li4uXCIuXG4gICAgaWYgKHRleHQubGVuZ3RoID4gb3B0X21heExlbmd0aCkge1xuICAgICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIG9wdF9tYXhMZW5ndGggLSAzKSArICcuLi4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGV4dDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/overrides.js\n");

/***/ })

})