import readlineSync from 'readline-sync';

const rounds = 3;

export default (enter, startGame) => {
  const greet = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;
  };
  for (let summator = 0; summator < rounds; summator += 1) {
    const [correctAnswer, question] = startGame();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (String(correctAnswer) !== String(answer)) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${greet()}!`);
      break;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${greet()}!`);
};
