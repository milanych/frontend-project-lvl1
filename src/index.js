import readlineSync from "readline-sync";
const rounds = 3;

export default (enter, startGame) => {
  const name = greet();
  for (let summator = 0; summator < rounds; summator += 1) {
    const [correctAnswer, question] = startGame();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question("Your answer: ");
    if (correctAnswer !== answer) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      break;
    }
    console.log("Correct!");
  }
  console.log(`Congratulations, ${name}!`);
};
