import readlineSync from 'readline-sync';

export const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const greet = console.log(`Hello, ${name}!`);
export const getRandomNumber = (min = 0, max = 99) => Math.floor(Math.random() * (max - min)) + min;

export const gameLogic = (enter, gameData) => {
  let summator = 0;
  while (summator <= 2) {
    const [result, question] = gameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (String(result) === String(answer)) {
      console.log('Correct!');
      summator += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (summator === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
