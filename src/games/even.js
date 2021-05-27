import startGame from '../index.js';
import generateRandomNumber from '../util.js';

const description = 'Answer "yes" if number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);
const getRound = () => {
  const question = generateRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [answer, question];
};

export default () => startGame(description, getRound);
