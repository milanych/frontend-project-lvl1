import { name, mathResult, getRandomNumber } from '../index.js';

export const mathResult = (one, sign, two) => {
    if (sign === '+') {
        return one + two;
    } if (sign === '-') {
        return one - two;
    } if (sign === '*') {
        return one * two;
    }
    return 'error';
};
const signs = ['+', '-', '*'];
const randSign = signs[Math.floor(Math.random() * 3)];
const number1 = getRandomNumber();
const number2 = getRandomNumber();

let summator = 0;
console.log('Find the greatest common divisor of given numbers.');
let result = [];

export const calc = () => {
    let i = 0;

        while (i <= 3) {
            result.push(mathResult(number1, randSign, number2));
            console.log(`Question: ${number1} ${randSign} ${number2}`);
            const answer = readlineSync.question('Your answer: ');
            if (result[i] === Number(answer)) {
                console.log('Correct!');
                summator += 1;
            } else {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result[i]}'.\nLet's try again, ${name}!`);
                break;
            }
        }
    if (summator === 3) {
        console.log(`Congratulations, ${name}!`);
    }
};