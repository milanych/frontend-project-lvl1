import readlineSync from 'readline-sync';

export const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const greet = console.log(`Hello, ${name}!`);
export const getRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min)) + min;
export const random2 = () => {
  const result = [];
  for (let x = 0; x < 2; x += 1) {
    result.push(Math.floor(Math.random() * 100));
  }
  return result;
};

export const random3 = () => {
  const result = [];
  for (let x = 0; x < 3; x += 1) {
    result.push(Math.floor(Math.random() * 100));
  }
  return result;
};

export const random6 = () => {
  const result = [];
  for (let x = 0; x < 3; x += 1) {
    result.unshift(Math.floor(Math.random() * 100)); // первые три
    result.push(Math.floor(Math.random() * 100)); // вторые три
  }
  return result;
};

export const random = () => {
  const prog = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const progressor = Math.floor(Math.random() + 10);
  return prog[progressor];
};

export const gameLogic = (enter, gameData) => {
  console.log(`${enter}`);
  let i = 0;
  let summator = 0;
  while (i <= 2) {
    let [result, question] = gameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (result === Number(answer)) {
      console.log('Correct!');
      summator += 1;
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (summator === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
