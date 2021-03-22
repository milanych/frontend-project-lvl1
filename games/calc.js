import readlineSync from 'readline-sync';
import { name, random6 } from '../src/index.js';

export const game = () => {
  const rand = random6();
  let max = rand.length - 1;
  let summator = 0;
  const signs = ['+', '-', '*'];
  const result = [];
  for (let i = 0; i < rand.length / 2; i += 1, max -= 1) {
    const randSign = signs[Math.floor(Math.random() * 3)];
    const mathResult = (one, sign, two) => {
      if (sign === '+') {
        return one + two;
      } if (sign === '-') {
        return one - two;
      } if (sign === '*') {
        return one * two;
      }
      return 'error';
    };
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
  if (summator === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
