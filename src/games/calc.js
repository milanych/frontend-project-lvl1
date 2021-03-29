import { gameLogic, getRandomNumber } from '../index.js';


const gameData = () => {
    const mathResult = (one, sign, two) => {
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
    let result = mathResult(number1, randSign, number2);
    let question = `${number1} ${randSign} ${number2}`;
    return [result, question];
}



const enter = console.log('Find the greatest common divisor of given numbers.');
const calc = gameLogic(enter, gameData);
