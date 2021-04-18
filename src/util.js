export const generateRandomNumber = (min = 0, max = 99) =>
  Math.floor(Math.random() * (max - min)) + min;
