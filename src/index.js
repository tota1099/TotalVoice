import { API_URL } from './config';

export default class TotalVoiceSms {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token;
  }

  request(url, options) {
    const defaultOptions = {
      headers: {
        Accept: 'application/json',
        'Access-Token': this.token,
      },
    };

    const fetchOptions = { ...defaultOptions, ...options };

    return fetch(url, fetchOptions)
      .then(resp => resp.json())
      .then((resp) => {
        if (resp.status !== 200) {
          throw new Error(resp.mensagem, resp.status);
        }
        return resp;
      });
  }

  send(message) {
    const options = { method: 'POST', body: JSON.stringify(message) };
    return this.request(`${this.apiURL}/sms`, options);
  }
}
