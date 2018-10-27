function make(...arg) {
    const myArr = [...arg];

    function myFunc(current) {
        if (typeof current === 'function') {
            return myArr.reduce(current);
        } else {
            for (let i = 0; i < arguments.length; i++) {
                myArr.push(arguments[i]);
            }
            return myFunc;
        }
    }
    return myFunc;
}