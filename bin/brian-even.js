#!/usr/bin node
import readlineSync from 'readline-sync';
const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ')
console.log(`Hello, ${name}\nAnwser "yes" if number is even, otherwise answer "no".`);
const random = () => {
  let result = [];
  for (let x = 0; x < 3; x++) {
    result.push(Math.floor(Math.random() * 100));
  }
  return result;
}
let rand = random();
const game = () => {
  for (let i of rand) {
    console.log('Question: ' + i);
    readlineSync.question('Your answer: ');
    if ((i % 2 === 0 && readlineSync.question('Your answer: ') === 'yes' || i % !== 0 && readlineSync.question('Your answer: ') === 'no' ) {
      console.log('Correct!');
    } 
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`)
    break;
  }
  console.log(`Congratulations, ${name}!`);
}
game();



