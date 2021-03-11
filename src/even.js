import readlineSync from 'readline-sync';

const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ')
console.log(`Hello, ${name}\nAnwser "yes" if number is even, otherwise answer "no".`);
let num = Math.floor(Math.random() * 100);
const question = readlineSync.question('Question: ' + num);
readlineSync.setDefaultOptions({limit: ['yes', 'no']});
const answer = readlineSync.question('Your answer: ');
const isEven = (result) => {
  if (num % 2 === 0 && answer === 'yes') {
    return 'Correct!';
  } else {
    return `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`
  };
};
const answer = readlineSync.question('Your answer: ');
const isEven = (result) => {
  if (num % 2 === 0 && answer === 'yes') {
    return 'Correct!';
  } else {
    return `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`
  };
};
const answer = readlineSync.question('Your answer: ');
const isEven = (result) => {
  if (num % 2 === 0 && answer === 'yes') {
    return 'Correct!';
  } else {
    return `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`
  };
};
