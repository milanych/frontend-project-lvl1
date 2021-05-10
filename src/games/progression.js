import generateRandomNumber from '../util.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';
const makeProgression = (start, length, number) => {
  const progressionResult = [];
  for (let i = 0; i < length; i += 1) {
    const step = start + number * i;
    progressionResult.push(step);
  }
  progressionResult.splice(number, 1, '..');
  return progressionResult;
};

const getRound = () => {
  const progressionLength = generateRandomNumber(5, 10);
  const progressionStep = generateRandomNumber(1, 10);
  const progressionStart = generateRandomNumber(0, 10);

  const progression = makeProgression(progressionStart, progressionLength, progressionStep);
  const hiddenNumber = progression[progression.indexOf('..') - 1] + progressionStep;
  const answer = `${hiddenNumber}`;
  const question = progression.join(' ');
  return [answer, question];
};
export default () => startGame(description, getRound);
