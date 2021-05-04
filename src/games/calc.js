import generateRandomNumber from '../util.js';
import startGame from '../index.js';
import mathResult from '../math.js';

const description = 'Find the greatest common divisor of given numbers.';
const gameData = () => {
  const signs = ['+', '-', '*'];
  const randSign = signs[Math.floor(Math.random() * signs.length)];
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const result = String(mathResult(number1, randSign, number2));
  const question = `${number1} ${randSign} ${number2}`;
  return [result, question];
};
export default () => startGame(description, gameData);
