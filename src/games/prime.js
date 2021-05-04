import generateRandomNumber from '../util.js';
import startGame from '../index.js';

const description = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";
const gameData = () => {
  let result = 0;
  let question = '';
  const randomPrime = generateRandomNumber();
  if (randomPrime > 1) {
    for (let i = 2; i < randomPrime; i += 1) {
      const num = randomPrime % i;
      if (num === 0) {
        result = 1;
        break;
      }
    }
  } else {
    result = 1;
  }
  if (result === 1) {
    question = 'no';
  } else {
    question = 'yes';
  }
  return [question, randomPrime];
};
export default () => startGame(description, gameData);
