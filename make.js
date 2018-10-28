
function make(...args) {
  let allArgs = [...args];
  let trueMake = function(...arg){
    if(typeof arguments[0] === 'function'){
        return allArgs.reduce((prev, item) => arguments[0](prev, item));
    }
    allArgs = allArgs.concat(...arg);
    return trueMake;
  }
  return trueMake;
}
