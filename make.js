function make(...args) {
  let allArgs = [...args];
  function trueMake(...arg) {
    const firstArg = [...arg].slice(0, 1)[0];
    if (typeof firstArg === 'function') {
      return allArgs.reduce((prev, item) => firstArg(prev, item));
    }
    allArgs = allArgs.concat(...arg);
    return trueMake;
  }
  return trueMake;
}

module.exports = make;
