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
  let summator = 0;

export const even = () => {
  // let summator = 0;
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

export const divisor = () => {
  const result = [];
  const sum = [];
  for (let z = 0; z < 3;) {
    const arr = random2();
    const sorted = arr.sort();
    for (let i = 0; i <= sorted[0]; i += 1) {
      const cur1 = sorted[0] / i;
      const round1 = Math.round(sorted[0] / i);
      const cur2 = sorted[1] / i;
      const round2 = Math.round(sorted[1] / i);
      if (cur1 === round1 && cur2 === round2) {
        result.push(i);
      }
    }
    sum.push(result[result.length - 1]);
    console.log(`Question: ${sorted[0]} ${sorted[1]}`);
    const answer = readlineSync.question('Your answer: ');
    if (sum[z] === Number(answer)) {
      console.log('Correct!');
      z += 1;
      summator += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${sum[z]}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (summator === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export const prime = () => {
  for (let z = 0; z < 3;) {
    let result = 0;
    let question = '';
    const random = Math.floor(Math.random() * 100);
    if (random > 1) {
      for (let i = 2; i < random; i += 1) {
        const num = random % i;
        if (num === 0) {
          result = 1;
          break;
        }
      }
    } else {
      result = 1;
    }
    if (result === 1) {
      question = 'no';
    } else {
      question = 'yes';
    }
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');
    if (question === answer) {
      console.log('Correct!');
      z += 1;
      summator += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (summator === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export const progression = () => {
  for (let z = 0; z < 3;) {
    const result = [];
    const prog = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const len = [5, 6, 7, 8, 9, 10];
    const lenRandom = len[Math.floor(Math.random() * 6)];
    const random = prog[Math.floor(Math.random() * 10)];

    let start = Math.floor(Math.random() * 10);
    for (let i = 0; i < lenRandom; i += 1) {
      result.push(start);
      start += random;
    }
    result.splice(random, 1, '...');
    const str = result.join(' ');
    console.log(`Question: ${str}`);
    const answer = readlineSync.question('Your answer: ');
    if ((result[result.indexOf('...') - 1] + random) === Number(answer)) {
      console.log('Correct!');
      z += 1;
      summator += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result[result.indexOf('...') - 1] + random}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (summator === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
