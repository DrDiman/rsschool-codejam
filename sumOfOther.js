function sumOfOther(arr) {
    return arr.map(el => el = arr.reduce((a, b) => a + b) - el);
}