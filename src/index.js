import readlineSync from 'readline-sync';
import welcome from './cli.js';

const gameRoundsCount = 3;
const name = welcome();

export default (description, getRound) => {
  for (let i = 0; i < gameRoundsCount; i += 1) {
    const [correctAnswer, question] = getRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer !== answer) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
