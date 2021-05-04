import generateRandomNumber from '../util.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const isGcd = (num1, num2) => {
  let result = 0;
  for (let i = 0; i <= num1; i += 1) {
    const cur1 = num1 / i;
    const round1 = Math.round(num1 / i);
    const cur2 = num2 / i;
    const round2 = Math.round(num2 / i);
    if (cur1 === round1 && cur2 === round2) {
      result = i;
    }
  }
  return result;
};

const gameData = () => {
  const randomNumbers = [generateRandomNumber(1, 100), generateRandomNumber(1, 100)];
  const sorted = randomNumbers.sort();
  const answer = String(isGcd(sorted[0], sorted[1]));
  const question = `${sorted[0]} ${sorted[1]}`;
  return [answer, question];
};
export default () => startGame(description, gameData);
