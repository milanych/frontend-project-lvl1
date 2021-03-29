import readlineSync from 'readline-sync';

export const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
// export const greet = console.log(`Hello, ${name}!`);
export const getRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min)) + min;


// const game = (logic) => {
//   let summator = 0;
//   if (logic === calc) {
//   const rand = random6();
//   let max = rand.length - 1;
//   const signs = ['+', '-', '*'];
//   const result = [];
  
//   for (let i = 0; i < rand.length / 2; i += 1, max -= 1) {
//     const randSign = signs[Math.floor(Math.random() * 3)];
//     result.push(mathResult(rand[i], randSign, rand[max]));
//     console.log(`Question: ${rand[i]} ${randSign} ${rand[max]}`);
//     const answer = readlineSync.question('Your answer: ');
//     if (result[i] === Number(answer)) {
//       console.log('Correct!');
//       summator += 1;
//     } else {
//       console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result[i]}'.\nLet's try again, ${name}!`);
//       break;
//     }
//   }
//   } else if (logic === even) {
//     const rand = random3();

//   for (let i = 0; i < rand.length;) {
//     console.log(`Question: ${rand[i]}`);
//     const answer = readlineSync.question('Your answer: ');
//     const isEven = () => {
//       if (rand[i] % 2 === 0) {
//         return 'yes';
//       }
//       return 'no';
//     };
//     if (answer === isEven()) {
//       console.log('Correct!');
//       i += 1;
//       summator += 1;
//     } else {
//       console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven()}'.\nLet's try again, ${name}!`);
//       break;
//     }
//   }
//   }
//   if (summator === 3) {
//     console.log(`Congratulations, ${name}!`);
//   }
// };
// export default game;
