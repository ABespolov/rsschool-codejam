function sumOfOther(array) {
  const sumArray = [];
  array.forEach((item, index) => sumArray.push(array.filter((e, position) => index !== position)
    .reduce((element, sum) => sum + element)));
  return sumArray;
}

module.exports = sumOfOther;
