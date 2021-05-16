import generateRandomNumber from '../util.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (num1, num2) => (num2 % num1 === 0 ? num1 : getGcd(num2, num1 % num2));

const getRound = () => {
  const number1 = generateRandomNumber(1, 100);
  const number2 = generateRandomNumber(1, 100);
  const answer = getGcd(number1, number2);
  const question = `${number1} ${number2}`;
  return [String(answer), String(question)];
};
export default () => startGame(description, getRound);
