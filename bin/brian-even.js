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
  for (let i = 0; i < rand.length;) {
   console.log('Question: ' + rand[i]);
   let answer = readlineSync.question('Your answer: ');
    if (answer === 'yes' && rand[i] % 2 === 0) {
      console.log('Correct!');
      i += 1;
    } else if (answer === 'no' && rand[i] % 2 !== 0) {
      console.log('Correct!');
      i += 1;
    } else {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`)
    }
  }
  console.log(`Congratulations, ${name}!`);
}
game();



