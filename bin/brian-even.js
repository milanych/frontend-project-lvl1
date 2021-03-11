#!/usr/bin node
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
const answer2 = readlineSync.question('Your answer: ');
const isEven2 = (result) => {
  if (num % 2 === 0 && answer2 === 'yes') {
    return 'Correct!';
  } else {
    return `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`
  };
};
const answer3 = readlineSync.question('Your answer: ');
const isEven3 = (result) => {
  if (num % 2 === 0 && answer3 === 'yes') {
    return 'Correct!';
  } else {
    return `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`
  };
};


console.log(`Congratulations, ${name}!`);





