import generateRandomNumber from '../util.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (num1, num2) => {
  let result = 0;
  for (let i = 0; i <= num1; i += 1) {
    const currentNum1 = num1 / i;
    const roundedCurrentNum1 = Math.round(num1 / i);
    const currentNum2 = num2 / i;
    const roundedCurrentNum2 = Math.round(num2 / i);
    if (currentNum1 === roundedCurrentNum1 && currentNum2 === roundedCurrentNum2) {
      result = i;
    }
  }
  return result;
};

const getRound = () => {
  const number1 = generateRandomNumber(1, 100);
  const number2 = generateRandomNumber(1, 100);
  const answer = getGcd(number1, number2);
  const question = `${number1} and ${number2}`;
  return [String(answer), String(question)];
};
export default () => startGame(description, getRound);
