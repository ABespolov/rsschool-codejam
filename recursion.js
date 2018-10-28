function recursion(tree) {
  const collection = [tree];
  const treeArray = [];
  let tempArray = [];
  const levelsArray = [];

  function getLevels(treeNode, level = 0, levelsArray) {
    if (treeNode != null) {
      if (levelsArray[level] == null) {
        (levelsArray[level] = 1);
      } else {
        levelsArray[level] += 1;
      }
      return getLevels(treeNode.left, level + 1, levelsArray)
        + getLevels(treeNode.right, level + 1, levelsArray);
    }
    return 1;
  }

  getLevels(tree, 0, levelsArray);
  let level = levelsArray.shift();
  while (collection.length > 0) {
    const node = collection.shift();
    if (node) tempArray.push(node.value);
    if (tempArray.length === level) {
      treeArray.push(tempArray);
      level = levelsArray.shift();
      tempArray = [];
    }
    if (node.left) collection.push(node.left);
    if (node.right) collection.push(node.right);
  }

  return treeArray;
}

module.exports = recursion;
