import readlineSync from 'readline-sync';
import { name, random2 } from '../index.js';

let summator = 0;
console.log('Find the greatest common divisor of given numbers.');
const divisor = () => {
  const result = [];
  const sum = [];
  for (let z = 0; z < 3;) {
    const arr = random2();
    const sorted = arr.sort();
    for (let i = 0; i <= sorted[0]; i += 1) {
      const cur1 = sorted[0] / i;
      const round1 = Math.round(sorted[0] / i);
      const cur2 = sorted[1] / i;
      const round2 = Math.round(sorted[1] / i);
      if (cur1 === round1 && cur2 === round2) {
        result.push(i);
      }
    }
    sum.push(result[result.length - 1]);
    console.log(`Question: ${sorted[0]} ${sorted[1]}`);
    const answer = readlineSync.question('Your answer: ');
    if (sum[z] === Number(answer)) {
      console.log('Correct!');
      z += 1;
      summator += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${sum[z]}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (summator === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default divisor;
