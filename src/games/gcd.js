import { gameLogic, getRandomNumber } from '../index.js';

const gameData = () => {
  let result = 0;
  const arr = [getRandomNumber(), getRandomNumber()];
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
  const r = result;
  const q = `${sorted[0]} ${sorted[1]}`;
  return [r, q];
};
const enter = console.log('Find the greatest common divisor of given numbers.');
export const gcdGame = () => gameLogic(enter, gameData);
