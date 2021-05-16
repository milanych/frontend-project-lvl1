import generateRandomNumber from '../util.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const signs = ['+', '-', '*'];
const calculate = (one, sign, two) => {
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

const getRound = () => {
  const number1 = generateRandomNumber();
  const operation = signs[generateRandomNumber(0, signs.length)];
  const number2 = generateRandomNumber();

  const answer = String(calculate(number1, operation, number2));
  const question = `${number1} ${operation} ${number2}`;
  return [answer, question];
};
export default () => startGame(description, getRound);
