import readlineSync from 'readline-sync';

const rounds = 3;

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

export default (enter, startGame) => {
  for (let summator = 0; summator < rounds; summator += 1) {
    const [correctAnswer, question] = startGame();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (String(correctAnswer) !== String(answer)) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      break;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
