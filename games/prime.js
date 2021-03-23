import readlineSync from 'readline-sync';
import { name } from '../src/index.js';
let summator = 0;
console.log(`Hello, ${name}!\nAnswer 'yes' if given number is prime. Otherwise answer 'no'.`);
export const prime = () => {
  for (let z = 0; z < 3;) {

    let result = 0;
    let question = '';
    let randomPrime = Math.floor(Math.random() * 100);
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
    console.log(`Question: ${randomPrime}`);
    const answer = readlineSync.question('Your answer: ');
    if (question === answer) {
      console.log('Correct!');
      z += 1;
      summator += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (summator === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
