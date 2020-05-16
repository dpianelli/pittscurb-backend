import { Router } from 'express';
import apiHelper from './apiHelper';

const twillioBaseURL =
  'http://PittscurbServiceTwillio-SecuredLB.eba-hqzpgnd2.us-east-1.elasticbeanstalk.com';

const router = Router();

router.get('/', (req, res) => {
  apiHelper(`${twillioBaseURL}/v1/health/twiPing`)
    .then((response: any) => {
      res.json(response);
    })
    .catch((error: any) => {
      res.send(error);
    });
});

export default router;
