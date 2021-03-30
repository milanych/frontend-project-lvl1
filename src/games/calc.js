import { gameLogic, getRandomNumber } from '../index.js';

const gameData = (result, question) => {
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
    result = mathResult(number1, randSign, number2);
    question = `${number1} ${randSign} ${number2}`;
    return [result, question];
}
const enter = console.log('Find the greatest common divisor of given numbers.');
export const calcGame = () => gameLogic(enter, gameData);
