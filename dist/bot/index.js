'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _dialogflowQuery = require('dialogflow-query');

var _dialogflowQuery2 = _interopRequireDefault(_dialogflowQuery);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _telnyxSendsms = require('telnyx-sendsms');

var _telnyxSendsms2 = _interopRequireDefault(_telnyxSendsms);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

var dflow = new _dialogflowQuery2.default(_config2.default.DialogFlow.token);

var parser = _bodyParser2.default.urlencoded({ extended: true });

router.post('/bot', parser, function (req, res, next) {
  var _req$body = req.body,
      query = _req$body.query,
      sessionId = _req$body.sessionId;

  dflow.talk(sessionId, query).then(function (c) {
    return res.send(c.data.result);
  });
});

var telnyx = new _telnyxSendsms2.default(_config2.default.Telnyx.token);
router.post('/sms', parser, function (req, res, next) {
  var _req$body2 = req.body,
      to = _req$body2.to,
      body = _req$body2.body;

  telnyx.sendSMS(to, _config2.default.Telnyx.from, body).then(function (c) {
    return res.send(c.data);
  });
});

exports.default = router;
//# sourceMappingURL=index.js.map