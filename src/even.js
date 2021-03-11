import readlineSync from 'readline-sync';

export const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ')
export const random = () => {
  let result = [];
  for (let x = 0; x < 3; x++) {
    result.push(Math.floor(Math.random() * 100));
  }
  return result;
}
export const game = () => {
  for (let i = 0; i < rand.length;) {
    const isEven = () => {
      if (rand[i] % 2 === 0) {
        return 'yes';
      } 
      return 'no';
    };
   console.log('Question: ' + rand[i]);
   let answer = readlineSync.question('Your answer: ');
    if (answer === isEven()) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven()}'.\nLet's try again, ${name}!`)
      break;
    }
      console.log(`Congratulations, ${name}!`);
  }
}
