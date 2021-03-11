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
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven()}'. Let's try again, ${name}!`)
     break;
    }
  }
    console.log(`Congratulations, ${name}!`);

}
game();



