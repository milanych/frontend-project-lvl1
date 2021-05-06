import startGame from '../index.js';
import isEven from '../boolean.js';

const gameDescription = 'Answer "yes" if number is even, otherwise answer "no".';
const getGameData = () => {
  const [question, answer] = isEven();
  return [question, answer];
};

export default () => startGame(gameDescription, getGameData);
