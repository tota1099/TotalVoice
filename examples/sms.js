/* eslint-disable no-console */
import TotalVoiceAPI from '../src/index';

global.fetch = require('node-fetch');

const totalvoiceApi = new TotalVoiceAPI({
  token: 'YOUR-TOKEN',
});

const message = {
  numero_destino: '48984108516',
  mensagem: 'Parabéns pelo seu dia!!! ',
  resposta_usuario: true,
  tags: 'luiz_test',
  multi_sms: false,
  data_criacao: '2019-04-03T10:17:14-03:00',
};
const send = totalvoiceApi.send(message);

send.then(data => console.log(data));
