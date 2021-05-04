import startGame from '../index.js';
import isEven from '../boolean.js';

const description = 'Answer "yes" if number is even, otherwise answer "no".';
const gameData = (question, answer) => {
  const [question, answer] = isEven();
  return [question, answer];
};

export default () => startGame(description, gameData);
