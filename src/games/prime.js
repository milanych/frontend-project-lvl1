import { getRandomNumber } from "../index.js";

const gameData = () => {
  let result = 0;
  let question = "";
  const randomPrime = getRandomNumber();
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
    question = "no";
  } else {
    question = "yes";
  }
  const r = question;
  const q = randomPrime;
  return [r, q];
};
const enter = console.log(
  "Answer 'yes' if given number is prime. Otherwise answer 'no'."
);
export default () => [enter, gameData];
