const assert = require('assert');
const sumOfOther = require('./src/sumOfOther.js');

describe('Function tests', () => {
  describe('sumOfOther', () => {
    it('test 1', () => {
      assert.deepStrictEqual(sumOfOther([1,2,3,4,5]), [14,13,12,11,10]);
    });
    it('test 2', () => {
      assert.deepStrictEqual(sumOfOther([10,20,30,40]), [90,80,70,60]);
    });
    it('test 3', () => {
      assert.deepStrictEqual(sumOfOther([78,2,0,5]), [7,83,85,80]);
    });
    it('test 4', () => {
      assert.deepStrictEqual(sumOfOther([44,55,66,77]), [198,187,176,165  ]);
    });
    it('test 5', () => {
      assert.deepStrictEqual(sumOfOther([10000,1,2,5,7]), [
        15,10014,10013,10010,10008
      ]);
    });
  });
});