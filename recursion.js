
function recursion(tree) {
    let collection = [tree],
        treeArray = [],
        tempArray = [],
        levelsArray = [];

    getLevels(tree, 0, levelsArray);
    let level = levelsArray.shift();

    while (collection.length > 0) {
        let node = collection.shift();
        tempArray.push(node.value);
        if (tempArray.length == level) {
            treeArray.push(tempArray);
            level = levelsArray.shift();
            tempArray = [];
        }
        if (node.left != null) collection.push(node.left);
        if (node.right != null) collection.push(node.right);
    }

    return treeArray;

    function getLevels(tree, level = 0, levelsArray) {
        if (tree != null) {
            levelsArray[level] == null ? levelsArray[level] = 1 : levelsArray[level]++;
            return getLevels(tree.left, level + 1, levelsArray) + getLevels(tree.right, level + 1, levelsArray);
        }
    }
}
