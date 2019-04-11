import { send } from './total_voice_sms';

const message = {
  numero_destino: '48984889977',
  mensagem: 'Parabéns pelo seu dia!!! ',
  resposta_usuario: true,
  tags: 'luiz_test',
  multi_sms: false,
  data_criacao: '2019-04-03T10:17:14-03:00',
};

send(JSON.stringify(message)).then(async data => console.log('aqui', await data.json())).catch(err => console.log('err', err));
