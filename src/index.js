import readlineSync from 'readline-sync';

export const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

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

export const even = () => {
  let summator = 0;
  const rand = random3();
  for (let i = 0; i < rand.length;) {
    const isEven = () => {
      if (rand[i] % 2 === 0) {
        return 'yes';
      }
      return 'no';
    };
    console.log(`Question: ${rand[i]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === isEven()) {
      console.log('Correct!');
      i += 1;
      summator += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven()}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (summator === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
