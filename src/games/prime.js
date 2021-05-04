import generateRandomNumber from '../util.js';
import startGame from '../index.js';

const description = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";
const isPrime = (randomNumber) => {
  let result = 0;
  if (randomNumber > 1) {
    for (let i = 2; i < randomNumber; i += 1) {
      const num = randomNumber % i;
      if (num === 0) {
        result = 1;
        break;
      }
    }
  } else {
    result = 1;
  }
  return result;
};
const gameData = () => {
  const randomPrime = generateRandomNumber();
  let question = '';
  if (isPrime(randomPrime) === 1) {
    question = 'no';
  } else {
    question = 'yes';
  }
  return [question, randomPrime];
};
export default () => startGame(description, gameData);
