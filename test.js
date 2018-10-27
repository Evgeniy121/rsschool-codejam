const assert = require('assert');
const sumOfOther = require('./src/sumOfOther.js');
const make = require('./src/make.js');
const recursion = require('./src/recursion.js');

function sum(a, b) {
  return a + b;
}
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
  describe('make', () => {
    it('test 1', () => {
      assert.deepStrictEqual(make(1)(2)(3)(sum), 6);
    });
    it('test 2', () => {
      assert.deepStrictEqual(make(1,2,3,4)(5)(sum),15);
    });
    it('test 3', () => {
      assert.deepStrictEqual(make(1,2)(10,20)(100,200,300)(sum), 633);
    });
    it('test 4', () => {
      assert.deepStrictEqual(make(1,9,8,7)(sum), 25);
    });
    it('test 5', () => {
      assert.deepStrictEqual(make(2)(4)(0,7,8)(sum), 21);
    });
    
    });
    describe('recursion', () => {
     
      it('test 1', () => {
        assert.deepStrictEqual(recursion({
          value: 100,
          left: { value: 90, left: { value: 70 }, right: { value: 99 } },
          right: { value: 120, left: { value: 110 }, right: { value: 130 } },
        }), [[100], [90, 120], [70, 99, 110, 130]]);
      });
     
     
     
      });
});