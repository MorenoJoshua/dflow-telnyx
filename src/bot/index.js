import {Router} from 'express';
import DialogFlow from 'dialogflow-query';

import bodyParser from 'body-parser';

import Telnyx from 'telnyx-sendsms';
import config from './config';

const router = Router();

const dflow = new DialogFlow(config.DialogFlow.token);

const parser = bodyParser.urlencoded({extended: true});

router.post('/bot', parser, (req, res, next) => {
  const {query, sessionId} = req.body;
  dflow.talk(sessionId, query).then(c => res.send(c.data.result));
});


const telnyx = new Telnyx(config.Telnyx.token);
router.post('/sms', parser, (req, res, next) => {
  const {to, body} = req.body;
  telnyx.sendSMS(to, config.Telnyx.from, body).then(c => res.send(c.data));
});


export default router;
