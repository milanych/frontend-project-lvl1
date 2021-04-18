import readlineSync from "readline-sync";

export default (enter, startGame) => {
  const name = readlineSync.question(
    "Welcome to the Brain Games!\nMay I have your name? "
  );
  const rounds = 3;
  console.log(`Hello, ${name}!`);
  for (let summator = 0; summator <= rounds; summator += 1) {
    const [correctAnswer, question] = startGame();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question("Your answer: ");
    correctAnswer !== answer
      ? console.log(
          `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`
        )
      : console.log("Correct!");
  }
  return console.log(`Congratulations, ${name}!`);
};
