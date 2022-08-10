import { Trend, Rate, Counter } from "k6/metrics";
import { check, fail, sleep } from "k6";

import DevRequest from '../../setup/requests/DevRequest.js';

const payload = require('../../setup/factories/Activities/EditarUmaAtividade.fac.js');


export const options = {
    stages: [
        { duration: '20s', target: 10 },
        { duration: '11s', target: 60 },
        { duration: '13s', target: 5 },
        { duration: '2s', target: 15 },
    ],

    thresholds: {
        http_req_failed: ['rate<0.01'], // http errors should be less than 1%
        http_req_duration: ['p(95)<300'], // 95% of requests should be below 200ms
    },
}


export default () => {
    const response = DevRequest.put(`Activities/${payload.examplesPayload.first.id}`, payload.examplesPayload.first);

    check(response, {
        "Status não deve retornar 400": r => r.status !== 400,
        "Status deve retornar 200": r => r.status === 200
    });
}