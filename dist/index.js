'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogFlow = exports.Telnyx = undefined;

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _config = require('./config.json');

var _config2 = _interopRequireDefault(_config);

var _bot = require('./bot');

var _bot2 = _interopRequireDefault(_bot);

var _Telnyx = require('./bot/Telnyx');

var _Telnyx2 = _interopRequireDefault(_Telnyx);

var _DialogFlow = require('./bot/DialogFlow');

var _DialogFlow2 = _interopRequireDefault(_DialogFlow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);

// logger
app.use((0, _morgan2.default)('dev'));

// 3rd party middleware
app.use((0, _cors2.default)({
  exposedHeaders: _config2.default.corsHeaders
}));

app.use('/', _bot2.default);
// app.use('/', bodyParser.json(), bot);

app.server.listen(process.env.PORT || _config2.default.port, function () {
  console.log('Started on port ' + app.server.address().port);
});

exports.default = app;
exports.Telnyx = _Telnyx2.default;
exports.DialogFlow = _DialogFlow2.default;
//# sourceMappingURL=index.js.map