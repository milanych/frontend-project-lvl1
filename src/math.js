export default (one, sign, two) => {
  if (sign === '+') {
    return one + two;
  }
  if (sign === '-') {
    return one - two;
  }
  if (sign === '*') {
    return one * two;
  }
  return 'error';
};
