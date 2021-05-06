import generateRandomNumber from '../util.js';
import startGame from '../index.js';
import mathResult from '../math.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getRandomSign = () => {
  const signs = ['+', '-', '*'];
  const randomSign = signs[Math.floor(Math.random() * signs.length)];
  return randomSign;
};

const getGameData = () => {
  const number1 = generateRandomNumber();
  const randomSign = getRandomSign();
  const number2 = generateRandomNumber();

  const answer = String(mathResult(number1, randomSign, number2));
  const question = `${number1} ${randomSign} ${number2}`;
  return [answer, question];
};
export default () => startGame(gameDescription, getGameData);
