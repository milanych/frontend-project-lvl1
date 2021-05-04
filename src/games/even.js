import startGame from '../index.js';
import isEven from '../boolean.js';

const description = 'Answer "yes" if number is even, otherwise answer "no".';
const gameData = () => {
  const [question, answer] = isEven();
  const que = question;
  const ans = answer;
  return [que, ans];
};

export default () => startGame(description, gameData);
