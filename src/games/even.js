import startGame from '../index.js';
import isEven from '../boolean.js';

const description = 'Answer "yes" if number is even, otherwise answer "no".';
const gameData = () => isEven();

export default () => startGame(description, gameData);
