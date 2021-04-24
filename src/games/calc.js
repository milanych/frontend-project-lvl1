import generateRandomNumber from '../util.js';
import startGame from '../index.js';

const gameData = () => {
  const mathResult = (one, sign, two) => {
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
  const signs = ['+', '-', '*'];
  const randSign = signs[Math.floor(Math.random() * 3)];
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const result = String(mathResult(number1, randSign, number2));
  const question = `${number1} ${randSign} ${number2}`;
  return [result, question];
};
const enter = console.log('Find the greatest common divisor of given numbers.');
export default () => startGame(enter, gameData);
