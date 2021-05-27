import generateRandomNumber from '../util.js';
import startGame from '../index.js';

const description = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";
const isPrime = (num) => {
  if (num > 1) {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return true;
      }
    }
  } else {
    return true;
  }
  return false;
};
const getRound = () => {
  const number = generateRandomNumber();
  const question = isPrime(number) ? 'no' : 'yes';
  const answer = number.toString();
  return [question, answer];
};
export default () => startGame(description, getRound);
