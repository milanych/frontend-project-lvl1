import generateRandomNumber from './util.js';

export default () => {
  const randomNumber = generateRandomNumber();
  const yes = 'yes';
  const no = 'no';
  if (randomNumber % 2 === 0) {
    return [randomNumber, yes];
  }
  return [randomNumber, no];
};
