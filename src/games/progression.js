import generateRandomNumber from '../util.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';
const makeProgression = (start, length, step) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + step * i);
  }
  return result;
};

const getRound = () => {
  const length = generateRandomNumber(5, 10);
  const step = generateRandomNumber(1, 10);
  const start = generateRandomNumber(0, 10);
  const hiddenNumberIndex = generateRandomNumber(0, length);
  const progression = makeProgression(start, length, step);
  const hiddenNumber = progression.splice(hiddenNumberIndex, 1, '..');
  const answer = `${hiddenNumber}`;
  const question = progression.join(' ');
  return [answer, question];
};
export default () => startGame(description, getRound);
