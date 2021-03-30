import readlineSync from 'readline-sync';
import { random3, name } from '../index.js';

console.log('Answer "yes" if number is even, otherwise answer "no".');
const even = () => {
  let summator = 0;
  const rand = random3();

  for (let i = 0; i < rand.length;) {
    console.log(`Question: ${rand[i]}`);
    const answer = readlineSync.question('Your answer: ');
    const isEven = () => {
      if (rand[i] % 2 === 0) {
        return 'yes';
      }
      return 'no';
    };
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
