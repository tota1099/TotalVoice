/* eslint no-unused-expressions: 0 */
import { describe, it } from 'mocha';
import { expect } from 'chai';
import config from '../src/config';

describe.only('Config', () => {
  describe('Check default values', () => {
    it('should has API_URL default with the correct URL', () => {
      expect(config.API_URL).to.be.equal('https://api.totalvoice.com.br');
    });
    it('should has API_TOKEN default as empty', () => {
      expect(config.API_TOKEN).to.be.equal('');
    });
  });
});
