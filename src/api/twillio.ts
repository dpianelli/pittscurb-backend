import { Router } from 'express';
import apiHelper from './apiHelper';

const twillioBaseURL =
  'http://PittsCurb-Twilio.eba-hqzpgnd2.us-east-1.elasticbeanstalk.com';

const router = Router();

router.get('/', (req, res) => {
  apiHelper
    .restWrapper(`${twillioBaseURL}/v1/health/twPing`)
    .then((response: any) => {
      res.json(response);
    })
    .catch((error: any) => {
      res.send(error);
    });
});

export default router;
