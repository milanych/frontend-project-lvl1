import readlineSync from 'readline-sync';

const gameRoundsCount = 3;

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

export default (enter, gameLogic) => {
  for (let summator = 0; summator < gameRoundsCount; summator += 1) {
    const [correctAnswer, question] = gameLogic();
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
