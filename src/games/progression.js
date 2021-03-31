import { gameLogic, getRandomNumber } from '../index.js';

const gameData = () => {
  const strLength = getRandomNumber(5, 10);
  const progRandom = getRandomNumber(1, 10);
  let start = getRandomNumber(0, 10);
  const result = [];
  for (let i = 0; i < strLength; i += 1) {
    result.push(start);
    start += progRandom;
  }
  result.splice(progRandom, 1, '..');
  const r = `${result[result.indexOf('..') - 1] + progRandom}`;
  const q = result.join(' ');
  return [r, q];
};
const enter = console.log('What number is missing in the progression?');
export default () => gameLogic(enter, gameData);
