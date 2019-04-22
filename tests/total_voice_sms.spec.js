/* eslint no-unused-expressions: 0 */
import chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import TotalVoiceApi from '../src/index';

import { API_URL } from '../src/config';

global.fetch = require('node-fetch');

chai.use(sinonChai);

describe('Total Voice SMS', () => {
  let fetchedStub;
  let totalvoice;

  beforeEach(() => {
    totalvoice = new TotalVoiceApi({
      token: 'foo',
    });
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => {} });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smoke Tests', () => {
    it('should exist the method send', () => {
      expect(totalvoice.send).to.be.a('function');
    });
  });

  describe('Send', () => {
    it('should call fetch function', () => {
      totalvoice.send();
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it('should call with the correct URL', () => {
      totalvoice.send();
      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/sms`);
    });
  });
});
