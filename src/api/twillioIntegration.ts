import { Router } from 'express';
import make_API_call from './apiHelper';

const twillioBaseURL = 'http://PittsCurb-Twilio.eba-hqzpgnd2.us-east-1.elasticbeanstalk.com';

const router = Router();

router.get('/', (req, res) => {
    make_API_call(`${twillioBaseURL}\twPing`)
    .then((response: any) => {
        res.json(response)
    })
    .catch((error: any) => {
        res.send(error)
    })
    //res.send('Maybe?');
});

export default router;



