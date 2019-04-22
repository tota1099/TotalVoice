/* eslint no-unused-expressions: 0 */
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { API_TOKEN, API_URL } from '../src/config';

describe('Config', () => {
  describe('Check default values', () => {
    it('should has API_URL default with the correct URL', () => {
      expect(API_URL).to.be.equal('https://api.totalvoice.com.br');
    });
  });
});
