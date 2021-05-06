import generateRandomNumber from '../util.js';
import startGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const getGameData = () => {
  const result = [];
  const progressionLength = generateRandomNumber(5, 10);
  const progression = generateRandomNumber(1, 10);
  let startNumber = generateRandomNumber(0, 10);
  for (let i = 0; i < progressionLength; i += 1) {
    result.push(startNumber);
    startNumber += progression;
  }
  result.splice(progression, 1, '..');
  const hiddenNumber = result[result.indexOf('..') - 1] + progression;
  const answer = `${hiddenNumber}`;
  const question = result.join(' ');
  return [answer, question];
};
export default () => startGame(gameDescription, getGameData);
