module.exports = function recursion(arg) {
  const arrayTree = [];

  function myfunc(objTree) {
    const val = objTree.value;
    arrayTree.push([val]);

    if (!(objTree.hasOwnProperty('left')) || !(objTree.hasOwnProperty('right'))) {
      return arrayTree;
    }

    if (objTree.hasOwnProperty('left')) {
      objTree = objTree.left;
      return myfunc(objTree);
    }

    if (objTree.hasOwnProperty('right')) {
      objTree = objTree.right;
      return myfunc(objTree);
    }
  }
  return myfunc(arg);
};
