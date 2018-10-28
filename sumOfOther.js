
function sumOfOther(array) {
    let sumOfOther = [];
    array.forEach(item => {
        sumOfOther.push(array.filter(element => element != item).reduce((element, sum) => sum + element));
    });
    return sumOfOther;
}