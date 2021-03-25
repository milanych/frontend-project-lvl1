import readlineSync from 'readline-sync';
import { random3, name } from '../src/index.js';

console.log(`Hello, ${name}\nAnwser "yes" if number is even, otherwise answer "no".`);
const even = () => {
  let summator = 0;
  const rand = random3();
  for (let i = 0; i < rand.length;) {
    const isEven = () => {
      if (rand[i] % 2 === 0) {
        return 'yes';
      }
      return 'no';
    };
    console.log(`Question: ${rand[i]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === isEven()) {
      console.log('Correct!');
      i += 1;
      summator += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven()}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (summator === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default even;
