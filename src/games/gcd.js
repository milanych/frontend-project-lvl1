import generateRandomNumber from '../util.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const gameData = () => {
  let result = 0;
  const arr = [generateRandomNumber(1, 100), generateRandomNumber(1, 100)];
  const sorted = arr.sort();
  for (let i = 0; i <= sorted[0]; i += 1) {
    const cur1 = sorted[0] / i;
    const round1 = Math.round(sorted[0] / i);
    const cur2 = sorted[1] / i;
    const round2 = Math.round(sorted[1] / i);
    if (cur1 === round1 && cur2 === round2) {
      result = i;
    }
  }
  const answer = String(result);
  const question = `${sorted[0]} ${sorted[1]}`;
  return [answer, question];
};
export default () => startGame(description, gameData);
