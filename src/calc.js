import readlineSync from 'readline-sync';
export const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

export const random = () => {
  let result = [];
  for (let x = 0; x < 3; x++) {
    result.unshift(Math.floor(Math.random() * 100)); //первые три
    result.push(Math.floor(Math.random() * 100)); //вторые три
  }
  return result;
}

export const game = () => {
  let rand = random();
  let max = rand.length-1;
  let sign = ['+', '-', '*'];
  let randSign = sign[Math.floor(Math.random()*3)];
  let result = [];
  for (let i = 0; i<rand.length/2; i++, max-=1) {
    let randSign = sign[Math.floor(Math.random()*3)];
    result.push(`${rand[i]} ${randSign} ${rand[max]}`);
    console.log(`Question: ${rand[i]} ${randSign} ${rand[max]}`);
    const answer = readlineSync.question('Your answer: ')
    if (eval(result[i]) === eval(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${eval(result[i])}'.\nLet's try again, ${name}!`);
      break;
    }
  console.log(`Congratulations, ${name}!`);
  };
};
