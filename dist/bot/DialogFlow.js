'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DialogFlow = function () {
  function DialogFlow(token) {
    _classCallCheck(this, DialogFlow);

    if (!token) {
      console.warn('A token is needed');
      this.token = false;
    } else {
      this.token = token;
    }

    this.dflowUrl = 'https://api.dialogflow.com/v1/query?v=20150910';
    this.talk = this.talk.bind(this);
  }

  _createClass(DialogFlow, [{
    key: 'talk',
    value: function talk(sessionId, query) {
      if (!this.token || !sessionId || sessionId.trim() !== '') {
        return _axios2.default.post(this.dflowUrl, {
          query: query,
          sessionId: sessionId,
          lang: "en"
        }, {
          headers: {
            "Authorization": "Bearer " + this.token
          }
        });
      } else {
        return false;
      }
    }
  }]);

  return DialogFlow;
}();

exports.default = DialogFlow;
//# sourceMappingURL=DialogFlow.js.map