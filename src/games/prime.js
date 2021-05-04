import generateRandomNumber from '../util.js';
import startGame from '../index.js';

const description = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";
const isPrime = (randomNumber) => {
  let result = false;
  if (randomNumber > 1) {
    for (let i = 2; i < randomNumber; i += 1) {
      const num = randomNumber % i;
      if (num === 0) {
        result = true;
        break;
      }
    }
  } else {
    result = true;
  }
  return result;
};
const gameData = () => {
  const randomPrime = generateRandomNumber();
  const question = isPrime(randomPrime) ? 'no' : 'yes';
  return [question, randomPrime];
};
export default () => startGame(description, gameData);
