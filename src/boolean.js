import generateRandomNumber from './util.js';

export default (question, answer) => {
  const randomNumber = generateRandomNumber();
  if (randomNumber % 2 === 0) {
    return [randomNumber, 'yes'];
  }
  return [randomNumber, 'no'];
};
