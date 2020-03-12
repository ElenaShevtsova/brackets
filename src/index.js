module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      openBrackets.push(str[i]);
    } else if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
      openBrackets.pop();
    }
  }
  if (openBrackets.length === 0) {
    return true;
  } else return false;
}
