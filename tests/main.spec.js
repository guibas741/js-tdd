/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
/* eslint-disable no-undef */

import { expect } from 'chai';
import {
  sub, sum, div, mult,
} from '../src/main';

describe('Calc', () => {
  describe('smoke tests', () => {
    it('should exist method sum', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist method sub', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exist method mult', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('should exist method div', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when sum(2,2)', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when sub(6,2)', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });

    it('should return -4 when sub(6,10)', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('Mult', () => {
    it('should return 4 when mult(2,2)', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });

  describe('div', () => {
    it('should return 1 when div(2,2)', () => {
      expect(div(2, 2)).to.be.equal(1);
    });

    it('should return nao e possivel when div(2,0)', () => {
      expect(div(2, 0)).to.be.equal('nao e possivel');
    });
  });
});
