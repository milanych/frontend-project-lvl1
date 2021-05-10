import startGame from '../index.js';
import generateRandomNumber from '../util.js';

const isEven = () => {
  const randomNumber = generateRandomNumber();
  const yes = 'yes';
  const no = 'no';
  if (randomNumber % 2 === 0) {
    return [yes, randomNumber];
  }
  return [no, randomNumber];
};
const gameDescription = 'Answer "yes" if number is even, otherwise answer "no".';
const getGameData = () => {
  const [question, answer] = isEven();
  return [question, answer];
};

export default () => startGame(gameDescription, getGameData);
