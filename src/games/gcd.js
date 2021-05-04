import generateRandomNumber from '../util.js';
import startGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const isGcd = (num1, num2) => {
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
  return String(result);
};

const getGameData = () => {
  const randomNumbers = [generateRandomNumber(1, 100), generateRandomNumber(1, 100)];
  const sortedRandomNumbers = randomNumbers.sort();
  const answer = isGcd(sortedRandomNumbers[0], sortedRandomNumbers[1]);
  const question = `${sortedRandomNumbers[0]} ${sortedRandomNumbers[1]}`;
  return [answer, question];
};
export default () => startGame(gameDescription, getGameData);
