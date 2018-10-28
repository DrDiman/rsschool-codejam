function make(...arg) {
  const myArr = [...arg];

  function myFunc(current) {
    if (typeof current === 'function') {
      return myArr.reduce(current);
    }
    for (let i = 0; i < arguments.length; i = 1 + i) {
      myArr.push(arguments[i]);
    }
    return myFunc;
  }
  return myFunc;
}
