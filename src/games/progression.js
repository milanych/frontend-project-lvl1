import generateRandomNumber from '../util.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';
const getGameData = () => {
  const strLength = generateRandomNumber(5, 10);
  const progRandom = generateRandomNumber(1, 10);
  let start = generateRandomNumber(0, 10);
  const result = [];
  for (let i = 0; i < strLength; i += 1) {
    result.push(start);
    start += progRandom;
  }
  result.splice(progRandom, 1, '..');
  const answer = `${result[result.indexOf('..') - 1] + progRandom}`;
  const question = result.join(' ');
  return [answer, question];
};
export default () => startGame(description, getGameData);
