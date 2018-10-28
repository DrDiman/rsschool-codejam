module.exports = function sumOfOther(arr) {
  return arr.map(el => arr.reduce((a, b) => a + b) - el);
};
