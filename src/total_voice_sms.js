import { API_URL, API_TOKEN } from './config';

global.fetch = require('node-fetch');

export const send = message => fetch(`${API_URL}/sms`, { method: 'POST', headers: { Accept: 'application/json', 'Access-Token': API_TOKEN }, body: message }).then(data => data).catch(err => err);

export default send;
