const assert = require('assert');

Object.freeze(assert);

const sumOfOther = require('./sumOfOther');
const make = require('./make');

function sum(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

describe('Sum of the others', () => {
  it('1', () => {
    const solution = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(solution, [8, 7, 6, 9]);
  });

  it('2', () => {
    const solution = sumOfOther([66, 33, 22, 11]);
    assert.deepEqual(solution, [66, 99, 110, 121]);
  });

  it('3', () => {
    const solution = sumOfOther([1, 32, 12, 100]);
    assert.deepEqual(solution, [144, 113, 133, 45]);
  });

  it('4', () => {
    const solution = sumOfOther([11111, 2321, 23, 11]);
    assert.deepEqual(solution, [2355, 11145, 13443, 13455]);
  });
});

describe('Make it with different functions', () => {
  it('1 with func "sum"', () => {
    const solution = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(solution, 777);
  });

  it('2 with func "sum"', () => {
    const solution = make(15)(1, 21, 666)(41)(sum);
    assert.deepEqual(solution, 744);
  });

  it('3 with func "mul"', () => {
    const solution = make(2)(34, 21, 22)(41)(mul);
    assert.deepEqual(solution, 1288056);
  });

  it('4 with func "mul"', () => {
    const solution = make(15)(3, 21, 12)(41)(mul);
    assert.deepEqual(solution, 464940);
  });
});