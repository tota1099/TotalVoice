# Enviar SMS - Total Voice

Projeto construído utilizando a API de comunicação por voz e texto da [totalvoice](https://www.totalvoice.com.br/).

## Iniciando

### Pré-requisitos

Programas que você precisa para rodar o projeto:

npm > 6.9.0 ou superior

### Instalando

```sh
$ npm install totalvoice-api --save
```

## Como usar

### ES6

```js
// to import a specific method
import TotalVoiceApi from 'totalvoice-api';

const totalvoiceApi = new TotalVoiceApi({
  token: 'SEU_TOKEN_AQUI'
});

const mensagem = {
  numero_destino: '48984449874',
  mensagem: 'Parabéns pelo seu dia!!! ',
  resposta_usuario: true,
  tags: 'exemplo_tag',
  multi_sms: false,
  data_criacao: '2019-04-03T10:17:14-03:00',
};

// usando método
totalvoiceApi.send(mensagem);
```

### CommonJS

```js
const TotalVoiceApi = require('totalvoice-api').default;

const totalvoiceApi = new TotalVoiceApi({
  token: 'SEU_TOKEN_AQUI'
});
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="totalvoice-api.umd.js"></script>

<!-- to import minified version -->
<script src="totalvoice-api.umd.min.js"></script>
```

Depois disso a biblioteca estará disponível globalmente como TotalVoiceApi, como no exemplo:

```js

const totalvoiceApi = new TotalVoiceApi({
  token: 'SEU_TOKEN_AQUI'
});

const mensagem = {
  numero_destino: '48984449874',
  mensagem: 'Parabéns pelo seu dia!!! ',
  resposta_usuario: true,
  tags: 'exemplo_tag',
  multi_sms: false,
  data_criacao: '2019-04-03T10:17:14-03:00',
};

totalvoiceApi.send(mensagem);
```

### Rodando os testes

```bash
$ npm run test
```

### Checando a cobertura de testes

```bash
$ npm run test:coverage
```

### Trabalhando com TDD

```bash
$ npm run test:tdd
```

## Construído com

* [NodeJS](https://nodejs.org/en/) - JavaScript runtime built
* [Mocha](https://mochajs.org/) - JavaScript test framework

## Autores

* **Renan Porto** - [tota1099](https://github.com/tota1099)

## Licença

Esse projeto é licenciado conforme a licença MIT - olhe os detalhes em [LICENSE.md](LICENSE.md).
