import { gameLogic, getRandomNumber } from '../index.js';

const gameData = () => {
  const question = getRandomNumber();
  const isEven = () => {
    if (question % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const result = String(isEven());
  return [result, question];
};

const enter = console.log('Answer "yes" if number is even, otherwise answer "no".');
export const evenGame = () => gameLogic(enter, gameData);
