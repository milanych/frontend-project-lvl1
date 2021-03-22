import readlineSync from 'readline-sync';
import { name } from '../src/index.js';

let summator = 0;
console.log('What number is missing in the progression?');
export const progression = () => {
  for (let z = 0; z < 3;) {
    const result = [];
    const prog = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const len = [5, 6, 7, 8, 9, 10];
    const lenRandom = len[Math.floor(Math.random() * 6)];
    const random = prog[Math.floor(Math.random() * 10)];

    let start = Math.floor(Math.random() * 10);
    for (let i = 0; i < lenRandom; i += 1) {
      result.push(start);
      start += random;
    }
    result.splice(random, 1, '...');
    const str = result.join(' ');
    console.log(`Question: ${str}`);
    const answer = readlineSync.question('Your answer: ');
    if ((result[result.indexOf('...') - 1] + random) === Number(answer)) {
      console.log('Correct!');
      z += 1;
      summator += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result[result.indexOf('...') - 1] + random}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (summator === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
