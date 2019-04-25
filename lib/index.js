"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _config = require("./config");

var TotalVoiceSms =
/*#__PURE__*/
function () {
  function TotalVoiceSms(options) {
    (0, _classCallCheck2["default"])(this, TotalVoiceSms);
    this.apiURL = options.apiURL || _config.API_URL;
    this.token = options.token;
  }

  (0, _createClass2["default"])(TotalVoiceSms, [{
    key: "request",
    value: function request(url, options) {
      var defaultOptions = {
        headers: {
          Accept: 'application/json',
          'Access-Token': this.token
        }
      };
      var fetchOptions = (0, _objectSpread2["default"])({}, defaultOptions, options);
      return fetch(url, fetchOptions).then(function (resp) {
        return resp.json();
      }).then(function (resp) {
        return resp;
      });
    }
  }, {
    key: "send",
    value: function send(message) {
      var options = {
        method: 'POST',
        body: JSON.stringify(message)
      };
      return this.request("".concat(this.apiURL, "/sms"), options);
    }
  }]);
  return TotalVoiceSms;
}();

exports["default"] = TotalVoiceSms;