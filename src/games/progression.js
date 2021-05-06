import generateRandomNumber from '../util.js';
import startGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const makeProgression = (start, length, progression) => {
  const progressionResult = [];
  for (let i = 0; i < length; i += 1) {
    const step = start + i * progression;
    progressionResult.push(step);
  }
  progressionResult.splice(progression, 1, '..');
  return progressionResult;
};

const getGameData = () => {
  const progressionLength = generateRandomNumber(5, 10);
  const progressionStep = generateRandomNumber(1, 10);
  const progressionStart = generateRandomNumber(0, 10);

  const progression = makeProgression(progressionStart, progressionLength, progressionStep);
  const hiddenNumber = progression[progression.indexOf('..') - 1] + progressionStep;
  const answer = `${hiddenNumber}`;
  const question = progression.join(' ');
  return [answer, question];
};
export default () => startGame(gameDescription, getGameData);
