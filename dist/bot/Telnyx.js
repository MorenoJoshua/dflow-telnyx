'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Telnyx = function () {
  function Telnyx(token) {
    _classCallCheck(this, Telnyx);

    if (!token) {
      console.warn('A token is needed');
      this.token = false;
    } else {
      this.token = token;
    }

    this.telnyxUrl = 'https://sms.telnyx.com/messages';
    this.sendSMS = this.sendSMS.bind(this);
  }

  _createClass(Telnyx, [{
    key: 'sendSMS',
    value: function sendSMS(to, from, body) {
      if (!this.token || to.trim() === '' || from.trim() === '' || body.trim() !== '') {
        console.log(this.token);
        return _axios2.default.post(this.telnyxUrl, {
          to: to,
          body: body,
          from: from
        }, {
          headers: {
            "X-Profile-Secret": this.token
          }
        });
      } else {
        return false;
      }
    }
  }]);

  return Telnyx;
}();

exports.default = Telnyx;
//# sourceMappingURL=Telnyx.js.map