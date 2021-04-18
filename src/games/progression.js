import generateRandomNumber from '../util.js';

const gameData = () => {
  const strLength = generateRandomNumber(5, 10);
  const progRandom = generateRandomNumber(1, 10);
  let start = generateRandomNumber(0, 10);
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
export default () => [enter, gameData];
