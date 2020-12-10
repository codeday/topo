"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "HelpText", {
  enumerable: true,
  get: function get() {
    return _FormHelperText["default"];
  }
});
Object.defineProperty(exports, "ErrorMessage", {
  enumerable: true,
  get: function get() {
    return _FormErrorMessage["default"];
  }
});
exports.Label = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FormControl = _interopRequireDefault(require("@chakra-ui/core/dist/FormControl"));

var _FormLabel = _interopRequireDefault(require("@chakra-ui/core/dist/FormLabel"));

var _FormHelperText = _interopRequireDefault(require("@chakra-ui/core/dist/FormHelperText"));

var _FormErrorMessage = _interopRequireDefault(require("@chakra-ui/core/dist/FormErrorMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ComposedFormControl = function ComposedFormControl(props) {
  return /*#__PURE__*/_react["default"].createElement(_FormControl["default"], _extends({
    marginBottom: 4,
    marginTop: 4
  }, props));
};

ComposedFormControl.propTypes = _FormControl["default"].propTypes;
ComposedFormControl.defaultProps = _FormControl["default"].defaultProps;

var ComposedLabel = function ComposedLabel(props) {
  return /*#__PURE__*/_react["default"].createElement(_FormLabel["default"], _extends({
    fontWeight: 600
  }, props));
};

exports.Label = ComposedLabel;
ComposedLabel.propTypes = _FormLabel["default"].propTypes;
ComposedLabel.defaultProps = _FormLabel["default"].defaultProps;
var _default = ComposedFormControl;
exports["default"] = _default;