import { API_URL, API_TOKEN } from './config';

global.fetch = require('node-fetch');

export const send = (message) => {
  const options = { method: 'POST', headers: { Accept: 'application/json', 'Access-Token': API_TOKEN }, body: message };
  return fetch(`${API_URL}/sms`, options)
    .then(data => data);
};

export default send;
