import readlineSync from 'readline-sync';

export const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ')
console.log(`Hello, ${name}\nAnwser "yes" if number is even, otherwise answer "no".`);

