import readlineSync from 'readline-sync';

export const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const greet = console.log(`Hello, ${name}!`);
export const mathResult = (one, sign, two) => {
  if (sign === '+') {
    return one + two;
  } if (sign === '-') {
    return one - two;
  } if (sign === '*') {
    return one * two;
  }
  return 'error';
};
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

const game = (logic) => {
  let summator = 0;
  if (logic === calc) {
  const rand = random6();
  let max = rand.length - 1;
  const signs = ['+', '-', '*'];
  const result = [];
  
  for (let i = 0; i < rand.length / 2; i += 1, max -= 1) {
    const randSign = signs[Math.floor(Math.random() * 3)];
    result.push(mathResult(rand[i], randSign, rand[max]));
    console.log(`Question: ${rand[i]} ${randSign} ${rand[max]}`);
    const answer = readlineSync.question('Your answer: ');
    if (result[i] === Number(answer)) {
      console.log('Correct!');
      summator += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result[i]}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  } else if (logic === even) {
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
  }
  if (summator === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default game;
