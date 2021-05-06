import generateRandomNumber from '../util.js';
import startGame from '../index.js';

const gameDescription = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";
const isPrime = (num) => {
  let result = false;
  if (num > 1) {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        result = true;
        break;
      }
    }
  } else {
    result = true;
  }
  return result;
};
const getGameData = () => {
  const randomPrime = generateRandomNumber();
  const question = isPrime(randomPrime) ? 'no' : 'yes';
  const answer = randomPrime;
  return [question, answer];
};
export default () => startGame(gameDescription, getGameData);
