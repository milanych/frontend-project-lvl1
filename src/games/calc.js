import readlineSync from 'readline-sync';

import { name, random6, mathResult } from '../index.js';

console.log('Find the greatest common divisor of given numbers.');
const calc = () => {
  const rand = random6();
  let max = rand.length - 1;
  let summator = 0;
  const signs = ['+', '-', '*'];
  const result = [];
  for (let i = 0; i < rand.length / 2; i += 1, max -= 1) {
    const randSign = signs[Math.floor(Math.random() * 3)];
    result.push(mathResult(rand[i], randSign, rand[max]));
    console.log(`Question: ${rand[i]} ${randSign} ${rand[max]}`);
    const answer = readlineSync.question('Your answer: ');
    if (result[i] === Number(answer)) {
      console.log('Correct!');
      summator += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result[i]}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  sum();
};
export default calc;
