import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (description, getRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < roundsCount; i += 1) {
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
