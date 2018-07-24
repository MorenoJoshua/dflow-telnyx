import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import config from './config.json';

import bot from './bot';



let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use('/', bot);
// app.use('/', bodyParser.json(), bot);

app.server.listen(process.env.PORT || config.port, () => {
  console.log(`Started on port ${app.server.address().port}`);
});

export default app;

import Telnyx from './bot/Telnyx';
export {Telnyx};
import DialogFlow from './bot/DialogFlow';
export {DialogFlow};
